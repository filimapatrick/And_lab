import { Beaker, Brain, CheckCircle2, Database } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    "Cloud-based brain age estimation frameworks",
    "Environmental impacts on neural architecture",
    "Neuropsychiatric MRI studies in African populations",
    "Open-source neuroimaging education platforms",
    "Community-engaged ethical brain data research"
  ];

  const leftHighlights = [
    projects[0],
    projects[2],
    projects[3],
    projects[4],
    projects[1]
  ];
  const rightHighlights = [
    { icon: Beaker, title: 'Report Efficiency', text: projects[2] },
    { icon: Brain, title: 'Complete Cases', text: projects[3] },
  ];

  return (
    <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-sky-900 to-cyan-900">
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="h-full w-full [background-image:radial-gradient(circle_at_1px_1px,rgba(56,189,248,0.35)_1px,transparent_0)] [background-size:30px_30px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-4xl mx-auto mb-12 text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-200 font-semibold mb-4">Better for Research</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Selected Projects
          </h2>
          <p className="text-lg text-slate-200 leading-relaxed max-w-3xl mx-auto">
            Building practical tools, evidence, and open resources for neuroimaging and brain data science in African contexts.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_0.9fr_1fr] gap-8 lg:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <ul className="space-y-5">
              {leftHighlights.map((project) => (
                <li key={project} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-cyan-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="text-xl font-semibold text-white leading-snug">{project}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-2xl overflow-hidden border border-cyan-100 shadow-xl shadow-slate-300/40"
          >
            <img
              src="/assets/Baw/baw_2026_8.jpeg"
              alt="Researchers working on neuroscience experiments"
              className="w-full h-full min-h-[360px] max-h-[540px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="space-y-7"
          >
            {rightHighlights.map((item) => (
              <article key={item.text} className="flex items-start gap-4 rounded-2xl bg-white/95 p-4 shadow-lg shadow-slate-900/20">
                <div className="w-14 h-14 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7" />
                </div>
                <div className="flex-1 border-b border-slate-200 pb-5">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 leading-snug">{item.title}</h3>
                  <p className="text-xl font-semibold text-slate-700 leading-snug">{item.text}</p>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
