import { GraduationCap, Network, Shield, Microscope } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ResearchAreas() {
  const areas = [
    { icon: Microscope, text: "Neuroimaging and brain mapping" },
    { icon: Network, text: "Brain data science & machine learning" },
    { icon: Shield, text: "Ethics, governance, and responsible data use" },
    { icon: GraduationCap, text: "Training and mentorship" }
  ];

  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 text-center">Research Areas</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {areas.map((area, index) => (
            <div key={index} className="flex items-center space-x-4 bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <area.icon className="w-8 h-8 text-cyan-600 flex-shrink-0" />
              <span className="text-lg text-gray-800 font-medium">{area.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
