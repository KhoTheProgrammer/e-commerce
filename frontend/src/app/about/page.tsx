"use client";

import {
  Users,
  Shield,
  Heart,
  MessageCircle,
  TrendingUp,
  Award,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Users,
    title: "Student-to-Student",
    description:
      "Buy and sell directly with fellow students at your university. Build trust within your campus community.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description:
      "Meet in public campus locations. We provide safety guidelines to ensure secure transactions.",
  },
  {
    icon: Heart,
    title: "Save Money",
    description:
      "Find great deals on textbooks, electronics, and more. Sell items you no longer need and earn cash.",
  },
  {
    icon: MessageCircle,
    title: "Easy Communication",
    description:
      "Built-in messaging system to connect with buyers and sellers. Arrange meetups and ask questions.",
  },
];

const stats = [
  { value: "10K+", label: "Active Students" },
  { value: "50K+", label: "Items Sold" },
  { value: "100+", label: "Universities" },
  { value: "4.8★", label: "Average Rating" },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="from-primary/10 to-background bg-gradient-to-b px-4 py-16">
          <div className="container mx-auto text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Welcome to CampusCart
            </h1>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
              Your trusted campus marketplace connecting students to buy, sell, and trade
              everything they need for university life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/products">Start Shopping</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/sell">List an Item</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y bg-white px-4 py-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-primary mb-2 text-4xl font-bold">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-16">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Why Choose CampusCart?</h2>
              <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                We're more than just a marketplace – we're a community built by students, for students.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="bg-primary/10 text-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                        <Icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-muted/30 px-4 py-16">
          <div className="container mx-auto">
            <div className="mx-auto max-w-3xl">
              <div className="mb-8 text-center">
                <Award className="text-primary mx-auto mb-4 h-12 w-12" />
                <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>
              </div>

              <Card>
                <CardContent className="p-8">
                  <p className="mb-4 text-lg leading-relaxed">
                    At CampusCart, we believe that every student deserves access to affordable
                    textbooks, electronics, and essentials. Our mission is to create a trusted
                    peer-to-peer marketplace that makes buying and selling easy, safe, and
                    convenient for the entire campus community.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Founded by students who experienced the challenges of finding affordable
                    course materials and dorm supplies, we've built a platform that puts student
                    needs first. We're committed to fostering a sustainable campus economy where
                    students can save money, reduce waste, and connect with their peers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="px-4 py-16">
          <div className="container mx-auto">
            <h2 className="mb-12 text-center text-3xl font-bold">How It Works</h2>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold">
                  1
                </div>
                <h3 className="mb-3 text-xl font-semibold">Create Your Account</h3>
                <p className="text-muted-foreground">
                  Sign up with your university email to join your campus marketplace.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary text-primary-foreground mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold">
                  2
                </div>
                <h3 className="mb-3 text-xl font-semibold">List or Browse Items</h3>
                <p className="text-muted-foreground">
                  Post items for sale with photos and descriptions, or browse what others are selling.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary text-primary-foreground mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold">
                  3
                </div>
                <h3 className="mb-3 text-xl font-semibold">Connect & Trade</h3>
                <p className="text-muted-foreground">
                  Message sellers, arrange safe meetups, and complete your transactions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="from-primary/10 to-background bg-gradient-to-t px-4 py-16">
          <div className="container mx-auto text-center">
            <TrendingUp className="text-primary mx-auto mb-4 h-12 w-12" />
            <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
            <p className="text-muted-foreground mx-auto mb-8 max-w-xl text-lg">
              Join thousands of students already saving money and finding great deals on CampusCart.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/products">Browse Products</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/sell">Sell an Item</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
