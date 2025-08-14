'use client';
import React from 'react';
import { PHONE_DISPLAY, PHONE_E164 } from '@/lib/config';

export default function StickyCTA({ label = 'Get a Quote' }: { label?: string }) {
  return (
    <div className="hidden md:flex fixed bottom-0 left-0 right-0 z-50 gap-3 px-4 py-3 bg-white/95 backdrop-blur-sm border-t border-gray-200 justify-between items-center">
      <a 
        href="/contact#booking" 
        className="px-6 py-2.5 bg-gradient-to-r from-gold-400 to-gold-600 text-black rounded-lg font-semibold hover:from-gold-500 hover:to-gold-700 transition-all"
      >
        {label}
      </a>
      <div className="flex gap-3">
        <a 
          href={`tel:+${PHONE_E164}`} 
          className="px-5 py-2.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
        >
          Call {PHONE_DISPLAY}
        </a>
        <a 
          href={`https://wa.me/${PHONE_E164}?text=Hello!%20I'd%20like%20to%20inquire%20about%20your%20chauffeur%20services.`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
        >
          WhatsApp {PHONE_DISPLAY}
        </a>
      </div>
    </div>
  );
}


