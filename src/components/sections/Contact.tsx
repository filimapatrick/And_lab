import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Globe, Mail, Check } from 'lucide-react';

type SubmitStatus = {
  type: 'success' | 'error';
  message: string;
};

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<SubmitStatus | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);
    console.log('[Contact] Submit clicked');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log('[Contact] EmailJS config check', {
      hasServiceId: Boolean(serviceId),
      hasTemplateId: Boolean(templateId),
      hasPublicKey: Boolean(publicKey),
    });

    if (!serviceId || !templateId || !publicKey) {
      console.error('[Contact] Missing EmailJS environment variables');
      setStatus({
        type: 'error',
        message: 'Email service is not configured yet.',
      });
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const templateParams = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      subject: String(formData.get('subject') ?? ''),
      message: String(formData.get('message') ?? ''),
    };

    console.log('[Contact] Sending payload', {
      name: templateParams.name,
      email: templateParams.email,
      subject: templateParams.subject,
      messageLength: templateParams.message.length,
    });

    try {
      setIsSending(true);
      console.log('[Contact] Sending via EmailJS...');
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('[Contact] EmailJS send success');
      setStatus({
        type: 'success',
        message: 'Your message have been successfully submitted. Thanks!',
      });
      setShowSuccessModal(true);
      form.reset();
    } catch (error) {
      console.error('[Contact] EmailJS send failed', error);
      setStatus({
        type: 'error',
        message: 'Failed to send your message. Please try again.',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {showSuccessModal && (
        <>
          <div className="fixed inset-0 bg-black/50 z-[110]" onClick={() => setShowSuccessModal(false)} />
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center">
                  <Check className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-6">Your message have been successfully submitted. Thanks!</p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full rounded-lg bg-cyan-600 px-6 py-3 text-white font-semibold hover:bg-cyan-700 transition-colors"
              >
                OK
              </button>
            </div>
          </div>
        </>
      )}

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 text-center">Contact</h2>
        <div className="bg-gradient-to-br from-slate-900 via-sky-900 to-cyan-900 rounded-2xl p-10 shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-6">African NeuroData Research Lab</h3>
          <p className="text-lg text-slate-200 mb-8">University of Port Harcourt, Nigeria</p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-cyan-400" />
              <a href="mailto:anrlab.ng@gmail.com" className="text-lg text-slate-200 hover:text-cyan-300 transition-colors">
               anrlab.ng@gmail.com 
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="w-6 h-6 text-cyan-400" />
              <a href="https://africanneurodataresearch.org" className="text-lg text-slate-200 hover:text-cyan-300 transition-colors">
                africanneurodataresearch.org
              </a>
            </div>
          </div>

          <p className="text-slate-200 text-lg leading-relaxed">
            Interested in collaborating, training, or joining the lab?<br />
            Get in touch—we'd love to hear from you.
          </p>

          <form className="mt-10 space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-slate-200 mb-1">
                  Full Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-slate-200 mb-1">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-sm font-medium text-slate-200 mb-1">
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                required
                className="w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                placeholder="Subject"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-slate-200 mb-1">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                className="w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                placeholder="Write your message"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="inline-flex items-center justify-center rounded-lg bg-cyan-600 px-6 py-3 text-white font-semibold hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-70 transition-colors"
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>

            {status && (
              <p
                className={`text-sm font-medium ${
                  status.type === 'success' ? 'text-emerald-300' : 'text-red-400'
                }`}
                role="status"
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
    </>
  );
}
