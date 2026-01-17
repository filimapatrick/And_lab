import { Database, Award, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EthicsGovernance() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-center">
            Ethics and Data Governance
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-12 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100"
        >
          <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
            All research conducted by the lab adheres to internationally recognized ethical standards while remaining sensitive to local cultural and regulatory contexts.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <Award className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Responsible Data Governance</h3>
              <p className="text-sm text-gray-600">Ethical stewardship of brain data</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <Shield className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Participant Protection</h3>
              <p className="text-sm text-gray-600">Safeguarding research participants</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <Database className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Transparent Data Management</h3>
              <p className="text-sm text-gray-600">Open and accountable practices</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
