import { motion } from "framer-motion";
import { Calendar, FileText, Download } from "lucide-react";

const notices = [
  {
    type: "Reopening",
    title: "School Reopening After Summer Vacation",
    date: "2026-06-21",
    description: "Dear Parents and Students, summer vacations are concluding. The school will reopen on July 1, 2026. Students must complete their re-registrations, holiday homework, and keep their text books and stationery ready.",
    urgent: true,
  },
  {
    type: "Academic",
    title: "Mandatory Submission of Holiday Homework",
    date: "2026-05-25",
    description: "All students are notified that Holiday Homework has been shared in respective groups. Submission is mandatory as marks will directly influence Half-Yearly Examinations and Practical Assessments.",
    urgent: true,
  },
  {
    type: "PTM",
    title: "Parent-Teacher Meeting (PTM) Scheduled",
    date: "2026-05-19",
    description: "A Parent-Teacher Meeting is scheduled for May 24 (Sunday) from 9:00 AM to 11:00 AM. All parents are requested to attend to discuss academic progress and critical institutional schedules.",
    urgent: false,
  },
  {
    type: "Holiday",
    title: "Official Declaration of Summer Vacation",
    date: "2026-05-20",
    description: "Summer vacations for all blocks commence on May 21. Students must complete the assigned homework and remain safe. Parents are reminded to attend the PTM scheduled on May 24.",
    urgent: false,
  },
];

// Cleaned up array tracking relative public subfolders securely
const officialDownloads = [
  { name: "Admission Registration Form", subPath: "assets/admissionform.pdf", fileName: "admissionform.pdf" },
  { name: "Fee Structure Guide (All Streams)", subPath: "assets/fee.pdf", fileName: "fee.pdf" },
  { name: "Campus Rules & Regulations Handbook", subPath: "assets/rules.pdf", fileName: "rules.pdf" },
];

export default function Notices() {
  // Safe calculation helper for root level directory assets
  const getAssetUrl = (subPath) => {
    const baseUrl = import.meta.env.BASE_URL || "/";
    // Cleans double slash combinations safely
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
            Notice Board
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-lg max-w-2xl mx-auto"
          >
            Stay informed with the latest official announcements and circulars from SRJ Inter College
          </motion.p>
        </div>
      </section>

      {/* Notices List */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {notices.map((notice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-2xl border-l-4 border-indigo-900 hover:shadow-lg transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {notice.urgent && (
                        <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold animate-pulse">
                          Urgent
                        </span>
                      )}
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-semibold">
                        {notice.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      {new Date(notice.date).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'short', 
                        year: 'numeric' 
                      })}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{notice.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{notice.description}</p>
                </div>

                <div className="flex items-center gap-2 text-indigo-950 text-sm font-semibold mt-2 cursor-pointer w-fit group">
                  <FileText className="w-4 h-4 text-yellow-500" />
                  <span className="group-hover:underline">By Order of Management</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Download Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Official Downloads</h2>
            <div className="space-y-4">
              {officialDownloads.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-4 rounded-xl flex items-center justify-between hover:shadow-md transition border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-yellow-500" />
                    <span className="font-semibold text-gray-900 text-sm md:text-base">{item.name}</span>
                  </div>
                  
                  {/* Utilizes computed url layout to bypass index router mapping */}
                  <a
                    href={getAssetUrl(item.subPath)}
                    download={item.fileName}
                    className="flex items-center gap-2 text-indigo-900 hover:text-indigo-800 font-semibold text-sm transition cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-yellow-500" />
                    <span>Download</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}