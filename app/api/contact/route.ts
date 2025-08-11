import { NextRequest, NextResponse } from 'next/server';

// Simple rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Rate limiting function
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitStore.get(ip);
  
  if (!limit || now > limit.resetTime) {
    // Reset or create new limit
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + 60000 // 1 minute window
    });
    return true;
  }
  
  if (limit.count >= 5) { // Max 5 requests per minute
    return false;
  }
  
  limit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // In production, you would send the email here using:
    // - EmailJS server-side SDK
    // - SendGrid, Mailgun, or other email service
    // - SMTP directly
    
    // For now, we'll simulate success and log the submission
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString(),
      ip
    });

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Return success response
    return NextResponse.json(
      { 
        success: true,
        message: 'Your message has been sent successfully. We will respond within 24 hours.'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { error: 'An error occurred while processing your request. Please try again.' },
      { status: 500 }
    );
  }
}

// Optional: Add GET method to check API health
export async function GET() {
  return NextResponse.json(
    { 
      status: 'Contact API is operational',
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  );
}