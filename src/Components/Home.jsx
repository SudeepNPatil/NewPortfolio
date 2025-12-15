import { useState, useEffect } from 'react';
import {
  MapPin,
  Download,
  Eye,
  Instagram,
  Linkedin,
  Github,
  GraduationCap,
  Code,
  HashIcon,
  Mail,
  PhoneCall,
} from 'lucide-react';
import { FaHashnode } from 'react-icons/fa6';
import { TbBrandLeetcode } from 'react-icons/tb';

import SudeepNPatil from '../assets/Sudeep N Patil.jpg';

export default function Home() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [language, setlanguage] = useState([]);

  const roles = [
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (text === currentRole) {
            setTimeout(() => setIsDeleting(true), 2000);
          } else {
            setText(currentRole.substring(0, text.length + 1));
          }
        } else {
          if (text === '') {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          } else {
            setText(currentRole.substring(0, text.length - 1));
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  useEffect(() => {
    fetch('https://api.github.com/users/SudeepNpatil/repos')
      .then((data) => data.json())
      .then((data) => {
        const set = new Set([]);
        data.forEach((item) => {
          if (item.language && item.language !== '') {
            set.add(item.language);
          }
        });

        setlanguage([...set]);
      });
  }, []);

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'ReactJS',
    'TailwindCSS',
    'Node.js',
    'Express.js',
    'MongoDB',
    'MySQL',
    'Docker',
    'CI/CD Pipeline',
  ];

  return (
    <div className="bg-white">
      <div className="min-h-screen flex items-center justify-center px-8 py-12 mt-28">
        <div className="max-w-5xl grid md:grid-cols-2 gap-32 items-start">
          <div className="space-y-4">
            <div>
              <h1 className="text-5xl font-bold text-black mb-4">
                Hi, I am <span className="text-gray-800">Sudeep Patil</span>
              </h1>
              <div className="h-12 flex items-center">
                <span className="text-2xl text-gray-700">
                  I am {text}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              I Aim to grow as a Software Engineer by continuously expanding my
              knowledge and taking on challenging projects. I believe that the
              best way to learn is through practice and curiosity.
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={20} />
              <span>Bengalore, Karnataka, India</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <Mail size={20} />
              <span>patilsudeep.mca.amcec23@gmail</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <PhoneCall size={20} />
              <span>+918660858192</span>
            </div>

            <div className="text-gray-600">
              <p className="font-medium">Looking for job opportunities</p>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="flex items-center gap-2 px-6 py-3 border-2 border-black text-black hover:bg-gray-100 transition-colors">
                <Eye size={20} />
                <a
                  href="/SudeepPatil_FullStackDev_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Look at CV
                </a>
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors">
                <Download size={20} />
                <a
                  href="/SudeepPatil_FullStackDev_Resume.pdf"
                  download="Sudeep_Patil_Resume.pdf"
                >
                  Download CV
                </a>
              </button>
            </div>

            <div className="pt-6">
              <p className="text-gray-600 mb-3">Follow me on:</p>
              <div className="flex gap-4">
                <a
                  href="https://hashnode.com/@Sudeep-Patil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border-2 border-black hover:bg-black hover:text-white transition-colors"
                >
                  <FaHashnode size={24} />
                </a>

                <a
                  href="https://leetcode.com/u/sudeepbsc02/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border-2 border-black hover:bg-black hover:text-white transition-colors"
                >
                  <TbBrandLeetcode size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sudeepnpatil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border-2 border-black hover:bg-black hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/SudeepNPatil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border-2 border-black hover:bg-black hover:text-white transition-colors"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center shadow-lg">
            <img
              src={SudeepNPatil}
              alt="Sudeep"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="px-8 py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-8">Know About Me</h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Hi, I'm Sudeep, a passionate fullstack developer. I completed my
              Master of Computer Application (MCA) at AMC Engineering College,
              Bengalore. I'm excited to learn new skills and explore the endless
              possibilities in the tech world.
            </p>
            <p>
              My primary focus is on web development, particularly in mastering
              JavaScript, React, TailwindCSS, Node.js, Express.js, and MongoDB.
              I enjoy creating visually appealing and functional designs that
              enhance user experience.
            </p>
            <p>
              Right now, I'm honing my skills in MERN fullstack development by
              building dynamic interfaces using React and TailwindCSS. Every
              project is a chance for me to learn, experiment, and improve.
            </p>
          </div>
        </div>
      </div>

      <div className="px-8 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Code size={32} className="text-black" />
              <h3 className="text-3xl font-bold text-black">Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 border-2 border-black text-black hover:bg-black hover:text-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap size={32} className="text-black" />
              <h3 className="text-3xl font-bold text-black">Education</h3>
            </div>
            <div className="border-l-4 border-black pl-6 py-4">
              <h4 className="text-xl font-semibold text-black mb-2">
                Master of Computer Application
              </h4>
              <p className="text-gray-700 mb-1">
                AMC Engineering College, Bengalore
              </p>
              <p className="text-gray-600 font-medium">CGPA: 8.7</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Github size={30} className="text-black" />
            <h2 className="text-xl sm:text-3xl font-bold text-black">
              GitHub Activity
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border border-black p-3 sm:p-6 bg-white overflow-x-auto">
              <h3 className="text-base sm:text-2xl font-bold text-black mb-2 sm:mb-4">
                Contribution Calendar
              </h3>
              <img
                src="https://ghchart.rshah.org/216e39/SudeepNpatil"
                alt="GitHub Contribution Graph"
                className="w-full"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 bg-white">
              <div className="border border-black">
                <img
                  src="https://streak-stats.vercel.app/?user=SudeepNPatil"
                  alt="GitHub Stats"
                  className="w-full h-full object-fill"
                />
              </div>

              <div className="border border-black pl-5">
                <h3 className="text-base sm:text-xl font-bold text-black mt-2">
                  Most Used Languages
                </h3>

                <ul className="mt-3 ml-2">
                  {language.length > 0
                    ? language.map((data) => (
                        <div className="flex flex-row items-center gap-4">
                          <span className="w-2 h-2 bg-black rounded-full border"></span>
                          <li>{data}</li>
                        </div>
                      ))
                    : ''}
                </ul>
              </div>
            </div>

            <div className="text-center pt-4">
              <a
                href="https://github.com/SudeepNpatil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors text-lg font-medium"
              >
                <Github size={24} />
                Visit My GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
