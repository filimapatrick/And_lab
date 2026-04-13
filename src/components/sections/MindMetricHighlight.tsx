import { Check, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MindMetricHighlight() {
  const highlights = [
    'MindMetric project spotlight from ANR Lab',
    'Advancing practical brain data science workflows',
    'Locally grounded research leadership in Africa',
    'Open, ethical, and collaborative innovation'
  ];

  return (
    <section
      id="mindmetric"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-slate-50 to-cyan-50/40"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/70 border border-slate-100">
              <img
                src="/assets/mindmetric/Barisua_mindmetric.jpg"
                alt="Barisua presenting MindMetric research"
                className="w-full h-[470px] object-cover"
              />
            </div>

            <div className="absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 shadow-lg shadow-cyan-500/40 flex items-center justify-center border-4 border-white">
                <Brain className="w-11 h-11 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-600 font-semibold mb-4">
              Project Feature
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
              MindMetric in Action
              <span className="block">at ANR Lab</span>
            </h2>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              This feature highlights our MindMetric workstream and the people building practical,
              data-driven tools that strengthen neuroscience research capacity across the region.
            </p>

            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-800">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl bg-white/80 border border-cyan-100 shadow-sm p-4">
              <p className="text-sm text-slate-600">
                Building trusted brain data infrastructure through people, methods, and measurable
                outcomes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
