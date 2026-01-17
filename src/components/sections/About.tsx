import { GraduationCap, Brain, Shield, Database, Microscope } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-center">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-16 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">African NeuroData Lab</h3>
                  <p className="text-cyan-600 font-semibold">AND Lab</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                An interdisciplinary research group focused on the generation, analysis, governance, and responsible reuse of neuroimaging and brain-related data in African contexts.
              </p>
            </div>
          </motion.div>

          {/* Right side - Key highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Microscope className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Neuroscience Excellence</h4>
                  <p className="text-gray-600">High-quality, locally led brain research</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Data Science Innovation</h4>
                  <p className="text-gray-600">Advanced analytics and machine learning</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Ethical Leadership</h4>
                  <p className="text-gray-600">Responsible data governance and stewardship</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Capacity Building</h4>
                  <p className="text-gray-600">Training and mentorship programs</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
