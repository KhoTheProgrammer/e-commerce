"use client";

import { Search, HelpCircle, MessageCircle, Shield, CreditCard, Package } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const faqs = [
  {
    category: "Getting Started",
    icon: Package,
    questions: [
      {
        q: "How do I create an account?",
        a: "Click the 'Sign Up' button in the header and register with your university email address. You'll receive a verification email to activate your account.",
      },
      {
        q: "Is CampusCart free to use?",
        a: "Yes! CampusCart is completely free for students. There are no listing fees or transaction fees.",
      },
      {
        q: "Who can use CampusCart?",
        a: "CampusCart is exclusively for university students. You'll need a valid .edu email address to sign up.",
      },
    ],
  },
  {
    category: "Buying",
    icon: Search,
    questions: [
      {
        q: "How do I search for items?",
        a: "Use the search bar in the header or browse by category. You can filter results by price, condition, and location.",
      },
      {
        q: "How do I contact a seller?",
        a: "Click on any product to view its details, then use the 'Message Seller' button to start a conversation.",
      },
      {
        q: "What payment methods are accepted?",
        a: "Payment is arranged between buyers and sellers. Most students use cash, Venmo, PayPal, or other peer-to-peer payment apps.",
      },
      {
        q: "Can I return an item?",
        a: "Return policies are set by individual sellers. We recommend discussing this before completing your purchase.",
      },
    ],
  },
  {
    category: "Selling",
    icon: CreditCard,
    questions: [
      {
        q: "How do I list an item for sale?",
        a: "Click 'Sell an Item' in the header, fill out the listing form with photos and details, then publish your listing.",
      },
      {
        q: "How should I price my items?",
        a: "Research similar items on CampusCart to find competitive prices. Consider the item's condition and original price.",
      },
      {
        q: "Can I edit my listing after posting?",
        a: "Yes! Go to your profile, find the listing under 'My Listings', and click 'Edit' to make changes.",
      },
      {
        q: "How long does my listing stay active?",
        a: "Listings remain active for 90 days. You can renew them or mark items as sold from your profile.",
      },
    ],
  },
  {
    category: "Safety & Security",
    icon: Shield,
    questions: [
      {
        q: "How do I stay safe when meeting buyers/sellers?",
        a: "Always meet in public, well-lit areas on campus. Consider bringing a friend and never share personal financial information.",
      },
      {
        q: "What should I do if I encounter a scam?",
        a: "Report the user immediately using the 'Report' button on their profile or listing. Our team will investigate promptly.",
      },
      {
        q: "How does CampusCart verify users?",
        a: "All users must verify their university email address. We also track user ratings and reviews.",
      },
      {
        q: "Is my personal information safe?",
        a: "Yes. We never share your email or personal information with other users. Read our Privacy Policy for details.",
      },
    ],
  },
  {
    category: "Account & Support",
    icon: HelpCircle,
    questions: [
      {
        q: "How do I reset my password?",
        a: "Click 'Forgot Password' on the login page and follow the instructions sent to your email.",
      },
      {
        q: "How do I delete my account?",
        a: "Go to your profile settings and click 'Delete Account'. Note that this action cannot be undone.",
      },
      {
        q: "How do I report a problem?",
        a: "Use the 'Report' button on listings or profiles, or contact us at support@campuscart.com.",
      },
      {
        q: "How can I improve my seller rating?",
        a: "Provide accurate descriptions, respond quickly to messages, meet on time, and be honest about item conditions.",
      },
    ],
  },
];

export default function HelpPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="from-primary/10 to-background bg-gradient-to-b px-4 py-16">
          <div className="container mx-auto text-center">
            <HelpCircle className="text-primary mx-auto mb-4 h-16 w-16" />
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Help Center</h1>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
              Find answers to common questions and get support
            </p>

            {/* Search Bar */}
            <div className="mx-auto max-w-2xl">
              <div className="relative">
                <Search className="text-muted-foreground absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2" />
                <Input
                  type="search"
                  placeholder="Search for help..."
                  className="h-14 pl-12 text-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="px-4 py-12">
          <div className="container mx-auto">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="transition-all hover:shadow-md">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="bg-blue-100 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                    <Package className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Getting Started</h3>
                    <p className="text-muted-foreground text-sm">New to CampusCart?</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-md">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="bg-green-100 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                    <Search className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Buying Guide</h3>
                    <p className="text-muted-foreground text-sm">How to purchase items</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-md">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="bg-purple-100 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                    <CreditCard className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Selling Guide</h3>
                    <p className="text-muted-foreground text-sm">List your items</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-md">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="bg-red-100 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Safety Tips</h3>
                    <p className="text-muted-foreground text-sm">Stay safe on campus</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-muted/30 px-4 py-16">
          <div className="container mx-auto">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              {faqs.map((category, idx) => {
                const Icon = category.icon;
                return (
                  <div key={idx}>
                    <div className="mb-6 flex items-center gap-3">
                      <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-2xl font-bold">{category.category}</h3>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      {category.questions.map((faq, qIdx) => (
                        <Card key={qIdx}>
                          <CardHeader>
                            <CardTitle className="text-base">{faq.q}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground text-sm">{faq.a}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="px-4 py-16">
          <div className="container mx-auto">
            <Card className="mx-auto max-w-2xl">
              <CardHeader className="text-center">
                <MessageCircle className="text-primary mx-auto mb-4 h-12 w-12" />
                <CardTitle className="text-2xl">Still Need Help?</CardTitle>
                <CardDescription>
                  Can't find what you're looking for? Our support team is here to help!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Button variant="outline" className="h-auto flex-col py-6" asChild>
                    <a href="mailto:support@campuscart.com">
                      <MessageCircle className="mb-2 h-6 w-6" />
                      <span className="font-semibold">Email Support</span>
                      <span className="text-muted-foreground text-xs">
                        support@campuscart.com
                      </span>
                    </a>
                  </Button>

                  <Button variant="outline" className="h-auto flex-col py-6" asChild>
                    <Link href="/safety">
                      <Shield className="mb-2 h-6 w-6" />
                      <span className="font-semibold">Safety Guidelines</span>
                      <span className="text-muted-foreground text-xs">
                        Learn how to stay safe
                      </span>
                    </Link>
                  </Button>
                </div>

                <div className="rounded-lg bg-blue-50 p-4 text-center text-sm text-blue-900">
                  <p className="font-semibold">Response Time</p>
                  <p>We typically respond within 24 hours on business days</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
