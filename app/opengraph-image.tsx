import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'Eugene Chauffeurs - Luxury Chauffeur Service London';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const heroData = await readFile(join(process.cwd(), 'public', 'ec-hero-fallback.png'));
  const heroBase64 = `data:image/png;base64,${heroData.toString('base64')}`;

  const logoData = await readFile(join(process.cwd(), 'public', 'RGB-Eugene-Chauffeurs-Concierge-Logo.png'));
  const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
        }}
      >
        {/* Hero background */}
        <img
          src={heroBase64}
          width={1200}
          height={630}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.3) 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            padding: '60px',
          }}
        >
          {/* Logo */}
          <img
            src={logoBase64}
            width={300}
            height={120}
            style={{ objectFit: 'contain', marginBottom: '16px' }}
          />
          {/* Tagline */}
          <div
            style={{
              fontSize: '22px',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.5,
              maxWidth: '500px',
            }}
          >
            London&apos;s premier personal chauffeur service for airports, business, and special occasions
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
