'use client';

import VantaScript from './components/VantaScript';
import Rive from '@rive-app/react-canvas';
import {
  IconCode,
  IconHeart,
  IconShield,
  IconRocket,
  IconUsers,
  IconRefresh,
  IconStar,
} from '@tabler/icons-react';

export default function Home() {
  return (
    <div className='h-full text-white'>
      {/* Hero Section */}
      <VantaScript targetElementId='home' />

      <section
        style={{
          background: 'radial-gradient(circle, #222 0%, #000 100%)',
          maskImage:
            'linear-gradient(black,black,black,black,black,transparent)',
        }}
        id='home'
        className='relative overflow-hidden h-svh flex items-center justify-center'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
          <div
            data-aos='fade-up'
            data-aos-anchor-placement='center-bottom'
            className='text-center'
          >
            <h1 className='text-2xl   lg:text-6xl font-bold mb-4 sm:mb-6'>
              Wherever your vision goes, our technology follows
            </h1>
            <p className='text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto'>
              We design and develop digital solutions that move with your ideas.
            </p>
            <div className='flex  gap-4 justify-center'>
              <button className='bg-orange-500 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full max-w-fit text-sm sm:text-base md:text-lg font-semibold transition-colors'>
                Get Started
              </button>
              <button className='bg-white text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-colors'>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id='services' className='py-20 '>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12 sm:mb-16'>
            <h2 className='text-2xl lg:text-4xl font-bold mb-3 sm:mb-4'>
              Our Services
            </h2>
            <p className='text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto'>
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          {/* Web Development Service */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20'>
            <div className='order-2 lg:order-1'>
              <div className='w-full h-[200px] md:h-[400px] rounded-lg overflow-hidden'>
                <Rive src='/rive/web.riv' stateMachines='State Machine 1' />
              </div>
            </div>
            <div className='order-1 lg:order-2 flex flex-col justify-center'>
              <h3 className='text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6'>
                Web Development
              </h3>
              <p className='text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed'>
                We provide high-quality web development services that focus on
                performance and modern trends to deliver exceptional user
                experiences.
              </p>
              <ul className='list-disc list-inside text-gray-300 mb-6 sm:mb-8 space-y-1 sm:space-y-2 text-sm sm:text-base'>
                <li>
                  Responsive Design – Ensuring seamless user experiences across
                  all devices
                </li>
                <li>
                  Performance Optimization – Improving page load times and user
                  interactions
                </li>
                <li>
                  Security Measures – Implementing best practices to protect
                  your data
                </li>
                <li>
                  SEO Optimization – Enhancing visibility and organic traffic
                </li>
                <li>
                  Scalability – Building solutions that grow with your business
                </li>
              </ul>
              <button className='bg-orange-500 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-colors hover:bg-orange-600 w-fit'>
                Learn More
              </button>
            </div>
          </div>

          {/* App Development Service */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div className='flex flex-col justify-center'>
              <h3 className='text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6'>
                App Development – iOS & Android
              </h3>
              <p className='text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed'>
                We build powerful, user-friendly mobile apps that combine speed,
                scalability, and seamless performance to engage your audience
                and achieve your business goals.
              </p>
              <ul className='list-disc list-inside text-gray-300 mb-6 sm:mb-8 space-y-1 sm:space-y-2 text-sm sm:text-base'>
                <li>
                  Cross-Platform & Native apps built with the latest
                  technologies
                </li>
                <li>User-focused design with smooth, intuitive experiences</li>
                <li>Optimized for performance, security, and future growth</li>
              </ul>
              <button className='bg-orange-500 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-colors hover:bg-orange-600 w-fit'>
                Learn More
              </button>
            </div>
            <div>
              <div className='w-full h-[200px] md:h-[400px] rounded-lg overflow-hidden pointer-events-none'>
                <Rive src='/rive/app.riv' stateMachines='State Machine 1' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id='approach' className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12 sm:mb-16'>
            <h2 className='text-2xl lg:text-4xl font-bold mb-3 sm:mb-4'>
              Our Approach
            </h2>
            <p className='text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto'>
              Our approach is built around research, collaboration, and
              innovation to ensure we deliver solutions that truly connect with
              your audience and help your business grow.
            </p>
          </div>
          <div className='w-full h-[200px] md:h-[400px] mb-16 rounded-lg overflow-hidden'>
            <Rive src='/rive/approach.riv' stateMachines='State Machine 1' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Research & Analysis */}
            <div className='text-center p-4 sm:p-6 rounded-lg  transition-colors'>
              <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                <IconCode className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
              </div>
              <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-3'>
                Research & Analysis
              </h3>
              <p className='text-gray-300 text-sm sm:text-base'>
                We study market trends and user preferences to design strategies
                that align with your goals.
              </p>
            </div>

            {/* Collaboration */}
            <div className='text-center p-4 sm:p-6 rounded-lg  transition-colors'>
              <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                <IconUsers className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
              </div>
              <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-3'>
                Collaboration
              </h3>
              <p className='text-gray-300 text-sm sm:text-base'>
                We work closely with your team, ensuring clear communication and
                transparency throughout the process.
              </p>
            </div>

            {/* Creative Execution */}
            <div className='text-center p-4 sm:p-6 rounded-lg  transition-colors'>
              <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                <IconRocket className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
              </div>
              <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-3'>
                Creative Execution
              </h3>
              <p className='text-gray-300 text-sm sm:text-base'>
                By combining innovation with the latest technologies, we build
                solutions that are efficient, scalable, and impactful.
              </p>
            </div>

            {/* Continuous Improvement */}
            <div className='text-center p-4 sm:p-6 rounded-lg  transition-colors'>
              <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                <IconRefresh className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
              </div>
              <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-3'>
                Continuous Improvement
              </h3>
              <p className='text-gray-300 text-sm sm:text-base'>
                We don&apos;t stop at delivery; we analyze performance and
                refine solutions for lasting success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Our Strengths Section */}
      <section id='strengths' className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12 sm:mb-16'>
            <h2 className='text-2xl lg:text-4xl font-bold mb-3 sm:mb-4'>
              Why Choose Us
            </h2>
            <p className='text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto'>
              We combine technical expertise with creative vision to deliver
              exceptional digital solutions that drive real business results.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Technical Excellence */}
            <div className='text-center p-4 sm:p-6 md:p-8 rounded-lg   transition-all duration-300'>
              <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6'>
                <IconCode className='w-8 h-8 sm:w-10 sm:h-10 text-white' />
              </div>
              <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4'>
                Technical Excellence
              </h3>
              <p className='text-gray-300 leading-relaxed text-sm sm:text-base'>
                Our team stays ahead of the curve with cutting-edge technologies
                and industry best practices, ensuring your solutions are built
                to last and perform.
              </p>
            </div>

            {/* Client-Focused Approach */}
            <div className='text-center p-4 sm:p-6 md:p-8 rounded-lg   transition-all duration-300'>
              <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6'>
                <IconHeart className='w-8 h-8 sm:w-10 sm:h-10 text-white' />
              </div>
              <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4'>
                Client-Focused Approach
              </h3>
              <p className='text-gray-300 leading-relaxed text-sm sm:text-base'>
                Your success is our priority. We work closely with you to
                understand your unique needs and deliver solutions that exceed
                expectations.
              </p>
            </div>

            {/* Proven Track Record */}
            <div className='text-center p-4 sm:p-6 md:p-8 rounded-lg   transition-all duration-300'>
              <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6'>
                <IconShield className='w-8 h-8 sm:w-10 sm:h-10 text-white' />
              </div>
              <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4'>
                Proven Track Record
              </h3>
              <p className='text-gray-300 leading-relaxed text-sm sm:text-base'>
                With years of experience and a portfolio of successful projects,
                we have the expertise to tackle any challenge and deliver
                results.
              </p>
            </div>

            {/* Agile Development */}
            <div className='text-center p-4 sm:p-6 md:p-8 rounded-lg   transition-all duration-300'>
              <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6'>
                <IconRocket className='w-8 h-8 sm:w-10 sm:h-10 text-white' />
              </div>
              <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4'>
                Agile Development
              </h3>
              <p className='text-gray-300 leading-relaxed text-sm sm:text-base'>
                We use agile methodologies to ensure rapid delivery, continuous
                improvement, and the flexibility to adapt to changing
                requirements.
              </p>
            </div>

            {/* 24/7 Support */}
            <div className='text-center p-4 sm:p-6 md:p-8 rounded-lg   transition-all duration-300'>
              <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6'>
                <IconRefresh className='w-8 h-8 sm:w-10 sm:h-10 text-white' />
              </div>
              <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4'>
                24/7 Support
              </h3>
              <p className='text-gray-300 leading-relaxed text-sm sm:text-base'>
                Our commitment doesn&apos;t end at launch. We provide ongoing
                support and maintenance to keep your digital solutions running
                smoothly.
              </p>
            </div>

            {/* Cost-Effective Solutions */}
            <div className='text-center p-4 sm:p-6 md:p-8 rounded-lg   transition-all duration-300'>
              <div className='w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6'>
                <IconShield className='w-8 h-8 sm:w-10 sm:h-10 text-white' />
              </div>
              <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4'>
                Cost-Effective Solutions
              </h3>
              <p className='text-gray-300 leading-relaxed text-sm sm:text-base'>
                We deliver maximum value for your investment, optimizing costs
                without compromising on quality or performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Client Reviews Section */}
      <section id='testimonials' className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12 sm:mb-16'>
            <h2 className='text-2xl lg:text-4xl font-bold mb-3 sm:mb-4'>
              What Our Clients Say
            </h2>
            <p className='text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto'>
              Don&apos;t just take our word for it. Here&apos;s what our
              satisfied clients have to say about working with us.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Testimonial 1 */}
            <div className=' border border-white/10 rounded-xl p-4 sm:p-6 md:p-8  transition-all duration-300'>
              <div className='flex items-center mb-3 sm:mb-4'>
                {[...Array(5)].map((_, i) => (
                  <IconStar
                    key={i}
                    className='w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current'
                  />
                ))}
              </div>
              <p className='text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base'>
                &quot;Bitifix transformed our online presence completely. Their
                technical expertise and attention to detail exceeded our
                expectations. The website they built for us has significantly
                increased our customer engagement.&quot;
              </p>
              <div className='flex items-center'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center mr-3 sm:mr-4'>
                  <span className='text-white font-bold text-sm sm:text-lg'>
                    SM
                  </span>
                </div>
                <div>
                  <h4 className='font-semibold text-white text-sm sm:text-base'>
                    Sarah Mitchell
                  </h4>
                  <p className='text-gray-400 text-xs sm:text-sm'>
                    CEO, TechStart Inc.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className=' border border-white/10  rounded-xl p-4 sm:p-6 md:p-8  transition-all duration-300'>
              <div className='flex items-center mb-3 sm:mb-4'>
                {[...Array(5)].map((_, i) => (
                  <IconStar
                    key={i}
                    className='w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current'
                  />
                ))}
              </div>
              <p className='text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base'>
                &quot;Working with Bitifix was a game-changer for our business.
                They delivered a mobile app that our users love, and their
                ongoing support has been exceptional. Highly recommended!&quot;
              </p>
              <div className='flex items-center'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center mr-3 sm:mr-4'>
                  <span className='text-white font-bold text-sm sm:text-lg'>
                    DJ
                  </span>
                </div>
                <div>
                  <h4 className='font-semibold text-white text-sm sm:text-base'>
                    David Johnson
                  </h4>
                  <p className='text-gray-400 text-xs sm:text-sm'>
                    Founder, InnovateLab
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className=' border border-white/10  rounded-xl p-4 sm:p-6 md:p-8  transition-all duration-300'>
              <div className='flex items-center mb-3 sm:mb-4'>
                {[...Array(5)].map((_, i) => (
                  <IconStar
                    key={i}
                    className='w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current'
                  />
                ))}
              </div>
              <p className='text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base'>
                &quot;The team at Bitifix understood our vision perfectly and
                brought it to life. Their creative approach and technical skills
                helped us stand out in a competitive market. Truly
                professional!&quot;
              </p>
              <div className='flex items-center'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center mr-3 sm:mr-4'>
                  <span className='text-white font-bold text-sm sm:text-lg'>
                    EW
                  </span>
                </div>
                <div>
                  <h4 className='font-semibold text-white text-sm sm:text-base'>
                    Emily Wilson
                  </h4>
                  <p className='text-gray-400 text-xs sm:text-sm'>
                    Marketing Director, GrowthCo
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className='mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center'>
            <div className='p-4 sm:p-6'>
              <div className='text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-1 sm:mb-2'>
                10+
              </div>
              <div className='text-gray-300 text-sm sm:text-base'>
                Projects Completed
              </div>
            </div>
            <div className='p-4 sm:p-6'>
              <div className='text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-1 sm:mb-2'>
                20+
              </div>
              <div className='text-gray-300 text-sm sm:text-base'>
                Happy Clients
              </div>
            </div>
            <div className='p-4 sm:p-6'>
              <div className='text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-1 sm:mb-2'>
                2+
              </div>
              <div className='text-gray-300 text-sm sm:text-base'>
                Years Experience
              </div>
            </div>
            <div className='p-4 sm:p-6'>
              <div className='text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-1 sm:mb-2'>
                24/7
              </div>
              <div className='text-gray-300 text-sm sm:text-base'>
                Support Available
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className='text-center mt-12 sm:mt-16'>
            <h3 className='text-2xl md:text-3xl font-bold mb-3 sm:mb-4'>
              Ready to Get Started?
            </h3>
            <p className='text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base'>
              Let&apos;s discuss how we can help bring your vision to life with
              our expertise and dedication to excellence.
            </p>
            <div className='flex  gap-4 justify-center'>
              <button className='bg-orange-500 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-colors hover:bg-orange-600'>
                Start Your Project
              </button>
              <button className='bg-transparent border-2 border-orange-500 text-orange-500 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-colors hover:bg-orange-500 hover:text-white'>
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
