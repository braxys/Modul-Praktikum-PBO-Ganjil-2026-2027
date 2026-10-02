'use client';

import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import TableOfContents from './TableOfContents';
import Footer from './Footer';
import type { ModuleMeta, ModuleHeading } from '@/lib/modules';

interface ModuleLayoutClientProps {
  modules: ModuleMeta[];
  currentHeadings: ModuleHeading[];
  children: React.ReactNode;
}

export default function ModuleLayoutClient({
  modules,
  currentHeadings,
  children,
}: ModuleLayoutClientProps) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F8FC]">
      <Navbar onToggleMobileSidebar={() => setIsMobileSidebarOpen(true)} />

      {/* 3-column layout: sidebar | content (wide) | toc — zero outer padding */}
      <div className="w-full flex flex-1">
        {/* Left Sidebar */}
        <Sidebar
          modules={modules}
          currentHeadings={currentHeadings}
          isMobileOpen={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />

        {/* Center — expands to fill all space, minimal side padding */}
        <main className="flex-1 min-w-0 py-8 px-6 lg:px-8">
          {children}
        </main>

        {/* Right TOC */}
        <TableOfContents headings={currentHeadings} />
      </div>

      <Footer />
    </div>
  );
}
