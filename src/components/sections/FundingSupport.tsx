import { DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FundingSupport() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-center">
            Funding and Support
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-12 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-10 border border-emerald-100"
        >
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Research at the African NeuroData Research Lab (ANR) is supported through competitive grants, institutional support, and collaborative funding from national and international organizations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
