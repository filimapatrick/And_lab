import { Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Team() {
  const teamMembers = [
    {
      name: "Dr. Eberechi Wogu",
      role: "Principal Investigator",
      image: "/assets/team/Ebere.png"
    },
    {
      name: "Patrick Filima",
      role: "Graduate Student",
      image: "/assets/team/patrick.jpg"
    },
    {
      name: "Emmanuella Uchechi",
      role: "Research Assistant",
      image: "/assets/team/Uchechi.jpg"
    },
    {
      name: "Barisua Nsaanee",
      role: "Graduate Student",
      image: "/assets/team/Barisua.jpg"
    },
    {
      name: "Smart Oparaugo",
      role: "Research Assistant",
      image: "/assets/team/Smart.jpg"
    },
    {
      name: "Goodness Naabie",
      role: "Graduate Student",
      image: "/assets/team/goodness.jpg"
    }
  ];

  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-gray-100">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 + index * 0.08 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-3 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-64 w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="h-64 w-full flex items-center justify-center bg-gradient-to-br from-cyan-500 to-teal-500">
                      <span className="text-5xl font-bold text-white">
                        {member.name.split(' ').map((n) => n[0]).join('')}
                      </span>
                    </div>
                  )}

                  <button
                    type="button"
                    aria-label={`Share profile of ${member.name}`}
                    className="absolute right-3 bottom-3 w-9 h-9 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white flex items-center justify-center shadow-md shadow-cyan-500/30"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="px-3 pt-5 pb-4">
                  <h3 className="text-[1.35rem] font-bold tracking-tight text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-slate-600">{member.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
