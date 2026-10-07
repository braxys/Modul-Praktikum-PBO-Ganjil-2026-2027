import { marked } from 'marked';
import hljs from 'highlight.js';

// Setup marked renderer
const renderer = new marked.Renderer();

// Custom heading renderer to attach id for anchor links
renderer.heading = function ({ tokens, depth }) {
  const text = this.parser.parseInline(tokens);
  const rawText = text.replace(/<[^>]*>?/gm, '');
  const id = rawText
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');

  if (depth === 1) {
    return `<h1 id="${id}" class="group relative scroll-mt-24 text-2xl font-bold tracking-tight text-[#133863] sm:text-3xl border-b border-slate-200 pb-3 mb-6 mt-4">${text}</h1>`;
  }
  if (depth === 2) {
    return `<h2 id="${id}" class="group relative scroll-mt-24 text-xl font-bold tracking-tight text-[#133863] sm:text-2xl mt-10 mb-4 pb-2 border-b border-slate-200 flex items-center justify-between">
      <span>${text}</span>
      <a href="#${id}" class="opacity-0 group-hover:opacity-100 text-[#1F70C1] hover:text-[#133863] transition-opacity ml-2 text-base font-normal" aria-label="Link to section">#</a>
    </h2>`;
  }
  if (depth === 3) {
    return `<h3 id="${id}" class="group relative scroll-mt-24 text-lg font-semibold tracking-tight text-slate-800 mt-7 mb-3 flex items-center justify-between">
      <span>${text}</span>
      <a href="#${id}" class="opacity-0 group-hover:opacity-100 text-[#1F70C1] hover:text-[#133863] transition-opacity ml-2 text-sm font-normal" aria-label="Link to subsection">#</a>
    </h3>`;
  }
  return `<h4 id="${id}" class="scroll-mt-24 text-base font-semibold text-slate-800 mt-5 mb-2">${text}</h4>`;
};

// Custom code block renderer with syntax highlighting and copy button
renderer.code = function ({ text, lang }) {
  const language = (lang || 'plaintext').trim().toLowerCase();
  let highlighted = '';

  try {
    if (language && hljs.getLanguage(language)) {
      highlighted = hljs.highlight(text, { language }).value;
    } else {
      highlighted = hljs.highlightAuto(text).value;
    }
  } catch {
    highlighted = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  const displayLang = language === 'plaintext' || !language ? 'Code' : language.toUpperCase();
  const escapedForData = encodeURIComponent(text);

  return `
    <div class="my-6 rounded-lg border border-[#9BC5E8] bg-[#EAF3FC] overflow-hidden shadow-sm font-mono text-sm leading-relaxed">
      <div class="flex items-center justify-between px-4 py-2 border-b border-[#B8D4EE] bg-[#DCEBFA] text-xs text-[#133863]">
        <div class="flex items-center gap-2">
          <span class="inline-block w-2.5 h-2.5 rounded-full bg-[#1F70C1]"></span>
          <span class="font-semibold tracking-wider text-[#133863] text-[11px] uppercase">${displayLang}</span>
        </div>
        <button 
          type="button"
          class="copy-code-btn inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1F70C1] hover:bg-[#165696] text-white transition-colors cursor-pointer text-xs"
          data-code="${escapedForData}"
          aria-label="Salin Kode"
        >
          <svg class="copy-icon w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
          </svg>
          <span class="btn-text">Salin</span>
        </button>
      </div>
      <pre class="p-4 overflow-x-auto text-[13.5px] leading-6 text-[#0D223A] font-mono bg-[#F8FBFE]"><code class="hljs language-${language}">${highlighted}</code></pre>
    </div>
  `;
};

renderer.blockquote = function ({ tokens }) {
  const body = this.parser.parse(tokens);
  return `
    <blockquote class="my-4 border-l-4 border-[#1F70C1] bg-[#F0F7FD] px-4 py-3 text-slate-800 rounded-r text-sm">
      ${body}
    </blockquote>
  `;
};

marked.use({
  renderer,
  gfm: true,
  breaks: false,
});

export async function parseMarkdownToHtml(markdown: string): Promise<string> {
  // Strip duplicate top-level '# PERTEMUAN X' heading since it's already shown in the page header
  let processed = markdown.replace(/^#\s+PERTEMUAN\s+\d+\s*[-—]\s*.*$/m, '').trim();

  processed = processed.replace(
    /<!--\s*GAMBAR\s+(\d+\.\d+):.*?simpan di public\/images\/pbo\/(gambar-\d+-\d+\.png).*?-->/g,
    (_match, figureNumber: string, imageFile: string) =>
      `![Gambar ${figureNumber}](/images/pbo/${imageFile})`,
  );

  // Pre-process special markers like [LATIHAN MANDIRI] into styled callout blocks
  processed = processed.replace(
    /\*\*\[LATIHAN MANDIRI\]\*\*([\s\S]*?)(?=\n## |\n# |$)/g,
    (match, p1) => {
      return `\n\n<div class="callout-latihan my-6 rounded-lg border-2 border-[#C59938] bg-[#FEFBF3] p-5 shadow-sm">
        <div class="flex items-center gap-2 font-bold text-[#8A6314] text-base mb-2">
          <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#C59938] text-white text-xs">★</span>
          LATIHAN MANDIRI (HANDS-ON)
        </div>
        <div class="text-slate-800 text-sm leading-relaxed">
          ${p1}
        </div>
      </div>\n\n`;
    }
  );

  return marked.parse(processed);
}
