"use client";

import { Mail, MapPin, MessageCircle, Star, TrendingUp } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface SellerCardProps {
  sellerId: string;
  sellerName: string;
  sellerAvatar?: string;
  location: string;
  rating?: number;
  totalSales?: number;
  joinedDate?: string;
  onContactSeller?: () => void;
}

/**
 * Seller information card component
 */
export function SellerCard({
  sellerId,
  sellerName,
  sellerAvatar,
  location,
  rating = 4.5,
  totalSales = 0,
  joinedDate = "2024",
  onContactSeller,
}: SellerCardProps) {
  return (
    <Card className="sticky top-4">
      <CardHeader>
        <h3 className="text-lg font-semibold">Seller Information</h3>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Seller Profile */}
        <div className="flex items-center gap-3">
          <div className="relative h-16 w-16 overflow-hidden rounded-full bg-gray-100">
            {sellerAvatar ? (
              <Image src={sellerAvatar} alt={sellerName} fill className="object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-primary/10 text-xl font-semibold text-primary">
                {sellerName.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <div className="flex-1">
            <h4 className="font-semibold">{sellerName}</h4>
            <div className="text-muted-foreground flex items-center gap-1 text-sm">
              <MapPin className="h-3 w-3" />
              {location}
            </div>
          </div>
        </div>

        <Separator />

        {/* Seller Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              Rating
            </div>
            <p className="text-lg font-semibold">{rating.toFixed(1)}/5.0</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <TrendingUp className="h-4 w-4" />
              Sales
            </div>
            <p className="text-lg font-semibold">{totalSales}</p>
          </div>
        </div>

        <Separator />

        {/* Member Since */}
        <div className="text-muted-foreground text-sm">
          Member since {joinedDate}
        </div>

        {/* Contact Buttons */}
        <div className="space-y-2">
          <Button className="w-full" onClick={onContactSeller}>
            <MessageCircle className="mr-2 h-4 w-4" />
            Message Seller
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <a href={`mailto:seller@example.com`}>
              <Mail className="mr-2 h-4 w-4" />
              Email Seller
            </a>
          </Button>
        </div>

        {/* Safety Note */}
        <div className="rounded-lg bg-blue-50 p-3 text-sm text-blue-900">
          <p className="font-semibold">Safety Tips:</p>
          <ul className="mt-1 list-inside list-disc space-y-1 text-xs">
            <li>Meet in public places on campus</li>
            <li>Inspect items before purchasing</li>
            <li>Use secure payment methods</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
