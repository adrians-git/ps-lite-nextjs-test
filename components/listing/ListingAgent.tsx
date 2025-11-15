'use client';

import Image from 'next/image';
import { Star, Phone, Mail, MessageCircle, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { ListingAgent as Agent } from '@/data/mockListingData';

interface ListingAgentProps {
  agent: Agent;
  onMessageClick: () => void;
}

export function ListingAgent({ agent, onMessageClick }: ListingAgentProps) {
  return (
    <Card className="p-6 md:p-8 grain-texture">
      <h2 className="text-3xl font-bold mb-6">Your Agent</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Agent Photo */}
        <div className="flex-shrink-0">
          <Avatar className="h-32 w-32 md:h-40 md:w-40">
            <AvatarImage src={agent.photo} alt={agent.name} />
            <AvatarFallback className="text-2xl">
              {agent.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Agent Info */}
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-2xl font-bold">{agent.name}</h3>
            <p className="text-muted-foreground">{agent.title}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(agent.rating)
                      ? 'fill-accent text-accent'
                      : 'text-muted'
                  }`}
                />
              ))}
            </div>
            <span className="font-semibold">{agent.rating}</span>
            <span className="text-muted-foreground">({agent.reviewCount} reviews)</span>
          </div>

          {/* Experience & Volume */}
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              <span>{agent.experience} experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              <span>{agent.volume}</span>
            </div>
          </div>

          {/* Bio */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {agent.bio}
          </p>

          {/* Availability Badge */}
          <div className="flex items-center gap-2 p-3 bg-success/10 rounded-lg border border-success/20">
            <div className="h-2.5 w-2.5 rounded-full bg-success animate-pulse" />
            <span className="text-sm font-medium">
              Available 24/7 to answer questions • Avg response: 43 seconds
            </span>
          </div>
        </div>
      </div>

      {/* Contact Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
        <Button
          className="gap-2 bg-primary hover:bg-primary/90"
          onClick={onMessageClick}
        >
          <MessageCircle className="h-4 w-4" />
          Get Instant Response
        </Button>
        <Button
          variant="outline"
          className="gap-2"
          onClick={() => window.location.href = `tel:${agent.phone}`}
        >
          <Phone className="h-4 w-4" />
          {agent.phone}
        </Button>
        <Button
          variant="outline"
          className="gap-2"
          onClick={() => window.location.href = `mailto:${agent.email}`}
        >
          <Mail className="h-4 w-4" />
          Email
        </Button>
      </div>

      {/* Trust Message */}
      <div className="mt-6 pt-6 border-t text-center">
        <p className="text-sm text-muted-foreground">
          Get instant responses - call, text, or message anytime, even at 2am
        </p>
      </div>
    </Card>
  );
}
