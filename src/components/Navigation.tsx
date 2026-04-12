import { useEffect, useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Globe, Mail, Menu, X, Check } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/assets/logo.png';

type SubmitStatus = {
    type: 'success' | 'error';
    message: string;
};

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState<SubmitStatus | null>(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleOpenContact = () => setIsContactOpen(true);

        window.addEventListener('open-contact-sidebar', handleOpenContact);
        return () => {
            window.removeEventListener('open-contact-sidebar', handleOpenContact);
        };
    }, []);

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    const linkClass = (path: string) => {
        return isActive(path)
            ? "text-cyan-600 font-semibold"
            : "text-gray-600 hover:text-cyan-600 transition-colors";
    };

    const mobileLinkClass = (path: string) => {
        return `block px-3 py-2 rounded-md text-base font-medium ${isActive(path)
                ? "text-cyan-600 bg-cyan-50"
                : "text-gray-700 hover:text-cyan-600 hover:bg-gray-50"
            }`;
    };

    const handleSidebarSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus(null);
        console.log('[ContactSidebar] Submit clicked');

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        console.log('[ContactSidebar] EmailJS config check', {
            hasServiceId: Boolean(serviceId),
            hasTemplateId: Boolean(templateId),
            hasPublicKey: Boolean(publicKey),
        });

        if (!serviceId || !templateId || !publicKey) {
            console.error('[ContactSidebar] Missing EmailJS environment variables');
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

        console.log('[ContactSidebar] Sending payload', {
            name: templateParams.name,
            email: templateParams.email,
            subject: templateParams.subject,
            messageLength: templateParams.message.length,
        });

        try {
            setIsSending(true);
            console.log('[ContactSidebar] Sending via EmailJS...');
            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            console.log('[ContactSidebar] EmailJS send success');
            setStatus({
                type: 'success',
                message: 'Your message have been successfully submitted. Thanks!',
            });
            setShowSuccessModal(true);
            form.reset();
        } catch (error) {
            console.error('[ContactSidebar] EmailJS send failed', error);
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
                                onClick={() => {
                                    setShowSuccessModal(false);
                                    setIsContactOpen(false);
                                }}
                                className="w-full rounded-lg bg-cyan-600 px-6 py-3 text-white font-semibold hover:bg-cyan-700 transition-colors"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </>
            )}

            <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link to="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
                            <img src={logo} alt="ANR Lab Logo" className="w-32 h-38" />
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="/" className={linkClass("/")}>Home</Link>
                            <Link to="/about" className={linkClass("/about")}>About</Link>
                            <Link to="/collaborations" className={linkClass("/collaborations")}>Collaborator</Link>
                            <Link to="/publications" className={linkClass("/publications")}>Publications</Link>
                            <Link to="/news" className={linkClass("/news")}>News</Link>
                            <button
                                onClick={() => setIsContactOpen(true)}
                                className="text-gray-600 hover:text-cyan-600 transition-colors"
                            >
                                Contact
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? (
                                    <X className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Menu className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white border-b border-gray-200">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link to="/" className={mobileLinkClass("/")} onClick={() => setIsOpen(false)}>Home</Link>
                            <Link to="/about" className={mobileLinkClass("/about")} onClick={() => setIsOpen(false)}>About</Link>
                            <Link to="/collaborations" className={mobileLinkClass("/collaborations")} onClick={() => setIsOpen(false)}>Collaborator</Link>
                            <Link to="/publications" className={mobileLinkClass("/publications")} onClick={() => setIsOpen(false)}>Publications</Link>
                            <Link to="/news" className={mobileLinkClass("/news")} onClick={() => setIsOpen(false)}>News</Link>
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    setIsContactOpen(true);
                                }}
                                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50"
                            >
                                Contact
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Contact Sidebar */}
            {isContactOpen && (
                <>
                    <button
                        aria-label="Close contact sidebar"
                        onClick={() => setIsContactOpen(false)}
                        className="fixed inset-0 bg-black/50 z-[90]"
                    />
                    <aside className="fixed inset-y-0 right-0 w-full max-w-md overflow-y-auto border-l border-gray-200 bg-white shadow-2xl z-[100] p-6 sm:p-8">
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Contact</h2>
                            <button
                                onClick={() => setIsContactOpen(false)}
                                className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="space-y-6 text-gray-900">
                            <div>
                                <p className="text-xl font-semibold text-gray-900">African NeuroData Research Lab</p>
                                <p className="text-gray-600 mt-1">University of Port Harcourt, Nigeria</p>
                            </div>

                            <div className="space-y-3 rounded-xl border border-cyan-100 bg-cyan-50 p-4">
                                <a
                                    href="mailto:anrlab.ng@gmail.com"
                                    className="flex items-center gap-3 text-gray-700 hover:text-cyan-600 transition-colors"
                                >
                                    <Mail className="w-5 h-5 text-cyan-700" />
                                    <span>anrlab.ng@gmail.com </span>
                                </a>
                                <a
                                    href="https://africanneurodataresearch.org"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3 text-gray-700 hover:text-cyan-600 transition-colors"
                                >
                                    <Globe className="w-5 h-5 text-cyan-700" />
                                    <span>africanneurodataresearch.org</span>
                                </a>
                            </div>

                            <p className="text-gray-700 leading-relaxed">
                                Interested in collaborating, training, or joining the lab? Reach out and we will get back to you.
                            </p>

                            <form className="space-y-4" onSubmit={handleSidebarSubmit}>
                                <div>
                                    <label htmlFor="sidebar-contact-name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Full Name
                                    </label>
                                    <input
                                        id="sidebar-contact-name"
                                        name="name"
                                        type="text"
                                        required
                                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="sidebar-contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        id="sidebar-contact-email"
                                        name="email"
                                        type="email"
                                        required
                                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                                        placeholder="you@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="sidebar-contact-subject" className="block text-sm font-medium text-gray-700 mb-1">
                                        Subject
                                    </label>
                                    <input
                                        id="sidebar-contact-subject"
                                        name="subject"
                                        type="text"
                                        required
                                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                                        placeholder="How can we help?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="sidebar-contact-message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="sidebar-contact-message"
                                        name="message"
                                        rows={4}
                                        required
                                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                                        placeholder="Write your message here"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSending}
                                    className="w-full rounded-lg bg-cyan-600 px-4 py-2.5 text-white font-semibold hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-70 transition-colors"
                                >
                                    {isSending ? 'Sending...' : 'Send Message'}
                                </button>

                                {status && (
                                    <p
                                        className={`text-sm font-medium ${
                                            status.type === 'success' ? 'text-emerald-700' : 'text-red-600'
                                        }`}
                                        role="status"
                                    >
                                        {status.message}
                                    </p>
                                )}
                            </form>
                        </div>
                    </aside>
                </>
            )}
        </>
    );
}
