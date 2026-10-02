'use client';

import React, { useEffect } from 'react';

export default function CodeBlockClient() {
  useEffect(() => {
    const handleCopy = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('.copy-code-btn') as HTMLButtonElement | null;
      if (!target) return;

      const encoded = target.getAttribute('data-code');
      if (!encoded) return;

      const code = decodeURIComponent(encoded);
      navigator.clipboard.writeText(code).then(() => {
        const textSpan = target.querySelector('.btn-text');
        const originalText = textSpan ? textSpan.textContent : 'Salin';

        if (textSpan) {
          textSpan.textContent = 'Tersalin!';
        }
        target.classList.add('bg-emerald-700', 'text-white');

        setTimeout(() => {
          if (textSpan) {
            textSpan.textContent = originalText;
          }
          target.classList.remove('bg-emerald-700', 'text-white');
        }, 2000);
      });
    };

    document.addEventListener('click', handleCopy);
    return () => document.removeEventListener('click', handleCopy);
  }, []);

  return null;
}
