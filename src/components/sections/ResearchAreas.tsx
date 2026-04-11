import { GraduationCap, Network, Shield, Microscope } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ResearchAreas() {
  const areas = [
    {
      icon: Microscope,
      title: 'Neuroimaging and Brain Mapping',
      description: 'Multimodal MRI pipelines and population-specific brain mapping frameworks for African cohorts.'
    },
    {
      icon: Network,
      title: 'Brain Data Science and Machine Learning',
      description: 'Scalable methods for harmonization, modeling, and robust inference across heterogeneous datasets.'
    },
    {
      icon: Shield,
      title: 'Ethics, Governance, and Responsible Data Use',
      description: 'Context-aware governance models that prioritize equity, transparency, and participant trust.'
    },
    {
      icon: GraduationCap,
      title: 'Training and Mentorship',
      description: 'Structured capacity-building tracks for students and early-career researchers across the continent.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="research" className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-cyan-50/50 to-blue-50">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-cyan-200/50 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-cyan-700 mb-3">
            Focus Domains
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5">Research Areas</h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Our program integrates methodological rigor, ethical leadership, and regional capacity-building to advance
            high-impact neuroscience in Africa.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {areas.map((area, index) => (
            <motion.article
              key={area.title}
              variants={cardVariants}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="group relative rounded-2xl border border-cyan-100/70 bg-white/90 p-7 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl"
            >
              <div className="absolute top-4 right-5 text-xs font-semibold text-slate-300 group-hover:text-cyan-500 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700 ring-1 ring-cyan-200/60">
                <area.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-3 leading-snug">{area.title}</h3>
              <p className="text-slate-600 leading-relaxed">{area.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
