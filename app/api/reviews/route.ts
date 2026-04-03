import { NextResponse } from 'next/server';

const PLACE_ID = 'ChIJT0/Cl4yzSEgRxtYPqjlsr7o';
const API_KEY = process.env.GOOGLE_PLACES_API_KEY || '';

interface GoogleReview {
  authorAttribution: {
    displayName: string;
    photoUri: string;
  };
  rating: number;
  text: { text: string };
  relativePublishTimeDescription: string;
  publishTime: string;
}

interface GooglePlaceResponse {
  rating: number;
  userRatingCount: number;
  reviews: GoogleReview[];
}

let cache: { data: GooglePlaceResponse | null; timestamp: number } = {
  data: null,
  timestamp: 0,
};

const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

export async function GET() {
  // Return cached data if fresh
  if (cache.data && Date.now() - cache.timestamp < CACHE_TTL) {
    return NextResponse.json(cache.data);
  }

  if (!API_KEY) {
    return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=rating,userRatingCount,reviews&key=${API_KEY}`,
      {
        headers: {
          'X-Goog-FieldMask': 'rating,userRatingCount,reviews',
        },
        next: { revalidate: 86400 },
      }
    );

    if (!res.ok) {
      const error = await res.text();
      console.error('Google Places API error:', error);
      return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 502 });
    }

    const data: GooglePlaceResponse = await res.json();

    // Cache the response
    cache = { data, timestamp: Date.now() };

    return NextResponse.json(data);
  } catch (err) {
    console.error('Reviews fetch error:', err);
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
  }
}
