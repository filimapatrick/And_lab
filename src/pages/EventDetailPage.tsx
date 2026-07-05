import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { eventsData } from '../data/events';
import SEO from '../components/SEO';

export default function EventDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const event = eventsData.find((e) => e.id === id);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Event Not Found</h2>
        <p className="text-slate-600 mb-6">The news article or event you are looking for does not exist.</p>
        <Link
          to="/news"
          className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white rounded-full font-semibold hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-600/20"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to News
        </Link>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.summary,
        url: window.location.href,
      }).catch(console.error);
    } else {
      // Fallback
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <>
      <SEO
        title={`${event.title} | ANR Lab`}
        description={event.summary}
        path={`/news/${event.id}`}
      />

      <article className="min-h-screen bg-slate-50 pb-24">
        {/* Navigation/Back Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
          <button
            onClick={() => navigate('/news')}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-cyan-600 transition-colors font-medium group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to News & Updates
          </button>
        </div>

        {/* Hero Header Section */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              {event.title}
            </h1>

            {/* Metadata bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-y border-slate-200 py-4 mb-8">
              <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-slate-600">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4.5 h-4.5 text-cyan-600" />
                  {event.date}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4.5 h-4.5 text-cyan-600" />
                  {event.location}
                </span>
              </div>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-cyan-600 transition-colors px-3 py-1.5 rounded-lg hover:bg-slate-100"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>

            {/* Main Cover Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] bg-slate-200">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
            </div>
          </motion.div>
        </header>

        {/* Content Body */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-slate lg:prose-lg max-w-none text-slate-700 space-y-6"
          >
            {event.content.map((paragraph, index) => {
              // Check if paragraph starts with a heading pattern e.g., "Inspiring Curiosity Through Interactive Learning"
              const isHeading = paragraph.length < 80 && !paragraph.endsWith('.') && (
                paragraph.startsWith('Inspiring') || 
                paragraph.startsWith('Supporting') || 
                paragraph.startsWith('Building') || 
                paragraph.startsWith('Appreciation')
              );

              if (isHeading) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-slate-900 pt-6 pb-2 border-b border-slate-100">
                    {paragraph}
                  </h2>
                );
              }

              return (
                <p key={index} className="leading-relaxed text-lg text-justify">
                  {paragraph}
                </p>
              );
            })}
          </motion.div>

          {/* Photo Gallery (Rendered only if event has gallery images) */}
          {event.gallery && event.gallery.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-16 pt-12 border-t border-slate-200"
            >
              <h2 className="text-3xl font-extrabold text-slate-950 mb-8 tracking-tight">
                Photo Gallery
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {event.gallery.map((imgUrl, imgIdx) => (
                  <div
                    key={imgIdx}
                    className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] group bg-slate-100 cursor-pointer"
                  >
                    <img
                      src={imgUrl}
                      alt={`Gallery Highlight ${imgIdx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>

              {event.galleryCaption && (
                <div className="bg-gradient-to-br from-slate-900 to-sky-950 text-white rounded-2xl p-6 shadow-xl border border-slate-800">
                  <p className="text-sm font-medium leading-relaxed text-sky-100">
                    <span className="font-bold text-cyan-400 block mb-1 text-xs uppercase tracking-wider">
                      Photo Highlights Description
                    </span>
                    {event.galleryCaption}
                  </p>
                </div>
              )}
            </motion.section>
          )}
        </section>
      </article>
    </>
  );
}
