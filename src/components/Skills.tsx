import { motion } from 'framer-motion';
import { Cloud, Code2, Monitor, GitBranch } from 'lucide-react';
import { skills } from '../data/portfolio';
import { useInView } from '../hooks/useInView';

const categories = [
  { label: 'Cloud & Azure',    icon: Cloud,      items: skills.cloud,   gradient: 'from-brand-500 to-sky-500',    ring: 'ring-brand-100' },
  { label: 'Backend & Data',   icon: Code2,      items: skills.backend, gradient: 'from-violet-500 to-brand-500', ring: 'ring-violet-100' },
  { label: 'Frontend',         icon: Monitor,    items: skills.frontend,gradient: 'from-emerald-500 to-sky-400',  ring: 'ring-emerald-100' },
  { label: 'DevOps & Tools',   icon: GitBranch,  items: skills.devops,  gradient: 'from-orange-500 to-amber-400', ring: 'ring-orange-100' },
];

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-24 px-6 bg-surface-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-600 font-mono text-sm font-medium mb-3 tracking-widest uppercase">What I work with</p>
          <h2 className="section-title">Technical <span className="brand-gradient">Skills</span></h2>
          <p className="section-subtitle">Production-grade technologies across the full cloud stack</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, ci) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
                className={`surface-card p-6 ring-2 ${cat.ring} hover:ring-brand-200`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${cat.gradient} shadow-sm`}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg">{cat.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span key={item} className="skill-badge">{item}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
