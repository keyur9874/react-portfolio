import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { projects } from '../data/portfolio';
import { useInView } from '../hooks/useInView';

export default function Projects() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="projects" className="py-24 px-6 bg-surface-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-600 font-mono text-sm font-medium mb-3 tracking-widest uppercase">What I've built</p>
          <h2 className="section-title">Featured <span className="brand-gradient">Projects</span></h2>
          <p className="section-subtitle">Production systems that serve real enterprise clients</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="surface-card overflow-hidden hover:-translate-y-1 hover:border-brand-200 group"
            >
              {/* Card header */}
              <div className={`relative h-36 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />
                <span className="text-7xl filter drop-shadow-lg relative z-10 animate-float">{project.icon}</span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{project.title}</h3>
                <p className="text-brand-600 text-sm font-semibold mb-3">{project.subtitle}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{project.description}</p>

                <ul className="space-y-2 mb-5">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-500">
                      <CheckCircle2 size={13} className="text-brand-400 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs font-medium rounded-md bg-brand-50 border border-brand-100 text-brand-600 hover:bg-brand-100 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
