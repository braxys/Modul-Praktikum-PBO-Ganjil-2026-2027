import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import 'highlight.js/styles/github.css';
import './globals.css';
import CodeBlockClient from '@/components/CodeBlockClient';
import { ModuleLockProvider } from '@/components/ModuleLockProvider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Praktikum PBO ITERA',
    default: 'Praktikum Pemrograman Berorientasi Objek — Teknik Informatika ITERA',
  },
  description:
    'Situs panduan dan modul pembelajaran resmi Praktikum Pemrograman Berorientasi Objek (PBO) Semester Ganjil 2026/2027, Program Studi Teknik Informatika, Institut Teknologi Sumatera (ITERA).',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        <CodeBlockClient />
        <ModuleLockProvider>
          {children}
        </ModuleLockProvider>
      </body>
    </html>
  );
}
