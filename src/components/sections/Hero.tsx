import { ArrowRight, Brain, Users, BookOpen, Globe, Database } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom SVG component drawing a highly sophisticated glowing wireframe map of Africa
const AfricaWireframeSVG = () => {
  // Coordinates are calibrated for a 400x450 viewBox to shape the African continent
  const nodes = [
    { id: 1, x: 220, y: 70, size: 5 },   // North (Tunisia/Libya region)
    { id: 2, x: 175, y: 90, size: 4 },   // Northwest (Algeria)
    { id: 3, x: 130, y: 120, size: 5 },  // West Bulge (Mauritania)
    { id: 4, x: 95, y: 160, size: 6 },   // West-most (Senegal)
    { id: 5, x: 140, y: 190, size: 4 },  // West Coast Inner (Guinea/Ivory Coast)
    { id: 6, x: 190, y: 155, size: 5 },  // Central North (Niger)
    { id: 7, x: 250, y: 110, size: 4 },  // Northeast (Egypt)
    { id: 8, x: 300, y: 145, size: 6 },  // East (Somalia/Ethiopia horn)
    { id: 9, x: 220, y: 210, size: 5 },  // Central (Congo)
    { id: 10, x: 265, y: 230, size: 4 }, // East Central (Kenya/Tanzania)
    { id: 11, x: 205, y: 275, size: 5 }, // South Central (Angola/Zambia)
    { id: 12, x: 250, y: 300, size: 4 }, // Southeast (Mozambique)
    { id: 13, x: 215, y: 355, size: 6 }, // South (South Africa)
    { id: 14, x: 275, y: 315, size: 3 }, // Madagascar
  ];

  // Neural network connections forming a mesh across the continent
  const connections = [
    [1, 2], [1, 6], [1, 7],
    [2, 3], [2, 6],
    [3, 4], [3, 5], [3, 6],
    [4, 5],
    [5, 6], [5, 9],
    [6, 7], [6, 9],
    [7, 8], [7, 10],
    [8, 10],
    [9, 10], [9, 11],
    [10, 11], [10, 12],
    [11, 12], [11, 13],
    [12, 13], [12, 14]
  ];

  return (
    <svg
      viewBox="0 0 400 450"
      className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none z-0 select-none opacity-80"
    >
      <defs>
        {/* Glow gradients and filters */}
        <linearGradient id="africaGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#0d9488" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.45" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Grid Pattern inside the continent to represent data structure */}
      <pattern id="dotGrid" width="18" height="18" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="#06b6d4" fillOpacity="0.18" />
      </pattern>
      
      <mask id="continentMask">
        <path
          d="M225,50 C240,60 250,80 255,100 C270,110 290,120 310,125 C330,130 350,150 355,170 C360,200 350,230 330,250 C310,270 300,290 280,310 C260,330 250,350 240,370 C220,390 190,400 170,390 C150,380 130,360 120,340 C110,320 100,300 90,280 C80,260 70,240 70,220 C70,200 80,180 90,160 C100,140 120,130 140,120 C160,110 180,90 190,70 C200,50 210,40 225,50 Z"
          fill="#ffffff"
        />
      </mask>
      
      {/* Masked Data Dot Grid */}
      <rect width="400" height="450" fill="url(#dotGrid)" mask="url(#continentMask)" />

      {/* Main outer boundary neon-glowing outline of Africa */}
      <motion.path
        d="M225,50 C240,60 250,80 255,100 C270,110 290,120 310,125 C330,130 350,150 355,170 C360,200 350,230 330,250 C310,270 300,290 280,310 C260,330 250,350 240,370 C220,390 190,400 170,390 C150,380 130,360 120,340 C110,320 100,300 90,280 C80,260 70,240 70,220 C70,200 80,180 90,160 C100,140 120,130 140,120 C160,110 180,90 190,70 C200,50 210,40 225,50 Z"
        fill="none"
        stroke="url(#africaGlowGrad)"
        strokeWidth="3"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* Secondary offset dotted outline for visual depth */}
      <motion.path
        d="M225,50 C240,60 250,80 255,100 C270,110 290,120 310,125 C330,130 350,150 355,170 C360,200 350,230 330,250 C310,270 300,290 280,310 C260,330 250,350 240,370 C220,390 190,400 170,390 C150,380 130,360 120,340 C110,320 100,300 90,280 C80,260 70,240 70,220 C70,200 80,180 90,160 C100,140 120,130 140,120 C160,110 180,90 190,70 C200,50 210,40 225,50 Z"
        fill="none"
        stroke="#06b6d4"
        strokeWidth="1"
        strokeDasharray="4 8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.8, duration: 1.2 }}
      />

      {/* Connection Lines (Network Mesh) */}
      <g>
        {connections.map(([from, to], idx) => {
          const fromNode = nodes.find(n => n.id === from);
          const toNode = nodes.find(n => n.id === to);
          if (!fromNode || !toNode) return null;
          return (
            <motion.line
              key={idx}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="#06b6d4"
              strokeWidth="0.8"
              strokeOpacity="0.25"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, delay: 0.3 + idx * 0.04 }}
            />
          );
        })}
      </g>

      {/* Interconnected Neural Nodes (Glowing circles and dots) */}
      <g>
        {nodes.map(node => (
          <g key={node.id}>
            {/* Soft pulsing ambient glow */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size * 2}
              fill="#0ea5e9"
              fillOpacity="0.15"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.15, 0.35, 0.15]
              }}
              transition={{
                duration: 2.5 + (node.id % 3),
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Bright core dot */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size / 2}
              fill="#ffffff"
            />
          </g>
        ))}
      </g>
    </svg>
  );
};

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#020b16]">
      {/* Sophisticated gradient background with grid overlay */}
      <div className="absolute inset-0 z-0">
        {/* Ambient glow patches */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-teal-500/10 rounded-full blur-[110px] pointer-events-none" />
        
        {/* Fine background grid */}
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:36px_36px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Wording and actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-left"
          >
            {/* ANR Top Badge */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#06b6d4]">
                African Neurodata Research Lab (ANR)
              </span>
              <div className="h-[2px] w-12 bg-gradient-to-r from-[#06b6d4] to-[#f59e0b]" />
            </div>

            {/* Custom Styled Header */}
            <h1 className="text-[40px] sm:text-[50px] lg:text-[62px] font-bold text-white mb-6 leading-[1.08] tracking-tight">
              Advancing ethical,
              <br />
              reproducible
              <br />
              <span className="text-[#06b6d4]">brain </span>
              <span className="text-[#86efac]">data </span>
              <span className="text-[#f59e0b]">science</span>
              <br />
              in Africa
            </h1>

            {/* Redesigned Descriptive Copy */}
            <p className="text-base sm:text-lg text-gray-300 mb-9 leading-relaxed max-w-xl">
              We develop open, reproducible, and culturally grounded approaches to neuroimaging and brain research that empower African data and advance global neuroscience.
            </p>

            {/* Button Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#research"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all shadow-[0_4px_20px_rgba(6,182,212,0.25)] hover:shadow-[0_4px_25px_rgba(6,182,212,0.4)] transform hover:-translate-y-0.5"
              >
                <Brain className="w-5 h-5 text-white/90" />
                Explore Our Research
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event('open-contact-sidebar'))}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#031220]/45 hover:bg-[#031220]/80 backdrop-blur-sm text-white rounded-lg font-semibold transition-all border border-white/10 hover:border-white/20 transform hover:-translate-y-0.5"
              >
                <Users className="w-5 h-5 text-gray-300" />
                Collaborate With Us
              </button>
            </div>

            {/* Lock/Unlock characteristics sub-row */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-400">
              <Database className="w-4 h-4 text-cyan-400" />
              <span>Open Science. FAIR Data. <span className="text-cyan-400 font-medium">African Centred.</span></span>
            </div>
          </motion.div>

          {/* Right Column: Visual illustration with background map */}
          <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[480px]">
            {/* Animated SVG wireframe of Africa map */}
            <AfricaWireframeSVG />

            {/* Scientist graphic overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative z-10 w-full max-w-[520px]"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <img
                  src="/assets/hero_image-removebg-preview.png"
                  alt="Researcher working with neuroimaging brain scans at dual-monitors setup"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(6,182,212,0.2)]"
                />
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Bottom 4-Column Stats Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 sm:mt-24 bg-[#031220]/40 backdrop-blur-md rounded-2xl border border-white/10 p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y md:divide-y-0 lg:divide-y-0 lg:divide-x divide-white/10">
            
            {/* Stat 1: Open & FAIR Data */}
            <div className="flex items-start gap-4 pb-6 md:pb-0 lg:pb-0 lg:pr-6">
              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">Open & FAIR Data</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Building accessible, citable African brain datasets.
                </p>
              </div>
            </div>

            {/* Stat 2: Researchers Mentored */}
            <div className="flex items-start gap-4 py-6 md:py-0 lg:py-0 lg:px-8">
              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 shrink-0">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-extrabold text-white leading-none mb-1">200+</div>
                <h4 className="text-sm font-semibold text-gray-300 mb-1">Researchers Mentored</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Training the next generation in neuroimaging.
                </p>
              </div>
            </div>

            {/* Stat 3: Publications */}
            <div className="flex items-start gap-4 py-6 md:py-0 lg:py-0 lg:px-8">
              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-extrabold text-white leading-none mb-1">15+</div>
                <h4 className="text-sm font-semibold text-gray-300 mb-1">Publications</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  High-impact research on the African brain.
                </p>
              </div>
            </div>

            {/* Stat 4: African-Centred */}
            <div className="flex items-start gap-4 pt-6 md:pt-0 lg:pt-0 lg:pl-8">
              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">African-Centred</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Solutions grounded in local context, made for global impact.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
