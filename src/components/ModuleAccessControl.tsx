'use client';

import React, { useState } from 'react';
import { LockKeyhole } from 'lucide-react';
import type { ModuleMeta } from '@/lib/modules';
import ModuleAccessManager from './ModuleAccessManager';
import { useModuleLock } from './ModuleLockProvider';

interface ModuleAccessControlProps {
  modules: ModuleMeta[];
}

export default function ModuleAccessControl({ modules }: ModuleAccessControlProps) {
  const { isReady } = useModuleLock();
  const [isManagerOpen, setIsManagerOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsManagerOpen(true)}
        disabled={!isReady}
        className="inline-flex items-center gap-2 rounded-lg border border-[#CBD7E3] bg-white px-3 py-2 text-xs font-bold text-[#133863] shadow-2xs transition-colors hover:border-[#1F70C1] hover:bg-[#F0F7FD] disabled:cursor-wait disabled:opacity-60"
      >
        <LockKeyhole className="h-3.5 w-3.5 text-[#1F70C1]" />
        {isReady ? 'Atur Akses Global' : 'Memuat Status Akses...'}
      </button>
      {isManagerOpen && (
        <ModuleAccessManager modules={modules} onClose={() => setIsManagerOpen(false)} />
      )}
    </>
  );
}
