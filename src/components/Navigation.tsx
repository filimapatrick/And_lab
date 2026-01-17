import { useState } from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    const linkClass = (path: string) => {
        return isActive(path)
            ? "text-cyan-600 font-semibold"
            : "text-gray-600 hover:text-cyan-600 transition-colors";
    };

    const mobileLinkClass = (path: string) => {
        return `block px-3 py-2 rounded-md text-base font-medium ${isActive(path)
                ? "text-cyan-600 bg-cyan-50"
                : "text-gray-700 hover:text-cyan-600 hover:bg-gray-50"
            }`;
    };

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
                        <Brain className="w-8 h-8 text-cyan-600" />
                        <span className="font-bold text-xl text-gray-900">AND Lab</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className={linkClass("/")}>Home</Link>
                        <Link to="/about" className={linkClass("/about")}>About</Link>
                        <Link to="/collaborations" className={linkClass("/collaborations")}>Collaborator</Link>
                        <Link to="/publications" className={linkClass("/publications")}>Publications</Link>
                        <Link to="/news" className={linkClass("/news")}>News</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-200">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" className={mobileLinkClass("/")} onClick={() => setIsOpen(false)}>Home</Link>
                        <Link to="/about" className={mobileLinkClass("/about")} onClick={() => setIsOpen(false)}>About</Link>
                        <Link to="/collaborations" className={mobileLinkClass("/collaborations")} onClick={() => setIsOpen(false)}>Collaborator</Link>
                        <Link to="/publications" className={mobileLinkClass("/publications")} onClick={() => setIsOpen(false)}>Publications</Link>
                        <Link to="/news" className={mobileLinkClass("/news")} onClick={() => setIsOpen(false)}>News</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
