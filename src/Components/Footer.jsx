import { Heart, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { FaHashnode } from 'react-icons/fa6';
import { TbBrandLeetcode } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Sudeep Patil</h3>
            <p className="text-gray-300 mb-4">
              Full Stack Developer passionate about building modern web
              applications and learning new technologies.
            </p>
            <p className="text-gray-400 text-sm">
              Looking for job opportunities
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to={`/Home`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={`/projects`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to={`/Blogs`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to={`/Meetups`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Meetups
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-gray-400" />
                <a
                  href="mailto:sudeep@example.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  patilsudeep.mca.amcec23@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-gray-400" />
                <a
                  href="tel:+919876543210"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +918660858192
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-gray-400" />
                <span className="text-gray-300">
                  Bengalore, Karnataka, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <a
                href="https://hashnode.com/@Sudeep-Patil"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-2 border-white hover:bg-white hover:text-black transition-colors"
              >
                <FaHashnode size={24} />
              </a>

              <a
                href="https://leetcode.com/u/sudeepbsc02/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-2 border-white hover:bg-white hover:text-black transition-colors"
              >
                <TbBrandLeetcode size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sudeepnpatil/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-2 border-white hover:bg-white hover:text-black transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/SudeepNpatil"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-2 border-white hover:bg-white hover:text-black transition-colors"
              >
                <Github size={24} />
              </a>
            </div>

            <p className="text-gray-400 text-sm text-center">
              © {currentYear} Sudeep Patil. All rights reserved.
            </p>
          </div>
        </div>

        {/* Made with Love */}
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500 fill-red-500" />{' '}
            by Sudeep Patil
          </p>
        </div>
      </div>
    </footer>
  );
}
