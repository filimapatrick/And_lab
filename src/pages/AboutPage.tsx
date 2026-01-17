import About from '../components/sections/About';
import MissionVisionValues from '../components/sections/MissionVisionValues';
import EthicsGovernance from '../components/sections/EthicsGovernance';
import FundingSupport from '../components/sections/FundingSupport';
import Team from '../components/sections/Team';

export default function AboutPage() {
    return (
        <>
            <About />
            <MissionVisionValues />
            <EthicsGovernance />
            <FundingSupport />
            <Team />
        </>
    );
}
