import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Eugene Chauffeurs - Luxury Chauffeur Service London';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <div
            style={{
              fontSize: '24px',
              color: '#c8a45e',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
            }}
          >
            Luxury Chauffeur Service
          </div>
          <div
            style={{
              fontSize: '72px',
              color: '#ffffff',
              fontWeight: 700,
              textAlign: 'center',
              lineHeight: 1.1,
            }}
          >
            Eugene Chauffeurs
          </div>
          <div
            style={{
              fontSize: '20px',
              color: 'rgba(255,255,255,0.6)',
              textAlign: 'center',
              maxWidth: '600px',
              lineHeight: 1.6,
            }}
          >
            London's premier personal chauffeur service for airports, business, and special occasions
          </div>
          <div
            style={{
              marginTop: '16px',
              padding: '12px 32px',
              border: '1px solid #c8a45e',
              color: '#c8a45e',
              fontSize: '16px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            eugenechauffeurs.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
