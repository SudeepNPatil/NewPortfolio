import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ecommercehardware from '../assets/ecommercehardware.png';
import student_dashboard from '../assets/student_dashboard.png';
import Code_mentor from '../assets/Code_mentor.png';
import Autometic_fish_feeding from '../assets/Autometic_fish_feeding.jpg';
import petcare from '../assets/petcare.png';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('freelance');

  const projectsData = [
    {
      id: 1,
      title: 'Code Mentor',
      description:
        'it is the Platform to take help from the tech expert and fix the issue and buy Readymade Projects based on requirement and they can post there idea to build for them and lastly Project Navigator to tell what to uses what not in there Project to stay Updated',
      features: [
        'Authantication & Authorization',
        'Role base access',
        'CRUD operation',
        'Context for global state',
        'Admin Panal',
      ],
      techStack: [
        'React',
        'Node.js',
        'Express js',
        ,
        'Framer motion',
        'MongoDB',
        'TailwindCSS',
      ],
      liveDemo: 'https://student-sup.netlify.app',
      sourceCode: 'https://github.com/SudeepNPatil/Student-Support',
      image: Code_mentor,
    },
    {
      id: 2,
      title: 'Autometic Fish Feeding',
      description:
        'This project is an IoT-based smart aquarium system that automates fish feeding, monitors water levels, and allows water change scheduling — all controlled through a modern web interface.',
      features: [
        'Autometic mode & Manual Mode',
        'book the feeding time and date',
        'Book the water Changeing date and time',
        'Monitor water level',
      ],
      techStack: [
        'React js',
        'Express.js',
        'framer motion',
        'MongoDB',
        'Python',
        'ESP32',
      ],
      liveDemo: '#',
      sourceCode:
        'https://github.com/SudeepNPatil/Atometic_Fish_Feeding_using_IOT',
      image: Autometic_fish_feeding,
    },
    {
      id: 3,
      title: 'Pet Care Web Application',
      description:
        'A PetCare web Application to book the online cunsultant and they can search the Pet Shop based on the location',
      features: [
        'Custom Payment gateway',
        'Custom Cheout page',
        'Context for global state',
        'only frontend components',
        'Hosted on netlify',
      ],
      techStack: [
        'React js',
        'parcal',
        'javascript',
        'TailwindCSS',
        'Context API',
      ],
      liveDemo: 'https://petcare-sudeep.netlify.app',
      sourceCode: 'https://github.com/SudeepNPatil/Petcare-Website',
      image: petcare,
    },
  ];

  const freelanceData = [
    {
      id: 1,
      title: 'E-commerce Hardware',
      description: `the plaform is designed to perform both Custom Build Pc's and Readymade Products and there is technician booking is there , this is where we stand out as new feature`,
      features: [
        'Authantication & Authorization',
        'Role base access',
        'CRUD operation',
        'Context for global state',
        'Cloudinary for image upload',
        'Admin Panal',
        'Add Products',
      ],
      techStack: [
        'React js',
        'TailwindCSS',
        'Express js',
        'MongoDb',
        'Node js',
      ],
      liveDemo: 'https://ecommercehardware.netlify.app',
      sourceCode: 'https://github.com/SudeepNPatil/E-commerce-Hardware',
      image: ecommercehardware,
    },
    {
      id: 2,
      title: 'Hire Stream Secure Job Portal',
      description:
        'The Secured job portal for the internal use of placement officer, Recruiter and Student , In this admin need to verify the student and then teh student can apply for job and thay can track the appalication',
      features: [
        'Authantication & Authorization',
        'Role Base access',
        'Cloudinary for image',
        'Admin Portal',
        'Student Portal',
        'Recruiter Portal',
      ],
      techStack: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'React js',
        'TailwindCSS',
      ],
      liveDemo: 'https://hire-stream-portal.netlify.app/',
      sourceCode: 'https://github.com/SudeepNPatil/Hire_Stream',
      image: student_dashboard,
    },
  ];

  const [currentData, setcurrentData] = useState(freelanceData);

  return (
    <div className="min-h-screen bg-white px-8 py-16 mt-28">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-black mb-12 text-center">
          Here is My recent Projects
        </h1>

        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => (
              setActiveTab('freelance'), setcurrentData(freelanceData)
            )}
            className={`px-8 py-3 text-lg font-medium transition-colors ${
              activeTab === 'freelance'
                ? 'bg-black text-white'
                : 'border-2 border-black text-black hover:bg-gray-100'
            }`}
          >
            Freelance Projects
          </button>
          <button
            onClick={() => (
              setActiveTab('projects'), setcurrentData(projectsData)
            )}
            className={`px-8 py-3 text-lg font-medium transition-colors ${
              activeTab === 'projects'
                ? 'bg-black text-white'
                : 'border-2 border-black text-black hover:bg-gray-100'
            }`}
          >
            Projects
          </button>
        </div>

        <div className="space-y-32 mb-5">
          {currentData.map((project, index) => (
            <div
              key={project.id}
              className={`grid md:grid-cols-2 gap-12 items-start ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="overflow-y-scroll shadow-lg h-[580px] no-scrollbar scroll-smooth">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-auto object-cover"
                  />
                </div>
              </div>

              <div
                className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}
              >
                <h2 className="text-3xl font-bold text-black">
                  {project.title}
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  {project.description}
                </p>

                <ul className="flex flex-col items-start">
                  <p className="text-gray-950 leading-relaxed mb-1">
                    features :
                  </p>

                  {project.features?.map((data, index) => {
                    return (
                      <li
                        key={index}
                        className="flex flex-row items-center gap-3"
                      >
                        <span className="w-2 h-2 rounded-full bg-blue-100"></span>

                        <p className="text-gray-500">{data}</p>
                      </li>
                    );
                  })}
                </ul>

                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">
                    Tech Stack:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 border-2 border-black text-black text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border-2 border-black text-black hover:bg-gray-100 transition-colors"
                  >
                    <Github size={20} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
