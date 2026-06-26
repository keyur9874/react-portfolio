import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolio';
import { useInView } from '../hooks/useInView';

export default function Certifications() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="certifications" className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-600 font-mono text-sm font-medium mb-3 tracking-widest uppercase">Credentials</p>
          <h2 className="section-title"><span className="brand-gradient">Certifications</span></h2>
          <p className="section-subtitle">Microsoft Azure certified professional</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="surface-card p-6 hover:-translate-y-1 hover:border-brand-200 flex flex-col"
            >
              <div className="mb-5">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${cert.color} shadow-sm`}>
                  <Award size={16} className="text-white" />
                  <span className="font-black text-white text-sm tracking-wider">{cert.badge}</span>
                </div>
              </div>

              <h3 className="font-bold text-slate-800 text-base leading-snug mb-2">{cert.title}</h3>
              <p className="text-brand-600 text-sm font-semibold mb-3">{cert.issuer}</p>

              <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-4">
                <Calendar size={11} />
                <span>{cert.date}</span>
              </div>

              <p className="text-slate-500 text-xs leading-relaxed flex-1">{cert.description}</p>

              {cert.credentialFile && (
                <a
                  href={cert.credentialFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center gap-1.5 text-brand-600 hover:text-brand-700 text-xs font-semibold transition-colors group/link"
                >
                  <span>View Credential</span>
                  <ExternalLink size={11} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
