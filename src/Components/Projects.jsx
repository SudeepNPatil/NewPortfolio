import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ecommercehardware from '../assets/ecommercehardware.png';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('projects');

  const projectsData = [
    {
      id: 1,
      title: 'Project Title 1',
      description:
        'Brief description of your project goes here. Explain what problem it solves, what technologies you used, and what you learned while building it. Keep it concise but informative.',
      techStack: ['React', 'Node.js', 'MongoDB', 'TailwindCSS'],
      liveDemo: '#',
      sourceCode: '#',
      image: ecommercehardware,
    },
    {
      id: 2,
      title: 'Project Title 2',
      description:
        'Brief description of your project goes here. Explain what problem it solves, what technologies you used, and what you learned while building it. Keep it concise but informative.',
      techStack: ['React', 'Express.js', 'MySQL', 'Docker'],
      liveDemo: '#',
      sourceCode: '#',
      image:
        'https://via.placeholder.com/600x400/e5e7eb/6b7280?text=Project+GIF+2',
    },
    {
      id: 3,
      title: 'Project Title 3',
      description:
        'Brief description of your project goes here. Explain what problem it solves, what technologies you used, and what you learned while building it. Keep it concise but informative.',
      techStack: ['JavaScript', 'Node.js', 'MongoDB', 'CI/CD'],
      liveDemo: '#',
      sourceCode: '#',
      image:
        'https://via.placeholder.com/600x400/e5e7eb/6b7280?text=Project+GIF+3',
    },
  ];

  const freelanceData = [
    {
      id: 1,
      title: 'Freelance Project 1',
      description:
        'Brief description of your freelance project goes here. Explain the client requirements, your solution, and the impact it had. Highlight your role and responsibilities.',
      techStack: ['React', 'TailwindCSS', 'Firebase'],
      liveDemo: '#',
      sourceCode: '#',
      image:
        'https://via.placeholder.com/600x400/e5e7eb/6b7280?text=Freelance+GIF+1',
    },
    {
      id: 2,
      title: 'Freelance Project 2',
      description:
        'Brief description of your freelance project goes here. Explain the client requirements, your solution, and the impact it had. Highlight your role and responsibilities.',
      techStack: ['Node.js', 'Express.js', 'PostgreSQL'],
      liveDemo: '#',
      sourceCode: '#',
      image:
        'https://via.placeholder.com/600x400/e5e7eb/6b7280?text=Freelance+GIF+2',
    },
  ];

  const currentData = activeTab === 'projects' ? projectsData : freelanceData;

  return (
    <div className="min-h-screen bg-white px-8 py-16 mt-28">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl font-bold text-black mb-12 text-center">
          Here is My recent Projects
        </h1>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-8 py-3 text-lg font-medium transition-colors ${
              activeTab === 'projects'
                ? 'bg-black text-white'
                : 'border-2 border-black text-black hover:bg-gray-100'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab('freelance')}
            className={`px-8 py-3 text-lg font-medium transition-colors ${
              activeTab === 'freelance'
                ? 'bg-black text-white'
                : 'border-2 border-black text-black hover:bg-gray-100'
            }`}
          >
            Freelance Projects
          </button>
        </div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {currentData.map((project, index) => (
            <div
              key={project.id}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image/GIF Side */}
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="overflow-y-scroll shadow-lg h-[600px] no-scrollbar scroll-smooth">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-auto object-cover"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div
                className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}
              >
                <h2 className="text-3xl font-bold text-black">
                  {project.title}
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
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

                {/* Buttons */}
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
