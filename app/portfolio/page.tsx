'use client';

import React, { useState } from 'react';
import {
  IconExternalLink,
  IconCode,
  IconEye,
  IconFilter,
  IconChevronDown,
} from '@tabler/icons-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with modern UI, payment integration, and admin dashboard.',
    image: '/images/project1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Web Development',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    featured: true,
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description:
      'Secure mobile banking application with biometric authentication and real-time transactions.',
    image: '/images/project2.jpg',
    technologies: ['React Native', 'Firebase', 'Node.js'],
    category: 'Mobile Development',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    id: 3,
    title: 'SaaS Dashboard',
    description:
      'Analytics dashboard for SaaS companies with real-time data visualization and reporting.',
    image: '/images/project3.jpg',
    technologies: ['Next.js', 'TypeScript', 'Chart.js', 'PostgreSQL'],
    category: 'Web Development',
    liveUrl: 'https://example.com',
    featured: false,
  },
  {
    id: 4,
    title: 'AI Chatbot',
    description:
      'Intelligent customer service chatbot with natural language processing capabilities.',
    image: '/images/project4.jpg',
    technologies: ['Python', 'OpenAI API', 'FastAPI', 'React'],
    category: 'AI/ML',
    liveUrl: 'https://example.com',
    featured: false,
  },
  {
    id: 5,
    title: 'Restaurant Management System',
    description:
      'Complete restaurant management solution with inventory, orders, and staff management.',
    image: '/images/project5.jpg',
    technologies: ['Vue.js', 'Express.js', 'MySQL', 'Socket.io'],
    category: 'Web Development',
    liveUrl: 'https://example.com',
    featured: false,
  },
  {
    id: 6,
    title: 'Fitness Tracking App',
    description:
      'Cross-platform fitness app with workout tracking, nutrition logging, and social features.',
    image: '/images/project6.jpg',
    technologies: ['Flutter', 'Firebase', 'Dart'],
    category: 'Mobile Development',
    liveUrl: 'https://example.com',
    featured: false,
  },
];

const categories = ['All', 'Web Development', 'Mobile Development', 'AI/ML'];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className='min-h-screen text-white pt-16'>
      {/* Hero Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-6'>
              Our Portfolio
            </h1>
            <p className='text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8'>
              Discover our latest projects and see how we&apos;ve helped
              businesses transform their digital presence with innovative
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-2xl sm:text-3xl font-bold mb-4'>
              Featured Projects
            </h2>
            <p className='text-gray-300 text-lg'>
              Our most impactful and innovative solutions
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className='bg-[#111] rounded-2xl overflow-hidden border border-white/10 hover:border-orange-500/50 transition-all duration-300 group'
              >
                <div className='aspect-video bg-gradient-to-br from-orange-500/20 to-purple-500/20 flex items-center justify-center'>
                  <div className='text-center'>
                    <IconCode className='w-16 h-16 text-orange-500 mx-auto mb-4' />
                    <p className='text-gray-400'>Project Preview</p>
                  </div>
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                  <p className='text-gray-300 mb-4'>{project.description}</p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='px-3 py-1 bg-orange-500/20 text-orange-400 text-sm rounded-full'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className='flex gap-4'>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors'
                      >
                        <IconEye className='w-4 h-4' />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 text-gray-400 hover:text-white transition-colors'
                      >
                        <IconCode className='w-4 h-4' />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-2xl sm:text-3xl font-bold mb-4'>
              All Projects
            </h2>
            <p className='text-gray-300 text-lg mb-8'>
              Explore our complete collection of digital solutions
            </p>

            {/* Filter Dropdown */}
            <div className='relative inline-block'>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className='flex items-center gap-2 bg-[#111] border border-white/10 px-4 py-2 rounded-lg hover:border-orange-500/50 transition-colors'
              >
                <IconFilter className='w-4 h-4' />
                <span>{selectedCategory}</span>
                <IconChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isFilterOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isFilterOpen && (
                <div className='absolute top-full left-0 mt-2 w-48 bg-[#111] border border-white/10 rounded-lg shadow-lg z-10'>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsFilterOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-white/5 transition-colors ${
                        selectedCategory === category
                          ? 'text-orange-500'
                          : 'text-white'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className='bg-[#111] rounded-xl overflow-hidden border border-white/10 hover:border-orange-500/50 transition-all duration-300 group'
              >
                <div className='aspect-video bg-gradient-to-br from-orange-500/20 to-purple-500/20 flex items-center justify-center'>
                  <div className='text-center'>
                    <IconCode className='w-12 h-12 text-orange-500 mx-auto mb-2' />
                    <p className='text-gray-400 text-sm'>Preview</p>
                  </div>
                </div>
                <div className='p-4'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='text-xs text-orange-500 bg-orange-500/20 px-2 py-1 rounded-full'>
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className='text-xs text-yellow-500 bg-yellow-500/20 px-2 py-1 rounded-full'>
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className='text-lg font-bold mb-2'>{project.title}</h3>
                  <p className='text-gray-300 text-sm mb-3 line-clamp-2'>
                    {project.description}
                  </p>
                  <div className='flex flex-wrap gap-1 mb-3'>
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className='px-2 py-1 bg-white/10 text-gray-300 text-xs rounded'
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className='px-2 py-1 bg-white/10 text-gray-300 text-xs rounded'>
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className='flex gap-3'>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-1 text-orange-500 hover:text-orange-400 transition-colors text-sm'
                      >
                        <IconExternalLink className='w-3 h-3' />
                        <span>Live</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-sm'
                      >
                        <IconCode className='w-3 h-3' />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='text-3xl sm:text-4xl font-bold text-orange-500 mb-2'>
                50+
              </div>
              <div className='text-gray-300'>Projects Completed</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl sm:text-4xl font-bold text-orange-500 mb-2'>
                30+
              </div>
              <div className='text-gray-300'>Happy Clients</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl sm:text-4xl font-bold text-orange-500 mb-2'>
                5+
              </div>
              <div className='text-gray-300'>Years Experience</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl sm:text-4xl font-bold text-orange-500 mb-2'>
                15+
              </div>
              <div className='text-gray-300'>Technologies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-6'>
            Ready to Start Your Project?
          </h2>
          <p className='text-gray-300 text-lg mb-8'>
            Let&apos;s discuss your vision and create something amazing
            together.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors'>
              Start a Project
            </button>
            <button className='bg-transparent border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-colors'>
              View Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
