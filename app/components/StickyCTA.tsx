'use client';
import React from "react";
import { PHONE_DISPLAY, PHONE_E164 } from "@/app/lib/config";
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

export default function StickyCTA({ label = "Get a Quote" }: { label?: string }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-wrap gap-3 p-3 bg-white/95 backdrop-blur-md border-t border-zinc-200 justify-between items-center md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <a 
        href="#booking" 
        className="flex-1 flex items-center justify-center px-4 py-3 rounded-lg bg-black text-white font-medium text-sm hover:bg-zinc-800 transition-colors"
      >
        {label} <ArrowRight className="w-4 h-4 ml-2" />
      </a>
      <div className="flex gap-3">
        <a 
          href={`tel:+${PHONE_E164}`} 
          className="flex items-center justify-center w-12 h-12 rounded-lg border border-zinc-200 text-black hover:bg-zinc-50 transition-colors"
          aria-label="Call us"
        >
          <Phone className="w-5 h-5" />
        </a>
        <a 
          href={`https://wa.me/${PHONE_E164}`} 
          className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors"
          aria-label="WhatsApp us"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}