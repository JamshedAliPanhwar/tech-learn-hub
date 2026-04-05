import React, { useState, useEffect } from 'react';
import { COURSE_DATA } from './constants';
import { CategorySection } from './components/CategorySection';
import { CertificateShowcase } from './components/CertificateShowcase';
import { Search, Menu, X, Github, BookOpen, Sparkles, Linkedin } from 'lucide-react';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('simple-intros');
  const [searchQuery, setSearchQuery] = useState('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  const filteredData = COURSE_DATA.map(category => ({
    ...category,
    courses: category.courses.filter(course =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })).filter(category => category.courses.length > 0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = COURSE_DATA.map(c => document.getElementById(c.id));
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">

      <main className="flex-grow pt-20 pb-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex gap-8">

        <div className="flex-1 min-w-0">

          {filteredData.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-slate-200 text-center text-slate-500 text-sm">

            <div className="mt-8 mb-8 p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-100 block w-full sm:inline-block sm:max-w-2xl">

              <p className="text-slate-600 font-medium mb-4">
                Built by 2nd Year Students at <span className="font-semibold text-slate-800">ESI Algiers</span> 🇩🇿
              </p>

              <p className="text-slate-600 font-medium mb-4">
                Based on an original project, modified by <span className="font-semibold text-slate-800">Your Name</span>
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-8">

                <a
                  href="https://www.linkedin.com/in/jamshed-ali-panhwar-6a005b384"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-600 hover:text-blue-600 transition-all duration-200 group"
                >
                  <div className="p-1.5 bg-white rounded-full border border-slate-200 group-hover:border-blue-200 shadow-sm mr-2 group-hover:bg-blue-50">
                    <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  </div>
                  <span className="font-medium">Jamshed Ali</span>
                </a>

              </div>
            </div>

            <p className="mt-2 text-slate-400">
              &copy; {new Date().getFullYear()} MS Learning Hub.
            </p>
          </footer>

        </div>
      </main>
    </div>
  );
};

export default App;          <div className="md:hidden bg-white border-b border-slate-200 p-4 animate-in slide-in-from-top-5 max-h-[80vh] overflow-y-auto">
            <div className="relative mb-3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search courses..."
                className="block w-full pl-10 p-2.5 border border-slate-200 rounded-lg bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <nav className="space-y-0.5">
              {COURSE_DATA.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToSection(category.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between min-h-[44px] ${
                    activeSection === category.id
                      ? 'bg-[#0078d4]/10 text-[#005a9e]'
                      : 'text-slate-600 hover:bg-[#0078d4]/8 font-semibold'
                  }`}
                >
                  <span className="truncate pr-2">{category.title}</span>
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20 pb-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex gap-8">

        {/* Sidebar Navigation (Desktop) */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-3">
              Course Categories
            </h3>
            <nav className="space-y-1">
              {COURSE_DATA.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToSection(category.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between group ${
                    activeSection === category.id
                      ? 'bg-[#0078d4]/10 text-[#005a9e] shadow-sm ring-1 ring-[#0078d4]/30'
                      : 'text-slate-600 hover:bg-[#0078d4]/8 hover:text-[#003a70] font-semibold'
                  }`}
                >
                  <span className="truncate">{category.title}</span>
                </button>
              ))}
            </nav>

            <div className="mt-8 p-4 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl text-white">
              <h4 className="font-bold text-sm mb-2">Microsoft Cloud Skills?</h4>
              <p className="text-xs text-slate-300 mb-3">
                Start with the recommended Azure paths.
              </p>
              <button
                onClick={() => scrollToSection('cloud-infra')}
                className="w-full py-1.5 px-3 bg-blue-600 hover:bg-blue-500 rounded text-xs font-medium transition-colors"
              >
                View Path
              </button>
            </div>
          </div>
        </aside>

        {/* Course Feed */}
        <div className="flex-1 min-w-0">

          {/* Hero banner */}
          {!searchQuery && (
            <div className="mb-10 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden relative">
              {/* subtle grid background */}
              <div className="absolute inset-0 opacity-[0.07]"
                style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 28px,rgba(255,255,255,1) 28px,rgba(255,255,255,1) 29px),repeating-linear-gradient(90deg,transparent,transparent 28px,rgba(255,255,255,1) 28px,rgba(255,255,255,1) 29px)' }}
              />
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-6 px-6 py-8 sm:px-10 sm:py-10">
                {/* left: text */}
                <div className="flex-1 text-center lg:text-left">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
                    <Sparkles className="w-3 h-3" /> Master Microsoft Tech
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-3">
                    Microsoft. Azure.<br className="hidden sm:block" />
                    <span className="text-blue-400"> Get Certified.</span>
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
                    Every course below leads to an officially recognized certification from
                    <span className="text-white font-medium"> Microsoft</span>.
                  </p>
                  <button
                    onClick={() => scrollToSection('cloud-infra')}
                    className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition-colors shadow-lg shadow-blue-600/30"
                  >
                    Start learning
                  </button>
                </div>
                {/* right: stacked certs */}
                <div className="flex-shrink-0 w-full max-w-xs sm:max-w-sm lg:w-80">
                  <CertificateShowcase />
                </div>
              </div>
            </div>
          )}
          {filteredData.length > 0 ? (
            filteredData.map((category) => (
              <CategorySection key={category.id} category={category} />
            ))
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-medium text-slate-900">No courses found</h3>
              <p className="mt-1 text-slate-500">Try adjusting your search terms.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear Search
              </button>
            </div>
          )}

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-slate-200 text-center text-slate-500 text-sm">

            <div className="mt-8 mb-8 p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-100 block w-full sm:inline-block sm:max-w-2xl">
              <p className="text-slate-600 font-medium mb-4">
                Built by 2nd Year Students at <span className="font-semibold text-slate-800">ESI Algiers</span> 🇩🇿
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-8">
                <a
                  href="https://www.linkedin.com/in/karim-merzouk-589479323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-600 hover:text-blue-600 transition-all duration-200 group"
                >
                  <div className="p-1.5 bg-white rounded-full border border-slate-200 group-hover:border-blue-200 shadow-sm mr-2 group-hover:bg-blue-50">
                    <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  </div>
                  <span className="font-medium">Karim Merzouk</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/amine-gharout-a03965252/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-600 hover:text-blue-600 transition-all duration-200 group"
                >
                  <div className="p-1.5 bg-white rounded-full border border-slate-200 group-hover:border-blue-200 shadow-sm mr-2 group-hover:bg-blue-50">
                    <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  </div>
                  <span className="font-medium">Amine Gharout</span>
                </a>
              </div>
            </div>

            <p className="mt-2 text-slate-400">&copy; {new Date().getFullYear()} MS Learning Hub.</p>
          </footer>
        </div>
      </main>

    </div>
  );
};

export default App;
