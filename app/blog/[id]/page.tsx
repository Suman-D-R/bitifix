'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  IconCalendar,
  IconUser,
  IconArrowLeft,
  IconShare,
  IconBookmark,
} from '@tabler/icons-react';
import { blogPosts } from '../../data/blogData';

export default function BlogPost() {
  const params = useParams();
  const router = useRouter();
  const postId = parseInt(params.id as string);

  const currentPost = blogPosts.find((post) => post.id === postId);

  if (!currentPost) {
    return (
      <div className='h-full text-white pt-16 flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold mb-4'>Post Not Found</h1>
          <button
            onClick={() => router.push('/blog')}
            className='bg-orange-500 text-white px-6 py-3 rounded-full font-semibold transition-colors hover:bg-orange-600'
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='h-full text-white pt-16'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Back Button */}
        <button
          onClick={() => router.push('/blog')}
          className='flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8'
        >
          <IconArrowLeft className='w-5 h-5' />
          Back to Blog
        </button>

        {/* Article Header */}
        <article className='mb-8'>
          <div className='mb-6'>
            <span className='bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium'>
              {currentPost.category}
            </span>
            {currentPost.featured && (
              <span className='bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium ml-2'>
                Featured
              </span>
            )}
          </div>

          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight'>
            {currentPost.title}
          </h1>

          <div className='flex flex-wrap items-center gap-3 sm:gap-6 text-gray-400 mb-6 sm:mb-8'>
            <div className='flex items-center gap-2'>
              <IconUser className='w-4 h-4 sm:w-5 sm:h-5' />
              <span className='text-sm sm:text-base'>{currentPost.author}</span>
            </div>
            <div className='flex items-center gap-2'>
              <IconCalendar className='w-4 h-4 sm:w-5 sm:h-5' />
              <span className='text-sm sm:text-base'>
                {new Date(currentPost.date).toLocaleDateString()}
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-sm sm:text-base'>
                {currentPost.readTime}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className='flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8'>
            <button className='flex items-center gap-1 sm:gap-2 bg-white/10 hover:bg-white/20 px-3 sm:px-4 py-2 rounded-full transition-colors text-sm sm:text-base'>
              <IconShare className='w-4 h-4 sm:w-5 sm:h-5' />
              <span className='hidden sm:inline'>Share</span>
            </button>
            <button className='flex items-center gap-1 sm:gap-2 bg-white/10 hover:bg-white/20 px-3 sm:px-4 py-2 rounded-full transition-colors text-sm sm:text-base'>
              <IconBookmark className='w-4 h-4 sm:w-5 sm:h-5' />
              <span className='hidden sm:inline'>Save</span>
            </button>
          </div>

          {/* Featured Image */}
          <div
            style={{
              background: 'radial-gradient(circle, #222 0%, #000 100%)',
            }}
            className='relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden mb-8'
          >
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='text-center'>
                {/* <IconTag className='w-16 h-16 text-orange-500 mx-auto mb-4' /> */}
                <span className=' font-semibold text-lg'>
                  {currentPost.category}
                </span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div
            className='prose prose-invert max-w-none'
            dangerouslySetInnerHTML={{ __html: currentPost.content }}
          />

          {/* Tags */}
          <div className='mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10'>
            <h3 className='text-base sm:text-lg font-semibold mb-3 sm:mb-4'>
              Tags
            </h3>
            <div className='flex flex-wrap gap-2'>
              {currentPost.tags.map((tag) => (
                <span
                  key={tag}
                  className='bg-white/10 text-gray-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm hover:bg-orange-500/20 transition-colors cursor-pointer'
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
