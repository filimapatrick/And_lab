import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';

export default function Publications() {
  const publications = [
    {
      year: "2025",
      authors: "Wogu, E. and Filima, P.",
      title: "Assessment of Asymmetry in Thalamic Nuclei volume in Nigerian Parkinson's Disease Patients",
      journal: "Journal of Experimental and Clinical Anatomy",
      volume: "22(1):191-201",
      doi: "10.4314/jeca.v22i1.25",
      url: "https://doi.org/10.4314/jeca.v22i1.25"
    },
    {
      year: "2025",
      authors: "Eberechi Wogu, Patrick Filima, Bradley Caron, Daniel Deabler, Peer Herholz, Catherine Leal, Mohammed F. Mehboob, Sohmee Kim, Ananya Gosain, Alisha Flexwala, Soichi Hayashi, Simisola Akintoye, George Ogoh, Tawe Godwin, Damian Eke & Franco Pestilli",
      title: "A labeled Clinical-MRI dataset of Nigerian brains",
      journal: "Nature Scientific Data",
      volume: "12, 518, pp 1-9",
      doi: "10.1038/s41597-025-04743-0",
      url: "https://doi.org/10.1038/s41597-025-04743-0"
    },
    {
      year: "2025",
      authors: "Wogu Eberechi, Ogoh George, Filima Patrick, Nsaanee Barisua, Caron Bradley, Pestilli Franco, Eke Damian",
      title: "FAIR African brain data: challenges and opportunities",
      journal: "Frontiers in Neuroinformatics",
      volume: "Vol 19, pp 1-13",
      doi: "10.3389/fninf.2025.1530445",
      url: "https://www.frontiersin.org/journals/neuroinformatics/articles/10.3389/fninf.2025.1530445"
    },
    {
      year: "2024",
      authors: "Eberechi Wogu and Patrick Filima",
      title: "Thalamic Nuclei Morphometry and Handedness: Assessing Grey Matter Volume Differences in Left- and Right-Dominant Individuals",
      journal: "Nigerian Journal of Neuroscience",
      volume: "15(1):22-27",
      doi: null,
      url: null
    }
  ];

  return (
    <section id="publications" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-center">
            Publications and Outputs
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-16">
            Peer-reviewed publications, preprints, datasets, software tools, and policy-relevant outputs arising from lab research
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Selected Publications</h3>
        </motion.div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
                      {pub.year}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                    {pub.title}
                  </h4>

                  <p className="text-sm text-gray-600 mb-2">
                    {pub.authors}
                  </p>

                  <p className="text-sm text-gray-700 mb-2">
                    <span className="font-semibold italic">{pub.journal}</span>
                    {pub.volume && <span className="text-gray-600">. {pub.volume}</span>}
                  </p>

                  {pub.doi && (
                    <p className="text-sm text-gray-600">
                      DOI: <span className="font-mono">{pub.doi}</span>
                    </p>
                  )}
                </div>

                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-10 h-10 bg-indigo-100 hover:bg-indigo-200 rounded-lg flex items-center justify-center transition-colors group"
                    aria-label="View publication"
                  >
                    <ExternalLink className="w-5 h-5 text-indigo-600 group-hover:text-indigo-700" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
