'use client';

import { Bed, Bath, Maximize, Calendar, Home, DollarSign, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface ListingOverviewProps {
  price: number;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    neighborhood: string;
  };
  beds: number;
  baths: number;
  sqft: number;
  lotSize: string;
  yearBuilt: number;
  propertyType: string;
  daysOnMarket: number;
  status: string;
  highlights: string[];
}

export function ListingOverview({
  price,
  address,
  beds,
  baths,
  sqft,
  lotSize,
  yearBuilt,
  propertyType,
  daysOnMarket,
  status,
  highlights
}: ListingOverviewProps) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(price);

  const pricePerSqft = Math.round(price / sqft);

  return (
    <div className="space-y-6">
      {/* Price & Address */}
      <div>
        <div className="flex items-start justify-between mb-3">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">{formattedPrice}</h1>
            <div className="text-sm text-muted-foreground">
              ${pricePerSqft.toLocaleString()} per sq ft
            </div>
          </div>
          <Badge
            variant={status === 'active' ? 'default' : 'secondary'}
            className="bg-success text-success-foreground"
          >
            {status === 'active' ? 'Active' : status}
          </Badge>
        </div>

        <div className="flex items-start gap-2 text-lg md:text-xl text-foreground">
          <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
          <div>
            <div className="font-semibold">{address.street}</div>
            <div className="text-muted-foreground">
              {address.city}, {address.state} {address.zip}
            </div>
            <div className="text-sm text-muted-foreground mt-1">{address.neighborhood}</div>
          </div>
        </div>
      </div>

      {/* Key Stats */}
      <Card className="p-6 grain-texture">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Bed className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold">{beds}</div>
              <div className="text-sm text-muted-foreground">Bedrooms</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Bath className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold">{baths}</div>
              <div className="text-sm text-muted-foreground">Bathrooms</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Maximize className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold">{sqft.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Sq Ft</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Home className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold">{lotSize}</div>
              <div className="text-sm text-muted-foreground">Lot Size</div>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div>
            <div className="text-muted-foreground mb-1">Property Type</div>
            <div className="font-semibold">{propertyType}</div>
          </div>
          <div>
            <div className="text-muted-foreground mb-1">Year Built</div>
            <div className="font-semibold">{yearBuilt}</div>
          </div>
          <div>
            <div className="text-muted-foreground mb-1">Days on Market</div>
            <div className="font-semibold">{daysOnMarket} days</div>
          </div>
        </div>
      </Card>

      {/* Key Highlights */}
      <Card className="p-6 grain-texture">
        <h2 className="text-2xl font-bold mb-4">Property Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="text-sm">{highlight}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
