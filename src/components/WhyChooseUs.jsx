import { motion } from "framer-motion";
import { Award, BookOpen, Users, Target, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Academic Excellence",
    description: "Consistently maintaining high board results with specialized focus on UP Board examinations.",
  },
  {
    icon: BookOpen,
    title: "Dual-Medium Curriculum",
    description: "Offering both English and Hindi medium options under the structured NCERT Pattern.",
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "A dedicated team of 25 to 35+ qualified educators committed to personal mentorship.",
  },
  {
    icon: Target,
    title: "Affordable Education",
    description: "Staying true to our motto: providing premier quality schooling at an affordable, low fee.",
  },
  {
    icon: Shield,
    title: "Strong Foundation",
    description: "Over 24 years of excellence in Jhunsi, nurturing students from primary up to intermediate streams.",
  },
  {
    icon: Zap,
    title: "Holistic Growth",
    description: "Balancing strict discipline and academic core values with student growth and confidence.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-yellow-500 mb-2">WHY CHOOSE US</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Makes Us Different
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover why families across Prayagraj trust us with their children's future and education
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition group"
            >
              <div className="bg-yellow-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <feature.icon className="w-8 h-8 text-gray-900" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}