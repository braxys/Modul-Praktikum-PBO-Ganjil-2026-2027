'use client';

import React from 'react';
import { FileText } from 'lucide-react';

interface PrintButtonProps {
  moduleId: number;
}

export default function PrintButton({ moduleId }: PrintButtonProps) {
  return (
    <a
      href={`/api/modul-pdf/${moduleId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="no-print inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-2xs"
      aria-label={`Buka PDF Modul ${moduleId} di tab baru`}
    >
      <FileText className="w-3.5 h-3.5 text-slate-500" />
      <span>Cetak / Simpan PDF</span>
    </a>
  );
}
