"use client";

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Mark T.",
      title: "CEO, London-based FinTech firm",
      content: "Eugene Chauffeurs made travel effortless. The care, attention to detail, and discretion exceeded every expectation. I can now focus completely on my meetings instead of worrying about transport.",
      rating: 5,
      initials: "MT"
    },
    {
      name: "Sarah L.",
      title: "Managing Director, Investment Bank",
      content: "The level of professionalism is outstanding. Our international clients are consistently impressed with the service quality. Eugene Chauffeurs has become an integral part of our client experience.",
      rating: 5,
      initials: "SL"
    },
    {
      name: "James R.",
      title: "Senior Partner, Legal Firm",
      content: "Reliability and discretion are paramount in our business. Eugene Chauffeurs delivers both consistently. The peace of mind knowing our transport is handled professionally is invaluable.",
      rating: 5,
      initials: "JR"
    },
    {
      name: "Emma K.",
      title: "Executive Director, Consulting",
      content: "The seamless coordination across different cities and countries is remarkable. Whether I'm in London or travelling internationally, the service standard never drops.",
      rating: 5,
      initials: "EK"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zinc-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-gold-600/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-cinzel mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-white/80 font-montserrat">
            Excellence isn't just a promise—it's what our clients experience
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gold-500/20">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-black font-cinzel font-bold text-xl">
                {testimonials[currentIndex].initials}
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-white/90 font-montserrat text-lg leading-relaxed italic">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div>
                  <p className="text-white font-montserrat font-semibold">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-white/60 font-montserrat text-sm">
                    {testimonials[currentIndex].title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-zinc-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gold-500/20 hover:text-gold-400 transition-all duration-300 border border-zinc-700/50 hover:border-gold-500/30"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-gold-400'
                      : 'bg-zinc-600 hover:bg-zinc-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-zinc-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gold-500/20 hover:text-gold-400 transition-all duration-300 border border-zinc-700/50 hover:border-gold-500/30"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;