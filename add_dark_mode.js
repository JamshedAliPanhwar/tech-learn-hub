import fs from 'fs';

let content = fs.readFileSync('App.tsx', 'utf8');

// Replace lucide icon import to include Sun, Moon
content = content.replace(
  "import { Search, Menu, X, Github, BookOpen, Sparkles, Linkedin } from 'lucide-react';",
  "import { Search, Menu, X, Github, BookOpen, Sparkles, Linkedin, Sun, Moon } from 'lucide-react';"
);

// Add theme state
content = content.replace(
  "const [searchQuery, setSearchQuery] = useState('');",
  `const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDark = document.documentElement.classList.contains('dark') || localStorage.getItem('theme') === 'dark';
      setTheme(isDark ? 'dark' : 'light');
      if (isDark) document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };`
);

// Add button in header near Github icon
content = content.replace(
  `<Github className="w-5 h-5" />\n            </a>`,
  `<Github className="w-5 h-5" />\n            </a>
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors rounded-lg"
              title="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>`
);

// Header bg & border
content = content.replace(
  'bg-white/90 backdrop-blur-md border-b border-slate-200',
  'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800'
);

// Title text
content = content.replace(
  'text-slate-900 tracking-tight',
  'text-slate-900 dark:text-white tracking-tight'
);

// Search input
content = content.replace(
  'bg-slate-50 placeholder-slate-400 focus:bg-white',
  'bg-slate-50 dark:bg-slate-800 placeholder-slate-400 dark:placeholder-slate-500 focus:bg-white dark:focus:bg-slate-700 dark:text-white dark:border-slate-700'
);

content = content.replace(
  'bg-slate-50 text-sm',
  'bg-slate-50 dark:bg-slate-800 text-sm dark:text-white dark:border-slate-700 dark:placeholder-slate-500'
);

// Mobile menu bg
content = content.replace(
  'bg-white border-b border-slate-200 p-4',
  'bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4'
);

// Replace active/hover classes
// activeSection === category.id bg-[#0078d4]/10 text-[#005a9e] shadow-sm ring-1 ring-[#0078d4]/30
content = content.replace(
  "'bg-[#0078d4]/10 text-[#005a9e] shadow-sm ring-1 ring-[#0078d4]/30'",
  "'bg-[#0078d4]/10 text-[#005a9e] dark:text-[#66ade3] shadow-sm ring-1 ring-[#0078d4]/30 dark:ring-[#0078d4]/50'"
);

content = content.replace(
  "'text-slate-600 hover:bg-[#0078d4]/8 font-semibold'",
  "'text-slate-600 dark:text-slate-300 hover:bg-[#0078d4]/8 dark:hover:bg-slate-800 font-semibold'"
);

content = content.replace(
  "'text-slate-600 hover:bg-[#0078d4]/8 hover:text-[#003a70] font-semibold'",
  "'text-slate-600 dark:text-slate-300 hover:bg-[#0078d4]/8 dark:hover:bg-slate-800 hover:text-[#003a70] dark:hover:text-white font-semibold'"
);

// Footer
content = content.replace(
  'border-t border-slate-200',
  'border-t border-slate-200 dark:border-slate-800'
);

fs.writeFileSync('App.tsx', content);

let courseCardContent = fs.readFileSync('components/CourseCard.tsx', 'utf8');

// CourseCard background
courseCardContent = courseCardContent.replace(
  "'bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md'",
  "'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-slate-600 hover:shadow-md'"
);

courseCardContent = courseCardContent.replace(
  "'bg-white border border-[#00a4ef]/25 hover:border-[#00a4ef]/60 hover:shadow-[0_4px_20px_rgba(0,164,239,0.18)] hover:-translate-y-0.5'",
  "'bg-white dark:bg-slate-800 border border-[#00a4ef]/25 dark:border-[#00a4ef]/40 hover:border-[#00a4ef]/60 hover:shadow-[0_4px_20px_rgba(0,164,239,0.18)] hover:-translate-y-0.5'"
);

courseCardContent = courseCardContent.replace(
  "isMS ? 'text-[#003a70]' : 'text-slate-900'",
  "isMS ? 'text-[#003a70] dark:text-blue-100' : 'text-slate-900 dark:text-slate-100'"
);

courseCardContent = courseCardContent.replace(
  "'bg-slate-100 text-slate-600'",
  "'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'"
);

courseCardContent = courseCardContent.replace(
  "'text-slate-500 text-sm leading-relaxed'",
  "'text-slate-500 dark:text-slate-400 text-sm leading-relaxed'"
);

courseCardContent = courseCardContent.replace(
  "'text-slate-700 dark:text-slate-300 text-sm'",
  "'text-slate-700 dark:text-slate-300 text-sm'"
); // Just in case, handled. It is actually 'text-slate-700 text-sm leading-relaxed' wait let's check exact string.

fs.writeFileSync('components/CourseCard.tsx', courseCardContent);
console.log('updated');
