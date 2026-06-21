import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, ArrowRight } from "lucide-react";

const programs = [
  {
    level: "Primary Block",
    classes: "Class 1 - Class 5",
    description: "Building strong foundational skills in reading, writing, and arithmetic with multi-lingual confidence.",
    color: "from-blue-400 to-blue-600",
  },
  {
    level: "Middle School",
    classes: "Class 6 - Class 8",
    description: "Expanding academic perspectives under the structured, state-approved NCERT curriculum guidelines.",
    color: "from-green-400 to-green-600",
  },
  {
    level: "Secondary Block",
    classes: "Class 9 - Class 10",
    description: "Rigorous preparation for High School Board Examinations with comprehensive continuous assessments.",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    level: "Senior Secondary",
    classes: "Class 11 - Class 12",
    description: "Specialized intermediate board streams focused on competitive future fields and careers.",
    color: "from-purple-400 to-purple-600",
  },
];

export default function Academics() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-yellow-500 mb-2">ACADEMICS</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Academic Programs
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Following the NCERT pattern in both English and Hindi mediums to ensure excellent growth at every grade level.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg group"
            >
              <div className={`bg-gradient-to-br ${program.color} p-6 text-white`}>
                <GraduationCap className="w-10 h-10 mb-3" />
                <h4 className="text-xl font-bold">{program.level}</h4>
                <p className="text-white/80 text-sm">{program.classes}</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm">{program.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Senior Secondary (Intermediate) Streams
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Science Stream</h5>
                    <p className="text-gray-600 text-sm">
                      Physics, Chemistry, Mathematics, Biology, and core Language subjects mapped for professional engineering and medical track readiness.
                    </p>
                  </div>
                </div>
               
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Arts & Humanities Stream</h5>
                    <p className="text-gray-600 text-sm">
                      Comprehensive foundation courses covering regional subjects, History, Civic structures, and advanced language paths.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link
                to="/academics"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-8 py-4 rounded-xl transition"
              >
                View Detailed Curriculum
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}