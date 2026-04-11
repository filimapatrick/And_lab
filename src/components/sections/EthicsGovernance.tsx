import { Check, Database, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EthicsGovernance() {
  const highlights = [
    'Ethical stewardship of brain data',
    'Safeguarding research participants',
    'Open and accountable practices'
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-slate-50 to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          {/* Left side - Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/70 border border-slate-100">
              <img
                src="/assets/Baw/baw_2026_6.jpeg"
                alt="Researcher in laboratory"
                className="w-full h-[420px] object-cover"
              />
            </div>

            <div className="hidden sm:block absolute -left-6 bottom-12 w-56 rounded-xl overflow-hidden border-4 border-white shadow-lg">
              <img
                src="/assets/Baw/baw_2026_7.jpeg"
                alt="Team research collaboration"
                className="w-full h-48 object-cover"
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="order-1 lg:order-2"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-600 font-semibold mb-4">// What About Us</p>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Ethics and Data Governance
            </h2>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              All research conducted by the lab adheres to internationally recognized ethical standards while remaining sensitive to local cultural and regulatory contexts.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-100 to-teal-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Responsible Data Governance</h3>
                  <p className="text-sm text-slate-600">Ethical stewardship of brain data</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-100 to-teal-100 flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Transparent Data Management</h3>
                  <p className="text-sm text-slate-600">Open and accountable practices</p>
                </div>
              </div>
            </div>

            <ul className="space-y-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-800">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-cyan-500 text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* <button
              type="button"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-cyan-500/40"
            >
              Read More →
            </button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
