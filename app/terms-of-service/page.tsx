'use client';

import React from 'react';
import {
  IconFileText,
  IconShield,
  IconAlertTriangle,
  IconGavel,
  IconUser,
  IconMail,
  IconPhone,
} from '@tabler/icons-react';

export default function TermsOfService() {
  return (
    <div className='h-full text-white pt-16'>
      {/* Hero Section */}
      <section className='relative overflow-hidden py-12 sm:py-16 lg:py-20'>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight'>
              Terms of Service
            </h1>
            <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0'>
              Please read these terms carefully before using our services. These
              terms govern your use of our website and services.
            </p>
            <p className='text-sm sm:text-base text-gray-400 max-w-2xl mx-auto'>
              Last updated:{' '}
              {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className='py-8 sm:py-12 lg:py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='prose prose-lg max-w-none'>
            {/* Introduction */}
            <div className='mb-8 sm:mb-12 lg:mb-16'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white leading-tight'>
                Introduction
              </h2>
              <p className='text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4'>
                Welcome to Bitifix. These Terms of Service (&quot;Terms&quot;)
                govern your use of our website, services, and any related
                applications (collectively, the &quot;Service&quot;) operated by
                Bitifix (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
              </p>
              <p className='text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed'>
                By accessing or using our Service, you agree to be bound by
                these Terms. If you disagree with any part of these terms, then
                you may not access the Service.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <div className='mb-8 sm:mb-12 lg:mb-16'>
              <div className='flex items-center mb-4 text-lg lg:text-2xl font-bold'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-orange-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0'>
                  <IconFileText className='w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white' />
                </div>
                Acceptance of Terms
              </div>
              <p className='text-gray-300 text-base sm:text-lg leading-relaxed mb-4'>
                By accessing and using this website, you accept and agree to be
                bound by the terms and provision of this agreement.
                Additionally, when using this website&apos;s particular
                services, you shall be subject to any posted guidelines or rules
                applicable to such services.
              </p>
              <p className='text-gray-300 text-base sm:text-lg leading-relaxed'>
                If you do not agree to abide by the above, please do not use
                this service.
              </p>
            </div>

            {/* Use License */}
            <div className='mb-8 sm:mb-12 lg:mb-16'>
              <div className='flex items-center mb-4 text-lg lg:text-2xl font-bold'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-orange-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0'>
                  <IconShield className='w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white' />
                </div>
                Use License
              </div>
              <p className='text-gray-300 text-base sm:text-lg leading-relaxed mb-4'>
                Permission is granted to temporarily download one copy of the
                materials on Bitifix&apos;s website for personal, non-commercial
                transitory viewing only. This is the grant of a license, not a
                transfer of title, and under this license you may not:
              </p>
              <ul className='list-disc list-inside text-gray-300 space-y-2 text-base sm:text-lg ml-4'>
                <li>Modify or copy the materials</li>
                <li>
                  Use the materials for any commercial purpose or for any public
                  display
                </li>
                <li>
                  Attempt to reverse engineer any software contained on the
                  website
                </li>
                <li>
                  Remove any copyright or other proprietary notations from the
                  materials
                </li>
              </ul>
              <p className='text-gray-300 text-base sm:text-lg leading-relaxed mt-4'>
                This license shall automatically terminate if you violate any of
                these restrictions and may be terminated by Bitifix at any time.
              </p>
            </div>

            {/* Service Description */}
            <div className='mb-8 sm:mb-12 lg:mb-16'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white leading-tight'>
                Service Description
              </h2>
              <p className='text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4'>
                Bitifix provides digital solutions and business growth services
                including but not limited to:
              </p>
              <ul className='list-disc list-inside text-gray-300 space-y-2 text-sm sm:text-base md:text-lg ml-4'>
                <li>Web development and design services</li>
                <li>Mobile application development</li>
                <li>UI/UX design services</li>
                <li>Digital consulting and strategy</li>
                <li>Technical support and maintenance</li>
                <li>Content creation and marketing services</li>
              </ul>
            </div>

            {/* User Accounts */}
            <div className='mb-8 sm:mb-12 lg:mb-16'>
              <div className='flex items-center mb-4 text-lg lg:text-2xl font-bold'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-orange-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0'>
                  <IconUser className='w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white' />
                </div>
                User Accounts
              </div>
              <p className='text-gray-300 text-base sm:text-lg leading-relaxed mb-4'>
                When you create an account with us, you must provide information
                that is accurate, complete, and current at all times. You are
                responsible for safeguarding the password and for all activities
                that occur under your account.
              </p>
              <p className='text-gray-300 text-base sm:text-lg leading-relaxed'>
                You agree not to disclose your password to any third party and
                to take sole responsibility for any activities or actions under
                your account, whether or not you have authorized such activities
                or actions.
              </p>
            </div>

            {/* Prohibited Uses */}
            <div className='mb-8 sm:mb-12 lg:mb-16'>
              <div className='flex items-center mb-4 text-lg lg:text-2xl font-bold'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-orange-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0'>
                  <IconAlertTriangle className='w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white' />
                </div>
                Prohibited Uses
              </div>
              <p className='text-gray-300 text-base sm:text-lg leading-relaxed mb-4'>
                You may not use our Service:
              </p>
              <ul className='list-disc list-inside text-gray-300 space-y-2 text-base sm:text-lg ml-4'>
                <li>
                  For any unlawful purpose or to solicit others to perform
                  unlawful acts
                </li>
                <li>
                  To violate any international, federal, provincial, or state
                  regulations, rules, laws, or local ordinances
                </li>
                <li>
                  To infringe upon or violate our intellectual property rights
                  or the intellectual property rights of others
                </li>
                <li>
                  To harass, abuse, insult, harm, defame, slander, disparage,
                  intimidate, or discriminate
                </li>
                <li>To submit false or misleading information</li>
                <li>
                  To upload or transmit viruses or any other type of malicious
                  code
                </li>
                <li>
                  To spam, phish, pharm, pretext, spider, crawl, or scrape
                </li>
                <li>For any obscene or immoral purpose</li>
                <li>
                  To interfere with or circumvent the security features of the
                  Service
                </li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className='mb-8 sm:mb-12 lg:mb-16'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white leading-tight'>
                Intellectual Property Rights
              </h2>
              <p className='text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4'>
                The Service and its original content, features, and
                functionality are and will remain the exclusive property of
                Bitifix and its licensors. The Service is protected by
                copyright, trademark, and other laws.
              </p>
              <p className='text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed'>
                Our trademarks and trade dress may not be used in connection
                with any product or service without our prior written consent.
              </p>
            </div>

            {/* Payment Terms */}
            <div className='mb-8 sm:mb-12 lg:mb-16'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white leading-tight'>
                Payment Terms
              </h2>
              <p className='text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4'>
                Payment terms for our services will be specified in individual
                service agreements or project contracts. Generally:
              </p>
              <ul className='list-disc list-inside text-gray-300 space-y-2 text-sm sm:text-base md:text-lg ml-4'>
                <li>
                  Payment schedules will be agreed upon before project
                  commencement
                </li>
                <li>
                  Invoices are due within the timeframe specified in the
                  agreement
                </li>
                <li>
                  Late payments may incur additional charges as specified in the
                  agreement
                </li>
                <li>
                  All prices are exclusive of applicable taxes unless otherwise
                  stated
                </li>
                <li>
                  Refund policies will be outlined in individual service
                  agreements
                </li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className='mb-8 sm:mb-12 lg:mb-16'>
              <div className='flex items-center mb-4 text-lg lg:text-2xl font-bold'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-orange-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0'>
                  <IconGavel className='w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white' />
                </div>
                Limitation of Liability
              </div>
              <p className='text-gray-300 text-base sm:text-lg leading-relaxed mb-4'>
                In no event shall Bitifix, nor its directors, employees,
                partners, agents, suppliers, or affiliates, be liable for any
                indirect, incidental, special, consequential, or punitive
                damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses, resulting from your
                use of the Service.
              </p>
              <p className='text-gray-300 text-base sm:text-lg leading-relaxed'>
                Our total liability to you for all damages shall not exceed the
                amount you paid us for the Service in the twelve (12) months
                preceding the claim.
              </p>
            </div>

            {/* Disclaimer */}
            <div className='mb-8 sm:mb-12 lg:mb-16'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white leading-tight'>
                Disclaimer
              </h2>
              <p className='text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4'>
                The information on this website is provided on an &quot;as
                is&quot; basis. To the fullest extent permitted by law, this
                Company:
              </p>
              <ul className='list-disc list-inside text-gray-300 space-y-2 text-sm sm:text-base md:text-lg ml-4'>
                <li>
                  Excludes all representations and warranties relating to this
                  website and its contents
                </li>
                <li>
                  Excludes all liability for damages arising out of or in
                  connection with your use of this website
                </li>
                <li>
                  Does not warrant that the website will be constantly available
                  or available at all
                </li>
                <li>
                  Does not warrant that the information on this website is
                  complete, true, accurate, or non-misleading
                </li>
              </ul>
            </div>

            {/* Termination */}
            <div className='mb-8 sm:mb-12 lg:mb-16'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white leading-tight'>
                Termination
              </h2>
              <p className='text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4'>
                We may terminate or suspend your account and bar access to the
                Service immediately, without prior notice or liability, under
                our sole discretion, for any reason whatsoever and without
                limitation, including but not limited to a breach of the Terms.
              </p>
              <p className='text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed'>
                If you wish to terminate your account, you may simply
                discontinue using the Service.
              </p>
            </div>

            {/* Governing Law */}
            <div className='mb-8 sm:mb-12 lg:mb-16'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white leading-tight'>
                Governing Law
              </h2>
              <p className='text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed'>
                These Terms shall be interpreted and governed by the laws of
                India, without regard to its conflict of law provisions. Our
                failure to enforce any right or provision of these Terms will
                not be considered a waiver of those rights.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className='mb-8 sm:mb-12 lg:mb-16'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white leading-tight'>
                Changes to Terms
              </h2>
              <p className='text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed'>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will provide at least 30 days notice prior to any new terms
                taking effect.
              </p>
            </div>

            {/* Contact Information */}
            <div className='mb-8 sm:mb-12 lg:mb-16'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white leading-tight'>
                Contact Us
              </h2>
              <p className='text-gray-300 text-base sm:text-lg leading-relaxed mb-6'>
                If you have any questions about these Terms of Service, please
                contact us:
              </p>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                <div className='flex items-center space-x-3 p-4 rounded-lg'>
                  <div className='w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0'>
                    <IconMail className='w-5 h-5 text-white' />
                  </div>
                  <div className='min-w-0 flex-1'>
                    <h3 className='text-base sm:text-lg font-semibold text-white mb-1 flex items-center gap-2'>
                      Email
                    </h3>
                    <p className='text-gray-300 text-sm sm:text-base break-all'>
                      info@bitifix.com
                    </p>
                  </div>
                </div>

                <div className='flex items-center space-x-3 p-4 rounded-lg'>
                  <div className='w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0'>
                    <IconPhone className='w-5 h-5 text-white' />
                  </div>
                  <div className='min-w-0 flex-1'>
                    <h3 className='text-base sm:text-lg font-semibold text-white mb-1 flex items-center gap-2'>
                      Phone
                    </h3>
                    <p className='text-gray-300 text-sm sm:text-base'>
                      +91 9902696211
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
