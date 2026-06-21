import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award } from "lucide-react";

export default function Academics() {
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
            Academics
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-lg max-w-2xl mx-auto"
          >
            Comprehensive academic programs from Class 1 to Intermediate (Class 12)
          </motion.p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Curriculum</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dual-medium structure (English and Hindi Medium) designed according to the UP Board NCERT Pattern
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { level: "Primary Block", classes: "Class 1 - Class 5", desc: "Foundational years focused on core reading, mathematics, and multilingual basics." },
              { level: "Middle School", classes: "Class 6 - Class 8", desc: "Expanding analytical mindsets under regional state board guidelines." },
              { level: "Secondary Block", classes: "Class 9 - Class 10", desc: "Comprehensive syllabus readiness aiming for top board examination performance." },
              { level: "Senior Secondary", classes: "Class 11 - Class 12", desc: "Specialized intermediate fields structured for professional and stream paths." },
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-2xl"
              >
                <GraduationCap className="w-10 h-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{program.level}</h3>
                <p className="text-yellow-600 font-semibold mb-2">{program.classes}</p>
                <p className="text-gray-600 text-sm">{program.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Streams */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Senior Secondary Streams</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Science Stream",
                subjects: "Physics, Chemistry, Mathematics, Biology, Hindi, and English Core language tracks.",
                color: "from-blue-400 to-blue-600"
              },
              {
                name: "Arts & Humanities Stream",
                subjects: "History, Civics, Geography, Regional Economics, Hindi, and literature tracks.",
                color: "from-purple-400 to-purple-600"
              },
            ].map((stream, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div className={`bg-gradient-to-br ${stream.color} p-6 text-white`}>
                  <BookOpen className="w-10 h-10 mb-3" />
                  <h3 className="text-2xl font-bold">{stream.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">{stream.subjects}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Teaching Methodology</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Our teaching methodology blends rich cultural values with up-to-date board standards. We focus on 
                a structured, comprehensive classroom approach that emphasizes deep topic clarity, logical execution, 
                and long-term memory integration.
              </p>
              <p>
                By providing dedicated test tracks, personalized review cycles, and routine assignment feedback, 
                our experienced teachers ensure every student gains the academic stamina and core understanding required 
                to clear state competitive levels and intermediate milestones comfortably.
              </p>
              <p>
                Our faculty stays deeply aligned with state board trends and standard pedagogical upgrades, keeping 
                our affordable school system tightly balanced between modern results and traditional focus.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}