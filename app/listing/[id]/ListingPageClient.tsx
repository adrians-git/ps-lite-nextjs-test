'use client';

import { useEffect, useRef } from 'react';
import { ListingStickyCTA } from '@/components/listing/ListingStickyCTA';
import { ListingContactForm } from '@/components/listing/ListingContactForm';
import { ListingAgent } from '@/components/listing/ListingAgent';
import type { ListingAgent as Agent } from '@/data/mockListingData';

interface ListingPageClientProps {
  // For StickyCTA
  stickyCTA?: boolean;
  price?: number;
  agentName?: string;
  agentPhone?: string;

  // For ContactForm
  contactForm?: boolean;
  address?: {
    street: string;
    city: string;
  };

  // For Agent
  agent?: Agent;
}

export function ListingPageClient({
  stickyCTA,
  price,
  agentName,
  agentPhone,
  contactForm,
  address,
  agent,
}: ListingPageClientProps) {
  const hasTrackedPageView = useRef(false);

  useEffect(() => {
    // Initialize Facebook Pixel only once
    if (!hasTrackedPageView.current) {
      hasTrackedPageView.current = true;

      // Dynamically import Facebook Pixel
      import('react-facebook-pixel')
        .then((x) => x.default)
        .then((ReactPixel) => {
          const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID || 'PLACEHOLDER_PIXEL_ID';
          ReactPixel.init(pixelId);
          ReactPixel.pageView();

          // Track ViewContent event for property listing
          if (price) {
            const contentId = window.location.pathname.split('/').pop() || 'unknown';
            ReactPixel.track('ViewContent', {
              content_type: 'property',
              content_ids: [contentId],
              value: price,
              currency: 'USD',
            });
          }
        })
        .catch((err) => {
          console.error('Failed to load Facebook Pixel:', err);
        });
    }
  }, [price]);

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact-form');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToSchedule = () => {
    const contactElement = document.getElementById('contact-form');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Render StickyCTA
  if (stickyCTA && price && agentName && agentPhone) {
    return (
      <ListingStickyCTA
        price={price}
        agentName={agentName}
        agentPhone={agentPhone}
        onContactClick={scrollToContact}
        onScheduleClick={scrollToSchedule}
      />
    );
  }

  // Render ContactForm
  if (contactForm && address && agentName) {
    return <ListingContactForm address={address} agentName={agentName} />;
  }

  // Render Agent
  if (agent) {
    return <ListingAgent agent={agent} onMessageClick={scrollToContact} />;
  }

  return null;
}
