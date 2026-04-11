import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { CalendarDays, Check, Handshake, Landmark, Send } from 'lucide-react';
import { motion } from 'framer-motion';

type SubmitStatus = {
  type: 'success' | 'error';
  message: string;
};

export default function FundingSupport() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<SubmitStatus | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const opportunities = [
  
    {
      icon: Landmark,
      title: 'Research Projects',
      description:
        'Support ongoing neuroscience research projects led by African researchers across clinical and community settings.',
    },
    {
      icon: CalendarDays,
      title: 'Research Symposium',
      description:
        'Enable our annual symposium that brings together neuroscience researchers, students, and partners from across Africa.',
    },
    {
      icon: Handshake,
      title: 'Awareness Programs',
      description:
        'Fund outreach initiatives that promote neuroscience education and public engagement in underserved communities.',
    },
  ];

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);
    console.log('[FundingSupport] Submit clicked');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log('[FundingSupport] EmailJS config check', {
      hasServiceId: Boolean(serviceId),
      hasTemplateId: Boolean(templateId),
      hasPublicKey: Boolean(publicKey),
    });

    if (!serviceId || !templateId || !publicKey) {
      console.error('[FundingSupport] Missing EmailJS environment variables');
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
      organization: String(formData.get('organization') ?? ''),
      message: String(formData.get('message') ?? ''),
    };

    console.log('[FundingSupport] Sending payload', {
      name: templateParams.name,
      email: templateParams.email,
      organization: templateParams.organization,
      messageLength: templateParams.message.length,
    });

    try {
      setIsSending(true);
      console.log('[FundingSupport] Sending via EmailJS...');
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('[FundingSupport] EmailJS send success');
      setStatus({
        type: 'success',
        message: 'Your message have been successfully submitted. Thanks!',
      });
      setShowSuccessModal(true);
      form.reset();
    } catch (error) {
      console.error('[FundingSupport] EmailJS send failed', error);
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
              <p className="text-gray-600 mb-6">Your details have been successfully submitted. Thanks!</p>
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

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-cyan-50/40 to-teal-50/30">
        <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center justify-center gap-3 px-5 py-2 rounded-full bg-cyan-100 text-cyan-800 font-semibold mb-5 border border-cyan-200">
            <Send className="w-4 h-4" />
            <span>Support ANR Lab</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 text-center">
            Invest in African Neuroscience
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
            Join us in advancing neuroscience research and education across Africa through strategic funding and partnership.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Funding Opportunities</h3>
            <div className="space-y-4">
              {opportunities.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-cyan-100 bg-white/90 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
            className="rounded-2xl border border-cyan-100 bg-white p-7 sm:p-8 shadow-lg"
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Express Your Interest</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="support-name" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Full Name
                </label>
                <input
                  id="support-name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-cyan-200 bg-white px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                />
              </div>

              <div>
                <label htmlFor="support-email" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email Address
                </label>
                <input
                  id="support-email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-cyan-200 bg-white px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                />
              </div>

              <div>
                <label htmlFor="support-organization" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Organization
                </label>
                <input
                  id="support-organization"
                  name="organization"
                  type="text"
                  className="w-full rounded-lg border border-cyan-200 bg-white px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                />
              </div>

              <div>
                <label htmlFor="support-message" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Message
                </label>
                <textarea
                  id="support-message"
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-lg border border-cyan-200 bg-white px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-600 to-teal-600 px-6 py-3 text-white font-semibold shadow-md hover:from-cyan-700 hover:to-teal-700 disabled:cursor-not-allowed disabled:opacity-70 transition-colors"
              >
                {isSending ? 'Sending...' : 'Submit Interest'}
              </button>

              {status && (
                <p
                  className={`text-sm font-medium ${
                    status.type === 'success' ? 'text-cyan-700' : 'text-red-600'
                  }`}
                  role="status"
                >
                  {status.message}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
      </section>
    </>
  );
}
