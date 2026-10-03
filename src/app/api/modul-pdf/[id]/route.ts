import { readFile } from 'node:fs/promises';
import path from 'node:path';

const pdfFiles: Record<string, string> = {
  '1': 'Modul 1 - Pengenalan Java dan Dasar Pemrograman (2).pdf',
  '2': 'Modul 2 - Konsep Dasar Pemrograman Berorientasi Objek.pdf',
  '3': 'Modul 3 - Enkapsulasi dan Access Modifier.pdf',
  '4': 'Modul 4 - Inheritance (Pewarisan).pdf',
  '5': 'Modul 5 - Polymorphism (Polimorfisme).pdf',
  '6': 'Modul 6 - Abstract Class dan Interface.pdf',
  '7': 'Modul 7 - Relasi Antarobjek (Association, Aggregation, dan Composition).pdf',
  '8': 'Modul 8 - Penanganan Kesalahan dan Java IO.pdf',
};

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function GET(_request: Request, { params }: RouteContext) {
  const { id } = await params;
  const fileName = pdfFiles[id];

  if (!fileName) {
    return new Response('Modul PDF tidak ditemukan', { status: 404 });
  }

  const filePath = path.join(process.cwd(), 'docs', 'modul_praktikum', fileName);
  const pdf = await readFile(filePath);

  return new Response(new Uint8Array(pdf), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="modul-${id}.pdf"`,
      'Content-Length': String(pdf.byteLength),
    },
  });
}
