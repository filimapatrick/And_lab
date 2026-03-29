import Publications from '../components/sections/Publications';
import SEO from '../components/SEO';

export default function PublicationsPage() {
    return (
        <>
            <SEO
                title="Publications | ANR Lab Research Outputs"
                description="Read selected ANR Lab publications and research outputs in neuroimaging, data governance, and brain data science in African contexts."
                path="/publications"
            />
            <h1 className="sr-only">ANR Lab Publications</h1>
            <Publications />
        </>
    );
}
