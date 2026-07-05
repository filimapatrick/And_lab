import { Calendar, MapPin, ArrowRight, Newspaper } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { eventsData } from '../../data/events';

export default function NewsUpdates() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-slate-100 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-sky-500/20">
              <Newspaper className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-center tracking-tight">
            Latest News & Events
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 text-lg">
            Stay updated with our latest workshops, academic outreaches, and milestones in neuroscience research.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 mx-auto mb-16 rounded-full" />
        </motion.div>

        <div className="space-y-10">
          {eventsData.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-sky-100/80"
            >
              {/* Event Cover Image */}
              <div className="relative w-full md:w-[35%] min-h-[250px] md:min-h-[300px] overflow-hidden bg-slate-100">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900/10 to-transparent" />
              </div>

              {/* Event Content Details */}
              <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                <div>
                  {/* Meta info (Date and Location) */}
                  <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs font-semibold text-sky-600 mb-4 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5 bg-sky-50 px-3 py-1.5 rounded-full">
                      <Calendar className="w-3.5 h-3.5" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1.5 bg-slate-50 text-slate-600 px-3 py-1.5 rounded-full">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {event.location.split('|')[0].trim()}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-sky-600 transition-colors duration-300">
                    {event.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {event.summary}
                  </p>
                </div>

                <Link
                  to={`/news/${event.id}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-cyan-600 group-hover:text-cyan-500 hover:gap-3 transition-all mt-auto self-start"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
