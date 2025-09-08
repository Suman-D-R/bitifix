'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { IconSearch, IconCalendar, IconUser } from '@tabler/icons-react';
import { blogPosts } from '../data/blogData';

export default function Blog() {
  const router = useRouter();

  const handlePostClick = (postId: number) => {
    router.push(`/blog/${postId}`);
  };

  return (
    <div className='h-full text-white pt-16'>
      {/* Hero Section */}
      <section className='relative overflow-hidden pt-20'>
        <div className='absolute inset-0' />
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
              Our Blog
            </h1>
            <p className='text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8'>
              Insights, tutorials, and industry trends from our team of experts
              in web development, mobile apps, and digital innovation.
            </p>
          </div>
        </div>
      </section>

      {/* All Posts Section */}
      <section className='py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className='group cursor-pointer'
                onClick={() => handlePostClick(post.id)}
              >
                <div className='bg-transparent relative rounded-xl overflow-hidden border border-white/10  transition-all duration-300 h-full flex flex-col'>
                  <div
                    style={{
                      background: 'radial-gradient(circle, #222 0%, #000 100%)',
                      maskImage:
                        'linear-gradient(black,black,black,transparent)',
                    }}
                    className='relative h-40 '
                  >
                    <div
                      style={{
                        backgroundImage: `
                          linear-gradient(rgba(75, 85, 99, 0.4) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(75, 85, 99, 0.4) 1px, transparent 1px)
                        `,
                        backgroundSize: '33.33% 33.33%',
                        maskImage:
                          'radial-gradient(circle at center, black 30%, rgba(0,0,0,0.5) 60%, transparent 100%)',
                        WebkitMaskImage:
                          'radial-gradient(circle at center, black 30%, rgba(0,0,0,0.5) 60%, transparent 100%)',
                      }}
                      className='absolute inset-0 flex items-center justify-center'
                    >
                      <div className='text-center'>
                        {/* <IconTag className='w-8 h-8 text-orange-500 mx-auto mb-1' /> */}
                        <span className=' font-semibold text-lg'>
                          {post.category}
                        </span>
                      </div>
                    </div>
                    {post.featured && (
                      <div className='absolute top-3 left-3'>
                        <span className='bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium'>
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  <div className='p-6 flex-1 flex flex-col'>
                    <div className='flex items-center gap-3 text-xs text-gray-400 mb-3'>
                      <div className='flex items-center gap-1'>
                        <IconUser className='w-3 h-3' />
                        {post.author}
                      </div>
                      <div className='flex items-center gap-1'>
                        <IconCalendar className='w-3 h-3' />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <h3 className='text-lg font-bold mb-3 group-hover:text-orange-500 transition-colors line-clamp-2'>
                      {post.title}
                    </h3>
                    <p className='text-gray-300 mb-4 text-sm line-clamp-3 flex-1'>
                      {post.excerpt}
                    </p>
                    <div className='flex items-center text-xs text-gray-400'></div>
                    <div className='mt-4 flex items-center justify-between'>
                      <div className='flex flex-wrap gap-1'>
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className='bg-white/10 text-gray-300 px-2 py-1 rounded text-xs'
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {blogPosts.length === 0 && (
            <div className='text-center py-12'>
              <div className='w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                <IconSearch className='w-12 h-12 text-gray-400' />
              </div>
              <h3 className='text-xl font-bold mb-2'>No articles found</h3>
              <p className='text-gray-400'>
                Try adjusting your search terms or filters
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className='py-20 '>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6'>Stay Updated</h2>
          <p className='text-gray-300 text-lg mb-8 max-w-2xl mx-auto'>
            Subscribe to our newsletter and never miss the latest insights,
            tutorials, and industry trends from our team of experts.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
            <input
              type='email'
              placeholder='Enter your email address'
              className='flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors'
            />
            <button className='bg-orange-500  text-white px-6 py-3 rounded-full font-semibold transition-colors whitespace-nowrap'>
              Subscribe
            </button>
          </div>
          <p className='text-gray-400 text-sm mt-4'>
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
}
