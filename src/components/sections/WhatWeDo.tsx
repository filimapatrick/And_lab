import { Shield, Database, Brain, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatWeDo() {
  const cards = [
    {
      icon: Brain,
      title: "Neuroimaging Research",
      description: "Structural, functional, and multimodal MRI research focused on African populations.",
      color: "cyan"
    },
    {
      icon: Database,
      title: "Brain Data Science",
      description: "Machine learning, statistical modeling, and cloud-based analysis of large-scale brain data.",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Ethics & Data Governance",
      description: "Research on consent, data sharing, cultural context, and responsible reuse of brain data.",
      color: "teal"
    },
    {
      icon: Users,
      title: "Capacity Building",
      description: "Training, mentorship, and open educational resources for African researchers.",
      color: "sky"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-16 text-center">What We Do</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-cyan-200 group"
            >
              <div className={`w-14 h-14 bg-${card.color}-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <card.icon className={`w-7 h-7 text-${card.color}-600`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
