# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev --turbopack` - Start development server with Turbopack for faster builds
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## Project Architecture

This is a Next.js 15 application for Eugene Chauffeurs, a luxury chauffeur service website built with the App Router and TypeScript.

### Core Structure

- **App Directory**: Uses Next.js App Router with nested layouts
- **Main Pages**: Located in `app/(main)/` with shared layout
- **Dynamic Landing Pages**: `app/landing/[service]/[city]/` for SEO-optimized service pages
- **Stadium Pages**: `app/landing/stadium/` for venue-specific transport services
- **Components**: Reusable UI components in `app/components/`
- **Data Layer**: Centralized data management in `app/lib/landing-data.ts`

### Key Features

**Static Generation Strategy**: The application generates static pages for all service/city combinations using:
- `generateStaticParams()` for dynamic routes
- `generateMetadata()` for SEO optimization
- Centralized data in `landing-data.ts` for cities, services, and stadiums

**Font Configuration**: Uses Google Fonts (Cinzel for headings, Montserrat for body text) with CSS variables defined in the root layout.

**SEO & Performance**:
- Comprehensive metadata in root layout
- Image optimization with WebP format
- Security headers in `next.config.ts`
- Structured redirects for legacy URLs

### Data Management

All content is managed through `app/lib/landing-data.ts`:
- **Cities**: London, Manchester, Birmingham with areas and airports
- **Services**: Airport transfers, business travel, event transportation
- **Stadiums**: Tottenham and Chelsea with specific transport information
- **Helper Functions**: For generating SEO metadata and static params

### Styling

- **Tailwind CSS 4**: Latest version with PostCSS configuration
- **Custom Colors**: Gold theme colors for luxury branding
- **Responsive Design**: Mobile-first approach with breakpoint utilities
- **CSS Variables**: Font families available as `--font-cinzel` and `--font-montserrat`

### Environment Variables

Required for production:
- `NEXT_PUBLIC_SITE_URL`: Base URL for the website
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`: EmailJS service configuration
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`: EmailJS template ID
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`: EmailJS public key

### Contact Form Integration

Uses EmailJS for contact form submissions with environment variables configured in `next.config.ts`.