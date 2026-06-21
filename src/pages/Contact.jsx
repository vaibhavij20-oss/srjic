import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const WEB3FORMS_ACCESS_KEY = "81e3cb35-0108-4796-871f-bfa55a666273";

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    stream: "General Inquiry",
    message: ""
  });

  const [status, setStatus] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState("");

  // Removed the ': React.ChangeEvent' type annotation
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Removed the ': React.FormEvent' type annotation
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.first_name || !formData.email || !formData.message) {
      setStatus("ERROR");
      setErrorMessage("Please fill out all required fields (First Name, Email, and Message).");
      return;
    }

    setStatus("SUBMITTING");

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New Contact Form Submission - ${formData.stream}`,
      from_name: "SRJIC Website",
      ...formData
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        setStatus("SUCCESS");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          stream: "General Inquiry",
          message: ""
        });
      } else {
        throw new Error(result.message || "Failed to submit web3forms API request.");
      }
    } catch (err) { 
      // Removed the ': unknown' type annotation
      setStatus("ERROR");
      const message = err instanceof Error ? err.message : "An unexpected transmission layout error occurred.";
      setErrorMessage(message);
    }
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-lg max-w-2xl mx-auto"
          >
            Get in touch with us for admission inquiries, campus appointments, or general details
          </motion.p>
        </div>
      </section>

      {/* Contact Workspace Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-400 p-3 rounded-xl flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Salig Ram Jaiswal Inter College<br />
                      Shanti Nagar, Chak Jhunsi<br />
                      Prayagraj, Uttar Pradesh, India - 211019
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-400 p-3 rounded-xl flex-shrink-0">
                    <Phone className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone Links</h3>
                    <p className="text-gray-600 leading-relaxed">
                      +91 94152 79839<br />
                      +91 94153 78178
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-400 p-3 rounded-xl flex-shrink-0">
                    <Mail className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600 leading-relaxed">
                     srjintercollege60@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-400 p-3 rounded-xl flex-shrink-0">
                    <Clock className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Monday - Saturday: 7:30 AM - 1:30 PM<br />
                      <span className="text-xs text-gray-400 font-medium">(Timings vary contextually across seasons)</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Fully Functional Web3Forms Form Layout */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-900 focus:ring-2 focus:ring-indigo-900/20 outline-none transition text-gray-900 bg-white"
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-900 focus:ring-2 focus:ring-indigo-900/20 outline-none transition text-gray-900 bg-white"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-900 focus:ring-2 focus:ring-indigo-900/20 outline-none transition text-gray-900 bg-white"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-900 focus:ring-2 focus:ring-indigo-900/20 outline-none transition text-gray-900 bg-white"
                    placeholder="Phone Number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Subject / Stream Intent
                  </label>
                  <select 
                    name="stream"
                    value={formData.stream}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-900 focus:ring-2 focus:ring-indigo-900/20 outline-none transition bg-white text-gray-900"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Admission Track (Primary / Middle)">Admission Track (Primary / Middle)</option>
                    <option value="High School Admission (Class 9-10)">High School Admission (Class 9-10)</option>
                    <option value="Intermediate Science Stream Track">Intermediate Science Stream Track</option>
                    <option value="Intermediate Arts Stream Track">Intermediate Arts Stream Track</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-900 focus:ring-2 focus:ring-indigo-900/20 outline-none transition resize-none text-gray-900 bg-white"
                    placeholder="Provide detailed query information here..."
                  />
                </div>

                <AnimatePresence mode="wait">
                  {status === "SUCCESS" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Inquiry submitted safely! The management group will reach out soon.</span>
                    </motion.div>
                  )}

                  {status === "ERROR" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-center gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={status === "SUBMITTING"}
                  className="w-full bg-yellow-400 hover:bg-yellow-300 disabled:bg-gray-200 text-gray-900 disabled:text-gray-400 font-semibold px-8 py-4 rounded-xl transition flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:cursor-not-allowed"
                >
                  {status === "SUBMITTING" ? (
                    <>
                      <span>Sending Message...</span>
                      <Loader2 className="w-5 h-5 animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Embed Section */}
      {/* Map Embed Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Our Campus</h2>
            <div className="bg-white p-2 rounded-2xl shadow-md h-96 overflow-hidden border border-gray-200">
              <iframe
                title="Salig Ram Jaiswal Inter College Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.5997580047197!2d81.9242371!3d25.418204799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39854b004e27dfbf%3A0x114e7f417d2dca17!2sSALIG%20RAM%20JAISWAL%20INTER%20COLLEGE!5e0!3m2!1sen!2sin!4v1782057452164!5m2!1sen!2sin"
                className="w-full h-full rounded-xl border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}