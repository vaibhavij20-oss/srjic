import { motion } from "framer-motion";
import { GraduationCap, Users, Award, Target } from "lucide-react";

export default function About() {
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
            About Our School
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-lg max-w-2xl mx-auto italic font-medium"
          >
            "तमसो मा ज्योतिर्गमय" — Lead us from darkness to light
          </motion.p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History & Legacy</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Salig Ram Jaiswal Inter College (S.R.J. Inter College) was established in <strong>2003</strong> in 
                the educational hub of Jhunsi, Prayagraj. The institution was founded with a clear, noble 
                mission: to bridge the gap in quality schooling for families in the trans-Ganga region by providing 
                high-standard, accessible, and affordable modern education.
              </p>
              <p>
                Over the past two decades, we have continuously scaled up our academic horizons. To meet shifting 
                modern demands, the college seamlessly integrates <strong>both English and Hindi Medium instruction</strong>, 
                strictly adhering to the structured <strong>NCERT Pattern</strong> under the UP Board. 
              </p>
              <p>
                Today, our vibrant campus supports a thriving community of approximately <strong>800 to 1,200+ students</strong> across 
                primary, secondary, and senior intermediate blocks. Guided by a dedicated team of <strong>25 to 35+ qualified educators</strong>, 
                we ensure our students are fully equipped for higher university education and professional courses.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="bg-yellow-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide quality education that nurtures intellectual curiosity, critical thinking, 
                and character development. True to our foundational commitment, we ensure that every child 
                deserves the best education at an affordable low fee structure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="bg-yellow-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be a leading institution of excellence that empowers young minds with knowledge, skills, 
                and ethical values. We envision dispelling the darkness of ignorance, helping students bloom 
                like a lotus, and enabling them to contribute positively to society.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Academic Excellence", desc: "Consistently maintaining high state board standards through rigorous NCERT curriculum models." },
              { icon: Users, title: "Affordable Access", desc: "Standing firmly by our core founding principle: making comprehensive education achievable for all families." },
              { icon: GraduationCap, title: "Holistic Growth", desc: "Nurturing discipline, deep cultural values, and confidence alongside formal education paths." },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-yellow-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}