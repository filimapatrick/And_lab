import { motion } from 'framer-motion';

export default function MissionVisionValues() {
  const values = [
    'Scientific rigor & reproducibility',
    'Ethical responsibility & stewardship',
    'Equity in global research',
    'Capacity strengthening',
    'Open science & transparency'
  ];

  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-sky-900 to-cyan-900">
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="h-full w-full [background-image:radial-gradient(circle_at_1px_1px,rgba(56,189,248,0.35)_1px,transparent_0)] [background-size:30px_30px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-1 text-sm font-semibold text-cyan-200 mb-4">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Our Approach
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight max-w-3xl leading-tight">
            Mission and Vision for
            <span className="block text-cyan-300">ethical brain data science</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-8"
          >
            <article className="rounded-2xl border border-cyan-300/20 bg-slate-900/35 backdrop-blur-sm p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Mission</h3>
              <p className="text-slate-200 leading-relaxed mb-5">
                To advance ethical, reproducible, and locally relevant neuroimaging and brain data science led from Africa.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-cyan-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  Ethical leadership
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
                  Reproducible science
                </div>
              </div>
            </article>

            <div className="rounded-2xl overflow-hidden border border-cyan-200/25 shadow-2xl shadow-slate-950/40">
              <img
                src="/assets/Baw/baw_2026_1.jpeg"
                alt="Laboratory bench and scientific instruments"
                className="w-full h-72 sm:h-80 object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="space-y-8"
          >
            <div className="rounded-2xl overflow-hidden border border-cyan-200/25 shadow-2xl shadow-slate-950/40">
              <img
                src="/assets/Baw/baw_2026_2.jpeg"
                alt="Researcher conducting laboratory analysis"
                className="w-full h-72 sm:h-80 object-cover"
              />
            </div>

            <article className="rounded-2xl border border-cyan-300/20 bg-slate-900/35 backdrop-blur-sm p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
              <p className="text-slate-200 leading-relaxed mb-6">
                A future where African researchers and communities lead the generation, governance, and application of brain data for public good.
              </p>

              <h4 className="text-lg font-semibold text-cyan-200 mb-3">Core Values</h4>
              <ul className="grid sm:grid-cols-2 gap-3 text-slate-100">
                {values.map((value) => (
                  <li key={value} className="flex items-start gap-2 text-sm leading-relaxed">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </article>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
