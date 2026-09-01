"use client";

import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { SiteFAQ } from '@/app/lib/faqs';

const FAQ = ({ faqs }: { faqs: SiteFAQ[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-black border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left: Header (Span 4) */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Information</p>
              <h2 className="text-5xl md:text-6xl font-italiana text-white leading-none mb-8">
                Common <br />
                <span className="text-white/30">Questions.</span>
              </h2>
              <p className="text-white/60 font-manrope font-light text-sm leading-relaxed mb-8">
                Everything you need to know about our premium chauffeur services. For specific inquiries, our concierge team is available 24/7.
              </p>
              
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 text-white hover:text-gold-400 transition-colors group"
              >
                <span className="font-manrope text-xs uppercase tracking-widest">Contact Concierge</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right: Accordion (Span 8) */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-white/10 last:border-0"
                >
                  <button
                    className="w-full py-8 text-left flex items-center justify-between group"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className={`font-manrope text-lg transition-colors duration-300 ${
                      openIndex === index ? 'text-gold-400' : 'text-white group-hover:text-white/80'
                    }`}>
                      {faq.question}
                    </span>
                    <span className={`flex-shrink-0 ml-6 transition-all duration-300 ${
                      openIndex === index ? 'text-gold-400 rotate-180' : 'text-white/30 group-hover:text-white'
                    }`}>
                      {openIndex === index ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pb-8 pr-8">
                      <p className="text-white/50 font-manrope font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;