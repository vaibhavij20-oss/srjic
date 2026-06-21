import { motion } from "framer-motion";
import { Building2, Monitor, FlaskConical, Trophy, ShieldAlert, Store, Landmark, BookOpen } from "lucide-react";

export default function Facilities() {
  const facilities = [
    {
      icon: Building2,
      title: "Optimized Classrooms",
      description: "Spacious, well-ventilated, and structured classrooms configured carefully to support interactive learning experiences.",
    },
    {
      icon: Building2, // Reusing modern layout identifier
      title: "Smart Classrooms",
      description: "Equipped with digital presentation screens and multimedia resources to help illustrate complex educational topics visually.",
    },
    {
      icon: Monitor,
      title: "Computer Labs",
      description: "Modern desktop systems allowing students to develop essential technical skills and digital literacy in a hands-on environment.",
    },
    {
      icon: FlaskConical,
      title: "Practical Science Labs",
      description: "Dedicated lab areas supporting practical boards learning across foundational Physics, Chemistry, and Biology.",
    },
    {
      icon: Trophy,
      title: "Playground & Sports",
      description: "Open-air campus ground facilities and equipment providing healthy active tracking, sports, and outdoor activities.",
    },
    {
      icon: ShieldAlert,
      title: "Safe Campus Layout",
      description: "Ensuring student peace of mind with disciplined staff, strict security arrangements, and standard premise safety protocols.",
    },
    {
      icon: Store,
      title: "Campus Tuck Shop",
      description: "An on-site counter offering clean refreshments, light snacks, and essential school supplies for midday convenience.",
    },
    {
      icon: Landmark,
      title: "Cultural & Assembly Stage",
      description: "An open front platform utilized for hosting routine morning prayers, assemblies, and traditional cultural festivals.",
    },
    {
      icon: BookOpen,
      title: "Dual-Medium Support",
      description: "Classroom resources carefully mapped to guide students smoothly across both English and Hindi medium curriculums.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our Facilities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-lg max-w-2xl mx-auto"
          >
            Practical, well-maintained institutional infrastructure built to foster accessible and quality growth
          </motion.p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition group"
              >
                <div className="bg-yellow-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <facility.icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Campus Standards</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Our campus setup is managed precisely to deliver a clean, highly disciplined, and focus-driven environment for learning. We prioritize foundational safety, standard hygiene, and systematic routine tracking.
              </p>
              <p>
                True to the school's core conviction—making quality schooling affordable for everyone—the campus facilities are strategically maintained to give parents premium value and students optimal resources at a structured low fee.
              </p>
              <p>
                All resources are continually reviewed by dedicated administrative support staff, keeping every department orderly and running in peak shape for our students' daily convenience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}