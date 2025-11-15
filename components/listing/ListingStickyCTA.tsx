'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ListingStickyCTAProps {
  price: number;
  agentName: string;
  agentPhone: string;
  onContactClick: () => void;
  onScheduleClick: () => void;
}

export function ListingStickyCTA({ price, agentName, agentPhone, onContactClick, onScheduleClick }: ListingStickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero (approx 600px)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(price);

  return (
    <>
      {/* Mobile Sticky Bottom Bar */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <Card className="rounded-none border-t border-x-0 border-b-0 shadow-lg bg-card/95 backdrop-blur-sm">
          <div className="flex items-center justify-between p-4 gap-3">
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-foreground">{formattedPrice}</div>
              <div className="text-xs text-muted-foreground">Contact {agentName.split(' ')[0]}</div>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="gap-2"
                onClick={() => window.location.href = `tel:${agentPhone}`}
              >
                <Phone className="h-4 w-4" />
                Call
              </Button>
              <Button
                size="sm"
                className="gap-2 bg-primary hover:bg-primary/90"
                onClick={onContactClick}
              >
                <MessageCircle className="h-4 w-4" />
                Text Us
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Desktop Sticky Sidebar (this will be positioned by parent) */}
      <div className="hidden md:block">
        <Card className={`sticky top-24 transition-all duration-300 grain-texture ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <div className="p-6 space-y-6">
            <div>
              <div className="text-4xl font-bold text-foreground mb-1">{formattedPrice}</div>
              <div className="text-sm text-muted-foreground">Get instant answers 24/7</div>
            </div>

            <div className="space-y-3">
              <Button
                className="w-full gap-2 bg-primary hover:bg-primary/90 text-lg h-12"
                onClick={onContactClick}
              >
                <MessageCircle className="h-5 w-5" />
                Get Answers Instantly
              </Button>
              <Button
                variant="outline"
                className="w-full gap-2 text-base h-11"
                onClick={onScheduleClick}
              >
                <Calendar className="h-5 w-5" />
                Schedule a Showing
              </Button>
              <Button
                variant="outline"
                className="w-full gap-2 text-base h-11"
                onClick={() => window.location.href = `tel:${agentPhone}`}
              >
                <Phone className="h-5 w-5" />
                Call {agentName.split(' ')[0]}
              </Button>
            </div>

            <div className="pt-4 border-t">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                <span>Online now • Avg response: 43 seconds</span>
              </div>
            </div>

            <div className="text-xs text-center text-muted-foreground">
              You&apos;ll hear back instantly, even at 2am
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
