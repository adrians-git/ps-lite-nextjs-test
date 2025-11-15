'use client';

import { Card } from '@/components/ui/card';
import { MapPin, Coffee, ShoppingBag, Utensils, Trees, Dumbbell } from 'lucide-react';

interface ListingNeighborhoodProps {
  neighborhood: string;
  city: string;
}

export function ListingNeighborhood({ neighborhood, city }: ListingNeighborhoodProps) {
  // Mock Walk Score data - in production would integrate with Walk Score API
  const walkScore = 45;
  const transitScore = 28;
  const bikeScore = 52;

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Walker\'s Paradise';
    if (score >= 70) return 'Very Walkable';
    if (score >= 50) return 'Somewhat Walkable';
    if (score >= 25) return 'Car-Dependent';
    return 'Very Car-Dependent';
  };

  const getScoreColor = (score: number) => {
    if (score >= 70) return 'text-success';
    if (score >= 50) return 'text-accent';
    return 'text-muted-foreground';
  };

  const amenities = [
    { icon: Coffee, label: 'Coffee Shops', count: 8, distance: '2.1 mi avg' },
    { icon: Utensils, label: 'Restaurants', count: 24, distance: '2.5 mi avg' },
    { icon: ShoppingBag, label: 'Shopping', count: 12, distance: '3.2 mi avg' },
    { icon: Trees, label: 'Parks & Trails', count: 15, distance: '1.8 mi avg' },
    { icon: Dumbbell, label: 'Fitness Centers', count: 5, distance: '3.5 mi avg' }
  ];

  return (
    <Card className="p-6 md:p-8 grain-texture">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10">
          <MapPin className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">Neighborhood</h2>
          <p className="text-muted-foreground">{neighborhood}, {city}</p>
        </div>
      </div>

      {/* Walk Score, Transit Score, Bike Score */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <ScoreCard
          title="Walk Score"
          score={walkScore}
          label={getScoreLabel(walkScore)}
          color={getScoreColor(walkScore)}
        />
        <ScoreCard
          title="Transit Score"
          score={transitScore}
          label={getScoreLabel(transitScore)}
          color={getScoreColor(transitScore)}
        />
        <ScoreCard
          title="Bike Score"
          score={bikeScore}
          label={getScoreLabel(bikeScore)}
          color={getScoreColor(bikeScore)}
        />
      </div>

      {/* Nearby Amenities */}
      <div>
        <h3 className="text-xl font-bold mb-4">Nearby Amenities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors"
            >
              <div className="p-3 rounded-lg bg-primary/10">
                <amenity.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="font-semibold">{amenity.label}</div>
                <div className="text-sm text-muted-foreground">
                  {amenity.count} within {amenity.distance}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About the Neighborhood */}
      <div className="mt-8 pt-8 border-t">
        <h3 className="text-xl font-bold mb-4">About {neighborhood}</h3>
        <p className="text-muted-foreground leading-relaxed">
          {neighborhood} is one of Sedona&apos;s most prestigious communities, offering residents breathtaking
          red rock views and easy access to world-class hiking trails. The neighborhood features
          well-maintained streets, low HOA fees, and a peaceful, private atmosphere while remaining
          close to downtown Sedona&apos;s shopping, dining, and cultural attractions. Residents enjoy
          the perfect balance of natural beauty and modern convenience.
        </p>
      </div>

      {/* Walk Score Attribution */}
      <div className="mt-6 pt-6 border-t text-xs text-muted-foreground">
        <p>
          Walk Score, Transit Score, and Bike Score are provided by{' '}
          <a
            href="https://www.walkscore.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Walk Score
          </a>
          . Scores are subject to change and should be used as a general guide only.
        </p>
      </div>
    </Card>
  );
}

function ScoreCard({
  title,
  score,
  label,
  color
}: {
  title: string;
  score: number;
  label: string;
  color: string;
}) {
  return (
    <div className="p-5 bg-secondary/30 rounded-lg border border-border">
      <div className="text-sm text-muted-foreground mb-2">{title}</div>
      <div className={`text-4xl font-bold mb-1 ${color}`}>{score}</div>
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
}
