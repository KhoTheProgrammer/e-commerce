"use client";

import { Search, MessageCircle, CreditCard, CheckCircle, Package, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: 1,
    icon: Search,
    title: "Browse & Search",
    description: "Explore thousands of listings from fellow students",
    details: [
      "Use filters to find exactly what you need",
      "Search by category, price, or condition",
      "View detailed product photos and descriptions",
      "Check seller ratings and reviews",
    ],
  },
  {
    number: 2,
    icon: MessageCircle,
    title: "Connect with Sellers",
    description: "Message sellers to ask questions and arrange meetups",
    details: [
      "Built-in messaging system",
      "Ask questions about the item",
      "Negotiate prices if the seller allows",
      "Arrange safe meetup locations on campus",
    ],
  },
  {
    number: 3,
    icon: ShieldCheck,
    title: "Meet & Inspect",
    description: "Meet in safe, public locations on campus",
    details: [
      "Choose well-lit, public areas",
      "Bring a friend if possible",
      "Thoroughly inspect the item",
      "Test electronics before purchasing",
    ],
  },
  {
    number: 4,
    icon: CreditCard,
    title: "Complete Transaction",
    description: "Exchange payment and item securely",
    details: [
      "Use cash or secure payment apps",
      "Get a receipt if needed",
      "Exchange contact information",
      "Leave a review after the transaction",
    ],
  },
];

const buyerTips = [
  "Always meet in public places on campus",
  "Inspect items carefully before purchasing",
  "Check seller ratings and reviews",
  "Don't send money before seeing the item",
  "Trust your instincts - if something feels wrong, walk away",
];

const sellerTips = [
  "Take clear, well-lit photos of your items",
  "Write honest, detailed descriptions",
  "Price items competitively",
  "Respond promptly to buyer inquiries",
  "Be flexible with meetup times and locations",
];

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="from-primary/10 to-background bg-gradient-to-b px-4 py-16">
          <div className="container mx-auto text-center">
            <Package className="text-primary mx-auto mb-4 h-16 w-16" />
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">How CampusCart Works</h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
              Your complete guide to buying and selling on CampusCart
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="px-4 py-16">
          <div className="container mx-auto">
            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={step.number}
                    className={`grid gap-8 lg:grid-cols-2 lg:items-center ${isEven ? "" : "lg:grid-flow-dense"}`}
                  >
                    {/* Icon/Number */}
                    <div className={`flex justify-center ${isEven ? "" : "lg:col-start-2"}`}>
                      <div className="relative">
                        <div className="bg-primary/10 flex h-48 w-48 items-center justify-center rounded-full">
                          <Icon className="text-primary h-24 w-24" />
                        </div>
                        <div className="bg-primary text-primary-foreground absolute -bottom-4 -right-4 flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold">
                          {step.number}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                      <h2 className="mb-4 text-3xl font-bold">{step.title}</h2>
                      <p className="text-muted-foreground mb-6 text-lg">{step.description}</p>
                      <ul className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="text-primary mt-1 h-5 w-5 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="bg-muted/30 px-4 py-16">
          <div className="container mx-auto">
            <h2 className="mb-12 text-center text-3xl font-bold">Pro Tips</h2>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Buyer Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5" />
                    For Buyers
                  </CardTitle>
                  <CardDescription>Make smart purchases on campus</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {buyerTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="bg-primary/10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                          <span className="text-primary text-xs font-bold">{idx + 1}</span>
                        </div>
                        <span className="text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Seller Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    For Sellers
                  </CardTitle>
                  <CardDescription>Sell your items quickly and safely</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {sellerTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="bg-primary/10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                          <span className="text-primary text-xs font-bold">{idx + 1}</span>
                        </div>
                        <span className="text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-16">
          <div className="container mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
              Join thousands of students already buying and selling on CampusCart
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/products">Start Shopping</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/sell">List an Item</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
