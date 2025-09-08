'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  IconSearch,
  IconCalendar,
  IconUser,
  IconTag,
  IconArrowRight,
  IconFilter,
  IconClock,
  IconEye,
  IconHeart,
  IconShare,
  IconBookmark,
} from '@tabler/icons-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  views: number;
  likes: number;
  featured: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt:
      'Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.',
    content: 'Full content here...',
    author: 'Sarah Mitchell',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Web Development',
    tags: ['React', 'Next.js', 'AI', 'Trends'],
    image: '/api/placeholder/600/400',
    views: 1250,
    likes: 89,
    featured: true,
  },
  {
    id: 2,
    title: 'Building Scalable Mobile Apps with React Native',
    excerpt:
      'Learn best practices for creating mobile applications that can grow with your business needs.',
    content: 'Full content here...',
    author: 'David Johnson',
    date: '2024-01-12',
    readTime: '8 min read',
    category: 'Mobile Development',
    tags: ['React Native', 'Mobile', 'Scalability'],
    image: '/api/placeholder/600/400',
    views: 980,
    likes: 67,
    featured: true,
  },
  {
    id: 3,
    title: 'UI/UX Design Principles for Better User Engagement',
    excerpt:
      'Discover the key design principles that can significantly improve user engagement and conversion rates.',
    content: 'Full content here...',
    author: 'Emily Wilson',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Design',
    tags: ['UI/UX', 'Design', 'User Experience'],
    image: '/api/placeholder/600/400',
    views: 1450,
    likes: 112,
    featured: false,
  },
  {
    id: 4,
    title: 'Optimizing Website Performance: A Complete Guide',
    excerpt:
      'Comprehensive strategies to improve your website speed and performance for better user experience.',
    content: 'Full content here...',
    author: 'Sarah Mitchell',
    date: '2024-01-08',
    readTime: '10 min read',
    category: 'Performance',
    tags: ['Performance', 'Optimization', 'SEO'],
    image: '/api/placeholder/600/400',
    views: 2100,
    likes: 156,
    featured: false,
  },
  {
    id: 5,
    title: 'The Rise of AI in Software Development',
    excerpt:
      'How artificial intelligence is revolutionizing the way we build and deploy software applications.',
    content: 'Full content here...',
    author: 'David Johnson',
    date: '2024-01-05',
    readTime: '7 min read',
    category: 'Technology',
    tags: ['AI', 'Machine Learning', 'Development'],
    image: '/api/placeholder/600/400',
    views: 1800,
    likes: 134,
    featured: true,
  },
  {
    id: 6,
    title: 'Cybersecurity Best Practices for Modern Applications',
    excerpt:
      'Essential security measures every developer should implement to protect user data and application integrity.',
    content: 'Full content here...',
    author: 'Emily Wilson',
    date: '2024-01-03',
    readTime: '9 min read',
    category: 'Security',
    tags: ['Security', 'Cybersecurity', 'Best Practices'],
    image: '/api/placeholder/600/400',
    views: 1650,
    likes: 98,
    featured: false,
  },
];

const categories = [
  'All',
  'Web Development',
  'Mobile Development',
  'Design',
  'Performance',
  'Technology',
  'Security',
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('latest');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'popular':
        return b.views - a.views;
      case 'trending':
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <div className='h-full text-white pt-16'>
      {/* Hero Section */}
      <section className='relative overflow-hidden py-20'>
        <div
          style={{
            background: 'radial-gradient(circle, #222 0%, #000 100%)',
            maskImage:
              'linear-gradient(black,black,black,black,black,transparent)',
          }}
          className='absolute inset-0'
        />
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1
              data-aos='fade-up'
              className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6'
            >
              Our Blog
            </h1>
            <p
              data-aos='fade-up'
              data-aos-delay='200'
              className='text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8'
            >
              Insights, tutorials, and industry trends from our team of experts
              in web development, mobile apps, and digital innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className='py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row gap-6 items-center justify-between'>
            {/* Search Bar */}
            <div className='relative flex-1 max-w-md'>
              <IconSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <input
                type='text'
                placeholder='Search articles...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors'
              />
            </div>

            {/* Category Filter */}
            <div className='flex flex-wrap gap-2'>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-orange-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className='flex items-center gap-2'>
              <IconFilter className='text-gray-400 w-5 h-5' />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className='bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-orange-500'
              >
                <option value='latest'>Latest</option>
                <option value='popular'>Most Popular</option>
                <option value='trending'>Trending</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {selectedCategory === 'All' && (
        <section className='py-12'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-2xl sm:text-3xl font-bold mb-8'>
              Featured Posts
            </h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              {featuredPosts.slice(0, 2).map((post, index) => (
                <article
                  key={post.id}
                  data-aos='fade-up'
                  data-aos-delay={index * 100}
                  className='group cursor-pointer'
                >
                  <div className='bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-orange-500/50 transition-all duration-300'>
                    <div className='relative h-48 bg-gradient-to-br from-orange-500/20 to-orange-600/20'>
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='text-center'>
                          <IconTag className='w-12 h-12 text-orange-500 mx-auto mb-2' />
                          <span className='text-orange-500 font-semibold'>
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className='absolute top-4 left-4'>
                        <span className='bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium'>
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className='p-6'>
                      <div className='flex items-center gap-4 text-sm text-gray-400 mb-3'>
                        <div className='flex items-center gap-1'>
                          <IconUser className='w-4 h-4' />
                          {post.author}
                        </div>
                        <div className='flex items-center gap-1'>
                          <IconCalendar className='w-4 h-4' />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className='flex items-center gap-1'>
                          <IconClock className='w-4 h-4' />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className='text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors'>
                        {post.title}
                      </h3>
                      <p className='text-gray-300 mb-4 line-clamp-3'>
                        {post.excerpt}
                      </p>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4 text-sm text-gray-400'>
                          <div className='flex items-center gap-1'>
                            <IconEye className='w-4 h-4' />
                            {post.views}
                          </div>
                          <div className='flex items-center gap-1'>
                            <IconHeart className='w-4 h-4' />
                            {post.likes}
                          </div>
                        </div>
                        <div className='flex items-center gap-2'>
                          <button className='p-2 text-gray-400 hover:text-orange-500 transition-colors'>
                            <IconBookmark className='w-4 h-4' />
                          </button>
                          <button className='p-2 text-gray-400 hover:text-orange-500 transition-colors'>
                            <IconShare className='w-4 h-4' />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Section */}
      <section className='py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between mb-8'>
            <h2 className='text-2xl sm:text-3xl font-bold'>
              {selectedCategory === 'All' ? 'All Posts' : selectedCategory}
            </h2>
            <span className='text-gray-400'>
              {sortedPosts.length} article{sortedPosts.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {sortedPosts.map((post, index) => (
              <article
                key={post.id}
                data-aos='fade-up'
                data-aos-delay={index * 100}
                className='group cursor-pointer'
              >
                <div className='bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-orange-500/50 transition-all duration-300 h-full flex flex-col'>
                  <div className='relative h-40 bg-gradient-to-br from-orange-500/20 to-orange-600/20'>
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <div className='text-center'>
                        <IconTag className='w-8 h-8 text-orange-500 mx-auto mb-1' />
                        <span className='text-orange-500 font-semibold text-sm'>
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
                    <div className='flex items-center justify-between text-xs text-gray-400'>
                      <div className='flex items-center gap-3'>
                        <div className='flex items-center gap-1'>
                          <IconClock className='w-3 h-3' />
                          {post.readTime}
                        </div>
                        <div className='flex items-center gap-1'>
                          <IconEye className='w-3 h-3' />
                          {post.views}
                        </div>
                      </div>
                      <div className='flex items-center gap-1'>
                        <IconHeart className='w-3 h-3' />
                        {post.likes}
                      </div>
                    </div>
                    <div className='mt-4 flex items-center justify-between'>
                      <div className='flex flex-wrap gap-1'>
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className='bg-slate-700 text-gray-300 px-2 py-1 rounded text-xs'
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className='text-orange-500 hover:text-orange-400 transition-colors'>
                        <IconArrowRight className='w-4 h-4' />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {sortedPosts.length === 0 && (
            <div className='text-center py-12'>
              <div className='w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4'>
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
      <section className='py-20 bg-black/50'>
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
              className='flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors'
            />
            <button className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-colors whitespace-nowrap'>
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
