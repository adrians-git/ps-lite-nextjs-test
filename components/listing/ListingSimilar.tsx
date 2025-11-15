'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bed, Bath, Maximize } from 'lucide-react';
import type { Listing } from '@/data/mockListingData';

interface ListingSimilarProps {
  listings: Listing[];
}

export function ListingSimilar({ listings }: ListingSimilarProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <Card className="p-6 md:p-8 grain-texture">
      <h2 className="text-3xl font-bold mb-6">Similar Properties</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <Link
            key={listing.id}
            href={`/listing/${listing.id}`}
            className="group block"
          >
            <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all hover:shadow-lg">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={listing.images[0]?.url || ''}
                  alt={listing.images[0]?.alt || 'Property'}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {listing.status === 'active' && (
                  <Badge className="absolute top-3 left-3 bg-success text-success-foreground">
                    Active
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                {/* Price */}
                <div className="text-2xl font-bold text-foreground">
                  {formatPrice(listing.price)}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Bed className="h-4 w-4" />
                    <span className="font-medium">{listing.beds}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bath className="h-4 w-4" />
                    <span className="font-medium">{listing.baths}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Maximize className="h-4 w-4" />
                    <span className="font-medium">{listing.sqft.toLocaleString()}</span>
                  </div>
                </div>

                {/* Address */}
                <div className="text-sm">
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {listing.address.street}
                  </div>
                  <div className="text-muted-foreground">
                    {listing.address.city}, {listing.address.state} {listing.address.zip}
                  </div>
                </div>

                {/* Days on Market */}
                <div className="text-xs text-muted-foreground pt-2 border-t">
                  {listing.daysOnMarket} days on market
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View More Link */}
      <div className="mt-6 text-center">
        <Link
          href="/search"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
        >
          View More Properties
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </Card>
  );
}
