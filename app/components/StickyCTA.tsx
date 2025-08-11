'use client';
import React from 'react';
import { PHONE_DISPLAY, PHONE_E164 } from '@/lib/config';

export default function StickyCTA({ label = 'Get a Quote' }: { label?: string }) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        gap: '12px',
        padding: '12px 16px',
        background: 'rgba(255,255,255,0.96)',
        borderTop: '1px solid #eee',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <a href="#quote" style={{ padding: '10px 16px', borderRadius: 12, border: '1px solid #111', textDecoration: 'none' }}>
        {label}
      </a>
      <div style={{ display: 'flex', gap: 12 }}>
        <a href={`tel:+${PHONE_E164}`} style={{ padding: '10px 16px', borderRadius: 12, border: '1px solid #ccc', textDecoration: 'none' }}>
          Call {PHONE_DISPLAY}
        </a>
        <a href={`https://wa.me/${PHONE_E164}`} style={{ padding: '10px 16px', borderRadius: 12, border: '1px solid #25D366', textDecoration: 'none' }}>
          WhatsApp {PHONE_DISPLAY}
        </a>
      </div>
    </div>
  );
}


