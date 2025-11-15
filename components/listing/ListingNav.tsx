"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface ListingNavProps {
  agentPhone?: string;
}

export function ListingNav({ agentPhone = "(555) 123-4567" }: ListingNavProps) {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* Light mode logo */}
            <Image
              alt="PropertySimple"
              className="h-7 w-auto block dark:hidden"
              src="/lovable-uploads/3ae8586b-2625-423a-8e97-0bae1a52dd43.png"
              width={180}
              height={28}
              priority
            />
            {/* Dark mode logo */}
            <Image
              alt="PropertySimple"
              className="h-7 w-auto hidden dark:block"
              src="/lovable-uploads/057a76e0-bc0c-4ad8-90e5-6096e23fbed7.png"
              width={180}
              height={28}
              priority
            />
          </Link>

          {/* Call CTA */}
          <a href={`tel:${agentPhone.replace(/\D/g, '')}`}>
            <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call Agent</span>
              <span className="sm:hidden">{agentPhone}</span>
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}
