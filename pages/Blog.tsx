import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  return (
    <div className="bg-dark-900 min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-white/10 pb-8">
          <h1 className="font-display text-6xl md:text-8xl font-bold uppercase">Journal</h1>
          <span className="text-gray-500 font-mono mb-2">Insights from the Iron</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {BLOG_POSTS.map((post, index) => (
            <article key={post.id} className={`group flex flex-col ${index === 0 ? 'md:col-span-2 md:flex-row md:gap-12' : ''}`}>
              <div className={`overflow-hidden ${index === 0 ? 'md:w-1/2 h-[400px] md:h-[500px]' : 'w-full h-[300px]'} mb-6`}>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                />
              </div>
              <div className={`${index === 0 ? 'md:w-1/2 flex flex-col justify-center' : ''}`}>
                <div className="flex items-center gap-4 mb-4 text-xs font-bold uppercase tracking-widest">
                  <span className="text-pineal">{post.category}</span>
                  <span className="text-gray-600">|</span>
                  <span className="text-gray-500">{post.date}</span>
                </div>
                <h2 className={`font-display font-bold uppercase mb-4 group-hover:text-pineal transition-colors ${index === 0 ? 'text-4xl md:text-5xl' : 'text-2xl'}`}>
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed max-w-xl">
                  {post.excerpt}
                </p>
                <Link to="#" className="inline-block text-white border-b border-pineal pb-1 hover:text-pineal transition-all hover:-translate-y-1 duration-300 uppercase text-sm font-bold tracking-wider">
                  Read Full Story
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;