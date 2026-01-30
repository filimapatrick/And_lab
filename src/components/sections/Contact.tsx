import { Globe, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 text-center">Contact</h2>
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-10 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">African NeuroData Research Lab</h3>
          <p className="text-lg text-gray-700 mb-8">University of Port Harcourt, Nigeria</p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-cyan-600" />
              <a href="mailto:info@andlab.africa" className="text-lg text-gray-800 hover:text-cyan-600 transition-colors">
                info@andlab.africa
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="w-6 h-6 text-cyan-600" />
              <a href="https://www.andlab.africa" className="text-lg text-gray-800 hover:text-cyan-600 transition-colors">
                www.andlab.africa
              </a>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            Interested in collaborating, training, or joining the lab?<br />
            Get in touch—we'd love to hear from you.
          </p>
        </div>
      </div>
    </section>
  );
}
