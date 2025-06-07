import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'PostgreSQL',
    'MongoDB', 'AWS', 'Docker', 'Git', 'Tailwind CSS', 'Next.js'
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive interfaces that provide excellent user experiences.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and search engine rankings.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams and communicating complex ideas clearly.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate full-stack developer with 5+ years of experience building 
              web applications that make a difference. I love turning complex problems 
              into elegant solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            {/* Bio */}
            <div className="animate-fade-in animation-delay-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">My Journey</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                My journey into web development started during my computer science studies, 
                where I discovered my passion for creating digital experiences that solve 
                real-world problems.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Over the years, I've worked with startups and established companies, 
                helping them build scalable web applications and improve their digital presence. 
                I enjoy every aspect of development, from planning and design to deployment and maintenance.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or enjoying outdoor activities.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-6 animate-fade-in animation-delay-600">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow group"
                >
                  <highlight.icon className="h-8 w-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="animate-fade-in animation-delay-900">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;