'use client';

import React, { useState } from 'react';
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconClock,
  IconSend,
  IconCheck,
} from '@tabler/icons-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

const services = [
  'Web Development',
  'App Development',
  'UI/UX Design',
  'Digital Marketing',
  'Consulting',
  'Other',
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <div className='min-h-screen text-white pt-16'>
      {/* Hero Section */}
      <section className='pt-12 sm:py-16 lg:py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6'>
              Get In Touch
            </h1>
            <p className='text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0'>
              Ready to bring your vision to life? Let&apos;s discuss how we can
              help transform your ideas into exceptional digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className='py-12 sm:py-16 lg:py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
            {/* Contact Form */}
            <div className='backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10'>
              <h3 className='text-xl sm:text-2xl font-bold mb-4 sm:mb-6'>
                Send us a Message
              </h3>

              {isSubmitted ? (
                <div className='text-center py-8 sm:py-12'>
                  <div className='w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                    <IconCheck className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                  </div>
                  <h4 className='text-lg sm:text-xl font-semibold mb-2'>
                    Message Sent!
                  </h4>
                  <p className='text-gray-300 text-sm sm:text-base'>
                    Thank you for reaching out. We&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className='space-y-4 sm:space-y-6'
                >
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
                    <div>
                      <label
                        htmlFor='name'
                        className='block text-sm font-medium mb-1 sm:mb-2'
                      >
                        Full Name *
                      </label>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className='w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#111] border border-white/10 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-colors text-sm sm:text-base'
                        placeholder='Your full name'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium mb-1 sm:mb-2'
                      >
                        Email Address *
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className='w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#111] border border-white/10 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-colors text-sm sm:text-base'
                        placeholder='your@email.com'
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
                    <div>
                      <label
                        htmlFor='company'
                        className='block text-sm font-medium mb-1 sm:mb-2'
                      >
                        Company
                      </label>
                      <input
                        type='text'
                        id='company'
                        name='company'
                        value={formData.company}
                        onChange={handleInputChange}
                        className='w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#111] border border-white/10 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-colors text-sm sm:text-base'
                        placeholder='Your company name'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='phone'
                        className='block text-sm font-medium mb-1 sm:mb-2'
                      >
                        Phone Number
                      </label>
                      <input
                        type='tel'
                        id='phone'
                        name='phone'
                        value={formData.phone}
                        onChange={handleInputChange}
                        className='w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#111] border border-white/10 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-colors text-sm sm:text-base'
                        placeholder='+91 8888888888'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='service'
                      className='block text-sm font-medium mb-1 sm:mb-2'
                    >
                      Service Interested In
                    </label>
                    <div className='relative'>
                      <select
                        id='service'
                        name='service'
                        value={formData.service}
                        onChange={handleInputChange}
                        className='w-full px-4 sm:px-4 py-2 sm:py-3 bg-[#111] border border-white/10 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-colors text-sm sm:text-base appearance-none pr-10'
                      >
                        <option value=''>Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                        <svg
                          className='w-4 h-4 text-white/60'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M19 9l-7 7-7-7'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium mb-1 sm:mb-2'
                    >
                      Message *
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className='w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#111] border border-white/10 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-colors resize-none text-sm sm:text-base'
                      placeholder='Tell us about your project...'
                    />
                  </div>

                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='w-full bg-orange-500 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-sm sm:text-base'
                  >
                    {isSubmitting ? (
                      <>
                        <div className='w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <IconSend className='w-4 h-4 sm:w-5 sm:h-5' />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className='space-y-6 sm:space-y-8'>
              <div>
                <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6'>
                  Let&apos;s Start a Conversation
                </h2>
                <p className='text-gray-300 text-base sm:text-lg leading-relaxed'>
                  We&apos;re here to help you succeed. Reach out to us through
                  any of the channels below, and we&apos;ll get back to you
                  within 24 hours.
                </p>
              </div>

              {/* Contact Details */}
              <div className='space-y-4 sm:space-y-6'>
                <div className='flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg border border-white/10'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0'>
                    <IconMail className='w-5 h-5 sm:w-6 sm:h-6 text-white' />
                  </div>
                  <div className='min-w-0 flex-1'>
                    <h3 className='font-semibold text-base sm:text-lg mb-1'>
                      Email Us
                    </h3>
                    <p className='text-gray-300 text-sm sm:text-base break-all sm:break-normal'>
                      info@bitifix.com
                    </p>
                    <p className='text-gray-400 text-xs sm:text-sm'>
                      We&apos;ll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg border border-white/10'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0'>
                    <IconPhone className='w-5 h-5 sm:w-6 sm:h-6 text-white' />
                  </div>
                  <div className='min-w-0 flex-1'>
                    <h3 className='font-semibold text-base sm:text-lg mb-1'>
                      Call Us
                    </h3>
                    <p className='text-gray-300 text-sm sm:text-base'>
                      +91 9902696211
                    </p>
                    <p className='text-gray-400 text-xs sm:text-sm'>24/7</p>
                  </div>
                </div>

                <div className='flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg border border-white/10'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0'>
                    <IconMapPin className='w-5 h-5 sm:w-6 sm:h-6 text-white' />
                  </div>
                  <div className='min-w-0 flex-1'>
                    <h3 className='font-semibold text-base sm:text-lg mb-1'>
                      Visit Us
                    </h3>
                    <p className='text-gray-300 text-sm sm:text-base'>
                      2nd Cross, 1st Main, Sector 1, HSR Layout, Bangalore,
                      Karnataka, India
                    </p>
                    <p className='text-gray-400 text-xs sm:text-sm'>
                      By appointment only
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg border border-white/10'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0'>
                    <IconClock className='w-5 h-5 sm:w-6 sm:h-6 text-white' />
                  </div>
                  <div className='min-w-0 flex-1'>
                    <h3 className='font-semibold text-base sm:text-lg mb-1'>
                      Business Hours
                    </h3>
                    <p className='text-gray-300 text-sm sm:text-base'>
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className='text-gray-300 text-sm sm:text-base'>
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                    <p className='text-gray-400 text-xs sm:text-sm'>
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-12 sm:py-16 lg:py-20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-8 sm:mb-12'>
            <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4'>
              Frequently Asked Questions
            </h2>
            <p className='text-gray-300 text-base sm:text-lg'>
              Quick answers to common questions about our services
            </p>
          </div>

          <div className='space-y-4 sm:space-y-6'>
            <div className='bg-[#111] rounded-lg p-4 sm:p-6 border border-white/10'>
              <h3 className='text-base sm:text-lg font-semibold mb-2 sm:mb-3'>
                How long does a typical project take?
              </h3>
              <p className='text-gray-300 text-sm sm:text-base leading-relaxed'>
                Project timelines vary based on complexity. A simple website
                typically takes 2-4 weeks, while complex applications can take
                2-6 months. We provide detailed timelines during our initial
                consultation.
              </p>
            </div>

            <div className='bg-[#111] rounded-lg p-4 sm:p-6 border border-white/10'>
              <h3 className='text-base sm:text-lg font-semibold mb-2 sm:mb-3'>
                Do you provide ongoing support after launch?
              </h3>
              <p className='text-gray-300 text-sm sm:text-base leading-relaxed'>
                Yes! We offer comprehensive maintenance and support packages to
                keep your digital solutions running smoothly. This includes
                updates, security patches, and performance monitoring.
              </p>
            </div>

            <div className='bg-[#111] rounded-lg p-4 sm:p-6 border border-white/10'>
              <h3 className='text-base sm:text-lg font-semibold mb-2 sm:mb-3'>
                What technologies do you work with?
              </h3>
              <p className='text-gray-300 text-sm sm:text-base leading-relaxed'>
                We work with modern technologies including React, Next.js,
                Node.js, Python, React Native, Flutter, and more. We choose the
                best technology stack based on your project requirements.
              </p>
            </div>

            <div className='bg-[#111] rounded-lg p-4 sm:p-6 border border-white/10'>
              <h3 className='text-base sm:text-lg font-semibold mb-2 sm:mb-3'>
                How do you handle project communication?
              </h3>
              <p className='text-gray-300 text-sm sm:text-base leading-relaxed'>
                We maintain regular communication through scheduled check-ins,
                project management tools, and direct access to your dedicated
                project manager. You&apos;ll always know the status of your
                project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className='py-12 sm:py-16 lg:py-20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6'>
            Ready to Start Your Project?
          </h2>
          <p className='text-gray-300 text-base sm:text-lg mb-6 sm:mb-8'>
            Let's discuss your vision and create something amazing together.
          </p>
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto'>
            <button className='bg-orange-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors text-sm sm:text-base'>
              Schedule a Call
            </button>
            <button className='bg-transparent border-2 border-orange-500 text-orange-500 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-colors text-sm sm:text-base'>
              View Our Portfolio
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}
