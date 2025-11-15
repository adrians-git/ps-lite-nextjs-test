'use client';

import { Card } from '@/components/ui/card';
import { GraduationCap, MapPin, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { School } from '@/data/mockListingData';

interface ListingSchoolsProps {
  schools: School[];
}

export function ListingSchools({ schools }: ListingSchoolsProps) {
  const getRatingColor = (rating: number) => {
    if (rating >= 8) return 'text-success';
    if (rating >= 6) return 'text-accent';
    return 'text-muted-foreground';
  };

  const getRatingBg = (rating: number) => {
    if (rating >= 8) return 'bg-success/10 border-success/20';
    if (rating >= 6) return 'bg-accent/10 border-accent/20';
    return 'bg-muted/10 border-muted/20';
  };

  return (
    <Card className="p-6 md:p-8 grain-texture">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10">
          <GraduationCap className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-3xl font-bold">Nearby Schools</h2>
      </div>

      <div className="space-y-4">
        {schools.map((school, index) => (
          <div
            key={index}
            className="p-5 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-transparent hover:border-primary/20"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1">{school.name}</h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span>{school.grades}</span>
                      <span>•</span>
                      <Badge variant="outline" className="text-xs">
                        {school.type}
                      </Badge>
                    </div>
                  </div>

                  {/* Rating Badge */}
                  <div
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${getRatingBg(
                      school.rating
                    )}`}
                  >
                    <Star className={`h-4 w-4 ${getRatingColor(school.rating)}`} />
                    <span className={`font-bold text-lg ${getRatingColor(school.rating)}`}>
                      {school.rating}/10
                    </span>
                  </div>
                </div>

                {/* Distance */}
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">{school.distance} away</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GreatSchools Attribution */}
      <div className="mt-6 pt-6 border-t text-xs text-muted-foreground">
        <p>
          School data provided by GreatSchools. Ratings are based on test scores, student progress,
          and other factors. Visit{' '}
          <a
            href="https://www.greatschools.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            GreatSchools.org
          </a>{' '}
          for more information.
        </p>
        <p className="mt-2">
          School service boundaries are intended to be used as a reference only. Verify enrollment
          eligibility with the school district prior to making a purchase decision.
        </p>
      </div>
    </Card>
  );
}
