import { motion } from 'framer-motion';

const bawImages = [
  '/assets/Baw/baw_2026_1.jpeg',
  '/assets/Baw/baw_2026_2.jpeg',
  '/assets/Baw/baw_2026_3.jpeg',
  '/assets/Baw/baw_2026_4.jpeg',
  '/assets/Baw/baw_2026_5.jpeg',
  '/assets/Baw/baw_2026_6.jpeg',
  '/assets/Baw/baw_2026_7.jpeg',
  '/assets/Baw/baw_2026_8.jpeg',
  '/assets/Baw/baw_2026_9.jpeg',
];

export default function BrainAwarenessWeekGallery() {
  return (
    <section id="brain-awareness-week" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-cyan-600 font-semibold uppercase tracking-widest text-sm">Community Event</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900">Brain Awareness Week 2026</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Highlights from our first Brain Awareness Week, where we connected science, community, and young minds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {bawImages.map((image, index) => (
            <motion.figure
              key={image}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <img
                src={image}
                alt={`Brain Awareness Week 2026 photo ${index + 1}`}
                loading="lazy"
                className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
