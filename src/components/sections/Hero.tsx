import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Sophisticated gradient background with noise texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C2D] via-[#0F2A3F] to-[#0B1C2D]">
        {/* Subtle noise/grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        />
        {/* Abstract data grid at low opacity */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content with entrance animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-left"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05]">
              <span className="text-white">Advancing ethical,</span>
              <br />
              <span className="text-white">reproducible</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-400">
                brain data science
              </span>
              <br />
              <span className="text-white">in Africa</span>
            </h1>

            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
              African NeuroData Research Lab (ANR) develops open, reproducible, and culturally grounded approaches to neuroimaging and brain research.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#research"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-0.5"
              >
                Explore Our Research
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                Collaborate With Us
              </a>
            </div>
          </motion.div>

          {/* Right side - Floating brain visualization with animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            {/* Ambient glow/pulse effect behind brain */}
            <motion.div
              animate={{
                opacity: [0.4, 0.5, 0.4],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-[500px] h-[500px] bg-gradient-radial from-cyan-500/30 via-teal-500/20 to-transparent rounded-full blur-3xl" />
            </motion.div>

            {/* Floating brain image with idle animation */}
            <motion.img
              src="/assets/hero-brain.png"
              alt="Neuroscience Brain Visualization"
              animate={{
                y: [0, -12, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10 w-full max-w-[600px] h-auto drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
