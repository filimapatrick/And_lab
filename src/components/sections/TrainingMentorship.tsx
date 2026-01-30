import { GraduationCap, Database, Users, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TrainingMentorship() {
  const trainingAreas = [
    {
      icon: GraduationCap,
      title: "Hands-on Research Supervision",
      description: "Direct mentorship and guidance on neuroimaging and brain data science research projects",
      color: "cyan"
    },
    {
      icon: BookOpen,
      title: "Workshops and Short Courses",
      description: "Intensive training programs on neuroimaging methods, data analysis, and research best practices",
      color: "teal"
    },
    {
      icon: Database,
      title: "Open Educational Resources",
      description: "Freely accessible learning materials, tutorials, and documentation for brain data science",
      color: "blue"
    },
    {
      icon: Users,
      title: "Mentorship for Early-Career Researchers",
      description: "Dedicated support and guidance for graduate students and early-career neuroscientists",
      color: "purple"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-center">
            Training and Mentorship
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-16">
            The African NeuroData Research Lab (ANR) is committed to training the next generation of African neuroscientists and brain data scientists
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {trainingAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 h-full">
                <div className={`w-14 h-14 bg-${area.color}-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <area.icon className={`w-7 h-7 text-${area.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
