"use client";

import React, { useState, useEffect } from 'react';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';

interface GoogleReview {
  authorAttribution: {
    displayName: string;
    photoUri: string;
  };
  rating: number;
  text: { text: string };
  relativePublishTimeDescription: string;
}

interface ReviewsData {
  rating: number;
  userRatingCount: number;
  reviews: GoogleReview[];
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewsData, setReviewsData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/reviews')
      .then(res => res.json())
      .then((data: ReviewsData) => {
        if (data.reviews) {
          setReviewsData(data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Auto-rotate reviews
  useEffect(() => {
    if (!reviewsData?.reviews?.length) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % reviewsData.reviews.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [reviewsData]);

  const nextReview = () => {
    if (!reviewsData?.reviews?.length) return;
    setCurrentIndex(prev => (prev + 1) % reviewsData.reviews.length);
  };

  const prevReview = () => {
    if (!reviewsData?.reviews?.length) return;
    setCurrentIndex(prev => (prev - 1 + reviewsData.reviews.length) % reviewsData.reviews.length);
  };

  if (loading) {
    return (
      <section className="py-32 bg-black relative overflow-hidden border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="h-[400px] flex items-center justify-center">
            <div className="w-8 h-8 border border-gold-400/30 border-t-gold-400 rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    );
  }

  if (!reviewsData?.reviews?.length) {
    return (
      <section className="py-32 bg-black relative overflow-hidden border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 text-center">
          <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Google Reviews</p>
          <h2 className="text-5xl md:text-6xl font-italiana text-white leading-none mb-8">
            4.9 <span className="text-white/30">Stars.</span>
          </h2>
          <div className="flex justify-center space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-gold-400 fill-current" />
            ))}
          </div>
          <p className="text-white/50 font-manrope text-sm">
            Rated 4.9/5 from 31 reviews on Google
          </p>
          <a
            href="https://www.google.com/maps/place/Eugene+Chauffeurs-Covering+London+%26+UK/@51.5287398,-0.2664059,11z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-gold-400 text-xs uppercase tracking-[0.2em] hover:text-white transition-colors"
          >
            Read our reviews on Google
          </a>
        </div>
      </section>
    );
  }

  const review = reviewsData.reviews[currentIndex];

  return (
    <section className="py-32 bg-black relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Heading, Rating Summary & Controls */}
          <div className="space-y-12">
            <div>
              <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Google Reviews</p>
              <h2 className="text-5xl md:text-6xl font-italiana text-white leading-none">
                Client <br />
                <span className="text-white/30">Experiences.</span>
              </h2>
            </div>

            {/* Aggregate Rating */}
            <div className="flex items-center gap-6 pt-4">
              <div className="text-5xl font-italiana text-gold-400">{reviewsData.rating}</div>
              <div className="space-y-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.round(reviewsData.rating) ? 'text-gold-400 fill-current' : 'text-white/20'}`}
                    />
                  ))}
                </div>
                <p className="text-white/50 font-manrope text-sm">
                  {reviewsData.userRatingCount} reviews on Google
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={prevReview}
                className="w-14 h-14 border border-white/10 flex items-center justify-center text-white/50 hover:text-black hover:bg-white transition-all duration-500"
                aria-label="Previous review"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextReview}
                className="w-14 h-14 border border-white/10 flex items-center justify-center text-white/50 hover:text-black hover:bg-white transition-all duration-500"
                aria-label="Next review"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
              <span className="text-white/30 font-manrope text-xs ml-2">
                {currentIndex + 1} / {reviewsData.reviews.length}
              </span>
            </div>
          </div>

          {/* Right: Review Card */}
          <div className="relative">
            <div className="absolute -top-12 -left-12 text-white/[0.03]">
              <Quote size={120} />
            </div>

            <div className="relative z-10 min-h-[300px] flex flex-col justify-between">
              <div className="space-y-8">
                <div className="flex space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-2xl md:text-3xl text-white font-italiana leading-relaxed">
                  &ldquo;{review.text.text}&rdquo;
                </blockquote>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-white font-manrope text-sm tracking-widest uppercase">
                    {review.authorAttribution.displayName}
                  </p>
                  <p className="text-white/40 font-manrope text-xs mt-1">
                    {review.relativePublishTimeDescription}
                  </p>
                </div>
                <svg className="w-5 h-5 text-white/30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
