import { ArrowRight, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Team() {
  const principalInvestigator = {
    name: "Dr. Eberechi Wogu",
    title: "Principal Investigator",
    affiliation: "University of Port Harcourt, Nigeria",
    image: "/assets/team/Ebere.png",
    bio: "Leading innovative research in neuroimaging, brain data science, and ethical data governance across Africa"
  };

  const labMembers = [
    {
      name: "Patrick Filima",
      role: "Graduate Student",
      image: "/assets/team/patrick.jpg",
      focus: "Neuroimaging analysis and cloud-based brain data processing"
    },
    {
      name: "Emmanuella Uchechi",
      role: "Research Assistant",
      image: "/assets/team/Uchechi.jpg",
      focus: "Data governance and ethical research practices"
    },
    {
      name: "Barisua Nsaanee",
      role: "Graduate Student",
      image: "/assets/team/Barisua.jpg",
      focus: "Machine learning applications in neuroscience"
    },
    {
      name: "Smart Oparaugo",
      role: "Research Assistant",
      image: "/assets/team/Smart.jpg",
      focus: "Neuropsychiatric MRI studies and data analysis"
    },
    {
      name: "Goodness Naabie",
      role: "Graduate Student",
      image: "/assets/team/goodness.jpg",
      focus: "Brain mapping and reproducible research methods"
    }
  ];

  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-center">
            Our Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-16 rounded-full" />
        </motion.div>

        {/* Principal Investigator Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="grid md:grid-cols-3 gap-8 p-8">
              <div className="md:col-span-1 flex justify-center items-start">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                  <img
                    src={principalInvestigator.image}
                    alt={principalInvestigator.name}
                    className="relative w-64 h-64 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              <div className="md:col-span-2 flex flex-col justify-center">
                <div className="inline-block px-4 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-4 w-fit">
                  {principalInvestigator.title}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{principalInvestigator.name}</h3>
                <p className="text-xl text-cyan-600 font-semibold mb-4">{principalInvestigator.affiliation}</p>
                <p className="text-gray-700 leading-relaxed text-lg">{principalInvestigator.bio}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Lab Members Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl font-bold text-gray-900 mb-10 text-center"
          >
            Graduate Students & Research Assistants
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {labMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-500 to-rose-500">
                        <span className="text-6xl font-bold text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                    <p className="text-sm text-cyan-600 font-semibold mb-3">{member.role}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{member.focus}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Join the team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-2xl p-10 border border-cyan-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Join Our Team</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate researchers and students interested in neuroimaging and brain data science
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-cyan-500/50"
            >
              Get In Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
