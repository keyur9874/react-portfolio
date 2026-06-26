import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Star } from 'lucide-react';
import { education } from '../data/portfolio';
import { useInView } from '../hooks/useInView';

export default function Education() {
  const { ref, inView } = useInView();

  return (
    <section className="py-16 px-6 bg-surface-50" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="surface-card p-8 hover:border-brand-200"
        >
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-brand-500 to-sky-500 shadow-md shadow-brand-100 flex-shrink-0">
              <GraduationCap size={32} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{education.degree}</h3>
                  <p className="text-brand-600 font-semibold mt-1">{education.institution}</p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200">
                  <Star size={13} className="text-amber-500 fill-amber-500" />
                  <span className="text-amber-700 font-bold text-sm">CGPA {education.cgpa}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-1.5"><Calendar size={13} /><span>{education.period}</span></div>
                <div className="flex items-center gap-1.5"><MapPin size={13} /><span>{education.location}</span></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
