import fs from 'fs';

let indexHtml = fs.readFileSync('index.html', 'utf8');
indexHtml = indexHtml.replace(
  '<title>Microsoft LearnHub</title>',
  '<title>Learn Hub ESI</title>\n  <link rel="canonical" href="https://learn-hub-esi.tech/" />\n  <meta property="og:url" content="https://learn-hub-esi.tech/" />\n  <meta property="og:site_name" content="Learn Hub ESI" />'
);
fs.writeFileSync('index.html', indexHtml);

let appTsx = fs.readFileSync('App.tsx', 'utf8');
appTsx = appTsx.replace(
  '<h1 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">Microsoft Learn<span className="text-[#0078d4] font-normal">Hub</span></h1>',
  '<h1 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">Learn Hub ESI</h1>'
);

appTsx = appTsx.replace(
  '<p className="mt-2 text-slate-400">&copy; {new Date().getFullYear()} MS Learning Hub.</p>',
  '<p className="mt-2 text-slate-400">&copy; {new Date().getFullYear()} Learn Hub ESI. <a href="https://learn-hub-esi.tech/" className="hover:text-slate-300 transition-colors">learn-hub-esi.tech</a></p>'
);

fs.writeFileSync('App.tsx', appTsx);
