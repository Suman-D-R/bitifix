'use client';

import React from 'react';
import {
  IconShield,
  IconEye,
  IconLock,
  IconDatabase,
  IconMail,
  IconPhone,
} from '@tabler/icons-react';

export default function PrivacyPolicy() {
  return (
    <div className='h-full text-white pt-16'>
      {/* Hero Section */}
      <section className='relative overflow-hidden py-12 sm:py-16 lg:py-20'>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight'>
              Privacy Policy
            </h1>
            <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0'>
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your information.
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
                At Bitifix, we are committed to protecting your privacy and
                ensuring the security of your personal information. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website or use our services.
              </p>
              <p className='text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed'>
                By using our website or services, you agree to the collection
                and use of information in accordance with this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className='mb-8 sm:mb-12 lg:mb-16'>
              <div className='flex items-center mb-4 text-lg lg:text-2xl font-bold'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-orange-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0'>
                  <IconDatabase />
                </div>
                Information We Collect
              </div>
              <div className='space-y-6'>
                <div>
                  <h3 className='text-xl sm:text-2xl font-bold mb-3 text-white'>
                    Personal Information
                  </h3>
                  <p className='text-gray-300 text-base sm:text-lg leading-relaxed mb-3'>
                    We may collect personal information that you voluntarily
                    provide to us, including:
                  </p>
                  <ul className='list-disc list-inside text-gray-300 space-y-2 text-base sm:text-lg ml-4'>
                    <li>
                      Name and contact information (email address, phone number)
                    </li>
                    <li>Company name and job title</li>
                    <li>Project requirements and specifications</li>
                    <li>Communication preferences</li>
                    <li>Any other information you choose to provide</li>
                  </ul>
                </div>

                <div>
                  <h3 className='text-xl sm:text-2xl font-bold mb-3 text-white'>
                    Automatically Collected Information
                  </h3>
                  <p className='text-gray-300 text-base sm:text-lg leading-relaxed mb-3'>
                    When you visit our website, we may automatically collect
                    certain information, including:
                  </p>
                  <ul className='list-disc list-inside text-gray-300 space-y-2 text-base sm:text-lg ml-4'>
                    <li>IP address and location data</li>
                    <li>Browser type and version</li>
                    <li>Device information and operating system</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring website information</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className='mb-8 sm:mb-12 lg:mb-16'>
              <div className='flex items-center mb-4 text-lg lg:text-2xl font-bold'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-orange-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0'>
                  <IconEye className='w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white' />
                </div>
                How We Use Your Information
              </div>

              <p className='text-gray-300 text-base sm:text-lg leading-relaxed mb-4'>
                We use the information we collect for various purposes,
                including:
              </p>
              <ul className='list-disc list-inside text-gray-300 space-y-2 text-base sm:text-lg ml-4'>
                <li>Providing and improving our services</li>
                <li>Communicating with you about projects and services</li>
                <li>Responding to your inquiries and support requests</li>
                <li>Processing transactions and managing accounts</li>
                <li>Analyzing website usage and improving user experience</li>
                <li>
                  Marketing and promotional communications (with your consent)
                </li>
                <li>Complying with legal obligations</li>
                <li>Protecting against fraud and security threats</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className='mb-8 sm:mb-12 lg:mb-16'>
              <div className='flex items-center mb-4 text-lg lg:text-2xl font-bold'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-orange-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0'>
                  <IconShield className='w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white' />
                </div>
                Information Sharing and Disclosure
              </div>

              <p className='text-gray-300 text-base sm:text-lg leading-relaxed mb-4'>
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information in the following
                circumstances:
              </p>
              <ul className='list-disc list-inside text-gray-300 space-y-2 text-base sm:text-lg ml-4'>
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>
                  With trusted service providers who assist in our operations
                </li>
                <li>In connection with a business transfer or acquisition</li>
                <li>To prevent fraud or security threats</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className='mb-8 sm:mb-12 lg:mb-16'>
              <div className='flex items-center mb-4 text-lg lg:text-2xl font-bold'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-orange-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0'>
                  <IconLock className='w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white' />
                </div>
                Data Security
              </div>

              <p className='text-gray-300 text-base sm:text-lg leading-relaxed mb-4'>
                We implement appropriate technical and organizational security
                measures to protect your personal information against:
              </p>
              <ul className='list-disc list-inside text-gray-300 space-y-2 text-base sm:text-lg ml-4'>
                <li>Unauthorized access, use, or disclosure</li>
                <li>Accidental loss or destruction</li>
                <li>Malicious attacks and data breaches</li>
                <li>Improper alteration or modification</li>
              </ul>
              <p className='text-gray-300 text-base sm:text-lg leading-relaxed mt-4'>
                However, no method of transmission over the internet or
                electronic storage is 100% secure. While we strive to protect
                your information, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Cookies */}
            <div className='mb-8 sm:mb-12 lg:mb-16'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white leading-tight'>
                Cookies and Tracking Technologies
              </h2>
              <p className='text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4'>
                We use cookies and similar tracking technologies to enhance your
                browsing experience and analyze website traffic. You can control
                cookie settings through your browser preferences.
              </p>
              <p className='text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed'>
                Types of cookies we use:
              </p>
              <ul className='list-disc list-inside text-gray-300 space-y-2 text-sm sm:text-base md:text-lg ml-4 mt-2'>
                <li>Essential cookies for website functionality</li>
                <li>Analytics cookies to understand user behavior</li>
                <li>
                  Marketing cookies for targeted advertising (with consent)
                </li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className='mb-8 sm:mb-12 lg:mb-16'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white leading-tight'>
                Your Rights and Choices
              </h2>
              <p className='text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4'>
                Depending on your location, you may have certain rights
                regarding your personal information:
              </p>
              <ul className='list-disc list-inside text-gray-300 space-y-2 text-sm sm:text-base md:text-lg ml-4'>
                <li>Access and review your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your information</li>
                <li>Request data portability</li>
                <li>Withdraw consent for data processing</li>
                <li>File a complaint with supervisory authorities</li>
              </ul>
            </div>

            {/* Third-Party Links */}
            <div className='mb-8 sm:mb-12 lg:mb-16'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white leading-tight'>
                Third-Party Links
              </h2>
              <p className='text-gray-300 text-base sm:text-lg leading-relaxed'>
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices or content of these
                external sites. We encourage you to review the privacy policies
                of any third-party sites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className='mb-8 sm:mb-12 lg:mb-16'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white leading-tight'>
                Children&apos;s Privacy
              </h2>
              <p className='text-gray-300 text-base sm:text-lg leading-relaxed'>
                Our services are not directed to children under 13 years of age.
                We do not knowingly collect personal information from children
                under 13. If you believe we have collected information from a
                child under 13, please contact us immediately.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className='mb-8 sm:mb-12 lg:mb-16'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white leading-tight'>
                Changes to This Privacy Policy
              </h2>
              <p className='text-gray-300 text-base sm:text-lg leading-relaxed'>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last updated&quot; date. We
                encourage you to review this Privacy Policy periodically for any
                changes.
              </p>
            </div>

            {/* Contact Information */}
            <div className='mb-8 sm:mb-12 lg:mb-16'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white leading-tight'>
                Contact Us
              </h2>
              <p className='text-gray-300 text-base sm:text-lg leading-relaxed mb-6'>
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
              </p>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                <div className='flex items-center space-x-3 p-4  rounded-lg'>
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

                <div className='flex items-center space-x-3 p-4  rounded-lg'>
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
