"use client";

import {
  User,
  Mail,
  Phone,
  MapPin,
  Edit,
  Package,
  ShoppingBag,
  Heart,
  Star,
  Calendar,
  GraduationCap,
} from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { mockProducts } from "@/lib/mockData";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  
  // Mock user data - in a real app, this would come from authentication
  const [userData, setUserData] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@university.edu",
    phone: "+1 (555) 123-4567",
    university: "State University",
    major: "Computer Science",
    graduationYear: 2025,
    bio: "Junior CS major looking to buy and sell textbooks and electronics. Always happy to negotiate prices!",
    location: "Main Campus",
    joinedDate: "January 2024",
  });

  // Mock user listings
  const userListings = mockProducts.filter((p) => p.sellerId === "user1").slice(0, 3);
  const userPurchases = 12;
  const userRating = 4.8;

  const handleSave = () => {
    // In a real app, save to backend
    setIsEditing(false);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-6 lg:grid-cols-[300px,1fr]">
            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Profile Card */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-primary/10 text-primary mb-4 flex h-24 w-24 items-center justify-center rounded-full text-4xl font-bold">
                      {userData.name.charAt(0)}
                    </div>
                    <h2 className="mb-1 text-2xl font-bold">{userData.name}</h2>
                    <p className="text-muted-foreground mb-4 text-sm">{userData.email}</p>

                    <div className="mb-4 flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{userRating}</span>
                      <span className="text-muted-foreground text-sm">(48 reviews)</span>
                    </div>

                    <Separator className="my-4" />

                    <div className="grid w-full grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold">{userListings.length}</div>
                        <div className="text-muted-foreground text-xs">Listings</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{userPurchases}</div>
                        <div className="text-muted-foreground text-xs">Purchases</div>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    <div className="text-muted-foreground flex w-full items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>Joined {userData.joinedDate}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Package className="text-muted-foreground h-4 w-4" />
                      <span className="text-sm">Active Listings</span>
                    </div>
                    <span className="font-semibold">{userListings.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="text-muted-foreground h-4 w-4" />
                      <span className="text-sm">Total Sales</span>
                    </div>
                    <span className="font-semibold">23</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Heart className="text-muted-foreground h-4 w-4" />
                      <span className="text-sm">Wishlist Items</span>
                    </div>
                    <span className="font-semibold">8</span>
                  </div>
                </CardContent>
              </Card>
            </aside>

            {/* Main Content */}
            <div className="space-y-6">
              {/* Profile Information */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Profile Information</CardTitle>
                      <CardDescription>Manage your account details</CardDescription>
                    </div>
                    {!isEditing ? (
                      <Button variant="outline" onClick={() => setIsEditing(true)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                    ) : (
                      <div className="flex gap-2">
                        <Button variant="outline" onClick={() => setIsEditing(false)}>
                          Cancel
                        </Button>
                        <Button onClick={handleSave}>Save Changes</Button>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      {isEditing ? (
                        <Input
                          id="name"
                          value={userData.name}
                          onChange={(e) =>
                            setUserData({ ...userData, name: e.target.value })
                          }
                        />
                      ) : (
                        <div className="flex items-center gap-2">
                          <User className="text-muted-foreground h-4 w-4" />
                          <span>{userData.name}</span>
                        </div>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="flex items-center gap-2">
                        <Mail className="text-muted-foreground h-4 w-4" />
                        <span className="text-muted-foreground text-sm">{userData.email}</span>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      {isEditing ? (
                        <Input
                          id="phone"
                          value={userData.phone}
                          onChange={(e) =>
                            setUserData({ ...userData, phone: e.target.value })
                          }
                        />
                      ) : (
                        <div className="flex items-center gap-2">
                          <Phone className="text-muted-foreground h-4 w-4" />
                          <span>{userData.phone}</span>
                        </div>
                      )}
                    </div>

                    <Separator />

                    {/* University */}
                    <div className="space-y-2">
                      <Label htmlFor="university">University</Label>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="text-muted-foreground h-4 w-4" />
                        <span>{userData.university}</span>
                      </div>
                    </div>

                    {/* Major */}
                    <div className="space-y-2">
                      <Label htmlFor="major">Major</Label>
                      {isEditing ? (
                        <Input
                          id="major"
                          value={userData.major}
                          onChange={(e) =>
                            setUserData({ ...userData, major: e.target.value })
                          }
                        />
                      ) : (
                        <span>{userData.major}</span>
                      )}
                    </div>

                    {/* Location */}
                    <div className="space-y-2">
                      <Label htmlFor="location">Campus Location</Label>
                      {isEditing ? (
                        <Input
                          id="location"
                          value={userData.location}
                          onChange={(e) =>
                            setUserData({ ...userData, location: e.target.value })
                          }
                        />
                      ) : (
                        <div className="flex items-center gap-2">
                          <MapPin className="text-muted-foreground h-4 w-4" />
                          <span>{userData.location}</span>
                        </div>
                      )}
                    </div>

                    <Separator />

                    {/* Bio */}
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      {isEditing ? (
                        <Textarea
                          id="bio"
                          value={userData.bio}
                          onChange={(e) =>
                            setUserData({ ...userData, bio: e.target.value })
                          }
                          rows={4}
                        />
                      ) : (
                        <p className="text-muted-foreground text-sm">{userData.bio}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Active Listings */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>My Listings</CardTitle>
                      <CardDescription>Items you're currently selling</CardDescription>
                    </div>
                    <Button asChild>
                      <a href="/sell">Add New Listing</a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {userListings.length > 0 ? (
                    <div className="space-y-4">
                      {userListings.map((product) => (
                        <div
                          key={product.id}
                          className="flex items-center gap-4 rounded-lg border p-4"
                        >
                          <div className="bg-muted h-16 w-16 shrink-0 rounded" />
                          <div className="flex-1">
                            <h3 className="font-semibold">{product.title}</h3>
                            <p className="text-muted-foreground text-sm">
                              {product.views} views
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-primary text-lg font-bold">
                              ${product.price.toFixed(2)}
                            </div>
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-muted-foreground py-8 text-center">
                      <Package className="mx-auto mb-2 h-12 w-12" />
                      <p>No active listings yet</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
