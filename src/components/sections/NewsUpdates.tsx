import { Calendar, Newspaper } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NewsUpdates() {
  const newsItems = [
    {
      date: "Coming Soon",
      title: "Lab Updates",
      description: "Announcements, events, workshops, and major lab milestones will be posted here."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Newspaper className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-center">
            News and Updates
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-orange-600 font-semibold mb-2">{item.date}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
