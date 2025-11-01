"use client";

import {
  ShieldCheck,
  MapPin,
  Users,
  Eye,
  CreditCard,
  AlertTriangle,
  CheckCircle,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const safetyTips = [
  {
    icon: MapPin,
    title: "Meet in Public Places",
    description: "Always arrange meetups in well-lit, public areas on campus",
    tips: [
      "Campus libraries or student centers",
      "University coffee shops or cafeterias",
      "Campus security office lobbies",
      "Busy outdoor areas during daytime",
    ],
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Users,
    title: "Bring a Friend",
    description: "Never meet alone, especially for high-value transactions",
    tips: [
      "Bring a friend or roommate with you",
      "Tell someone where you're going",
      "Share your location with a trusted contact",
      "Stay in groups when possible",
    ],
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Eye,
    title: "Inspect Items Carefully",
    description: "Thoroughly examine items before purchasing",
    tips: [
      "Test electronics before buying",
      "Check textbooks for missing pages or damage",
      "Verify serial numbers on expensive items",
      "Take your time - don't feel rushed",
    ],
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: CreditCard,
    title: "Use Safe Payment Methods",
    description: "Protect yourself with secure payment practices",
    tips: [
      "Prefer cash for in-person transactions",
      "Use trusted payment apps (Venmo, PayPal)",
      "Never send money before seeing the item",
      "Avoid wire transfers or gift cards",
    ],
    color: "bg-yellow-100 text-yellow-600",
  },
];

const redFlags = [
  "Seller asks for payment before meeting",
  "Price seems too good to be true",
  "Seller avoids meeting in person",
  "Requests payment via wire transfer or gift cards",
  "Pressures you to decide immediately",
  "Won't provide additional photos or information",
  "Asks for personal financial information",
  "Has very low or no seller rating",
];

const emergencyContacts = [
  {
    name: "Campus Security",
    number: "XXX-XXX-XXXX",
    available: "24/7",
  },
  {
    name: "Local Police",
    number: "911",
    available: "Emergency",
  },
  {
    name: "Campus Safety Escort",
    number: "XXX-XXX-XXXX",
    available: "Evening hours",
  },
];

export default function SafetyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="from-primary/10 to-background bg-gradient-to-b px-4 py-16">
          <div className="container mx-auto text-center">
            <ShieldCheck className="text-primary mx-auto mb-4 h-16 w-16" />
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Safety Tips</h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
              Your safety is our top priority. Follow these guidelines for secure transactions.
            </p>
          </div>
        </section>

        {/* Main Safety Tips */}
        <section className="px-4 py-16">
          <div className="container mx-auto">
            <h2 className="mb-12 text-center text-3xl font-bold">Essential Safety Guidelines</h2>

            <div className="grid gap-8 lg:grid-cols-2">
              {safetyTips.map((tip, idx) => {
                const Icon = tip.icon;
                return (
                  <Card key={idx} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div
                          className={`${tip.color} flex h-12 w-12 shrink-0 items-center justify-center rounded-full`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{tip.title}</CardTitle>
                          <CardDescription className="mt-2">{tip.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {tip.tips.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2">
                            <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Red Flags Section */}
        <section className="bg-muted/30 px-4 py-16">
          <div className="container mx-auto">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 text-center">
                <AlertTriangle className="mx-auto mb-4 h-12 w-12 text-red-600" />
                <h2 className="mb-4 text-3xl font-bold">Warning Signs to Watch For</h2>
                <p className="text-muted-foreground text-lg">
                  If you notice any of these red flags, proceed with extreme caution or cancel the
                  transaction
                </p>
              </div>

              <Card className="border-red-200 bg-red-50/50">
                <CardContent className="p-6">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {redFlags.map((flag, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                        <span className="text-sm text-red-900">{flag}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="px-4 py-16">
          <div className="container mx-auto">
            <h2 className="mb-12 text-center text-3xl font-bold">Additional Best Practices</h2>

            <div className="mx-auto grid max-w-4xl gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Before the Meeting</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-sm">
                      Check the seller's profile, ratings, and reviews
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-sm">
                      Communicate only through CampusCart's messaging system
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-sm">
                      Agree on a specific public meeting location and time
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-sm">Tell someone where you're going and when</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>During the Meeting</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-sm">Stay in public, visible areas at all times</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-sm">
                      Inspect the item thoroughly before paying
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-sm">
                      Trust your instincts - if something feels wrong, leave
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-sm">Don't feel pressured to complete the transaction</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>After the Transaction</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-sm">Leave an honest review of your experience</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-sm">
                      Report any suspicious behavior or policy violations
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-sm">Keep records of your transaction if needed</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="bg-muted/30 px-4 py-16">
          <div className="container mx-auto">
            <div className="mx-auto max-w-2xl">
              <div className="mb-8 text-center">
                <Phone className="text-primary mx-auto mb-4 h-12 w-12" />
                <h2 className="mb-4 text-3xl font-bold">Emergency Contacts</h2>
                <p className="text-muted-foreground">
                  Save these numbers and don't hesitate to call if you feel unsafe
                </p>
              </div>

              <div className="space-y-4">
                {emergencyContacts.map((contact, idx) => (
                  <Card key={idx}>
                    <CardContent className="flex items-center justify-between p-6">
                      <div>
                        <h3 className="font-semibold">{contact.name}</h3>
                        <p className="text-muted-foreground text-sm">{contact.available}</p>
                      </div>
                      <a
                        href={`tel:${contact.number}`}
                        className="text-primary text-lg font-bold hover:underline"
                      >
                        {contact.number}
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-6 border-yellow-200 bg-yellow-50/50">
                <CardContent className="p-6 text-center">
                  <p className="text-sm text-yellow-900">
                    <strong>Remember:</strong> If you're in immediate danger, always call 911 first.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Report Issues */}
        <section className="px-4 py-16">
          <div className="container mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold">Report Suspicious Activity</h2>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
              Help keep CampusCart safe by reporting any violations of our policies or suspicious
              behavior.
            </p>
            <Button size="lg" asChild>
              <Link href="/help">Contact Support</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
