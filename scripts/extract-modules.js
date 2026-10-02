const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../docs/isimodul.MD'), 'utf-8');
const lines = content.split(/\r?\n/);

const meetingsMeta = [
  { id: 1, minggu: 1, kategori: 'Dasar Java', durasi: '150 Menit', deskripsi: 'Instalasi JDK & NetBeans, sintaks dasar Java, tipe data, variabel, operator, struktur kontrol, dan array.' },
  { id: 2, minggu: 2, kategori: 'Konsep OOP', durasi: '150 Menit', deskripsi: 'Paradigma OOP, pemodelan class dan object, atribut, method, constructor, dan keyword this.' },
  { id: 3, minggu: 3, kategori: 'Enkapsulasi', durasi: '150 Menit', deskripsi: 'Prinsip data hiding, access modifier (private, protected, public), method getter & setter, dan validasi data.' },
  { id: 4, minggu: 4, kategori: 'Inheritance', durasi: '150 Menit', deskripsi: 'Konsep pewarisan class, keyword extends, pemanggilan super constructor, method overriding, dan hierarki class.' },
  { id: 5, minggu: 5, kategori: 'Polymorphism', durasi: '150 Menit', deskripsi: 'Polimorfisme statis (overloading) dan dinamis (overriding), dynamic method dispatch, dan upcasting.' },
  { id: 6, minggu: 6, kategori: 'Abstraksi & Interface', durasi: '150 Menit', deskripsi: 'Abstract class, abstract method, interface sebagai kontrak perancangan, dan multiple interface implementation.' },
  { id: 7, minggu: 7, kategori: 'Relasi Objek', durasi: '150 Menit', deskripsi: 'Hubungan antarobjek dalam OOP: Association, Aggregation (has-a lemah), dan Composition (has-a kuat).' },
  { id: 8, minggu: 8, kategori: 'Exception & I/O', durasi: '150 Menit', deskripsi: 'Mekanisme penanganan error (try-catch-finally, throw, throws) serta operasi file I/O pada Java.' }
];

const meetingHeaders = [];
for (let i = 0; i < lines.length; i++) {
  const match = lines[i].match(/^# PERTEMUAN (\d+)\s*[-—]\s*(.*)$/);
  if (match) {
    meetingHeaders.push({
      id: parseInt(match[1], 10),
      title: match[2].trim(),
      lineIdx: i
    });
  }
}

console.log('Found headers:', meetingHeaders.length);

const outDir = path.join(__dirname, '../content/pertemuan');
fs.mkdirSync(outDir, { recursive: true });

meetingHeaders.forEach((mh, index) => {
  const start = mh.lineIdx;
  const end = index + 1 < meetingHeaders.length ? meetingHeaders[index + 1].lineIdx : lines.length;
  const meetingLines = lines.slice(start, end);
  
  // Extract tujuan if present
  const tujuan = [];
  let inTujuan = false;
  for (const l of meetingLines) {
    if (l.match(/^## \d+\.2 Tujuan Pembelajaran/i) || l.match(/^## \d+\.2 Tujuan Praktikum/i)) {
      inTujuan = true;
      continue;
    }
    if (inTujuan && l.startsWith('## ')) {
      break;
    }
    if (inTujuan) {
      const itemMatch = l.match(/^\d+\.\s*(.+)$/);
      if (itemMatch) {
        tujuan.push(itemMatch[1].trim());
      }
    }
  }

  const meta = meetingsMeta.find(m => m.id === mh.id) || {
    id: mh.id,
    minggu: mh.id,
    kategori: 'Pemrograman Berorientasi Objek',
    durasi: '150 Menit',
    deskripsi: mh.title
  };

  const frontmatter = [
    '---',
    `id: ${mh.id}`,
    `slug: "${mh.id}"`,
    `minggu: ${meta.minggu}`,
    `title: "${mh.title.replace(/"/g, '\\"')}"`,
    `kategori: "${meta.kategori}"`,
    `durasi: "${meta.durasi}"`,
    `deskripsi: "${meta.deskripsi.replace(/"/g, '\\"')}"`,
    'tujuan:',
    ...tujuan.map(t => `  - "${t.replace(/"/g, '\\"')}"`),
    '---',
    ''
  ].join('\n');

  const fileContent = frontmatter + '\n' + meetingLines.join('\n');
  const filename = path.join(outDir, `pertemuan-0${mh.id}.md`);
  fs.writeFileSync(filename, fileContent, 'utf-8');
  console.log(`Wrote ${filename} (${meetingLines.length} lines, ${tujuan.length} objectives)`);
});
