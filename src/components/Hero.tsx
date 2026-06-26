import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personal, stats } from '../data/portfolio';

const taglines = personal.taglines;

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = taglines[taglineIndex];
    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      const interval = setInterval(() => {
        setDisplayed(target.slice(0, ++i));
        if (i >= target.length) { clearInterval(interval); timeout = setTimeout(() => setTyping(false), 1800); }
      }, 60);
      return () => { clearInterval(interval); clearTimeout(timeout); };
    } else {
      let j = target.length;
      const interval = setInterval(() => {
        setDisplayed(target.slice(0, --j));
        if (j <= 0) { clearInterval(interval); setTaglineIndex((p) => (p + 1) % taglines.length); setTyping(true); }
      }, 35);
      return () => clearInterval(interval);
    }
  }, [taglineIndex, typing]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden bg-surface-50">
      {/* Background blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] hero-blob pointer-events-none" />
      <div className="absolute top-2/3 left-1/4 w-80 h-80 rounded-full bg-sky-500/8 blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/5 w-56 h-56 rounded-full bg-brand-400/10 blur-3xl pointer-events-none" />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(99,102,241,0.07)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-300 bg-emerald-50 text-emerald-700 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Open to new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-5xl md:text-7xl font-black mb-4 tracking-tight text-slate-900"
        >
          Hi, I'm{' '}
          <span className="brand-gradient">{personal.name.split(' ')[0]}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl font-semibold text-slate-700 mb-2"
        >
          {personal.title}
        </motion.p>

        <div className="h-8 flex items-center justify-center mb-6">
          <span className="text-brand-600 font-mono text-lg font-medium">
            {displayed}<span className="typing-cursor" />
          </span>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8"
        >
          {personal.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-2 text-slate-400 text-sm mb-10"
        >
          <MapPin size={14} className="text-brand-500" />
          <span>{personal.location}</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary flex items-center gap-2"
          >
            <Mail size={16} /> Get in Touch
          </button>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline"
          >
            View My Work
          </button>
          <div className="flex items-center gap-3">
            <a href={personal.github} target="_blank" rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 text-slate-500 hover:text-brand-600 hover:border-brand-300 hover:bg-brand-50 transition-all duration-200">
              <GithubIcon size={18} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 text-slate-500 hover:text-brand-600 hover:border-brand-300 hover:bg-brand-50 transition-all duration-200">
              <LinkedinIcon size={18} />
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="surface-card p-4 hover:border-brand-200 hover:shadow-brand-100 transition-all duration-300">
              <div className="text-2xl font-black text-brand-600">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-xs">Scroll to explore</span>
        <ChevronDown size={18} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
