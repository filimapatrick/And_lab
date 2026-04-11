import { Check, Microscope } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '/assets/logo.png';

export default function About() {
  const highlights = [
    'High-quality, locally led brain research',
    'Advanced analytics and machine learning',
    'Responsible data governance and stewardship',
    'Training and mentorship programs'
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-slate-50 to-cyan-50/40">
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
                src="/assets/Baw/baw_2026_3.jpeg"
                alt="Researchers in the laboratory"
                className="w-full h-[470px] object-cover"
              />
            </div>

            <div className="hidden sm:block absolute -left-8 bottom-10 w-64 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/assets/Baw/baw_2026_4.jpeg"
                alt="Laboratory microscopy session"
                className="w-full h-52 object-cover"
              />
            </div>

            <div className="absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 shadow-lg shadow-cyan-500/40 flex items-center justify-center border-4 border-white">
                <Microscope className="w-11 h-11 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-600 font-semibold mb-4">Who We Are</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
              About Our Laboratory &
              <span className="block">Research Center</span>
            </h2>

            <div className="flex items-start gap-4 mb-6 rounded-2xl bg-white/80 border border-cyan-100 shadow-sm p-4">
              <img src={logo} alt="ANR Lab logo" className="w-14 h-14 object-contain" />
              <div>
                <h3 className="text-xl font-bold text-slate-900">African NeuroData Research Lab</h3>
                <p className="text-cyan-600 font-semibold">ANR Lab</p>
              </div>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              An interdisciplinary research group focused on the generation, analysis, governance, and responsible reuse of neuroimaging and brain-related data in African contexts.
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

            <div className="flex items-center gap-4 pt-2">
              <img
                src="/assets/Baw/baw_2026_5.jpeg"
                alt="ANR researcher"
                className="w-14 h-14 rounded-full object-cover border-2 border-cyan-200"
              />
              <p className="text-sm text-slate-600">Committed to locally led neuroscience excellence and ethical innovation.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
