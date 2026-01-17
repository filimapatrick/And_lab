import { Brain } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-3 mb-4 md:mb-0">
                        <Brain className="w-8 h-8 text-cyan-400" />
                        <span className="font-bold text-xl">African NeuroData Lab</span>
                    </div>
                    <p className="text-gray-400">
                        © 2024 AND Lab. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
