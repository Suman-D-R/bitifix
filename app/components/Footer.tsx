'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandGithub,
  IconMail,
  IconPhone,
  IconMapPin,
  IconHeart,
} from '@tabler/icons-react';

interface FooterLink {
  href: string;
  label: string;
}

interface SocialLink {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

const footerLinks = {
  services: [
    { href: '/web-development', label: 'Web Development' },
    { href: '/app-development', label: 'App Development' },
    { href: '/ui-ux-design', label: 'UI/UX Design' },
    { href: '/consulting', label: 'Consulting' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ],
  resources: [
    { href: '/blog', label: 'Blog' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/documentation', label: 'Documentation' },
    { href: '/support', label: 'Support' },
  ],
  legal: [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
    { href: '/cookie-policy', label: 'Cookie Policy' },
    { href: '/gdpr', label: 'GDPR' },
  ],
};

const socialLinks: SocialLink[] = [
  {
    href: 'https://facebook.com',
    icon: IconBrandFacebook,
    label: 'Facebook',
  },
  {
    href: 'https://twitter.com',
    icon: IconBrandTwitter,
    label: 'Twitter',
  },
  {
    href: 'https://linkedin.com',
    icon: IconBrandLinkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://instagram.com',
    icon: IconBrandInstagram,
    label: 'Instagram',
  },
  {
    href: 'https://github.com',
    icon: IconBrandGithub,
    label: 'GitHub',
  },
];

export default function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=' border-t border-white/10 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main Footer Content */}
        <div className='py-12 sm:py-16 lg:py-20'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12'>
            {/* Company Info */}
            <div className='lg:col-span-2'>
              <Link href='/' className='flex items-center gap-2 mb-4 sm:mb-6'>
                <Image
                  className='w-10 h-10'
                  src='/images/logo.svg'
                  alt='Bitifix Logo'
                  width={100}
                  height={100}
                />
                <span className='text-2xl font-bold'>Bitifix</span>
              </Link>
              <p className='text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed max-w-md'>
                We design and develop digital solutions that move with your
                ideas. Wherever your vision goes, our technology follows.
              </p>

              {/* Contact Info */}
              <div className='space-y-2 sm:space-y-3'>
                <div className='flex items-center gap-3 text-gray-300 text-sm sm:text-base'>
                  <IconMail className='w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0' />
                  <a
                    href='mailto:hello@bitifix.com'
                    className='hover:text-orange-500 transition-colors'
                  >
                    info@bitifix.com
                  </a>
                </div>
                <div className='flex items-center gap-3 text-gray-300 text-sm sm:text-base'>
                  <IconPhone className='w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0' />
                  <a
                    href='tel:+1234567890'
                    className='hover:text-orange-500 transition-colors'
                  >
                    +91 9902696211
                  </a>
                </div>
                <div className='flex items-start gap-3 text-gray-300 text-sm sm:text-base'>
                  <IconMapPin className='w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0 mt-0.5' />
                  <span>
                    2nd Cross, 1st Main, Sector 1, HSR Layout, Bangalore,
                    Karnataka, India
                  </span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className='text-lg sm:text-xl font-bold mb-4 sm:mb-6'>
                Services
              </h3>
              <ul className='space-y-2 sm:space-y-3'>
                {footerLinks.services.map((link: FooterLink) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className='text-gray-300 hover:text-orange-500 transition-colors text-sm sm:text-base'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className='text-lg sm:text-xl font-bold mb-4 sm:mb-6'>
                Company
              </h3>
              <ul className='space-y-2 sm:space-y-3'>
                {footerLinks.company.map((link: FooterLink) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className='text-gray-300 hover:text-orange-500 transition-colors text-sm sm:text-base'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className='text-lg sm:text-xl font-bold mb-4 sm:mb-6'>
                Resources
              </h3>
              <ul className='space-y-2 sm:space-y-3'>
                {footerLinks.resources.map((link: FooterLink) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className='text-gray-300 hover:text-orange-500 transition-colors text-sm sm:text-base'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className='mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-white/10'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6'>
              <div>
                <h3 className='text-lg sm:text-xl font-bold mb-3 sm:mb-4'>
                  Follow Us
                </h3>
                <div className='flex gap-3 sm:gap-4'>
                  {socialLinks.map((social: SocialLink) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.href}
                        href={social.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-10 h-10 sm:w-12 sm:h-12 bg-white/5 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors group'
                        aria-label={social.label}
                      >
                        <IconComponent className='w-5 h-5 sm:w-6 sm:h-6 text-gray-300 group-hover:text-white' />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className='sm:max-w-md'>
                <h3 className='text-lg sm:text-xl font-bold mb-3 sm:mb-4'>
                  Stay Updated
                </h3>
                <div className='flex gap-2 sm:gap-3'>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    className='flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors text-sm sm:text-base'
                  />
                  <button className='bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-colors text-sm sm:text-base whitespace-nowrap'>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className='py-4 sm:py-6 border-t border-slate-800'>
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6'>
            <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm sm:text-base text-gray-400'>
              <span>© {currentYear} Bitifix. All rights reserved.</span>
              <div className='flex flex-wrap gap-2 sm:gap-4'>
                {footerLinks.legal.map((link: FooterLink) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className='hover:text-orange-500 transition-colors'
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className='flex items-center gap-2 text-sm sm:text-base text-gray-400'>
              <span>Made with</span>
              <IconHeart className='w-4 h-4 text-orange-500 fill-current' />
              <span>by Bitifix</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
