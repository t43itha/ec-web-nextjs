"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What makes Eugene Chauffeurs different from Uber or taxis?",
      answer: "We're a luxury concierge chauffeur service, offering bespoke comfort, privacy, and detailed attention to your needs—not just transportation. Our professional chauffeurs are trained to provide discretion, punctuality, and personalized service that traditional ride-sharing cannot match."
    },
    {
      question: "Can you accommodate last-minute bookings?",
      answer: "Absolutely. While advance booking ensures availability, we handle urgent requests whenever possible. Our 24/7 operations team is equipped to coordinate last-minute services, though we recommend booking in advance for guaranteed availability, especially during peak hours."
    },
    {
      question: "Do you provide international chauffeur services?",
      answer: "Yes, we partner with trusted global affiliates, ensuring the same seamless luxury experience abroad. Whether you need service in Paris, New York, or Dubai, we coordinate with our verified partners to maintain our high standards wherever you travel."
    },
    {
      question: "What types of vehicles are available?",
      answer: "Our premium fleet includes luxury sedans, executive SUVs, and high-end vehicles from brands like Mercedes-Benz, BMW, and Audi. All vehicles are meticulously maintained, fully insured, and equipped with modern amenities for your comfort and productivity."
    },
    {
      question: "How do you ensure privacy and discretion?",
      answer: "All our chauffeurs sign comprehensive confidentiality agreements and undergo thorough background checks. We maintain strict protocols for client privacy, including secure communication channels and discreet service delivery. Your personal and business information remains completely confidential."
    },
    {
      question: "What are your payment options?",
      answer: "We accept all major credit cards, bank transfers, and corporate accounts. For regular clients, we offer convenient monthly billing options. All transactions are processed securely, and detailed invoices are provided for expense reporting."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zinc-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-cinzel mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white/80 font-montserrat">
            Everything you need to know about our service
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-zinc-800/50 hover:border-gold-500/30 transition-all duration-300"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between group"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-montserrat font-semibold text-white group-hover:text-gold-400 transition-colors duration-300 pr-4">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 text-gold-400">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </span>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-white/80 font-montserrat leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/60 font-montserrat mb-4">
            Still have questions?
          </p>
          <Link
            href="/contact"
            className="inline-flex bg-gradient-to-r from-gold-400 to-gold-600 text-black px-8 py-3 rounded-lg font-montserrat font-semibold hover:from-gold-500 hover:to-gold-600 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;