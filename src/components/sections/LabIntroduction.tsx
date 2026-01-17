import { motion } from 'framer-motion';

export default function LabIntroduction() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-cyan-50 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-teal-50 rounded-full blur-3xl opacity-50" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-8 rounded-full" />

                    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light">
                        <span className="font-semibold text-cyan-700">The African NeuroData Lab</span> is a research laboratory based in Africa and dedicated to advancing neuroimaging, brain data science and responsible data governance through <span className="italic text-gray-600">locally led, globally connected research</span>.
                    </p>

                    <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
                        The lab develops open, reproducible, and culturally grounded approaches to brain research that address neuropsychiatric and neurological challenges relevant to African populations.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
