import { createHash, timingSafeEqual } from 'node:crypto';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

interface AccessRow {
  unlocked_until_week: number;
  unlocked_module_ids: number[];
}

function getSupabaseConfig() {
  const url = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    return null;
  }
  return { url: url.replace(/\/+$/, ''), serviceKey };
}

function constantTimeMatches(candidate: string, expected: string) {
  const candidateHash = createHash('sha256').update(candidate).digest();
  const expectedHash = createHash('sha256').update(expected).digest();
  return timingSafeEqual(candidateHash, expectedHash);
}

async function requestAccessRows(
  url: string,
  serviceKey: string,
  init?: RequestInit,
  upsert = false,
) {
  const query = upsert
    ? 'on_conflict=id&select=unlocked_until_week,unlocked_module_ids'
    : 'id=eq.1&select=unlocked_until_week,unlocked_module_ids';
  return fetch(
    `${url}/rest/v1/module_access?${query}`,
    {
      ...init,
      cache: 'no-store',
      headers: {
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
        'Content-Type': 'application/json',
        ...init?.headers,
      },
    },
  );
}

function serviceUnavailable(message: string) {
  return NextResponse.json({ error: message }, { status: 503 });
}

export async function GET() {
  const config = getSupabaseConfig();
  if (!config) {
    return serviceUnavailable('Status akses global belum dikonfigurasi oleh pengelola.');
  }

  try {
    const response = await requestAccessRows(config.url, config.serviceKey);
    if (!response.ok) {
      console.error('Supabase module access read failed:', response.status, await response.text());
      return serviceUnavailable('Gagal membaca status akses global dari Supabase.');
    }

    const rows: unknown = await response.json();
    if (!Array.isArray(rows) || rows.length === 0) {
      return serviceUnavailable('Data status akses global belum dibuat di Supabase.');
    }

    const rawRow: unknown = rows[0];
    if (typeof rawRow !== 'object' || rawRow === null) {
      console.error('Supabase module access row has an invalid shape.');
      return serviceUnavailable('Data status akses global di Supabase tidak valid.');
    }
    const row = rawRow as AccessRow;
    if (
      typeof row.unlocked_until_week !== 'number' ||
      !Array.isArray(row.unlocked_module_ids) ||
      !row.unlocked_module_ids.every((id) => Number.isInteger(id))
    ) {
      console.error('Supabase module access row has an invalid shape.');
      return serviceUnavailable('Data status akses global di Supabase tidak valid.');
    }

    return NextResponse.json(
      {
        unlockedUntilWeek: row.unlocked_until_week,
        unlockedModuleIds: row.unlocked_module_ids,
      },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } },
    );
  } catch (error) {
    console.error('Supabase module access read failed:', error);
    return serviceUnavailable('Tidak dapat menghubungi Supabase untuk membaca status akses.');
  }
}

export async function PATCH(request: Request) {
  const config = getSupabaseConfig();
  const adminKey = process.env.MODULE_ADMIN_KEY;
  if (!config || !adminKey) {
    return serviceUnavailable('Pengaturan admin akses global belum dikonfigurasi.');
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Format permintaan tidak valid.' }, { status: 400 });
  }

  if (typeof body !== 'object' || body === null) {
    return NextResponse.json({ error: 'Format permintaan tidak valid.' }, { status: 400 });
  }

  const { adminPasskey, unlockedUntilWeek, unlockedModuleIds } = body as Record<string, unknown>;
  if (typeof adminPasskey !== 'string' || !constantTimeMatches(adminPasskey, adminKey)) {
    return NextResponse.json({ error: 'Passkey admin salah.' }, { status: 401 });
  }

  if (
    !Number.isInteger(unlockedUntilWeek) ||
    (unlockedUntilWeek as number) < 0 ||
    (unlockedUntilWeek as number) > 8 ||
    !Array.isArray(unlockedModuleIds) ||
    !unlockedModuleIds.every(
      (id) => Number.isInteger(id) && (id as number) >= 1 && (id as number) <= 8,
    )
  ) {
    return NextResponse.json({ error: 'Pengaturan akses modul tidak valid.' }, { status: 400 });
  }

  const uniqueModuleIds = [...new Set(unlockedModuleIds as number[])];
  try {
    const response = await requestAccessRows(config.url, config.serviceKey, {
      method: 'POST',
      headers: { Prefer: 'resolution=merge-duplicates,return=representation' },
      body: JSON.stringify({
        id: 1,
        unlocked_until_week: unlockedUntilWeek,
        unlocked_module_ids: uniqueModuleIds,
      }),
    }, true);

    if (!response.ok) {
      console.error('Supabase module access update failed:', response.status, await response.text());
      return NextResponse.json(
        { error: 'Gagal menyimpan status akses global ke Supabase.' },
        { status: 502 },
      );
    }

    const rows: unknown = await response.json();
    if (!Array.isArray(rows) || rows.length === 0) {
      console.error('Supabase module access update returned no saved row.');
      return NextResponse.json(
        { error: 'Supabase tidak mengembalikan status akses yang tersimpan.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Supabase module access update failed:', error);
    return NextResponse.json(
      { error: 'Tidak dapat menghubungi Supabase untuk menyimpan status akses.' },
      { status: 502 },
    );
  }
}
