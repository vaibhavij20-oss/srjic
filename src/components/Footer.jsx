import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-yellow-400 p-2 rounded-xl">
                <GraduationCap className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">Salig Ram Jaiswal</h3>
                <p className="text-sm text-gray-500">Inter College (S.R.J.I.C.)</p>
              </div>
            </div>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed">
              Empowering young minds through quality, values-driven education, discipline, and accessibility since 2003.
            </p>
            <div className="flex gap-4">
              <a href="mailto:info@srjic.org" className="bg-gray-800 hover:bg-yellow-400 hover:text-gray-900 p-3 rounded-lg transition" aria-label="Email us">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+919415279839" className="bg-gray-800 hover:bg-yellow-400 hover:text-gray-900 p-3 rounded-lg transition" aria-label="Call us">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-500 hover:text-yellow-400 transition text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-gray-500 hover:text-yellow-400 transition text-sm">
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-gray-500 hover:text-yellow-400 transition text-sm">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-gray-500 hover:text-yellow-400 transition text-sm">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-500 hover:text-yellow-400 transition text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-bold text-lg mb-6">Information</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/notices" className="text-gray-500 hover:text-yellow-400 transition text-sm">
                  Notices & Circulars
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="text-gray-500 hover:text-yellow-400 transition text-sm">
                  Achievements
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-500 hover:text-yellow-400 transition text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-500 hover:text-yellow-400 transition text-sm">
                  School Directory
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-gray-500 leading-relaxed">
                  Shanti Nagar, Chak Jhunsi, Prayagraj, Uttar Pradesh - 211019
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-500 flex flex-col gap-1">
                  <span>+91 99191 94781</span>
                  <span>+91 94152 79839</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-500"> srjintercollege60@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Salig Ram Jaiswal Inter College. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="#" className="text-gray-500 hover:text-yellow-400 transition">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-500 hover:text-yellow-400 transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}