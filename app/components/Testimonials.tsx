"use client";

import React, { useState, useEffect } from 'react';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Mark T.",
      title: "CEO, FinTech",
      content: "Eugene Chauffeurs made travel effortless. The care, attention to detail, and discretion exceeded every expectation. I can now focus completely on my meetings.",
      rating: 5,
    },
    {
      name: "Sarah L.",
      title: "Managing Director",
      content: "The level of professionalism is outstanding. Our international clients are consistently impressed with the service quality. An integral part of our client experience.",
      rating: 5,
    },
    {
      name: "James R.",
      title: "Senior Partner",
      content: "Reliability and discretion are paramount in our business. Eugene Chauffeurs delivers both consistently. The peace of mind is invaluable.",
      rating: 5,
    },
    {
      name: "Emma K.",
      title: "Executive Director",
      content: "The seamless coordination across different cities and countries is remarkable. Whether I'm in London or travelling internationally, the service standard never drops.",
      rating: 5,
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Heading & Controls */}
          <div className="space-y-12">
            <div>
              <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Testimonials</p>
              <h2 className="text-5xl md:text-6xl font-italiana text-white leading-none">
                Client <br />
                <span className="text-white/30">Experiences.</span>
              </h2>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-14 h-14 border border-white/10 flex items-center justify-center text-white/50 hover:text-black hover:bg-white transition-all duration-500"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-14 h-14 border border-white/10 flex items-center justify-center text-white/50 hover:text-black hover:bg-white transition-all duration-500"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right: Testimonial Card */}
          <div className="relative">
            <div className="absolute -top-12 -left-12 text-white/[0.03]">
              <Quote size={120} />
            </div>
            
            <div className="relative z-10 min-h-[300px] flex flex-col justify-between">
              <div className="space-y-8">
                <div className="flex space-x-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-2xl md:text-3xl text-white font-italiana leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-white font-manrope text-sm tracking-widest uppercase">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-white/40 font-manrope text-xs mt-1">
                  {testimonials[currentIndex].title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;