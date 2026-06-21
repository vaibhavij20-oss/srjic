import { motion } from "framer-motion";
import { GraduationCap, CheckCircle, Download, FileText, Calendar, Clock } from "lucide-react";

export default function Admissions() {
  // Safe calculation helper for root level directory public assets
  const getAssetUrl = (subPath) => {
    const baseUrl = import.meta.env.BASE_URL || "/";
    return `${baseUrl.endsWith("/") ? baseUrl : baseUrl + "/"}${subPath}`;
  };

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
            Admissions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-lg max-w-2xl mx-auto"
          >
            Join our community of learners and achievers
          </motion.p>
        </div>
      </section>

      {/* Admission Info */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Admission Open</h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p>
                  Admissions are now open for the upcoming sessions for all classes from 
                  Nursery to Class 12. We invite parents to visit our campus and experience our 
                  learning environment firsthand.
                </p>
                <p>
                  Our admission process is transparent and merit-based. We believe in giving every 
                  child an opportunity to learn and grow in a nurturing environment.
                </p>
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-yellow-500" />
                  <span>State Board / Recognized Curriculum tracks</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-yellow-500" />
                  <span>Experienced and qualified faculty</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-yellow-500" />
                  <span>Modern infrastructure and facilities</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-yellow-500" />
                  <span>Focus on holistic development</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Calendar className="w-6 h-6 text-yellow-500" />
                  <div>
                    <p className="text-sm text-gray-500">Academic Cycle</p>
                    <p className="font-semibold text-gray-900">Annual Registration Open</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <GraduationCap className="w-6 h-6 text-yellow-500" />
                  <div>
                    <p className="text-sm text-gray-500">Classes Available</p>
                    <p className="font-semibold text-gray-900">Nursery to Class 12</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-yellow-500" />
                  <div>
                    <p className="text-sm text-gray-500">Processing Window</p>
                    <p className="font-semibold text-gray-900">Subject to seat matrix limits</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Admission Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Admission Process</h2>
            <div className="space-y-6">
              {[
                { step: "1", title: "Registration", desc: "Obtain the official registration form online or visit the campus office" },
                { step: "2", title: "Document Verification", desc: "Submit required certificates and identification for verification checks" },
                { step: "3", title: "Assessment", desc: "Students may be required to take a standard level test based on streaming requirements" },
                { step: "4", title: "Interaction", desc: "Parent and student interaction rounds with the administrative board" },
                { step: "5", title: "Admission Confirmation", desc: "Complete fee formalities to finalize enrollment allocation safely" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-900 font-bold">{item.step}</span>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Documents Required</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Birth Certificate",
                "Transfer Certificate (TC)",
                "Mark Sheets (Previous Class)",
                "Passport Size Photographs",
                "Valid Identification (Student & Parents)",
                "Address Proof",
                "Medical Fitness Certificate",
                "Caste Certificate (if applicable)",
              ].map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-4 rounded-xl flex items-center gap-3"
                >
                  <FileText className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-700">{doc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Us?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Take the first step towards quality education for your child. Download the blank registration form to get started.
            </p>
            
            {/* Direct download native anchor mapping to the public assets destination safely */}
            <a 
              href={getAssetUrl("assets/admissionform.pdf")}
              download="admissionform.pdf"
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-8 py-4 rounded-xl transition inline-flex items-center gap-2 mx-auto shadow-sm cursor-pointer"
            >
              <span>Download Registration Form</span>
              <Download className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}