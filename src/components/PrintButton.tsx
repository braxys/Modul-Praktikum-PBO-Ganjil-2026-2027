'use client';

import React from 'react';
import { Printer } from 'lucide-react';

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-2xs"
      aria-label="Cetak / Unduh PDF Modul"
    >
      <Printer className="w-3.5 h-3.5 text-slate-500" />
      <span>Cetak / Simpan PDF</span>
    </button>
  );
}
