import { motion } from 'framer-motion';
import About from '../components/sections/About';
import MissionVisionValues from '../components/sections/MissionVisionValues';
import EthicsGovernance from '../components/sections/EthicsGovernance';
import FundingSupport from '../components/sections/FundingSupport';
import Team from '../components/sections/Team';
import SEO from '../components/SEO';

export default function AboutPage() {
    return (
        <>
            <SEO
                title="About ANR Lab | Mission, Values, Ethics, and Team"
                description="Learn about ANR Lab's mission, ethics and governance, funding support, and the team advancing neuroscience and brain data science in Africa."
                path="/about"
            />
            <h1 className="sr-only">About African NeuroData Research Lab</h1>

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
                        About Our Lab
                    </h1>
                    <p className="text-xl sm:text-2xl text-cyan-100 leading-relaxed">
                        Advancing ethical, reproducible neuroimaging and brain data science led from Africa
                    </p>
                </motion.div>
            </section>

            <About />
            <MissionVisionValues />
            <EthicsGovernance />
            <FundingSupport />
            <Team />
        </>
    );
}
