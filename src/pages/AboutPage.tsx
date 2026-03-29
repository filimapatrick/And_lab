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
            <About />
            <MissionVisionValues />
            <EthicsGovernance />
            <FundingSupport />
            <Team />
        </>
    );
}
