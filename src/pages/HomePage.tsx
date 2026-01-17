import Hero from '../components/sections/Hero';
import LabIntroduction from '../components/sections/LabIntroduction';
import WhatWeDo from '../components/sections/WhatWeDo';
import ResearchAreas from '../components/sections/ResearchAreas';
import Projects from '../components/sections/Projects';

export default function HomePage() {
    return (
        <>
            <Hero />
            <LabIntroduction />
            <WhatWeDo />
            <ResearchAreas />
            <Projects />
        </>
    );
}
