'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ListingDescriptionProps {
  description: string;
  highlights: string[];
}

export function ListingDescription({ description, highlights }: ListingDescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Show first 300 chars initially
  const shouldTruncate = description.length > 300;
  const displayText = isExpanded || !shouldTruncate
    ? description
    : description.slice(0, 300) + '...';

  return (
    <Card className="p-6 md:p-8 grain-texture">
      <h2 className="text-3xl font-bold mb-6">About This Home</h2>

      {/* Description Text */}
      <div className="prose prose-lg max-w-none mb-6">
        <p className="text-foreground/90 leading-relaxed whitespace-pre-line">
          {displayText}
        </p>
      </div>

      {shouldTruncate && (
        <Button
          variant="ghost"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary hover:text-primary/80 -ml-4"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </Button>
      )}

      {/* Key Features Grid */}
      <div className="mt-8 pt-8 border-t">
        <h3 className="text-xl font-bold mb-4">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <div className="mt-1">
                <svg
                  className="h-5 w-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
