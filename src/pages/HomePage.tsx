import Hero from '../components/sections/Hero';
import LabIntroduction from '../components/sections/LabIntroduction';
import WhatWeDo from '../components/sections/WhatWeDo';
import ResearchAreas from '../components/sections/ResearchAreas';
import Projects from '../components/sections/Projects';
import BrainAwarenessWeekGallery from '../components/sections/BrainAwarenessWeekGallery';
import FundingSupport from '../components/sections/FundingSupport';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const reveal = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.65, ease: 'easeOut' },
    viewport: { once: true, amount: 0.18 },
} as const;

export default function HomePage() {
    return (
        <>
            <SEO
                title="African NeuroData Research Lab (ANR) | Brain Data Science in Africa"
                description="ANR Lab advances ethical, reproducible neuroimaging and brain data science in Africa through research, collaboration, and training."
                path="/"
                includeOrganizationSchema
            />
            <Hero />
            <motion.div {...reveal}>
                <LabIntroduction />
            </motion.div>
            <motion.div {...reveal}>
                <WhatWeDo />
            </motion.div>
            <motion.div {...reveal}>
                <ResearchAreas />
            </motion.div>
            <motion.div {...reveal}>
                <Projects />
            </motion.div>
            <motion.div {...reveal}>
                <BrainAwarenessWeekGallery />
            </motion.div>
            <motion.div {...reveal}>
                <FundingSupport />
            </motion.div>
        </>
    );
}
