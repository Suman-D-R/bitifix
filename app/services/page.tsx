'use client';

import { useEffect } from 'react';
import Rive from '@rive-app/react-canvas';
import {
  IconCode,
  IconDeviceMobile,
  IconRocket,
  IconUsers,
  IconRefresh,
  IconCheck,
  IconArrowRight,
} from '@tabler/icons-react';
import { handleHashScroll } from '../utils/scrollUtils';

export default function Services() {
  useEffect(() => {
    // Handle smooth scrolling when the page loads with a hash
    handleHashScroll();
  }, []);
  return (
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
              We deliver exceptional results through cutting-edge technology and
              innovative approaches.
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
                <Rive src='/rive/web.riv' stateMachines='State Machine 1' />
              </div>
            </div>
            <div className='order-1 lg:order-2 flex flex-col justify-center'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6'>
                Web Development
              </h2>
              <p className='text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed'>
                We create powerful, responsive websites that deliver exceptional
                user experiences and drive business growth. Our web development
                services combine modern technologies with proven methodologies
                to build scalable solutions.
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
                  We create wireframes and prototypes to visualize your website.
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
                <h4 className='text-lg font-semibold mb-2'>Testing & Launch</h4>
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
                combine speed, scalability, and seamless performance. Our mobile
                apps engage your audience and help achieve your business goals
                across all platforms.
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
                <Rive src='/rive/app.riv' stateMachines='State Machine 1' />
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
                <h4 className='text-lg font-semibold mb-2'>Testing & Launch</h4>
                <p className='text-gray-300 text-sm'>
                  We test thoroughly and deploy to app stores with ongoing
                  support.
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
              Beyond web and app development, we offer comprehensive digital
              solutions to support your business growth.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* UI/UX Design */}
            <div className='text-center p-6 rounded-lg  transition-all duration-300 hover:bg-gray-800/50'>
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
            <div className='text-center p-6 rounded-lg  transition-all duration-300 hover:bg-gray-800/50'>
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
            <div className='text-center p-6 rounded-lg  transition-all duration-300 hover:bg-gray-800/50'>
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
              Let&apos;s discuss your requirements and create a custom solution
              that drives your business forward.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-colors hover:bg-orange-600 flex items-center justify-center space-x-2'>
                <span>Start Your Project</span>
                <IconArrowRight className='w-4 h-4' />
              </button>
              <button className='bg-transparent border-2 border-orange-500 text-orange-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-colors hover:bg-orange-500 hover:text-white'>
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
