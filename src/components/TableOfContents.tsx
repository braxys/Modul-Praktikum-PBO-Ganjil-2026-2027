'use client';

import React, { useEffect, useState } from 'react';
import { AlignLeft, ChevronUp } from 'lucide-react';
import type { ModuleHeading } from '@/lib/modules';

interface TableOfContentsProps {
  headings: ModuleHeading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px -70% 0px',
        threshold: 0.1,
      }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-52 xl:w-56 shrink-0 hidden xl:block sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto pl-4 pr-2 py-6">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#133863] mb-3">
        <AlignLeft className="w-3.5 h-3.5 text-[#1F70C1]" />
        <span>Pada Halaman Ini</span>
      </div>

      <nav className="space-y-1 text-xs">
        {headings.map((heading) => {
          const isActive = activeId === heading.id;
          const isH3 = heading.level === 3;

          return (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={`block py-1 rounded transition-colors ${isH3 ? 'pl-4 text-[11px]' : 'pl-1'
                } ${isActive
                  ? 'text-[#1F70C1] font-bold border-l-2 border-[#1F70C1] -ml-px bg-[#F0F7FD]/60'
                  : 'text-slate-500 hover:text-[#133863]'
                }`}
            >
              <span className="line-clamp-1">{heading.text}</span>
            </a>
          );
        })}
      </nav>

      <div className="mt-8 pt-4 border-t border-[#E1EAF2]">
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#1F70C1] transition-colors"
        >
          <ChevronUp className="w-3.5 h-3.5" />
          <span>Kembali ke atas</span>
        </button>
      </div>
    </div>
  );
}
