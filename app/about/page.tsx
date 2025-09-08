'use client';

import React from 'react';
import Image from 'next/image';
import {
  IconUsers,
  IconRocket,
  IconTarget,
  IconHeart,
  IconCode,
  IconShield,
  IconStar,
  IconAward,
  IconTrendingUp,
  IconBulb,
  IconUsersGroup,
  IconClock,
} from '@tabler/icons-react';
import Rive from '@rive-app/react-canvas';

export default function About() {
  return (
    <div className='h-full text-white pt-16'>
      {/* Hero Section */}
      <section className='relative overflow-hidden py-12 sm:py-16 lg:py-20'>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight'>
              About Bitifix
            </h1>
            <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0'>
              We are passionate innovators dedicated to transforming ideas into
              exceptional digital experiences that drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className='py-12 sm:py-16 lg:py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
            <div className='order-2 lg:order-1'>
              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6'>
                Our Story
              </h2>
              <p className='text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed'>
                Founded with a vision to bridge the gap between innovative ideas
                and cutting-edge technology, Bitifix has been at the forefront
                of digital transformation since our inception.
              </p>
              <p className='text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed'>
                We believe that every great project starts with understanding
                your unique challenges and goals. Our team of passionate
                developers, designers, and strategists work tirelessly to create
                solutions that not only meet your requirements but exceed your
                expectations.
              </p>
              <p className='text-gray-300 text-base sm:text-lg leading-relaxed'>
                From startups looking to make their mark to established
                enterprises seeking digital innovation, we've helped countless
                businesses achieve their digital ambitions.
              </p>
            </div>
            <div className='relative order-1 lg:order-2'>
              <div className='w-full h-64 sm:h-80 lg:h-96 rounded-2xl flex items-center justify-center'>
                <Rive src='/rive/about.riv' stateMachines='State Machine 1' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className='py-12 sm:py-16 lg:py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12 sm:mb-16'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-4'>
              Our Mission & Vision
            </h2>
            <p className='text-gray-300 text-base sm:text-lg max-w-3xl mx-auto px-2 sm:px-0'>
              Driving digital excellence through innovation, collaboration, and
              unwavering commitment to our clients' success.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
            {/* Mission */}
            <div className='text-center p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-orange-500/50 transition-all duration-300'>
              <div className='w-16 h-16 sm:w-20 sm:h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6'>
                <IconTarget className='w-8 h-8 sm:w-10 sm:h-10 text-white' />
              </div>
              <h3 className='text-xl sm:text-2xl font-bold mb-3 sm:mb-4'>
                Our Mission
              </h3>
              <p className='text-gray-300 text-base sm:text-lg leading-relaxed'>
                To empower businesses with cutting-edge digital solutions that
                drive growth, enhance user experiences, and create lasting value
                in an ever-evolving technological landscape.
              </p>
            </div>

            {/* Vision */}
            <div className='text-center p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-orange-500/50 transition-all duration-300'>
              <div className='w-16 h-16 sm:w-20 sm:h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6'>
                <IconBulb className='w-8 h-8 sm:w-10 sm:h-10 text-white' />
              </div>
              <h3 className='text-xl sm:text-2xl font-bold mb-3 sm:mb-4'>
                Our Vision
              </h3>
              <p className='text-gray-300 text-base sm:text-lg leading-relaxed'>
                To be the leading force in digital innovation, recognized
                globally for our ability to transform complex challenges into
                elegant, scalable solutions that shape the future of business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className='py-12 sm:py-16 lg:py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12 sm:mb-16'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-4'>
              Our Core Values
            </h2>
            <p className='text-gray-300 text-base sm:text-lg max-w-3xl mx-auto px-2 sm:px-0'>
              These principles guide everything we do and shape how we work with
              our clients and each other.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            {/* Innovation */}
            <div className='text-center p-4 sm:p-6 rounded-xl border border-slate-800 hover:border-orange-500/50 transition-all duration-300'>
              <div className='w-14 h-14 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                <IconCode className='w-7 h-7 sm:w-8 sm:h-8 text-white' />
              </div>
              <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-3'>
                Innovation
              </h3>
              <p className='text-gray-300 text-sm sm:text-base'>
                We constantly explore new technologies and methodologies to
                deliver cutting-edge solutions.
              </p>
            </div>

            {/* Quality */}
            <div className='text-center p-4 sm:p-6 rounded-xl border border-slate-800 hover:border-orange-500/50 transition-all duration-300'>
              <div className='w-14 h-14 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                <IconAward className='w-7 h-7 sm:w-8 sm:h-8 text-white' />
              </div>
              <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-3'>
                Quality
              </h3>
              <p className='text-gray-300 text-sm sm:text-base'>
                We maintain the highest standards in everything we do, from code
                quality to client communication.
              </p>
            </div>

            {/* Collaboration */}
            <div className='text-center p-4 sm:p-6 rounded-xl border border-slate-800 hover:border-orange-500/50 transition-all duration-300'>
              <div className='w-14 h-14 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                <IconUsersGroup className='w-7 h-7 sm:w-8 sm:h-8 text-white' />
              </div>
              <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-3'>
                Collaboration
              </h3>
              <p className='text-gray-300 text-sm sm:text-base'>
                We work closely with our clients as partners, ensuring their
                vision becomes reality.
              </p>
            </div>

            {/* Integrity */}
            <div className='text-center p-4 sm:p-6 rounded-xl border border-slate-800 hover:border-orange-500/50 transition-all duration-300'>
              <div className='w-14 h-14 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                <IconShield className='w-7 h-7 sm:w-8 sm:h-8 text-white' />
              </div>
              <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-3'>
                Integrity
              </h3>
              <p className='text-gray-300 text-sm sm:text-base'>
                We conduct business with honesty, transparency, and ethical
                practices in all our interactions.
              </p>
            </div>

            {/* Passion */}
            <div className='text-center p-4 sm:p-6 rounded-xl border border-slate-800 hover:border-orange-500/50 transition-all duration-300'>
              <div className='w-14 h-14 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                <IconHeart className='w-7 h-7 sm:w-8 sm:h-8 text-white' />
              </div>
              <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-3'>
                Passion
              </h3>
              <p className='text-gray-300 text-sm sm:text-base'>
                We love what we do and bring enthusiasm and dedication to every
                project we undertake.
              </p>
            </div>

            {/* Excellence */}
            <div className='text-center p-4 sm:p-6 rounded-xl border border-slate-800 hover:border-orange-500/50 transition-all duration-300'>
              <div className='w-14 h-14 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                <IconStar className='w-7 h-7 sm:w-8 sm:h-8 text-white' />
              </div>
              <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-3'>
                Excellence
              </h3>
              <p className='text-gray-300 text-sm sm:text-base'>
                We strive for excellence in every detail, continuously improving
                and exceeding expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-12 sm:py-16 lg:py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12 sm:mb-16'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-4'>
              Meet Our Team
            </h2>
            <p className='text-gray-300 text-base sm:text-lg max-w-3xl mx-auto px-2 sm:px-0'>
              The talented individuals behind Bitifix's success, bringing
              together diverse skills and shared passion for digital innovation.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            {/* Team Member 1 */}
            <div className='text-center p-4 sm:p-6 rounded-xl border border-slate-800 hover:border-orange-500/50 transition-all duration-300'>
              <div className='w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                <span className='text-white font-bold text-xl sm:text-2xl'>
                  SM
                </span>
              </div>
              <h3 className='text-lg sm:text-xl font-bold mb-2'>
                Sarah Mitchell
              </h3>
              <p className='text-orange-500 mb-2 sm:mb-3 text-sm sm:text-base'>
                CEO & Founder
              </p>
              <p className='text-gray-300 text-xs sm:text-sm'>
                Visionary leader with 10+ years in tech, passionate about
                transforming businesses through innovation.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className='text-center p-4 sm:p-6 rounded-xl border border-slate-800 hover:border-orange-500/50 transition-all duration-300'>
              <div className='w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                <span className='text-white font-bold text-xl sm:text-2xl'>
                  DJ
                </span>
              </div>
              <h3 className='text-lg sm:text-xl font-bold mb-2'>
                David Johnson
              </h3>
              <p className='text-orange-500 mb-2 sm:mb-3 text-sm sm:text-base'>
                Lead Developer
              </p>
              <p className='text-gray-300 text-xs sm:text-sm'>
                Full-stack expert with expertise in modern frameworks and
                scalable architecture design.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className='text-center p-4 sm:p-6 rounded-xl border border-slate-800 hover:border-orange-500/50 transition-all duration-300'>
              <div className='w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                <span className='text-white font-bold text-xl sm:text-2xl'>
                  EW
                </span>
              </div>
              <h3 className='text-lg sm:text-xl font-bold mb-2'>
                Emily Wilson
              </h3>
              <p className='text-orange-500 mb-2 sm:mb-3 text-sm sm:text-base'>
                UI/UX Designer
              </p>
              <p className='text-gray-300 text-xs sm:text-sm'>
                Creative designer focused on user-centered design and creating
                exceptional digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-12 sm:py-16 lg:py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12 sm:mb-16'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-4'>
              Our Impact
            </h2>
            <p className='text-gray-300 text-base sm:text-lg max-w-3xl mx-auto px-2 sm:px-0'>
              Numbers that reflect our commitment to excellence and client
              success.
            </p>
          </div>

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'>
            <div className='text-center p-4 sm:p-6 rounded-xl border border-slate-800'>
              <div className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-500 mb-1 sm:mb-2'>
                10+
              </div>
              <div className='text-gray-300 text-sm sm:text-base lg:text-lg'>
                Projects Delivered
              </div>
            </div>

            <div className='text-center p-4 sm:p-6 rounded-xl border border-slate-800'>
              <div className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-500 mb-1 sm:mb-2'>
                5+
              </div>
              <div className='text-gray-300 text-sm sm:text-base lg:text-lg'>
                Happy Clients
              </div>
            </div>

            <div className='text-center p-4 sm:p-6 rounded-xl border border-slate-800'>
              <div className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-500 mb-1 sm:mb-2'>
                2+
              </div>
              <div className='text-gray-300 text-sm sm:text-base lg:text-lg'>
                Years Experience
              </div>
            </div>

            <div className='text-center p-4 sm:p-6 rounded-xl border border-slate-800'>
              <div className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-500 mb-1 sm:mb-2'>
                100%
              </div>
              <div className='text-gray-300 text-sm sm:text-base lg:text-lg'>
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className='py-12 sm:py-16 lg:py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12 sm:mb-16'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-4'>
              Why Choose Bitifix?
            </h2>
            <p className='text-gray-300 text-base sm:text-lg max-w-3xl mx-auto px-2 sm:px-0'>
              We combine technical expertise with creative vision to deliver
              exceptional results that drive real business value.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            <div className='text-center p-4 sm:p-6 rounded-xl border border-slate-800 hover:border-orange-500/50 transition-all duration-300'>
              <div className='w-14 h-14 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                <IconTrendingUp className='w-7 h-7 sm:w-8 sm:h-8 text-white' />
              </div>
              <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-3'>
                Proven Results
              </h3>
              <p className='text-gray-300 text-sm sm:text-base'>
                Our track record speaks for itself with consistently successful
                projects and satisfied clients.
              </p>
            </div>

            <div className='text-center p-4 sm:p-6 rounded-xl border border-slate-800 hover:border-orange-500/50 transition-all duration-300'>
              <div className='w-14 h-14 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                <IconClock className='w-7 h-7 sm:w-8 sm:h-8 text-white' />
              </div>
              <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-3'>
                Timely Delivery
              </h3>
              <p className='text-gray-300 text-sm sm:text-base'>
                We understand the importance of deadlines and consistently
                deliver projects on time and within budget.
              </p>
            </div>

            <div className='text-center p-4 sm:p-6 rounded-xl border border-slate-800 hover:border-orange-500/50 transition-all duration-300 sm:col-span-2 lg:col-span-1'>
              <div className='w-14 h-14 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                <IconUsers className='w-7 h-7 sm:w-8 sm:h-8 text-white' />
              </div>
              <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-3'>
                Dedicated Support
              </h3>
              <p className='text-gray-300 text-sm sm:text-base'>
                Our relationship doesn't end at launch. We provide ongoing
                support and maintenance for all our projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-12 sm:py-16 lg:py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6'>
            Ready to Work With Us?
          </h2>
          <p className='text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto px-2 sm:px-0'>
            Let's discuss how we can help bring your vision to life with our
            expertise, passion, and commitment to excellence.
          </p>
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto'>
            <button className='bg-orange-500 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold transition-colors hover:bg-orange-600 w-full sm:w-auto'>
              Start Your Project
            </button>
            <button className='bg-transparent border-2 border-orange-500 text-orange-500 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold transition-colors hover:bg-orange-500 hover:text-white w-full sm:w-auto'>
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
