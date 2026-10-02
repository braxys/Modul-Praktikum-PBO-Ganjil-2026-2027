'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, BookOpen, ArrowRight, CornerDownLeft, Hash } from 'lucide-react';
import type { SearchItem } from '@/lib/modules';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [indexData, setIndexData] = useState<SearchItem[]>([]);
  const [results, setResults] = useState<SearchItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load search index when modal opens
  useEffect(() => {
    if (isOpen) {
      if (indexData.length === 0) {
        fetch('/api/search')
          .then((res) => res.json())
          .then((data) => setIndexData(data))
          .catch((err) => console.error('Failed to load search index:', err));
      }
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen, indexData.length]);

  // Filter results
  useEffect(() => {
    if (!query.trim()) {
      setResults(indexData.slice(0, 8));
      return;
    }

    const q = query.toLowerCase().trim();
    const filtered = indexData.filter((item) => {
      const matchTitle = item.moduleTitle.toLowerCase().includes(q);
      const matchSection = item.sectionTitle?.toLowerCase().includes(q);
      const matchSnippet = item.snippet.toLowerCase().includes(q);
      return matchTitle || matchSection || matchSnippet;
    });

    setResults(filtered.slice(0, 12));
    setSelectedIndex(0);
  }, [query, indexData]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1 < results.length ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 >= 0 ? prev - 1 : results.length - 1));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault();
      navigate(results[selectedIndex]);
    }
  };

  const navigate = (item: SearchItem) => {
    onClose();
    const url = item.sectionId
      ? `/pertemuan/${item.moduleSlug}#${item.sectionId}`
      : `/pertemuan/${item.moduleSlug}`;
    router.push(url);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-20">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Dialog container */}
      <div className="relative w-full max-w-2xl transform overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/10 transition-all">
        {/* Search Input Bar */}
        <div className="flex items-center border-b border-slate-200 px-4 py-3 bg-slate-50/50">
          <Search className="h-5 w-5 text-slate-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
            placeholder="Ketik kata kunci (misal: 'Class', 'Inheritance', 'try-catch', 'NetBeans')..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block ml-2 rounded border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-medium text-slate-500 font-mono">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2">
          {results.length === 0 ? (
            <div className="py-12 text-center text-sm text-slate-500">
              <BookOpen className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p>Tidak ada materi atau modul yang cocok dengan kata kunci tersebut.</p>
            </div>
          ) : (
            <div className="space-y-1">
              {results.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={`${item.moduleId}-${item.sectionId || 'root'}-${idx}`}
                    type="button"
                    onClick={() => navigate(item)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-lg flex items-start gap-3 transition-colors ${
                      isSelected
                        ? 'bg-blue-50 text-[#0B2545]'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="mt-0.5 text-slate-400">
                      {item.sectionTitle ? (
                        <Hash className={`w-4 h-4 ${isSelected ? 'text-blue-600' : ''}`} />
                      ) : (
                        <BookOpen className={`w-4 h-4 ${isSelected ? 'text-blue-600' : ''}`} />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold uppercase text-slate-500">
                          Modul {item.moduleId}
                        </span>
                        {item.sectionTitle && (
                          <>
                            <span className="text-slate-300">&bull;</span>
                            <span className="text-xs font-bold text-blue-900 truncate">
                              {item.sectionTitle}
                            </span>
                          </>
                        )}
                      </div>
                      <p className="text-sm font-medium text-slate-900 truncate">
                        {item.moduleTitle}
                      </p>
                      {item.snippet && (
                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                          {item.snippet}
                        </p>
                      )}
                    </div>

                    {isSelected && (
                      <CornerDownLeft className="w-4 h-4 text-blue-600 self-center shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer shortcuts info */}
        <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-4 py-2 text-[11px] text-slate-500">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="font-mono bg-white border border-slate-200 px-1 py-0.5 rounded">↑</kbd>{' '}
              <kbd className="font-mono bg-white border border-slate-200 px-1 py-0.5 rounded">↓</kbd>{' '}
              Navigasi
            </span>
            <span>
              <kbd className="font-mono bg-white border border-slate-200 px-1 py-0.5 rounded">↵</kbd>{' '}
              Buka
            </span>
          </div>
          <span>Dokumentasi Praktikum PBO ITERA</span>
        </div>
      </div>
    </div>
  );
}
