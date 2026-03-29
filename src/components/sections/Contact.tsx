import { Globe, Mail } from 'lucide-react';

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
              <a href="mailto:anrlab.ng@gmail.com" className="text-lg text-gray-800 hover:text-cyan-600 transition-colors">
               anrlab.ng@gmail.com 
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

          <form className="mt-10 space-y-5" onSubmit={(event) => event.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                placeholder="Subject"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                placeholder="Write your message"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-600 px-6 py-3 text-white font-semibold hover:bg-cyan-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
