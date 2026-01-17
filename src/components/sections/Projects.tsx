import { Beaker } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    "Cloud-based brain age estimation frameworks",
    "Environmental impacts on neural architecture",
    "Neuropsychiatric MRI studies in African populations",
    "Open-source neuroimaging education platforms",
    "Community-engaged ethical brain data research"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 text-center">Selected Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="flex items-start space-x-3 bg-slate-50 rounded-lg p-6 hover:bg-slate-100 transition-colors">
              <Beaker className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
              <span className="text-gray-800">{project}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
