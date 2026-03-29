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
            <Collaborations />
            <TrainingMentorship />
        </>
    );
}
