import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ModuleHeading {
  id: string;
  text: string;
  level: number;
}

export interface ModuleMeta {
  id: number;
  slug: string;
  minggu: number;
  title: string;
  kategori: string;
  durasi: string;
  deskripsi: string;
  tujuan: string[];
}

export interface ModuleData extends ModuleMeta {
  content: string;
  headings: ModuleHeading[];
  prevModule: { id: number; title: string; slug: string } | null;
  nextModule: { id: number; title: string; slug: string } | null;
}

const contentDirectory = path.join(process.cwd(), 'content/pertemuan');

export function getAllModules(): ModuleMeta[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  const allModulesData: ModuleMeta[] = [];

  for (const fileName of fileNames) {
    if (!fileName.endsWith('.md')) continue;

    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    const slug = data.slug || fileName.replace(/\.md$/, '').replace('pertemuan-0', '').replace('pertemuan-', '');
    const id = Number(data.id || slug);

    allModulesData.push({
      id,
      slug: String(id),
      minggu: Number(data.minggu || id),
      title: data.title || `Pertemuan ${id}`,
      kategori: data.kategori || 'Pemrograman Berorientasi Objek',
      durasi: data.durasi || '150 Menit',
      deskripsi: data.deskripsi || '',
      tujuan: Array.isArray(data.tujuan) ? data.tujuan : [],
    });
  }

  return allModulesData.sort((a, b) => a.id - b.id);
}

export function extractHeadings(markdown: string): ModuleHeading[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: ModuleHeading[] = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const rawText = match[2].trim();
    // remove markdown links or formatting if present
    const cleanText = rawText.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1').replace(/[*`_]/g, '');
    const id = cleanText
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    headings.push({
      id,
      text: cleanText,
      level,
    });
  }

  return headings;
}

export function getModuleBySlug(slug: string): ModuleData | null {
  const all = getAllModules();
  const index = all.findIndex((m) => m.slug === slug || String(m.id) === slug);
  if (index === -1) return null;

  const currentMeta = all[index];
  const paddedId = String(currentMeta.id).padStart(2, '0');
  const filePath = path.join(contentDirectory, `pertemuan-${paddedId}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(fileContents);
  const headings = extractHeadings(content);

  const prevModule = index > 0 ? { id: all[index - 1].id, title: all[index - 1].title, slug: all[index - 1].slug } : null;
  const nextModule = index < all.length - 1 ? { id: all[index + 1].id, title: all[index + 1].title, slug: all[index + 1].slug } : null;

  return {
    ...currentMeta,
    content,
    headings,
    prevModule,
    nextModule,
  };
}

export interface SearchItem {
  moduleId: number;
  moduleSlug: string;
  moduleTitle: string;
  sectionId?: string;
  sectionTitle?: string;
  snippet: string;
}

export function getSearchIndex(): SearchItem[] {
  const all = getAllModules();
  const searchIndex: SearchItem[] = [];

  for (const mod of all) {
    const paddedId = String(mod.id).padStart(2, '0');
    const filePath = path.join(contentDirectory, `pertemuan-${paddedId}.md`);
    if (!fs.existsSync(filePath)) continue;

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(fileContents);

    // Add module entry
    searchIndex.push({
      moduleId: mod.id,
      moduleSlug: mod.slug,
      moduleTitle: `Pertemuan ${mod.id}: ${mod.title}`,
      snippet: mod.deskripsi || mod.title,
    });

    // Add headings entries
    const sections = content.split(/^##\s+/gm);
    for (let i = 1; i < sections.length; i++) {
      const section = sections[i];
      const lines = section.split('\n');
      const headingLine = lines[0].trim();
      const body = lines.slice(1, 4).join(' ').replace(/[*`_#]/g, '').trim();
      const cleanHeading = headingLine.replace(/[*`_]/g, '');
      const id = cleanHeading
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');

      searchIndex.push({
        moduleId: mod.id,
        moduleSlug: mod.slug,
        moduleTitle: `Pertemuan ${mod.id}: ${mod.title}`,
        sectionId: id,
        sectionTitle: cleanHeading,
        snippet: body.slice(0, 150),
      });
    }
  }

  return searchIndex;
}
