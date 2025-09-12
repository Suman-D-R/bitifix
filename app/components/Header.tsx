'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IconMenu2, IconX } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
];

export default function Header(): React.ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className='fixed top-0 left-0 right-0 z-10  backdrop-blur-sm  text-white'
        ref={menuRef}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex-shrink-0'>
              <Link href='/' className='flex items-center gap-2'>
                <Image
                  className='w-10 h-10'
                  src='/images/logo.svg'
                  alt='Logo'
                  width={100}
                  height={100}
                />
                <span className='text-2xl font-bold'> Bitifix</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className='hidden md:flex max-w-lg  justify-between w-full'>
              {navLinks.map((link: NavLink) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='hover:text-gray-200 px-3 py-2 rounded-md font-medium relative group'
                >
                  {link.label}
                  <span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full -translate-x-1/2'></span>
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className='md:hidden flex items-center justify-center  '>
              <button
                onClick={toggleMenu}
                className='inline-flex items-center  cursor-pointer justify-center rounded-md '
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {!isMenuOpen ? <IconMenu2 /> : <IconX />}
              </button>
            </div>

            <button
              onClick={() => router.push('/contact')}
              className='bg-white text-black px-4 py-2 rounded-full hidden md:block font-medium'
            >
              Let&apos;s Talk
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'opacity-100 max-h-[500px] overflow-visible'
              : 'opacity-0 max-h-0 overflow-hidden'
          }`}
        >
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {navLinks.map((link: NavLink) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className='block px-3 py-2 rounded-md text-base cursor-pointer font-medium text-center hover:text-gray-200 hover:bg-gray-50 transition-colors duration-200'
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
