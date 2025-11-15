'use client';

import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { ListingFeature } from '@/data/mockListingData';

interface ListingDetailsProps {
  features: ListingFeature[];
  beds: number;
  baths: number;
  sqft: number;
  lotSize: string;
  yearBuilt: number;
  propertyType: string;
  hoa: number;
  propertyTax: number;
}

export function ListingDetails({
  features,
  beds,
  baths,
  sqft,
  lotSize,
  yearBuilt,
  propertyType,
  hoa,
  propertyTax
}: ListingDetailsProps) {
  return (
    <Card className="p-6 md:p-8 grain-texture">
      <h2 className="text-3xl font-bold mb-6">Property Details</h2>

      <Tabs defaultValue="features" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="features">Features & Amenities</TabsTrigger>
          <TabsTrigger value="facts">Facts & Figures</TabsTrigger>
        </TabsList>

        <TabsContent value="features" className="space-y-6">
          {features.map((feature, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4 text-primary">{feature.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {feature.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-2">
                    <svg
                      className="h-5 w-5 text-primary mt-0.5 flex-shrink-0"
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
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              {index < features.length - 1 && (
                <div className="mt-6 border-b" />
              )}
            </div>
          ))}
        </TabsContent>

        <TabsContent value="facts" className="space-y-0">
          <div className="space-y-1">
            <DetailRow label="Property Type" value={propertyType} />
            <DetailRow label="Bedrooms" value={beds.toString()} />
            <DetailRow label="Bathrooms" value={baths.toString()} />
            <DetailRow label="Square Footage" value={`${sqft.toLocaleString()} sq ft`} />
            <DetailRow label="Lot Size" value={lotSize} />
            <DetailRow label="Year Built" value={yearBuilt.toString()} />
            <DetailRow
              label="HOA Dues"
              value={`$${hoa.toLocaleString()}/month`}
            />
            <DetailRow
              label="Annual Property Tax"
              value={`$${propertyTax.toLocaleString()}`}
            />
            <DetailRow
              label="Parking"
              value="3-car garage"
            />
            <DetailRow
              label="Heating"
              value="Central heating"
            />
            <DetailRow
              label="Cooling"
              value="Central A/C"
            />
            <DetailRow
              label="Flooring"
              value="Hardwood, tile"
            />
            <DetailRow
              label="Appliances"
              value="Refrigerator, dishwasher, range, microwave"
            />
            <DetailRow
              label="Laundry"
              value="In unit"
            />
            <DetailRow
              label="Water Source"
              value="Public"
            />
            <DetailRow
              label="Sewer"
              value="Public sewer"
            />
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-2 py-3 border-b last:border-b-0 hover:bg-secondary/30 transition-colors px-3 -mx-3 rounded">
      <div className="text-sm font-medium text-muted-foreground">{label}</div>
      <div className="text-sm font-semibold">{value}</div>
    </div>
  );
}
