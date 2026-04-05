import fs from 'fs';

// Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');
indexHtml = indexHtml.replace(
  '<title>Microsoft LearnHub</title>',
  '<title>CourseNavigator Hub</title>\n  <link rel="canonical" href="https://course-navigator-hub.tech/" />\n  <meta property="og:url" content="https://course-navigator-hub.tech/" />\n  <meta property="og:site_name" content="CourseNavigator Hub" />'
);
fs.writeFileSync('index.html', indexHtml);

// Update App.tsx (footer only)
let appTsx = fs.readFileSync('App.tsx', 'utf8');
appTsx = appTsx.replace(
  '<p className="mt-2 text-slate-400">&copy; {new Date().getFullYear()} MS Learning Hub.</p>',
  '<p className="mt-2 text-slate-400">&copy; {new Date().getFullYear()} CourseNavigator Hub • Inspired by Learn-Hub-ESI</p>'
);

fs.writeFileSync('App.tsx', appTsx);
