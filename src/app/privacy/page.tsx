"use client";

import {
  Shield,
  Eye,
  Lock,
  Database,
  UserCheck,
  Globe,
  Cookie,
  Mail,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const privacySections = [
  {
    id: "overview",
    title: "1. Privacy Overview",
    icon: Shield,
    content: {
      intro:
        "CampusCart respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and share your information when you use our platform.",
      points: [
        "We only collect information necessary to provide our services",
        "Your personal data is never sold to third parties",
        "You have control over your data and privacy settings",
        "We use industry-standard security measures to protect your information",
      ],
    },
  },
  {
    id: "collection",
    title: "2. Information We Collect",
    icon: Database,
    content: {
      intro: "We collect different types of information to provide and improve our services:",
      subsections: [
        {
          subtitle: "Account Information",
          items: [
            "University email address (required for verification)",
            "Name and profile information you provide",
            "Account preferences and settings",
            "Profile picture (optional)",
          ],
        },
        {
          subtitle: "Transaction Data",
          items: [
            "Listings you create (title, description, price, photos)",
            "Items you buy, sell, or save to your wishlist",
            "Messages exchanged through our platform",
            "Reviews and ratings you give or receive",
          ],
        },
        {
          subtitle: "Usage Information",
          items: [
            "Pages you visit and features you use",
            "Search queries and filters applied",
            "Time spent on platform and interaction patterns",
            "Device information (browser type, OS, screen size)",
          ],
        },
        {
          subtitle: "Technical Data",
          items: [
            "IP address and general location (city/region)",
            "Browser cookies and similar technologies",
            "Log data and error reports",
            "Performance and analytics data",
          ],
        },
      ],
    },
  },
  {
    id: "usage",
    title: "3. How We Use Your Information",
    icon: Eye,
    content: {
      intro: "We use the collected information for the following purposes:",
      points: [
        "To create and manage your account",
        "To facilitate transactions between buyers and sellers",
        "To provide customer support and respond to inquiries",
        "To improve platform functionality and user experience",
        "To detect and prevent fraud, abuse, and security issues",
        "To send important updates about your account or transactions",
        "To comply with legal obligations and enforce our Terms of Service",
        "To analyze usage patterns and platform performance (using aggregated data)",
      ],
    },
  },
  {
    id: "sharing",
    title: "4. Information Sharing",
    icon: Globe,
    content: {
      intro: "We share your information only in specific circumstances:",
      subsections: [
        {
          subtitle: "Public Information",
          items: [
            "Your profile name and picture are visible to other users",
            "Your listings are publicly viewable on the platform",
            "Your seller ratings and reviews are public",
          ],
        },
        {
          subtitle: "With Other Users",
          items: [
            "Contact information shared when you initiate a transaction",
            "Messages you send to buyers or sellers",
            "Your university affiliation (to verify eligibility)",
          ],
        },
        {
          subtitle: "With Service Providers",
          items: [
            "Cloud hosting and storage services",
            "Analytics and performance monitoring tools",
            "Email delivery services for notifications",
            "Security and fraud prevention services",
          ],
        },
        {
          subtitle: "Legal Requirements",
          items: [
            "When required by law or legal process",
            "To protect rights, property, or safety of CampusCart or users",
            "In connection with business transfers or acquisitions",
          ],
        },
      ],
    },
  },
  {
    id: "security",
    title: "5. Data Security",
    icon: Lock,
    content: {
      intro:
        "We implement appropriate technical and organizational measures to protect your personal data:",
      points: [
        "Encryption of data in transit using HTTPS/TLS",
        "Secure storage with encrypted databases",
        "Regular security audits and vulnerability assessments",
        "Access controls limiting who can view your data",
        "Secure authentication and password hashing",
        "Monitoring for suspicious activity and unauthorized access",
        "However, no system is 100% secure - use caution when sharing sensitive information",
      ],
    },
  },
  {
    id: "rights",
    title: "6. Your Privacy Rights",
    icon: UserCheck,
    content: {
      intro: "You have the following rights regarding your personal data:",
      points: [
        "Access: Request a copy of your personal data we hold",
        "Correction: Update or correct inaccurate information",
        "Deletion: Request deletion of your account and data",
        "Portability: Receive your data in a machine-readable format",
        "Opt-out: Unsubscribe from marketing communications",
        "Restriction: Limit how we process your data in certain circumstances",
        "Object: Object to processing based on legitimate interests",
      ],
    },
  },
  {
    id: "cookies",
    title: "7. Cookies and Tracking",
    icon: Cookie,
    content: {
      intro:
        "We use cookies and similar technologies to enhance your experience and analyze platform usage:",
      subsections: [
        {
          subtitle: "Essential Cookies",
          items: [
            "Required for basic platform functionality",
            "Remember your login session",
            "Maintain your preferences and settings",
          ],
        },
        {
          subtitle: "Analytics Cookies",
          items: [
            "Track how you use the platform",
            "Help us understand which features are most popular",
            "Identify areas for improvement",
          ],
        },
        {
          subtitle: "Your Cookie Choices",
          items: [
            "You can control cookies through browser settings",
            "Blocking cookies may affect platform functionality",
            "You can clear cookies at any time",
          ],
        },
      ],
    },
  },
  {
    id: "retention",
    title: "8. Data Retention",
    icon: Database,
    content: {
      intro: "We retain your personal data only as long as necessary:",
      points: [
        "Active account data is retained while your account exists",
        "Transaction history kept for record-keeping and dispute resolution",
        "Deleted accounts: data removed within 30 days unless legally required to retain",
        "Some aggregated, anonymized data may be kept indefinitely for analytics",
        "Legal obligations may require longer retention in specific cases",
      ],
    },
  },
  {
    id: "childrens",
    title: "9. Children's Privacy",
    icon: UserCheck,
    content: {
      intro: "CampusCart is not intended for children under 18:",
      points: [
        "Users must be 18+ or have parental consent",
        "We do not knowingly collect data from children under 13",
        "If we discover we've collected data from a child, we'll delete it promptly",
        "Parents can contact us if they believe their child provided information",
      ],
    },
  },
  {
    id: "international",
    title: "10. International Users",
    icon: Globe,
    content: {
      intro: "If you access CampusCart from outside your university's location:",
      points: [
        "Your data may be transferred and processed in different countries",
        "We comply with applicable data protection laws",
        "By using CampusCart, you consent to international data transfers",
        "We implement safeguards for cross-border data transfers",
      ],
    },
  },
];

export default function PrivacyPage() {
  const lastUpdated = "January 2024";

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="from-primary/10 to-background bg-gradient-to-b px-4 py-16">
          <div className="container mx-auto text-center">
            <Shield className="text-primary mx-auto mb-4 h-16 w-16" />
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Privacy Policy</h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
              How we collect, use, and protect your personal information
            </p>
            <p className="text-muted-foreground mt-4 text-sm">
              Last Updated: <span className="font-semibold">{lastUpdated}</span>
            </p>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="border-b px-4 py-8">
          <div className="container mx-auto">
            <h2 className="mb-6 text-center text-xl font-semibold">Quick Navigation</h2>
            <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2">
              {privacySections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-primary hover:bg-primary/10 rounded-md px-3 py-1 text-sm transition-colors"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy Commitment */}
        <section className="px-4 py-12">
          <div className="container mx-auto">
            <Card className="border-primary/20 bg-blue-50/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Lock className="text-primary mt-1 h-8 w-8 shrink-0" />
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Our Privacy Commitment</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      At CampusCart, your privacy is paramount. We are committed to transparency
                      about how we handle your data. This Privacy Policy explains our practices in
                      plain language, and we encourage you to read it carefully. If you have any
                      questions, our team is always available to help.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="px-4 pb-16">
          <div className="container mx-auto">
            <div className="mx-auto max-w-4xl space-y-8">
              {privacySections.map((section, idx) => {
                const Icon = section.icon;
                return (
                  <div key={section.id} id={section.id} className="scroll-mt-20">
                    <Card>
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="bg-primary/10 text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl">{section.title}</CardTitle>
                            {section.content.intro && (
                              <CardDescription className="mt-2 text-sm">
                                {section.content.intro}
                              </CardDescription>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {/* Simple points list */}
                        {section.content.points && (
                          <ul className="space-y-3">
                            {section.content.points.map((point, pointIdx) => (
                              <li key={pointIdx} className="text-muted-foreground flex gap-3 text-sm">
                                <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Subsections */}
                        {section.content.subsections && (
                          <div className="space-y-6">
                            {section.content.subsections.map((subsection, subIdx) => (
                              <div key={subIdx}>
                                <h4 className="mb-3 font-semibold">{subsection.subtitle}</h4>
                                <ul className="space-y-2">
                                  {subsection.items.map((item, itemIdx) => (
                                    <li
                                      key={itemIdx}
                                      className="text-muted-foreground flex gap-3 text-sm"
                                    >
                                      <span className="text-primary mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                    {idx < privacySections.length - 1 && <Separator className="my-8" />}
                  </div>
                );
              })}

              {/* Changes to Policy */}
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                      <Mail className="h-6 w-6" />
                    </div>
                    <CardTitle className="pt-2 text-2xl">11. Changes to This Policy</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="text-muted-foreground flex gap-3 text-sm">
                      <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                      <span>
                        We may update this Privacy Policy from time to time to reflect changes in
                        our practices or legal requirements
                      </span>
                    </li>
                    <li className="text-muted-foreground flex gap-3 text-sm">
                      <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                      <span>
                        Significant changes will be communicated via email or platform notification
                      </span>
                    </li>
                    <li className="text-muted-foreground flex gap-3 text-sm">
                      <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                      <span>
                        The "Last Updated" date at the top reflects the most recent revision
                      </span>
                    </li>
                    <li className="text-muted-foreground flex gap-3 text-sm">
                      <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                      <span>
                        Continued use after changes indicates acceptance of the updated policy
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="border-primary/20 bg-blue-50/50">
                <CardHeader>
                  <CardTitle>12. Contact Us About Privacy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-relaxed">
                    If you have questions about this Privacy Policy or how we handle your data,
                    please contact us:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Privacy Team:</strong>{" "}
                      <a
                        href="mailto:privacy@campuscart.com"
                        className="text-primary hover:underline"
                      >
                        privacy@campuscart.com
                      </a>
                    </p>
                    <p>
                      <strong>Data Protection Officer:</strong>{" "}
                      <a href="mailto:dpo@campuscart.com" className="text-primary hover:underline">
                        dpo@campuscart.com
                      </a>
                    </p>
                    <p>
                      <strong>General Support:</strong>{" "}
                      <Link href="/help" className="text-primary hover:underline">
                        Visit Help Center
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Data Rights Notice */}
              <Card className="border-yellow-200 bg-yellow-50/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <UserCheck className="mt-0.5 h-6 w-6 shrink-0 text-yellow-900" />
                    <div>
                      <h4 className="mb-2 font-semibold text-yellow-900">
                        Exercise Your Rights
                      </h4>
                      <p className="text-sm text-yellow-900">
                        To access, update, or delete your personal data, or to exercise any other
                        privacy rights, please contact our privacy team or visit your account
                        settings. We will respond to your request within 30 days.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/30 px-4 py-16">
          <div className="container mx-auto text-center">
            <h2 className="mb-4 text-2xl font-bold">Questions About Your Privacy?</h2>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl">
              We're here to help you understand how we protect your data and your rights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/help"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-6 py-3 font-medium transition-colors"
              >
                Contact Support
              </Link>
              <Link
                href="/terms"
                className="border-input bg-background hover:bg-accent rounded-md border px-6 py-3 font-medium transition-colors"
              >
                Read Terms of Service
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
