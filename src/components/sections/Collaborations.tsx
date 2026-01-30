import { Globe, Mail, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Collaborations() {
  const collaborators = [
    {
      name: "Prof. Silke Anders",
      title: "Professor of Social and Affective Neuroscience",
      institution: "University of Lubeck",
      location: "Lubeck, Germany",
      flag: "🇩🇪",
      image: "/assets/collaborators/silke.jpg",
      project: "African Brains for African Brain Images Project",
      funding: "The DFG African-German Collaborative Neuroscience Research grant",
      duration: "2024-2027"
    },
    {
      name: "Dr. Andreea Diaconescu",
      title: "Associate Professor of Psychiatry",
      institution: "University of Toronto Cognitive and Computational Neuropsychiatry Lab, Center for Addiction and Mental Health",
      location: "Ontario, Canada",
      flag: "🇨🇦",
      image: "/assets/collaborators/Andreea.jpg",
      project: "Mindmetrics-Neurofusion Research Project",
      funding: "IBRO-Wellcome Trust Neuroscience Capacity Accelerator for Mental Health",
      duration: "2025-2026"
    },
    {
      name: "Prof. Franco Delogu",
      title: "Professor of Psychology",
      institution: "Department of Psychology, Lawrence Technological University",
      location: "Michigan, USA",
      flag: "🇺🇸",
      image: "/assets/collaborators/Delugo.jpg",
      project: "Trans-continental CURE-Brainlife Educational Project",
      funding: null,
      duration: "2025 to date"
    },
    {
      name: "Prof. Robert Oostenveld",
      title: "Professor",
      institution: "Donders Institute for Brain, Cognition and Behaviour, Radboud University",
      location: "Netherlands",
      flag: "🇳🇱",
      image: "/assets/collaborators/Robert.jpg",
      project: "Emotional Regulation and Reactivity to Stress in Nigerian youths: An EEG and Behavioural Study",
      funding: null,
      duration: null
    },
    {
      name: "Prof. Franco Pestili",
      title: "Director of Brainlife.io, Professor of Psychology",
      institution: "Department of Psychology, University of Texas",
      location: "Austin, Texas, USA",
      flag: "🇺🇸",
      image: "/assets/collaborators/pestilli.jpg",
      project: null,
      funding: null,
      duration: null
    },
    {
      name: "Dr. Damian Eke",
      title: "Director of African Brain Data Network, Associate Professor",
      institution: "School of Computer Science, University of Nottingham",
      location: "Nottingham, UK",
      flag: "🇬🇧",
      image: "/assets/collaborators/Damian.jpg",
      project: null,
      funding: null,
      duration: null
    }
  ];

  const visitingResearchers = [
    "Apochi Obed",
    "Dr. Kini Wobo",
    "Dr. Chinyem Ighodaro",
    "Yemi, O."
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-center">
            Collaborators
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-16">
            ANR Lab collaborates with leading international researchers and institutions to advance ethical and equitable brain research
          </p>
        </motion.div>

        {/* Collaborator Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {collaborators.map((collab, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-cyan-300 hover:shadow-xl transition-all duration-300 h-full">
                <div className="grid md:grid-cols-3 gap-6 p-6">
                  {/* Image Section */}
                  <div className="md:col-span-1 flex justify-center items-start">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                      <img
                        src={collab.image}
                        alt={collab.name}
                        className="relative w-full h-48 md:h-full object-cover rounded-xl shadow-md"
                      />
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="md:col-span-2">
                    {/* Header with flag */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-lg flex items-center justify-center text-xl group-hover:scale-110 transition-transform flex-shrink-0">
                        {collab.flag}
                      </div>
                      <Users className="w-5 h-5 text-gray-400 group-hover:text-cyan-500 transition-colors" />
                    </div>

                    {/* Collaborator Info */}
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{collab.name}</h3>
                    <p className="text-sm text-cyan-600 font-semibold mb-2">{collab.title}</p>
                    <p className="text-sm text-gray-600 mb-1">{collab.institution}</p>
                    <p className="text-sm text-gray-500 mb-4">{collab.location}</p>

                    {/* Project Details */}
                    {collab.project && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="space-y-3">
                          <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Research Project</p>
                            <p className="text-sm text-gray-800 leading-relaxed">{collab.project}</p>
                          </div>

                          {collab.funding && (
                            <div>
                              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Funding</p>
                              <p className="text-sm text-gray-700">{collab.funding}</p>
                            </div>
                          )}

                          {collab.duration && (
                            <div>
                              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Duration</p>
                              <p className="text-sm text-gray-700 font-medium">{collab.duration}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visiting Researchers Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Visiting Researchers
          </h3>
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-md">
            <p className="text-sm text-gray-600 mb-4">Contributing to the lab's projects:</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {visitingResearchers.map((researcher, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="flex items-center space-x-3 bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 border border-gray-100 hover:border-cyan-200 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-800">{researcher}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-2xl p-10 border border-cyan-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Become a Collaborator</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Interested in collaborating with ANR Lab? We welcome partnerships that advance ethical and equitable brain research
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-cyan-500/50"
            >
              Contact Us
              <Mail className="ml-2 w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
