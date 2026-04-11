import { motion } from 'framer-motion';
import Collaborations from '../components/sections/Collaborations';
import TrainingMentorship from '../components/sections/TrainingMentorship';
import SEO from '../components/SEO';

export default function CollaborationsPage() {
    return (
        <>
            <SEO
                title="Collaborations and Training | ANR Lab"
                description="Explore ANR Lab collaborations, partnership opportunities, and mentorship initiatives that strengthen neuroscience capacity in Africa."
                path="/collaborations"
            />
            <h1 className="sr-only">ANR Lab Collaborations and Training</h1>

            {/* Hero Section */}
            <section className="relative overflow-hidden py-32 px-4 sm:px-6 lg:px-8 min-h-[500px] flex items-center justify-center bg-gradient-to-br from-slate-900 via-sky-900 to-cyan-900">
                <div className="absolute inset-0 opacity-15">
                    <img
                        src="/assets/logo.png"
                        alt="ANR Lab background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-sky-900/60 to-cyan-900/70" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center max-w-3xl"
                >
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                        Collaborations
                    </h1>
                    <p className="text-xl sm:text-2xl text-cyan-100 leading-relaxed">
                        Building partnerships and strengthening neuroscience capacity across Africa
                    </p>
                </motion.div>
            </section>

            <Collaborations />
            <TrainingMentorship />
        </>
    );
}
