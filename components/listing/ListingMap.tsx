'use client';

import { Card } from '@/components/ui/card';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ListingMapProps {
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

export function ListingMap({ address, coordinates }: ListingMapProps) {
  // Mock map - in production would use Mapbox or Google Maps
  const getDirectionsUrl = () => {
    const addressString = `${address.street}, ${address.city}, ${address.state} ${address.zip}`;
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addressString)}`;
  };

  const viewOnMapUrl = () => {
    return `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`;
  };

  return (
    <Card className="p-6 md:p-8 grain-texture">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">Location</h2>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="gap-2"
          onClick={() => window.open(getDirectionsUrl(), '_blank')}
        >
          <Navigation className="h-4 w-4" />
          Get Directions
        </Button>
      </div>

      {/* Address */}
      <div className="mb-6">
        <div className="text-lg font-semibold">{address.street}</div>
        <div className="text-muted-foreground">
          {address.city}, {address.state} {address.zip}
        </div>
      </div>

      {/* Mock Map Placeholder */}
      <div className="relative w-full h-96 bg-muted rounded-lg overflow-hidden border-2 border-border">
        {/* Static map image - in production, replace with actual map component */}
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/pin-l-home+D2691E(${coordinates.lng},${coordinates.lat})/${coordinates.lng},${coordinates.lat},13,0/800x600@2x?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw)`
          }}
        />

        {/* Map Overlay Controls */}
        <div className="absolute top-4 right-4">
          <Button
            size="sm"
            variant="secondary"
            onClick={() => window.open(viewOnMapUrl(), '_blank')}
          >
            View Larger Map
          </Button>
        </div>

        {/* Location Pin */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
          <div className="relative">
            <MapPin className="h-10 w-10 text-primary fill-primary drop-shadow-lg" />
          </div>
        </div>
      </div>

      {/* Nearby Places */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div className="p-3 bg-secondary/30 rounded-lg">
          <div className="font-semibold mb-1">Downtown Sedona</div>
          <div className="text-muted-foreground">2.5 miles • 8 min drive</div>
        </div>
        <div className="p-3 bg-secondary/30 rounded-lg">
          <div className="font-semibold mb-1">Cathedral Rock Trail</div>
          <div className="text-muted-foreground">3.1 miles • 10 min drive</div>
        </div>
        <div className="p-3 bg-secondary/30 rounded-lg">
          <div className="font-semibold mb-1">Sedona Airport</div>
          <div className="text-muted-foreground">4.2 miles • 12 min drive</div>
        </div>
      </div>
    </Card>
  );
}
