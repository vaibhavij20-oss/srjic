import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, ArrowRight, CheckCircle } from "lucide-react";

export default function AdmissionBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-semibold mb-6">
              <GraduationCap className="w-5 h-5" />
              <span>Admissions Open 2026-27</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Shape Your Child's Future
              <span className="text-yellow-400 block">With Quality Education</span>
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Join our community of learners and achievers in Jhunsi, Prayagraj. Admissions are now open for 
              Class 1 to Class 12 (Intermediate) for the academic year 2026-27.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-white">
                <CheckCircle className="w-5 h-5 text-yellow-400" />
                <span>UP Board Framework (NCERT Pattern)</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <CheckCircle className="w-5 h-5 text-yellow-400" />
                <span>Dual-Medium streams (English & Hindi Medium)</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <CheckCircle className="w-5 h-5 text-yellow-400" />
                <span>Dedicated, highly experienced teaching faculty</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <CheckCircle className="w-5 h-5 text-yellow-400" />
                <span>Quality institutional resources at a structured low fee</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/admissions"
                className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-8 py-4 rounded-xl transition flex items-center gap-2"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl transition border border-white/20"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Quick Information</h3>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-blue-200 text-sm mb-1">Academic Year</p>
                <p className="text-white font-semibold">2026-27</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-blue-200 text-sm mb-1">Classes Available</p>
                <p className="text-white font-semibold">Class 1 to Class 12 (Science & Arts)</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-blue-200 text-sm mb-1">Registration Process</p>
                <p className="text-white font-semibold">Offline (Campus Visit) & Online Inquiries</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-blue-200 text-sm mb-1">School Philosophy</p>
                <p className="text-white font-semibold">"Best education at a low fee structure"</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}