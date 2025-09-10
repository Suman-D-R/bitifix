'use client';

import { useEffect } from 'react';
import RiveComponent from '../components/RiveComponent';
import {
  IconCode,
  IconDeviceMobile,
  IconRocket,
  IconUsers,
  IconRefresh,
  IconCheck,
  IconArrowRight,
  IconSettings,
  IconCloud,
  IconServer,
  IconDatabase,
  IconShield,
} from '@tabler/icons-react';
import { handleHashScroll } from '../utils/scrollUtils';
import { useRouter } from 'next/navigation';

export default function Services() {
  const router = useRouter();

  useEffect(() => {
    // Handle smooth scrolling when the page loads with a hash
    handleHashScroll();
  }, []);

  const servicesStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Digital Solutions Services',
    description:
      'Comprehensive digital solutions including web development, mobile app development, cloud infrastructure, automation integration, and web hosting services.',
    provider: {
      '@type': 'Organization',
      name: 'Bitifix',
      url: 'https://bitifix.com',
    },
    serviceType: 'Digital Solutions',
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Solutions',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Development Services',
            description:
              'Professional web development including responsive design, performance optimization, security implementation, and SEO optimization.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile App Development',
            description:
              'iOS and Android app development with cross-platform solutions, native development, and app store deployment.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cloud Infrastructure Services',
            description:
              'Comprehensive cloud infrastructure setup including LLM AI integration, video streaming, monitoring dashboards, and DevOps automation.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Automation Integration',
            description:
              'Workflow automation, API integration, data synchronization, and third-party tool integration services.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Hosting Services',
            description:
              'Reliable web hosting with high-performance servers, SSL certificates, automated backups, and 24/7 technical support.',
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesStructuredData),
        }}
      />
      <div className='h-full text-white pt-20'>
        {/* Hero Section */}
        <section className='py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12 sm:mb-16'>
              <h1 className='text-3xl lg:text-5xl font-bold mb-4 sm:mb-6'>
                Our Services
              </h1>
              <p className='text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto'>
                Comprehensive digital solutions tailored to your business needs.
                We deliver exceptional results through cutting-edge technology
                and innovative approaches.
              </p>
            </div>
          </div>
        </section>

        {/* Web Development Service */}
        <section id='web-development' className='py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20'>
              <div className='order-2 lg:order-1'>
                <div className='w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden'>
                  <RiveComponent src='web' />
                </div>
              </div>
              <div className='order-1 lg:order-2 flex flex-col justify-center'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6'>
                  Web Development
                </h2>
                <p className='text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed'>
                  We create powerful, responsive websites that deliver
                  exceptional user experiences and drive business growth. Our
                  web development services combine modern technologies with
                  proven methodologies to build scalable solutions.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
                  <div className='flex items-start space-x-3'>
                    <IconCheck className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-300 text-sm sm:text-base'>
                      Responsive Design
                    </span>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <IconCheck className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-300 text-sm sm:text-base'>
                      Performance Optimization
                    </span>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <IconCheck className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-300 text-sm sm:text-base'>
                      Security Implementation
                    </span>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <IconCheck className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-300 text-sm sm:text-base'>
                      SEO Optimization
                    </span>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <IconCheck className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-300 text-sm sm:text-base'>
                      Scalable Architecture
                    </span>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <IconCheck className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-300 text-sm sm:text-base'>
                      Cross-browser Compatibility
                    </span>
                  </div>
                </div>

                <button className='bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-colors hover:bg-orange-600 w-fit flex items-center space-x-2'>
                  <span>Get Started</span>
                  <IconArrowRight className='w-4 h-4' />
                </button>
              </div>
            </div>

            {/* Web Development Process */}
            <div className='mt-20'>
              <h3 className='text-2xl lg:text-3xl font-bold mb-8 text-center'>
                Our Web Development Process
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='text-center p-6 rounded-lg '>
                  <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <IconCode className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                  </div>
                  <h4 className='text-lg font-semibold mb-2'>
                    Planning & Analysis
                  </h4>
                  <p className='text-gray-300 text-sm'>
                    We analyze your requirements and create a detailed project
                    roadmap.
                  </p>
                </div>
                <div className='text-center p-6 rounded-lg '>
                  <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <IconUsers className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                  </div>
                  <h4 className='text-lg font-semibold mb-2'>
                    Design & Prototyping
                  </h4>
                  <p className='text-gray-300 text-sm'>
                    We create wireframes and prototypes to visualize your
                    website.
                  </p>
                </div>
                <div className='text-center p-6 rounded-lg '>
                  <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <IconRocket className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                  </div>
                  <h4 className='text-lg font-semibold mb-2'>Development</h4>
                  <p className='text-gray-300 text-sm'>
                    We build your website using the latest technologies and best
                    practices.
                  </p>
                </div>
                <div className='text-center p-6 rounded-lg '>
                  <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <IconRefresh className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                  </div>
                  <h4 className='text-lg font-semibold mb-2'>
                    Testing & Launch
                  </h4>
                  <p className='text-gray-300 text-sm'>
                    We thoroughly test and deploy your website with ongoing
                    support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* App Development Service */}
        <section id='app-development' className='py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20'>
              <div className='flex flex-col justify-center'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6'>
                  App Development – iOS & Android
                </h2>
                <p className='text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed'>
                  We build powerful, user-friendly mobile applications that
                  combine speed, scalability, and seamless performance. Our
                  mobile apps engage your audience and help achieve your
                  business goals across all platforms.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
                  <div className='flex items-start space-x-3'>
                    <IconCheck className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-300 text-sm sm:text-base'>
                      Cross-Platform Development
                    </span>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <IconCheck className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-300 text-sm sm:text-base'>
                      Native iOS & Android
                    </span>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <IconCheck className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-300 text-sm sm:text-base'>
                      Intuitive UI/UX Design
                    </span>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <IconCheck className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-300 text-sm sm:text-base'>
                      Performance Optimization
                    </span>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <IconCheck className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-300 text-sm sm:text-base'>
                      App Store Deployment
                    </span>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <IconCheck className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-300 text-sm sm:text-base'>
                      Ongoing Maintenance
                    </span>
                  </div>
                </div>

                <button className='bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-colors hover:bg-orange-600 w-fit flex items-center space-x-2'>
                  <span>Get Started</span>
                  <IconArrowRight className='w-4 h-4' />
                </button>
              </div>
              <div>
                <div className='w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden'>
                  <RiveComponent src='app' />
                </div>
              </div>
            </div>

            {/* App Development Process */}
            <div className='mt-20'>
              <h3 className='text-2xl lg:text-3xl font-bold mb-8 text-center'>
                Our App Development Process
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='text-center p-6 rounded-lg '>
                  <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <IconDeviceMobile className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                  </div>
                  <h4 className='text-lg font-semibold mb-2'>
                    Strategy & Planning
                  </h4>
                  <p className='text-gray-300 text-sm'>
                    We define your app&apos;s purpose, target audience, and key
                    features.
                  </p>
                </div>
                <div className='text-center p-6 rounded-lg '>
                  <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <IconUsers className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                  </div>
                  <h4 className='text-lg font-semibold mb-2'>UI/UX Design</h4>
                  <p className='text-gray-300 text-sm'>
                    We create intuitive and engaging user interfaces and
                    experiences.
                  </p>
                </div>
                <div className='text-center p-6 rounded-lg '>
                  <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <IconCode className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                  </div>
                  <h4 className='text-lg font-semibold mb-2'>Development</h4>
                  <p className='text-gray-300 text-sm'>
                    We build your app using the most suitable technology stack.
                  </p>
                </div>
                <div className='text-center p-6 rounded-lg '>
                  <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <IconRocket className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                  </div>
                  <h4 className='text-lg font-semibold mb-2'>
                    Testing & Launch
                  </h4>
                  <p className='text-gray-300 text-sm'>
                    We test thoroughly and deploy to app stores with ongoing
                    support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure Setup Service */}
        <section id='infrastructure' className='py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20'>
              <div className='order-2 lg:order-1'>
                <div className='w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden'>
                  <RiveComponent src='server' />
                </div>
              </div>
              <div className='order-1 lg:order-2 flex flex-col justify-center'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6'>
                  Cloud and Infrastructure Services
                </h2>
                <p className='text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed'>
                  We provide comprehensive infrastructure solutions that power
                  your applications with cutting-edge technologies including AI
                  agents, streaming capabilities, and real-time monitoring
                  systems. Our infrastructure services ensure your applications
                  are scalable, secure, and performant.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
                  <div className='flex items-start space-x-3'>
                    <IconCheck className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-300 text-sm sm:text-base'>
                      LLM AI Agent Integration
                    </span>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <IconCheck className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-300 text-sm sm:text-base'>
                      Video & Live Streaming
                    </span>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <IconCheck className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-300 text-sm sm:text-base'>
                      Monitoring Dashboards
                    </span>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <IconCheck className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-300 text-sm sm:text-base'>
                      Cloud Infrastructure Setup
                    </span>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <IconCheck className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-300 text-sm sm:text-base'>
                      DevOps & Automation
                    </span>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <IconCheck className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-300 text-sm sm:text-base'>
                      24/7 Infrastructure Support
                    </span>
                  </div>
                </div>

                <button className='bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-colors hover:bg-orange-600 w-fit flex items-center space-x-2'>
                  <span>Get Started</span>
                  <IconArrowRight className='w-4 h-4' />
                </button>
              </div>
            </div>

            {/* Infrastructure Setup Process */}
            <div className='mt-20'>
              <h3 className='text-2xl lg:text-3xl font-bold mb-8 text-center'>
                Our Infrastructure Setup Process
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='text-center p-6 rounded-lg '>
                  <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <IconCode className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                  </div>
                  <h4 className='text-lg font-semibold mb-2'>
                    Assessment & Planning
                  </h4>
                  <p className='text-gray-300 text-sm'>
                    We analyze your requirements and design the optimal
                    infrastructure architecture.
                  </p>
                </div>
                <div className='text-center p-6 rounded-lg '>
                  <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <IconRocket className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                  </div>
                  <h4 className='text-lg font-semibold mb-2'>
                    Setup & Configuration
                  </h4>
                  <p className='text-gray-300 text-sm'>
                    We deploy and configure your infrastructure with security
                    and performance in mind.
                  </p>
                </div>
                <div className='text-center p-6 rounded-lg '>
                  <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <IconUsers className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                  </div>
                  <h4 className='text-lg font-semibold mb-2'>
                    Integration & Testing
                  </h4>
                  <p className='text-gray-300 text-sm'>
                    We integrate all components and thoroughly test the system
                    for reliability.
                  </p>
                </div>
                <div className='text-center p-6 rounded-lg '>
                  <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <IconRefresh className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                  </div>
                  <h4 className='text-lg font-semibold mb-2'>
                    Monitoring & Support
                  </h4>
                  <p className='text-gray-300 text-sm'>
                    We provide ongoing monitoring and support to ensure optimal
                    performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Automation Integration Service */}
        <section id='automation-integration' className='py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20'>
              <div className='flex flex-col justify-center'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6'>
                  Automation Integration
                </h2>
                <p className='text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed'>
                  Streamline your business processes with intelligent automation
                  solutions. We integrate cutting-edge automation technologies
                  to reduce manual work, improve efficiency, and accelerate your
                  digital transformation journey.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
                  <div className='flex items-start space-x-3'>
                    <IconCheck className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-300 text-sm sm:text-base'>
                      Workflow Automation
                    </span>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <IconCheck className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-300 text-sm sm:text-base'>
                      API Integration
                    </span>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <IconCheck className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-300 text-sm sm:text-base'>
                      Data Synchronization
                    </span>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <IconCheck className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-300 text-sm sm:text-base'>
                      Third-party Tool Integration
                    </span>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <IconCheck className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-300 text-sm sm:text-base'>
                      Custom Automation Scripts
                    </span>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <IconCheck className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-300 text-sm sm:text-base'>
                      Process Optimization
                    </span>
                  </div>
                </div>

                <button className='bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-colors hover:bg-orange-600 w-fit flex items-center space-x-2'>
                  <span>Get Started</span>
                  <IconArrowRight className='w-4 h-4' />
                </button>
              </div>
              <div>
                <div className='w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden  flex items-center justify-center'>
                  <IconSettings className='w-32 h-32 text-orange-500' />
                </div>
              </div>
            </div>

            {/* Automation Integration Process */}
            <div className='mt-20'>
              <h3 className='text-2xl lg:text-3xl font-bold mb-8 text-center'>
                Our Automation Integration Process
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='text-center p-6 rounded-lg '>
                  <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <IconSettings className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                  </div>
                  <h4 className='text-lg font-semibold mb-2'>
                    Process Analysis
                  </h4>
                  <p className='text-gray-300 text-sm'>
                    We analyze your current workflows and identify automation
                    opportunities.
                  </p>
                </div>
                <div className='text-center p-6 rounded-lg '>
                  <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <IconCode className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                  </div>
                  <h4 className='text-lg font-semibold mb-2'>
                    Solution Design
                  </h4>
                  <p className='text-gray-300 text-sm'>
                    We design custom automation solutions tailored to your
                    specific needs.
                  </p>
                </div>
                <div className='text-center p-6 rounded-lg '>
                  <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <IconRocket className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                  </div>
                  <h4 className='text-lg font-semibold mb-2'>Implementation</h4>
                  <p className='text-gray-300 text-sm'>
                    We implement and integrate automation solutions with your
                    existing systems.
                  </p>
                </div>
                <div className='text-center p-6 rounded-lg '>
                  <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <IconRefresh className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                  </div>
                  <h4 className='text-lg font-semibold mb-2'>
                    Monitoring & Optimization
                  </h4>
                  <p className='text-gray-300 text-sm'>
                    We monitor performance and continuously optimize your
                    automation systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Web Hosting Service */}
        <section id='web-hosting' className='py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20'>
              <div className='order-2 lg:order-1'>
                <div className='w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden  flex items-center justify-center'>
                  <IconServer className='w-32 h-32 text-blue-500' />
                </div>
              </div>
              <div className='order-1 lg:order-2 flex flex-col justify-center'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6'>
                  Web Hosting & Cloud Solutions
                </h2>
                <p className='text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed'>
                  Reliable, secure, and scalable hosting solutions for your web
                  applications. We provide comprehensive hosting services with
                  99.9% uptime, advanced security, and expert support to keep
                  your digital presence running smoothly.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
                  <div className='flex items-start space-x-3'>
                    <IconCheck className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-300 text-sm sm:text-base'>
                      High-Performance Servers
                    </span>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <IconCheck className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-300 text-sm sm:text-base'>
                      SSL Certificate Management
                    </span>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <IconCheck className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-300 text-sm sm:text-base'>
                      Automated Backups
                    </span>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <IconCheck className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-300 text-sm sm:text-base'>
                      CDN Integration
                    </span>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <IconCheck className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-300 text-sm sm:text-base'>
                      24/7 Technical Support
                    </span>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <IconCheck className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-300 text-sm sm:text-base'>
                      Scalable Infrastructure
                    </span>
                  </div>
                </div>

                <button className='bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-colors hover:bg-orange-600 w-fit flex items-center space-x-2'>
                  <span>Get Started</span>
                  <IconArrowRight className='w-4 h-4' />
                </button>
              </div>
            </div>

            {/* Web Hosting Process */}
            <div className='mt-20'>
              <h3 className='text-2xl lg:text-3xl font-bold mb-8 text-center'>
                Our Web Hosting Process
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='text-center p-6 rounded-lg '>
                  <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <IconCloud className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                  </div>
                  <h4 className='text-lg font-semibold mb-2'>
                    Infrastructure Planning
                  </h4>
                  <p className='text-gray-300 text-sm'>
                    We assess your hosting needs and design the optimal
                    infrastructure setup.
                  </p>
                </div>
                <div className='text-center p-6 rounded-lg '>
                  <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <IconServer className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                  </div>
                  <h4 className='text-lg font-semibold mb-2'>
                    Server Configuration
                  </h4>
                  <p className='text-gray-300 text-sm'>
                    We configure and optimize servers for maximum performance
                    and security.
                  </p>
                </div>
                <div className='text-center p-6 rounded-lg '>
                  <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <IconShield className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                  </div>
                  <h4 className='text-lg font-semibold mb-2'>
                    Security & Monitoring
                  </h4>
                  <p className='text-gray-300 text-sm'>
                    We implement security measures and monitoring systems for
                    your peace of mind.
                  </p>
                </div>
                <div className='text-center p-6 rounded-lg '>
                  <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <IconDatabase className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                  </div>
                  <h4 className='text-lg font-semibold mb-2'>
                    Migration & Support
                  </h4>
                  <p className='text-gray-300 text-sm'>
                    We handle seamless migration and provide ongoing support and
                    maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className='py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12 sm:mb-16'>
              <h2 className='text-2xl lg:text-4xl font-bold mb-3 sm:mb-4'>
                Additional Services
              </h2>
              <p className='text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto'>
                Beyond our core services, we offer comprehensive digital
                solutions including automation integration, web hosting, and
                specialized services to support your business growth.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {/* UI/UX Design */}
              <div className='text-center p-6 rounded-lg  transition-all duration-300 '>
                <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <IconUsers className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                </div>
                <h3 className='text-lg sm:text-xl font-bold mb-3'>
                  UI/UX Design
                </h3>
                <p className='text-gray-300 text-sm sm:text-base'>
                  Creating intuitive and engaging user experiences that drive
                  conversions and user satisfaction.
                </p>
              </div>

              {/* Digital Marketing */}
              <div className='text-center p-6 rounded-lg  transition-all duration-300 '>
                <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <IconRocket className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                </div>
                <h3 className='text-lg sm:text-xl font-bold mb-3'>
                  Digital Marketing
                </h3>
                <p className='text-gray-300 text-sm sm:text-base'>
                  Strategic marketing campaigns to increase your online presence
                  and drive business growth.
                </p>
              </div>

              {/* Maintenance & Support */}
              <div className='text-center p-6 rounded-lg  transition-all duration-300 '>
                <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <IconRefresh className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                </div>
                <h3 className='text-lg sm:text-xl font-bold mb-3'>
                  Maintenance & Support
                </h3>
                <p className='text-gray-300 text-sm sm:text-base'>
                  Ongoing support and maintenance to keep your digital solutions
                  running smoothly and securely.
                </p>
              </div>

              {/* Automation Integration */}
              <div className='text-center p-6 rounded-lg  transition-all duration-300 '>
                <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <IconSettings className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                </div>
                <h3 className='text-lg sm:text-xl font-bold mb-3'>
                  Automation Integration
                </h3>
                <p className='text-gray-300 text-sm sm:text-base'>
                  Streamline workflows with intelligent automation solutions and
                  seamless third-party integrations.
                </p>
              </div>

              {/* Web Hosting */}
              <div className='text-center p-6 rounded-lg  transition-all duration-300 '>
                <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <IconServer className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                </div>
                <h3 className='text-lg sm:text-xl font-bold mb-3'>
                  Web Hosting
                </h3>
                <p className='text-gray-300 text-sm sm:text-base'>
                  Reliable, secure hosting solutions with 99.9% uptime and 24/7
                  technical support for your applications.
                </p>
              </div>

              {/* Cloud Solutions */}
              <div className='text-center p-6 rounded-lg  transition-all duration-300 '>
                <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <IconCloud className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                </div>
                <h3 className='text-lg sm:text-xl font-bold mb-3'>
                  Cloud Solutions
                </h3>
                <p className='text-gray-300 text-sm sm:text-base'>
                  Scalable cloud infrastructure and migration services to
                  optimize your digital operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className='py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center'>
              <h2 className='text-2xl md:text-3xl font-bold mb-3 sm:mb-4'>
                Ready to Start Your Project?
              </h2>
              <p className='text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base'>
                Let&apos;s discuss your requirements and create a custom
                solution that drives your business forward.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <button
                  onClick={() => router.push('/contact')}
                  className='bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-colors hover:bg-orange-600 flex items-center justify-center space-x-2'
                >
                  <span>Start Your Project</span>
                  <IconArrowRight className='w-4 h-4' />
                </button>
                {/* <button className='bg-transparent border-2 border-orange-500 text-orange-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-colors hover:bg-orange-500 hover:text-white'>
                Schedule a Consultation
              </button> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
