import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { experience } from '../data/portfolio';
import { useInView } from '../hooks/useInView';

export default function Experience() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="experience" className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-600 font-mono text-sm font-medium mb-3 tracking-widest uppercase">Where I've worked</p>
          <h2 className="section-title">Work <span className="brand-gradient">Experience</span></h2>
          <p className="section-subtitle">4+ years building production-grade cloud systems</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line — centered at left-6 (24px) */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-400 via-brand-200 to-transparent" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 -translate-x-1/2">
                  <div className="w-5 h-5 rounded-full border-2 border-brand-500 bg-white shadow-md shadow-brand-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-brand-500" />
                  </div>
                </div>

                <div className="surface-card p-6 group hover:border-brand-200">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={15} className="text-brand-500" />
                        <h3 className="font-bold text-slate-900 text-lg">{exp.role}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-brand-600 font-semibold text-base">{exp.company}</p>
                    </div>
                    <div className="text-right text-sm text-slate-400 space-y-1">
                      <div className="flex items-center gap-1.5 justify-end">
                        <Calendar size={12} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 justify-end">
                        <MapPin size={12} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-slate-500 text-sm leading-relaxed">
                        <CheckCircle2 size={14} className="text-brand-400 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-50 border border-slate-200 text-slate-600">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
