"use client";

import { ImagePlus, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Category, Condition } from "@/types";

const categories: { value: Category; label: string }[] = [
  { value: "textbooks", label: "Textbooks" },
  { value: "electronics", label: "Electronics" },
  { value: "dorm-supplies", label: "Dorm Supplies" },
  { value: "furniture", label: "Furniture" },
  { value: "clothing", label: "Clothing" },
  { value: "sports", label: "Sports & Fitness" },
  { value: "other", label: "Other" },
];

const conditions: { value: Condition; label: string; description: string }[] = [
  { value: "new", label: "New", description: "Brand new, unused" },
  { value: "like-new", label: "Like New", description: "Barely used, excellent condition" },
  { value: "good", label: "Good", description: "Normal wear, fully functional" },
  { value: "fair", label: "Fair", description: "Visible wear, works fine" },
  { value: "poor", label: "Poor", description: "Heavy wear, may have issues" },
];

export default function SellPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "" as Category,
    condition: "" as Condition,
    location: "",
    tags: "",
  });

  const [images, setImages] = useState<string[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // In a real app, you'd upload these to a server
      // For now, we'll just create object URLs for preview
      const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
      setImages((prev) => [...prev, ...newImages].slice(0, 6)); // Max 6 images
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.title || !formData.price || !formData.category || !formData.condition) {
      alert("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    // In a real app, you'd submit this to your API
    console.log("Submitting product:", {
      ...formData,
      images,
      tags: formData.tags.split(",").map((t) => t.trim()).filter(Boolean),
    });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert("Product listed successfully!");
    router.push("/products");
    setIsSubmitting(false);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="mx-auto max-w-3xl">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="mb-2 text-3xl font-bold md:text-4xl">Sell an Item</h1>
              <p className="text-muted-foreground text-lg">
                List your item and connect with buyers in your campus community
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Basic Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                    <CardDescription>
                      Provide details about the item you're selling
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Title */}
                    <div className="space-y-2">
                      <Label htmlFor="title">
                        Title <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="title"
                        name="title"
                        placeholder="e.g., Calculus Textbook (9th Edition)"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <Label htmlFor="description">
                        Description <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="description"
                        name="description"
                        placeholder="Describe your item, including any important details..."
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={5}
                        required
                      />
                      <p className="text-muted-foreground text-sm">
                        Minimum 20 characters
                      </p>
                    </div>

                    {/* Category & Condition */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="category">
                          Category <span className="text-red-500">*</span>
                        </Label>
                        <Select
                          value={formData.category}
                          onValueChange={(value) =>
                            setFormData((prev) => ({ ...prev, category: value as Category }))
                          }
                        >
                          <SelectTrigger id="category">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((cat) => (
                              <SelectItem key={cat.value} value={cat.value}>
                                {cat.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="condition">
                          Condition <span className="text-red-500">*</span>
                        </Label>
                        <Select
                          value={formData.condition}
                          onValueChange={(value) =>
                            setFormData((prev) => ({ ...prev, condition: value as Condition }))
                          }
                        >
                          <SelectTrigger id="condition">
                            <SelectValue placeholder="Select condition" />
                          </SelectTrigger>
                          <SelectContent>
                            {conditions.map((cond) => (
                              <SelectItem key={cond.value} value={cond.value}>
                                <div>
                                  <div className="font-medium">{cond.label}</div>
                                  <div className="text-xs text-muted-foreground">
                                    {cond.description}
                                  </div>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Pricing & Location */}
                <Card>
                  <CardHeader>
                    <CardTitle>Pricing & Location</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      {/* Price */}
                      <div className="space-y-2">
                        <Label htmlFor="price">
                          Price (USD) <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="price"
                          name="price"
                          type="number"
                          min="0"
                          step="0.01"
                          placeholder="0.00"
                          value={formData.price}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      {/* Location */}
                      <div className="space-y-2">
                        <Label htmlFor="location">
                          Location <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="location"
                          name="location"
                          placeholder="e.g., Main Campus, North Dorms"
                          value={formData.location}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Photos */}
                <Card>
                  <CardHeader>
                    <CardTitle>Photos</CardTitle>
                    <CardDescription>
                      Add up to 6 photos of your item (first photo will be the cover)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Image Grid */}
                      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                        {images.map((image, index) => (
                          <div
                            key={index}
                            className="group relative aspect-square overflow-hidden rounded-lg border-2 border-dashed border-gray-300"
                          >
                            <img
                              src={image}
                              alt={`Upload ${index + 1}`}
                              className="h-full w-full object-cover"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute top-2 right-2 rounded-full bg-red-500 p-1 text-white opacity-0 transition-opacity group-hover:opacity-100"
                              aria-label={`Remove image ${index + 1}`}
                            >
                              <X className="h-4 w-4" />
                            </button>
                            {index === 0 && (
                              <div className="absolute bottom-2 left-2 rounded bg-primary px-2 py-1 text-xs text-primary-foreground">
                                Cover
                              </div>
                            )}
                          </div>
                        ))}

                        {/* Upload Button */}
                        {images.length < 6 && (
                          <label className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 transition-colors hover:border-primary hover:bg-primary/5">
                            <ImagePlus className="mb-2 h-8 w-8 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">Add Photo</span>
                            <input
                              type="file"
                              accept="image/*"
                              multiple
                              onChange={handleImageUpload}
                              className="hidden"
                            />
                          </label>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Details */}
                <Card>
                  <CardHeader>
                    <CardTitle>Additional Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Label htmlFor="tags">Tags (Optional)</Label>
                      <Input
                        id="tags"
                        name="tags"
                        placeholder="e.g., textbook, math, calculus (comma-separated)"
                        value={formData.tags}
                        onChange={handleInputChange}
                      />
                      <p className="text-muted-foreground text-sm">
                        Add relevant tags to help buyers find your item
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Submit Buttons */}
                <div className="flex gap-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="flex-1"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Publishing..." : "Publish Listing"}
                  </Button>
                  <Button
                    type="button"
                    size="lg"
                    variant="outline"
                    onClick={() => router.back()}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
