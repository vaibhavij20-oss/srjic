import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Trophy, Award, Star } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Board Success",
    count: "100%",
    description: "Consistent pass rates with high division scores across board exams.",
  },
  {
    icon: Award,
    title: "Years of Excellence",
    count: "23+",
    description: "Nurturing generations of successful alumni in Jhunsi since 2003.",
  },
  {
    icon: Star,
    title: "Cultural & Youth Awards",
    count: "75+",
    description: "Distinguished positions in local, block, and district level events.",
  },
];

export default function Achievements() {
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
          <h2 className="text-sm font-semibold text-yellow-500 mb-2">ACHIEVEMENTS</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Celebrating Excellence
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our students consistently demonstrate diligence and character across academic benchmarks and local events
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center group"
            >
              <div className="bg-yellow-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                <achievement.icon className="w-8 h-8 text-gray-900" />
              </div>
              <h4 className="text-4xl font-bold text-yellow-500 mb-2">{achievement.count}</h4>
              <h5 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h5>
              <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            to="/achievements"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-8 py-4 rounded-xl transition"
          >
            View All Achievements
          </Link>
        </motion.div>
      </div>
    </section>
  );
}