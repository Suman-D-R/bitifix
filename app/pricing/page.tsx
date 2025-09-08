'use client';

import { useEffect, useState } from 'react';
import {
  IconCurrencyDollar,
  IconMail,
  IconPhone,
  IconUser,
  IconMessage,
  IconCheck,
  IconArrowRight,
  IconRocket,
  IconStar,
} from '@tabler/icons-react';
import { handleHashScroll } from '../utils/scrollUtils';

export default function Pricing() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  useEffect(() => {
    // Handle smooth scrolling when the page loads with a hash
    handleHashScroll();
  }, []);

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
    setSubmitStatus('idle');

    try {
      // Simulate API call - replace with actual form submission logic
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        budget: '',
        description: '',
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='h-full text-white pt-20'>
      {/* Hero Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12 sm:mb-16'>
            <h1 className='text-3xl lg:text-5xl font-bold mb-4 sm:mb-6'>
              Pricing & Packages
            </h1>
            <p className='text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto'>
              Choose the perfect package for your project needs. We offer
              flexible pricing options to fit every budget and deliver
              exceptional value.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id='pricing' className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12 sm:mb-16'>
            <h2 className='text-2xl lg:text-4xl font-bold mb-3 sm:mb-4'>
              What&apos;s Your Budget?
            </h2>
            <p className='text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto'>
              Choose the budget range that best fits your project requirements.
              We&apos;ll tailor our services to deliver maximum value within
              your budget.
            </p>
          </div>

          {/* Budget Options */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
            {/* Budget Option 1 */}
            <div className='bg-gray-800/50 rounded-lg p-8 text-center border border-gray-700 hover:border-orange-500 transition-all duration-300'>
              <div className='w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6'>
                <IconCurrencyDollar className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-bold mb-4'>Starter Package</h3>
              <div className='text-3xl font-bold text-orange-500 mb-4'>
                Less than $1,000
              </div>
              <p className='text-gray-300 mb-6 text-sm'>
                Perfect for small projects, landing pages, or getting started
                with your digital presence.
              </p>
              <ul className='text-left text-gray-300 text-sm space-y-2 mb-8'>
                <li className='flex items-center space-x-2'>
                  <IconCheck className='w-4 h-4 text-orange-500 flex-shrink-0' />
                  <span>Basic website design</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <IconCheck className='w-4 h-4 text-orange-500 flex-shrink-0' />
                  <span>Responsive layout</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <IconCheck className='w-4 h-4 text-orange-500 flex-shrink-0' />
                  <span>Basic SEO setup</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <IconCheck className='w-4 h-4 text-orange-500 flex-shrink-0' />
                  <span>1 month support</span>
                </li>
              </ul>
              <button className='w-full bg-orange-500 text-white py-3 rounded-full font-semibold transition-colors hover:bg-orange-600'>
                Choose This Plan
              </button>
            </div>

            {/* Budget Option 2 */}
            <div className='bg-gray-800/50 rounded-lg p-8 text-center border-2 border-orange-500 relative'>
              <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                <span className='bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold'>
                  Most Popular
                </span>
              </div>
              <div className='w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6'>
                <IconRocket className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-bold mb-4'>Professional Package</h3>
              <div className='text-3xl font-bold text-orange-500 mb-4'>
                Around $5,000
              </div>
              <p className='text-gray-300 mb-6 text-sm'>
                Ideal for growing businesses that need comprehensive digital
                solutions.
              </p>
              <ul className='text-left text-gray-300 text-sm space-y-2 mb-8'>
                <li className='flex items-center space-x-2'>
                  <IconCheck className='w-4 h-4 text-orange-500 flex-shrink-0' />
                  <span>Custom web application</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <IconCheck className='w-4 h-4 text-orange-500 flex-shrink-0' />
                  <span>Mobile app development</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <IconCheck className='w-4 h-4 text-orange-500 flex-shrink-0' />
                  <span>Advanced SEO & Analytics</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <IconCheck className='w-4 h-4 text-orange-500 flex-shrink-0' />
                  <span>3 months support</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <IconCheck className='w-4 h-4 text-orange-500 flex-shrink-0' />
                  <span>Performance optimization</span>
                </li>
              </ul>
              <button className='w-full bg-orange-500 text-white py-3 rounded-full font-semibold transition-colors hover:bg-orange-600'>
                Choose This Plan
              </button>
            </div>

            {/* Budget Option 3 */}
            <div className='bg-gray-800/50 rounded-lg p-8 text-center border border-gray-700 hover:border-orange-500 transition-all duration-300'>
              <div className='w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6'>
                <IconStar className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-bold mb-4'>Enterprise Package</h3>
              <div className='text-3xl font-bold text-orange-500 mb-4'>
                Not Affected
              </div>
              <p className='text-gray-300 mb-6 text-sm'>
                For large-scale projects with complex requirements and unlimited
                budget flexibility.
              </p>
              <ul className='text-left text-gray-300 text-sm space-y-2 mb-8'>
                <li className='flex items-center space-x-2'>
                  <IconCheck className='w-4 h-4 text-orange-500 flex-shrink-0' />
                  <span>Full-stack development</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <IconCheck className='w-4 h-4 text-orange-500 flex-shrink-0' />
                  <span>Custom integrations</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <IconCheck className='w-4 h-4 text-orange-500 flex-shrink-0' />
                  <span>Dedicated team</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <IconCheck className='w-4 h-4 text-orange-500 flex-shrink-0' />
                  <span>Ongoing maintenance</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <IconCheck className='w-4 h-4 text-orange-500 flex-shrink-0' />
                  <span>24/7 support</span>
                </li>
              </ul>
              <button className='w-full bg-orange-500 text-white py-3 rounded-full font-semibold transition-colors hover:bg-orange-600'>
                Choose This Plan
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-gray-800/30 rounded-lg p-8 border border-gray-700'>
            <div className='text-center mb-8'>
              <h3 className='text-2xl font-bold mb-4'>Get Your Custom Quote</h3>
              <p className='text-gray-300 text-sm sm:text-base'>
                Tell us about your project and we&apos;ll provide a detailed
                proposal tailored to your needs.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className='max-w-2xl mx-auto space-y-6'
            >
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className='bg-green-500/20 border border-green-500 rounded-lg p-4 text-center'>
                  <p className='text-green-400 font-medium'>
                    Thank you! Your quote request has been submitted
                    successfully. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className='bg-red-500/20 border border-red-500 rounded-lg p-4 text-center'>
                  <p className='text-red-400 font-medium'>
                    Sorry, there was an error submitting your request. Please
                    try again or contact us directly.
                  </p>
                </div>
              )}

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-2'>
                    <IconUser className='w-4 h-4 inline mr-2' />
                    Full Name *
                  </label>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors'
                    placeholder='Enter your full name'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-2'>
                    <IconMail className='w-4 h-4 inline mr-2' />
                    Email Address *
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors'
                    placeholder='Enter your email'
                  />
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-2'>
                    <IconPhone className='w-4 h-4 inline mr-2' />
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors'
                    placeholder='Enter your phone number'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-2'>
                    <IconCurrencyDollar className='w-4 h-4 inline mr-2' />
                    Selected Budget *
                  </label>
                  <select
                    name='budget'
                    value={formData.budget}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors'
                  >
                    <option value='' className='bg-gray-700'>
                      Select your budget range
                    </option>
                    <option value='less-than-1000' className='bg-gray-700'>
                      Less than $1,000
                    </option>
                    <option value='around-5000' className='bg-gray-700'>
                      Around $5,000
                    </option>
                    <option value='not-affected' className='bg-gray-700'>
                      Not affected by budget
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-300 mb-2'>
                  <IconMessage className='w-4 h-4 inline mr-2' />
                  Project Description *
                </label>
                <textarea
                  name='description'
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors resize-none'
                  placeholder='Describe your project requirements, goals, and any specific features you need...'
                />
              </div>

              <div className='text-center'>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className={`px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center space-x-2 mx-auto ${
                    isSubmitting
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      : 'bg-orange-500 text-white hover:bg-orange-600'
                  }`}
                >
                  <span>
                    {isSubmitting ? 'Submitting...' : 'Get My Custom Quote'}
                  </span>
                  {!isSubmitting && <IconArrowRight className='w-5 h-5' />}
                </button>
              </div>
            </form>
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
