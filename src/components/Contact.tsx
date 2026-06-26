import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personal } from '../data/portfolio';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const { ref, inView } = useInView(0.1);

  const contactItems = [
    { icon: Mail,   label: 'Email',    value: personal.email,  href: `mailto:${personal.email}` },
    { icon: Phone,  label: 'Phone',    value: personal.phone,  href: `tel:${personal.phone}` },
    { icon: MapPin, label: 'Location', value: personal.location, href: null },
  ];

  const socialLinks = [
    { icon: GithubIcon,   label: 'GitHub',   href: personal.github },
    { icon: LinkedinIcon, label: 'LinkedIn', href: personal.linkedin },
    { icon: Mail,         label: 'Email',    href: `mailto:${personal.email}` },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-600 font-mono text-sm font-medium mb-3 tracking-widest uppercase">Let's talk</p>
          <h2 className="section-title">Get In <span className="brand-gradient">Touch</span></h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Open to new opportunities, collaborations, or just a chat about cloud architecture. My inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {contactItems.map((item) => {
              const Icon = item.icon;
              const Wrapper = item.href ? 'a' : 'div';
              return (
                <Wrapper key={item.label} {...(item.href ? { href: item.href } : {})}
                  className="flex items-center gap-4 surface-card p-5 hover:border-brand-200 group cursor-pointer">
                  <div className="p-3 rounded-xl bg-brand-50 border border-brand-100 group-hover:bg-brand-100 transition-colors">
                    <Icon size={18} className="text-brand-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-0.5">{item.label}</div>
                    <div className="text-slate-700 font-medium text-sm">{item.value}</div>
                  </div>
                </Wrapper>
              );
            })}

            <div className="flex gap-3 pt-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a key={link.label} href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 surface-card text-slate-500 hover:text-brand-600 hover:border-brand-200 hover:bg-brand-50 transition-all duration-200 text-sm font-medium">
                    <Icon size={15} />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="surface-card p-8 flex flex-col justify-center items-center text-center relative overflow-hidden border-brand-100"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-sky-50 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-sky-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-200 animate-float">
                <Send size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Ready to Collaborate?</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Whether you need help architecting a cloud system, scaling microservices, or reducing Azure costs — let's discuss how I can help.
              </p>
              <a href={`mailto:${personal.email}`} className="btn-primary inline-flex items-center gap-2">
                <Mail size={15} /> Send a Message
              </a>
              <p className="text-slate-400 text-xs mt-4">Usually responds within 24 hours</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
