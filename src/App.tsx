import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CollaborationsPage from './pages/CollaborationsPage';
import PublicationsPage from './pages/PublicationsPage';
import NewsPage from './pages/NewsPage';

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
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
