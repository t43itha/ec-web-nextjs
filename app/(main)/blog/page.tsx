import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/app/lib/blog-data';
import BookingSection from '@/app/components/BookingSection';

export const metadata: Metadata = {
  title: 'Luxury Chauffeur Blog | Eugene Chauffeurs London',
  description: 'Insights, guides, and news from the world of luxury chauffeur services in London. Tips for business travel, airport transfers, and VIP events.',
};

export default function BlogIndexPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-4xl">
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Journal</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
              The <br />
              <span className="text-white/30">Edit.</span>
            </h1>
            <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
              Expert advice and insights on luxury travel in London and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="relative h-64 mb-6 overflow-hidden border border-white/10">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="space-y-3">
                  <p className="text-gold-400 text-xs uppercase tracking-widest">{post.date}</p>
                  <h2 className="text-2xl font-italiana text-white group-hover:text-gold-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-white/60 font-manrope text-sm line-clamp-3">
                    {post.description}
                  </p>
                  <span className="inline-block text-white/40 text-xs uppercase tracking-widest border-b border-white/20 pb-1 group-hover:text-white group-hover:border-white transition-all mt-2">
                    Read Article
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BookingSection />
    </>
  );
}