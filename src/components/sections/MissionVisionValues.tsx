import { motion } from 'framer-motion';

export default function MissionVisionValues() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To advance ethical, reproducible, and locally relevant neuroimaging and brain data science led from Africa.
            </p>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              A future where African researchers and communities lead the generation, governance, and application of brain data for public good.
            </p>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Core Values</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-cyan-600 mr-2">•</span>
                <span>Scientific rigor & reproducibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 mr-2">•</span>
                <span>Ethical responsibility & stewardship</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 mr-2">•</span>
                <span>Equity in global research</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 mr-2">•</span>
                <span>Capacity strengthening</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 mr-2">•</span>
                <span>Open science & transparency</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
