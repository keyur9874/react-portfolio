import { motion } from 'framer-motion';
import { Zap, Shield, TrendingUp, Users } from 'lucide-react';
import { personal } from '../data/portfolio';
import { useInView } from '../hooks/useInView';

const highlights = [
  { icon: Zap,       label: '40% Uptime Improvement',  sub: 'AKS Migration',             color: 'text-amber-600',  bg: 'bg-amber-50',  border: 'border-amber-100' },
  { icon: Shield,    label: '99.9% SLA Maintained',    sub: 'Production Stability',       color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100' },
  { icon: TrendingUp,label: '35% Cost Reduction',      sub: 'Infrastructure Optimization',color: 'text-brand-600',  bg: 'bg-brand-50',  border: 'border-brand-100' },
  { icon: Users,     label: '900+ Properties Served',  sub: 'Enterprise Scale',           color: 'text-sky-600',    bg: 'bg-sky-50',    border: 'border-sky-100' },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-600 font-mono text-sm font-medium mb-3 tracking-widest uppercase">About me</p>
            <h2 className="section-title mb-6">
              Building <span className="brand-gradient">Cloud-Native</span> Systems That Scale
            </h2>
            <div className="space-y-4 text-slate-500 leading-relaxed">
              <p>
                I'm a Senior Software Engineer at <span className="text-brand-600 font-semibold">Veloxcore</span> specializing in Azure cloud architecture and .NET Core microservices. With 4+ years of hands-on experience, I help SaaS companies migrate legacy systems to modern, scalable cloud infrastructure.
              </p>
              <p>
                My focus is on <span className="text-slate-700 font-medium">production stability</span>, <span className="text-slate-700 font-medium">cost optimization</span>, and <span className="text-slate-700 font-medium">architectural excellence</span> — owning systems end-to-end from design through deployment across cross-timezone teams.
              </p>
              <p>
                When I'm not designing microservices, I'm earning Azure certifications and staying current with cloud-native patterns.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2.5">View GitHub</a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm py-2.5">Connect on LinkedIn</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className={`surface-card p-5 hover:shadow-md border ${h.border} group`}
                >
                  <div className={`w-10 h-10 rounded-xl ${h.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={18} className={h.color} />
                  </div>
                  <div className={`font-bold text-sm ${h.color} mb-1`}>{h.label}</div>
                  <div className="text-xs text-slate-400">{h.sub}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
