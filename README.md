# PropertySimple - AI-Powered Real Estate Marketing

A modern Next.js application for real estate professionals to manage marketing campaigns, contacts, and listings with AI assistance.

## Tech Stack

- **Framework**: Next.js 16.0.1 (App Router)
- **Runtime**: React 19.2.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **UI Components**: Radix UI primitives
- **Charts**: Recharts
- **Date Utilities**: date-fns
- **Icons**: Lucide React
- **Fonts**: Cabinet Grotesk (display), Outfit (body)
- **Analytics**: Facebook Pixel integration
- **Image Galleries**: react-swipeable

## Features

### Marketing & Public Pages
- Modern marketing website with conversion-optimized design
- Public listing detail pages with:
  - Photo galleries with fullscreen mode and swipe gestures
  - Instant response contact forms with AI assistant
  - Mortgage calculators and property details
  - School ratings and neighborhood information
  - Interactive maps (Mapbox ready)
  - Similar properties showcase
  - Open house scheduling

### Application Features
- AI-powered campaign creation and management
- Contact and lead management with performance tracking
- Listing management with detailed property information
- Real-time analytics and performance tracking
- Inbox/Outbox messaging with AI assistant (Sarah)
- Campaign performance dashboards with industry benchmarks
- Video ad creation and management
- Dark mode support
- Responsive design with mobile-first approach
- Onboarding wizard for new users

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up environment variables (see .env.example)

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/app              - Next.js App Router pages and layouts
  /listing/[id]   - Public listing detail pages
  /about          - Marketing about page
  /how-it-works   - Marketing features page
  /pricing        - Marketing pricing page
  /examples       - Marketing examples page
/components       - Reusable React components
  /ui             - shadcn/ui components
  /marketing      - Marketing site components (nav, footer, hero, etc.)
  /listing        - Listing detail page components
  /listing-manager - Listing management components
  /dashboard      - Dashboard-specific components
  /campaign-detail - Campaign detail components
  /contact-detail - Contact detail components
  /ad-builder     - Ad creation components
  /profile        - Profile and settings components
  /common         - Shared components (PageHelper, SectionHeader, etc.)
/pages-src        - Page-level components (legacy from migration)
/hooks            - Custom React hooks
/lib              - Utility functions and helpers
/data             - Mock data, types, and listing data
/types            - TypeScript type definitions
/public           - Static assets (images, videos, fonts)
/docs             - Project documentation
```

## Development

This project uses:
- **next/font** for optimized font loading (Cabinet Grotesk, Outfit, Geist)
- **Error boundaries** for graceful error handling
- **Loading states** with Next.js loading.tsx files
- **Metadata generation** for SEO and LLMO optimization
- **JSON-LD Schema** for rich snippets on listing pages
- **TypeScript** with strict type checking
- **Logger utility** for development logging
- **Turbopack** for fast development builds
- **React Server Components** for optimal performance

## Environment Variables

Required environment variables:
- `NEXT_PUBLIC_FB_PIXEL_ID` - Facebook Pixel ID for tracking (optional)

See `.env.example` for the complete list of environment variables.

## Design System

The application uses a warm, modern design system:
- **Colors**: Terracotta primary (#C65D41), Gold accent (#E8B923), Warm cream background
- **Typography**: Cabinet Grotesk for headings, Outfit for body text
- **Components**: Custom shadcn/ui components with Radix UI primitives
- **Grain Texture**: Subtle grain overlay for premium feel
- **Dark Mode**: Full support with separate light/dark mode logos

## Key Pages

- **Marketing Site**: `/` (homepage), `/pricing`, `/how-it-works`, `/examples`, `/about`
- **Application**: `/dashboard`, `/inbox`, `/listings`, `/profile`, `/campaigns`
- **Public Listings**: `/listing/[id]` - SEO-optimized property detail pages
- **Campaign Details**: `/campaign-detail/[id]`
- **Contact Details**: `/contact/[id]`

## Deploy on Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Current deployment: **https://ps-ads.vercel.app**

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Documentation

- `IMPLEMENTATION_SUMMARY.md` - Application UX redesign details
- `LISTING_PAGE_SUMMARY.md` - Listing detail page overview
- `LISTING_COMPONENTS_GUIDE.md` - Listing components documentation
- `docs/FULL_PRODUCTION_PLAN.md` - Next.js 16 migration plan
- `MIGRATION.md` - Migration notes
