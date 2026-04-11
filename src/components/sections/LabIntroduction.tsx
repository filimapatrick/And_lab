import { motion } from 'framer-motion';
import { Brain, Database, Network } from 'lucide-react';

export default function LabIntroduction() {
    const highlights = [
        {
            icon: Network,
            title: 'Collaborative Network',
            description: 'Locally led, globally connected research across African and international partners.',
        },
        {
            icon: Database,
            title: 'Open & Reproducible Science',
            description: 'Developing open, reproducible, and culturally grounded approaches to brain research.',
        },
     
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-slate-50 to-cyan-50/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-35" />
            <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-35" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-8">About ANR Lab</h2>

                        <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light">
                            <span className="font-semibold text-cyan-700">The African NeuroData Research Lab (ANR)</span> is a research laboratory based in Africa and dedicated to advancing neuroimaging, brain data science and responsible data governance through <span className="italic text-slate-600">locally led, globally connected research</span>.
                        </p>

                        <p className="mt-8 text-xl text-slate-700 leading-relaxed">
                            The lab develops open, reproducible, and culturally grounded approaches to brain research that address neuropsychiatric and neurological challenges relevant to African populations.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="grid sm:grid-cols-2 gap-6"
                    >
                        {highlights.map((item) => (
                            <article
                                key={item.title}
                                className="rounded-3xl border border-cyan-100 bg-white/95 shadow-lg shadow-slate-200/50 p-8 sm:col-span-2"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-100 to-teal-100 text-cyan-700 flex items-center justify-center mb-5">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-4xl font-bold tracking-tight text-slate-900 mb-3 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-slate-700 text-xl leading-relaxed">{item.description}</p>
                            </article>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
