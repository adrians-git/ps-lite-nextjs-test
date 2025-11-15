'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, CheckCircle } from 'lucide-react';
import { format, parseISO } from 'date-fns';

interface OpenHouse {
  date: string;
  startTime: string;
  endTime: string;
}

interface ListingOpenHouseProps {
  openHouses?: OpenHouse[];
  address: {
    street: string;
  };
}

export function ListingOpenHouse({ openHouses, address }: ListingOpenHouseProps) {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [isRegistered, setIsRegistered] = useState(false);

  if (!openHouses || openHouses.length === 0) {
    return (
      <Card className="p-6 md:p-8 grain-texture">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <Calendar className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">Open House</h2>
        </div>
        <p className="text-muted-foreground">
          No open houses scheduled at this time. Contact the agent to schedule a private showing.
        </p>
      </Card>
    );
  }

  const handleRegister = () => {
    if (selectedSlot !== null) {
      setIsRegistered(true);
    }
  };

  if (isRegistered && selectedSlot !== null) {
    const selected = openHouses[selectedSlot];
    return (
      <Card className="p-6 md:p-8 grain-texture">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-success/10">
              <CheckCircle className="h-12 w-12 text-success" />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">You&apos;re Registered!</h3>
            <p className="text-muted-foreground">
              We&apos;ve sent confirmation details to your email
            </p>
          </div>

          <div className="bg-muted/50 rounded-lg p-6 max-w-md mx-auto">
            <div className="font-semibold text-lg mb-4">Open House Details</div>
            <div className="space-y-3 text-left">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold">
                    {format(parseISO(selected.date), 'EEEE, MMMM d, yyyy')}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {selected.startTime} - {selected.endTime}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 text-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-sm">{address.street}</div>
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            onClick={() => {
              setIsRegistered(false);
              setSelectedSlot(null);
            }}
          >
            Register for Another Time
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 md:p-8 grain-texture">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10">
          <Calendar className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-3xl font-bold">Open House Schedule</h2>
      </div>

      <p className="text-muted-foreground mb-6">
        Join us for an open house! No appointment necessary.
      </p>

      <div className="space-y-3 mb-6">
        {openHouses.map((openHouse, index) => {
          const date = parseISO(openHouse.date);
          const isSelected = selectedSlot === index;

          return (
            <button
              key={index}
              onClick={() => setSelectedSlot(index)}
              className={`w-full text-left p-5 rounded-lg border-2 transition-all ${
                isSelected
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50 bg-secondary/30'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div className="font-bold text-lg">
                      {format(date, 'EEEE, MMMM d')}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>
                      {openHouse.startTime} - {openHouse.endTime}
                    </span>
                  </div>
                </div>
                {isSelected && (
                  <Badge className="bg-primary">Selected</Badge>
                )}
              </div>
            </button>
          );
        })}
      </div>

      <Button
        className="w-full h-12 text-lg bg-primary hover:bg-primary/90"
        disabled={selectedSlot === null}
        onClick={handleRegister}
      >
        Register for Open House
      </Button>

      <p className="text-xs text-center text-muted-foreground mt-4">
        You&apos;ll receive a confirmation email with directions and parking information
      </p>
    </Card>
  );
}
