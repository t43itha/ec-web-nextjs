import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/app/lib/blog-data';
import BookingSection from '@/app/components/BookingSection';
import StickyCTA from '@/app/components/StickyCTA';
import LDJson from '@/app/components/LDJson';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Eugene Chauffeurs Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": `https://ec-web-nextjs.netlify.app${post.image}`,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "Eugene Chauffeurs"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Eugene Chauffeurs",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ec-web-nextjs.netlify.app/RGB-Eugene-Chauffeurs-Concierge-Logo.webp"
      }
    },
    "description": post.description
  };

  return (
    <>
      <LDJson json={jsonLd} />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-[900px] mx-auto px-6 sm:px-12 lg:px-20 text-center">
          <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">{post.date}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-italiana text-white leading-[1.1] mb-8">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[800px] mx-auto px-6 sm:px-12">
          <div className="relative h-[400px] mb-12 border border-white/10 overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          <div 
            className="prose prose-invert prose-lg max-w-none font-manrope text-white/80 prose-headings:font-italiana prose-headings:text-white prose-a:text-gold-400 hover:prose-a:text-gold-300 prose-strong:text-white"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      <BookingSection />
      <StickyCTA label="Book a Chauffeur" />
    </>
  );
}