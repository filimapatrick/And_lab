import NewsUpdates from '../components/sections/NewsUpdates';
import SEO from '../components/SEO';

export default function NewsPage() {
    return (
        <>
            <SEO
                title="News and Updates | ANR Lab"
                description="Stay updated with ANR Lab news, events, milestones, and ongoing neuroscience and brain data science activities."
                path="/news"
            />
            <h1 className="sr-only">ANR Lab News and Updates</h1>
            <NewsUpdates />
        </>
    );
}
