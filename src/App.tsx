import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CollaborationsPage from './pages/CollaborationsPage';
import PublicationsPage from './pages/PublicationsPage';
import NewsPage from './pages/NewsPage';
import EventDetailPage from './pages/EventDetailPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/collaborations" element={<CollaborationsPage />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<EventDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
