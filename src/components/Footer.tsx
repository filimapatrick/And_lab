import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
    const quickLinks = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'collaborations', href: '/collaborations' },
        { label: 'Publications', href: '/publications' },
        { label: 'News', href: '/news' },
       
    ];

    const socialLinks = [
        { label: 'Twitter', href: 'https://x.com', icon: Twitter },
        { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
        { label: 'Facebook', href: 'https://facebook.com', icon: Facebook },
        { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
    ];

    return (
        <footer className="bg-gradient-to-br from-slate-900 via-sky-900 to-cyan-900 text-white py-14 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <a href="/" className="inline-flex items-center gap-3 mb-4">
                            <img src="/assets/logo.png" alt="ANR Lab logo" className="h-14 w-14 rounded-xl object-contain bg-white/90 p-1" />
                            <span className="font-bold text-lg leading-tight">African NeuroData Research Lab</span>
                        </a>
                        <p className="text-slate-200 leading-relaxed">
                            Advancing neuroimaging, brain data science, and responsible data governance through locally led, globally connected research.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-slate-200 hover:text-cyan-300 transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2 text-slate-200">
                            <li>info@anrlab.org</li>
                            <li>University of Port Harcourt</li>
                            <li>Port Harcourt, Nigeria</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={social.label}
                                    className="w-11 h-11 rounded-full bg-white/10 border border-white/20 text-cyan-200 hover:text-white hover:bg-cyan-500/40 transition-colors flex items-center justify-center"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/15 text-center text-slate-300">
                    © {new Date().getFullYear()} ANR Lab. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
