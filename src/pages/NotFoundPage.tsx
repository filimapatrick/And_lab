import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <section className="min-h-[70vh] px-4 py-24 sm:px-6 lg:px-8">
      <SEO
        title="404 | Page Not Found | ANR Lab"
        description="The page you requested could not be found. Return to the ANR Lab homepage."
        path="/404"
        robots="noindex,follow"
      />

      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-700">Error 404</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
        <p className="mt-4 text-lg text-gray-600">
          The link may be broken or the page may have moved. Use the button below to return to the homepage.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-cyan-700"
        >
          Back to homepage
        </Link>
      </div>
    </section>
  );
}
