"use client";

import { FileText, Shield, UserCheck, AlertCircle, Scale, Clock } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    icon: UserCheck,
    content: [
      "By accessing and using CampusCart, you accept and agree to be bound by these Terms of Service.",
      "If you do not agree to these terms, please do not use our platform.",
      "We reserve the right to update these terms at any time. Continued use after changes constitutes acceptance of the modified terms.",
      "You must be at least 18 years old or have parental consent to use this service.",
    ],
  },
  {
    id: "eligibility",
    title: "2. User Eligibility",
    icon: Shield,
    content: [
      "CampusCart is exclusively for students, faculty, and staff of participating educational institutions.",
      "You must register with a valid university email address.",
      "You are responsible for maintaining the confidentiality of your account credentials.",
      "One person may maintain only one active account at a time.",
      "Accounts found to be in violation may be suspended or terminated without notice.",
    ],
  },
  {
    id: "listings",
    title: "3. Listings and Transactions",
    icon: FileText,
    content: [
      "Sellers are responsible for accurately describing items and setting fair prices.",
      "All items must comply with university policies and local, state, and federal laws.",
      "CampusCart does not take possession of items and is not involved in the actual transaction.",
      "Buyers and sellers interact directly to complete transactions.",
      "CampusCart is not responsible for the quality, safety, or legality of items listed.",
    ],
  },
  {
    id: "prohibited",
    title: "4. Prohibited Activities",
    icon: AlertCircle,
    content: [
      "Listing illegal items, weapons, drugs, alcohol, or counterfeit goods",
      "Engaging in fraudulent activities or scams",
      "Harassing, threatening, or intimidating other users",
      "Posting false, misleading, or deceptive content",
      "Attempting to circumvent security features or access restrictions",
      "Using the platform for commercial purposes unrelated to campus community",
      "Spamming or sending unsolicited commercial messages",
      "Violating intellectual property rights of others",
    ],
  },
  {
    id: "liability",
    title: "5. Limitation of Liability",
    icon: Scale,
    content: [
      "CampusCart provides the platform 'as is' without warranties of any kind.",
      "We are not liable for any direct, indirect, incidental, or consequential damages.",
      "Users engage in transactions at their own risk.",
      "We do not guarantee the accuracy, completeness, or reliability of user-generated content.",
      "We are not responsible for disputes between buyers and sellers.",
      "Maximum liability shall not exceed the amount paid for platform services, if any.",
    ],
  },
  {
    id: "disputes",
    title: "6. Dispute Resolution",
    icon: Scale,
    content: [
      "Users are encouraged to resolve disputes directly with each other first.",
      "CampusCart may provide mediation assistance but is not obligated to do so.",
      "We reserve the right to remove content or suspend accounts involved in disputes.",
      "Any legal disputes shall be resolved through arbitration in accordance with applicable laws.",
      "Class action lawsuits are waived by using this service.",
    ],
  },
  {
    id: "privacy",
    title: "7. Privacy and Data",
    icon: Shield,
    content: [
      "Your use of CampusCart is subject to our Privacy Policy.",
      "We collect and use data as described in our Privacy Policy.",
      "You grant us license to use content you post on the platform.",
      "We may use aggregated, anonymized data for analytics and improvement.",
      "You are responsible for obtaining consent when sharing others' information.",
    ],
  },
  {
    id: "termination",
    title: "8. Account Termination",
    icon: AlertCircle,
    content: [
      "We reserve the right to suspend or terminate accounts for violations of these terms.",
      "You may delete your account at any time through account settings.",
      "Upon termination, your access to the platform will be immediately revoked.",
      "We may retain certain information as required by law or for legitimate business purposes.",
      "Outstanding obligations survive account termination.",
    ],
  },
  {
    id: "intellectual",
    title: "9. Intellectual Property",
    icon: FileText,
    content: [
      "CampusCart and its original content are protected by intellectual property laws.",
      "You may not copy, modify, distribute, or reverse engineer any part of our platform.",
      "Users retain ownership of content they post but grant us license to use it.",
      "Respect copyright and trademark rights of others.",
      "Report any intellectual property violations to our support team.",
    ],
  },
  {
    id: "changes",
    title: "10. Changes to Service",
    icon: Clock,
    content: [
      "We reserve the right to modify or discontinue the service at any time.",
      "We may add, change, or remove features without prior notice.",
      "We are not liable for any modifications, suspensions, or discontinuations.",
      "Major changes will be communicated through the platform or email.",
    ],
  },
];

export default function TermsPage() {
  const lastUpdated = "January 2024";

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="from-primary/10 to-background bg-gradient-to-b px-4 py-16">
          <div className="container mx-auto text-center">
            <FileText className="text-primary mx-auto mb-4 h-16 w-16" />
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Terms of Service</h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
              Please read these terms carefully before using CampusCart
            </p>
            <p className="text-muted-foreground mt-4 text-sm">
              Last Updated: <span className="font-semibold">{lastUpdated}</span>
            </p>
          </div>
        </section>

        {/* Quick Links */}
        <section className="border-b px-4 py-8">
          <div className="container mx-auto">
            <h2 className="mb-6 text-center text-xl font-semibold">Quick Navigation</h2>
            <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2">
              {sections.map((section) => (
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

        {/* Terms Content */}
        <section className="px-4 py-16">
          <div className="container mx-auto">
            <div className="mx-auto max-w-4xl space-y-8">
              {/* Introduction */}
              <Card className="border-primary/20 bg-blue-50/50">
                <CardContent className="p-6">
                  <p className="text-sm leading-relaxed">
                    Welcome to CampusCart. These Terms of Service ("Terms") govern your use of our
                    platform and services. By creating an account or using CampusCart, you agree to
                    these Terms and our Privacy Policy. These Terms constitute a legally binding
                    agreement between you and CampusCart.
                  </p>
                </CardContent>
              </Card>

              {/* All Sections */}
              {sections.map((section, idx) => {
                const Icon = section.icon;
                return (
                  <div key={section.id} id={section.id} className="scroll-mt-20">
                    <Card>
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="bg-primary/10 text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                            <Icon className="h-6 w-6" />
                          </div>
                          <CardTitle className="pt-2 text-2xl">{section.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {section.content.map((item, itemIdx) => (
                            <li key={itemIdx} className="text-muted-foreground flex gap-3 text-sm">
                              <span className="text-primary mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                    {idx < sections.length - 1 && <Separator className="my-8" />}
                  </div>
                );
              })}

              {/* Contact Information */}
              <Card className="border-primary/20 bg-blue-50/50">
                <CardHeader>
                  <CardTitle>11. Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-relaxed">
                    If you have questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Email:</strong>{" "}
                      <a href="mailto:legal@campuscart.com" className="text-primary hover:underline">
                        legal@campuscart.com
                      </a>
                    </p>
                    <p>
                      <strong>Support:</strong>{" "}
                      <Link href="/help" className="text-primary hover:underline">
                        Visit Help Center
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Acknowledgment */}
              <Card className="border-yellow-200 bg-yellow-50/50">
                <CardContent className="p-6">
                  <p className="text-sm text-yellow-900">
                    <strong>Important:</strong> By using CampusCart, you acknowledge that you have
                    read, understood, and agree to be bound by these Terms of Service. If you do not
                    agree with any part of these terms, you must discontinue use of the platform
                    immediately.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/30 px-4 py-16">
          <div className="container mx-auto text-center">
            <h2 className="mb-4 text-2xl font-bold">Have Questions?</h2>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl">
              Our support team is here to help clarify any terms or answer your questions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/help"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-6 py-3 font-medium transition-colors"
              >
                Visit Help Center
              </Link>
              <Link
                href="/privacy"
                className="border-input bg-background hover:bg-accent rounded-md border px-6 py-3 font-medium transition-colors"
              >
                Read Privacy Policy
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
