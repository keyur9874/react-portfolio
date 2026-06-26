import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personal } from '../data/portfolio';

const links = ['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="w-full px-8 flex items-center justify-between h-16">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-brand-600 font-bold text-lg hover:text-brand-700 transition-colors"
        >
          &lt;{personal.githubUsername} /&gt;
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                active === link
                  ? 'text-brand-600 bg-brand-50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {link}
            </button>
          ))}
          <a
            href="mailto:asodariyakeyur987@gmail.com"
            className="ml-2 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/25"
          >
            Hire Me
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-600 hover:text-slate-900 p-2">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 pb-4">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="block w-full text-left px-4 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg text-sm font-medium"
            >
              {link}
            </button>
          ))}
          <a href="mailto:asodariyakeyur987@gmail.com" className="block mt-2 px-4 py-3 bg-brand-600 text-white text-sm font-semibold rounded-lg text-center">
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
