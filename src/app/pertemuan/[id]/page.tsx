import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllModules, getModuleBySlug } from "@/lib/modules";
import { parseMarkdownToHtml } from "@/lib/markdown";
import ModuleLayoutClient from "@/components/ModuleLayoutClient";
import PrintButton from "@/components/PrintButton";
import ModuleAccessGate from "@/components/ModuleAccessGate";
import {
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Clock,
  CheckCircle2,
} from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const modules = getAllModules();
  return modules.map((m) => ({
    id: String(m.id),
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const mod = getModuleBySlug(id);

  if (!mod) {
    return {
      title: "Modul Tidak Ditemukan",
    };
  }

  return {
    title: `Pertemuan ${mod.id}: ${mod.title}`,
    description: mod.deskripsi,
  };
}

export default async function ModuleDetailPage({ params }: PageProps) {
  const { id } = await params;
  const moduleData = getModuleBySlug(id);

  if (!moduleData) {
    notFound();
  }

  const allModules = getAllModules();
  const htmlContent = await parseMarkdownToHtml(moduleData.content);

  return (
    <ModuleLayoutClient
      modules={allModules}
      currentHeadings={moduleData.headings}
    >
      <ModuleAccessGate
        minggu={moduleData.minggu}
        moduleId={moduleData.id}
        moduleTitle={moduleData.title}
      >
        <article className="w-full space-y-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-1.5 text-xs text-slate-500 no-print">
            <Link href="/" className="hover:text-[#1F70C1] transition-colors">
              Beranda
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link
              href="/pertemuan/1"
              className="hover:text-[#1F70C1] transition-colors"
            >
              Modul Praktikum
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-[#133863] truncate">
              Pertemuan {moduleData.id}
            </span>
          </nav>

          {/* Module Header Sheet */}
          <header className="rounded-xl border border-[#E1EAF2] bg-white p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center px-3 py-1 rounded bg-[#133863] text-white font-bold text-xs">
                  Modul {moduleData.id}
                </span>
                <span className="rounded bg-[#F0F7FD] border border-[#D5E5F5] px-2.5 py-1 text-xs font-semibold text-[#1F70C1]">
                  Minggu ke-{moduleData.minggu}
                </span>
                <span className="rounded bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                  {moduleData.kategori}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-xs text-slate-600">
                  <Clock className="w-3.5 h-3.5 text-[#1F70C1]" />
                  <span>{moduleData.durasi}</span>
                </div>
                <PrintButton moduleId={moduleData.id} />
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0D223A] font-sans leading-tight">
              Pertemuan {moduleData.id}: {moduleData.title}
            </h1>

            {moduleData.deskripsi && (
              <p className="text-sm text-slate-600 leading-relaxed border-t border-[#E1EAF2] pt-3">
                {moduleData.deskripsi}
              </p>
            )}

            {/* Learning Objectives Callout Card */}
            {moduleData.tujuan && moduleData.tujuan.length > 0 && (
              <div className="rounded-lg bg-[#F0F7FD] border border-[#CBD7E3] p-4 sm:p-5 mt-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#133863] mb-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F70C1]" />
                  <span>Tujuan Pembelajaran (Learning Objectives)</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {moduleData.tujuan.map((goal, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#1F70C1] font-bold mt-0.5">•</span>
                      <span className="leading-snug">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </header>

          {/* Rendered Module Markdown Body */}
          <div
            className="prose-academic rounded-xl border border-[#E1EAF2] bg-white p-6 sm:p-10 shadow-xs"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Bottom Module Navigation */}
          <nav className="flex flex-col sm:flex-row items-stretch justify-between gap-4 pt-6 border-t border-[#E1EAF2] no-print">
            {moduleData.prevModule ? (
              <Link
                href={`/pertemuan/${moduleData.prevModule.slug}`}
                className="flex-1 group flex flex-col p-4 rounded-lg border border-[#E1EAF2] bg-white hover:border-[#1F70C1] hover:bg-[#F0F7FD] transition-all text-left shadow-2xs"
              >
                <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-[#1F70C1]">
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                  <span>Pertemuan Sebelumnya</span>
                </span>
                <span className="mt-1 text-sm font-semibold text-[#0D223A] group-hover:text-[#1F70C1] line-clamp-1">
                  Pertemuan {moduleData.prevModule.id}:{" "}
                  {moduleData.prevModule.title}
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            {moduleData.nextModule ? (
              <Link
                href={`/pertemuan/${moduleData.nextModule.slug}`}
                className="flex-1 group flex flex-col p-4 rounded-lg border border-[#E1EAF2] bg-white hover:border-[#1F70C1] hover:bg-[#F0F7FD] transition-all text-right shadow-2xs"
              >
                <span className="flex items-center justify-end gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-[#1F70C1]">
                  <span>Pertemuan Selanjutnya</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="mt-1 text-sm font-semibold text-[#0D223A] group-hover:text-[#1F70C1] line-clamp-1">
                  Pertemuan {moduleData.nextModule.id}:{" "}
                  {moduleData.nextModule.title}
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </nav>
        </article>
      </ModuleAccessGate>
    </ModuleLayoutClient>
  );
}
