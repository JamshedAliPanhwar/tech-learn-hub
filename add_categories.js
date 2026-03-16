import fs from 'fs';

let content = fs.readFileSync('components/CategorySection.tsx', 'utf8');

// Title
content = content.replace(
  'text-slate-900',
  'text-slate-900 dark:text-blue-50'
);
content = content.replace(
  'text-slate-500',
  'text-slate-500 dark:text-slate-400'
);

fs.writeFileSync('components/CategorySection.tsx', content);

let card = fs.readFileSync('components/CourseCard.tsx', 'utf8');
card = card.replace(/text-slate-500 text-sm/g, 'text-slate-500 dark:text-slate-400 text-sm');
card = card.replace(
  'bg-white min-h-[48px] px-4 py-3 flex items-center justify-between',
  'bg-white dark:bg-slate-800/50 min-h-[48px] px-4 py-3 flex items-center justify-between'
);

fs.writeFileSync('components/CourseCard.tsx', card);

// Also need to handle active/hover sidebar links in App.tsx missing
let app = fs.readFileSync('App.tsx', 'utf8');
app = app.replace(
  "'text-slate-500 px-3 py-2 text-sm'",
  "'text-slate-500 dark:text-slate-400 px-3 py-2 text-sm hover:text-slate-900 dark:hover:text-white'"
);
// Make sure body has dark mode logic in HTML
fs.writeFileSync('App.tsx', app);
