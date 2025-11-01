"use client";

import { ArrowLeft, Check, CreditCard, MapPin, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  });

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cart.items.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setOrderPlaced(true);

    // Clear cart after successful order
    setTimeout(() => {
      clearCart();
      router.push("/");
    }, 3000);
  };

  if (cart.items.length === 0 && !orderPlaced) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center bg-muted/30">
          <div className="text-center">
            <ShoppingBag className="text-muted-foreground mx-auto mb-4 h-16 w-16" />
            <h2 className="mb-2 text-2xl font-bold">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
              Add some items to your cart to proceed to checkout.
            </p>
            <Button asChild>
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center bg-muted/30">
          <Card className="max-w-md">
            <CardContent className="pt-6 text-center">
              <div className="bg-green-100 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="mb-2 text-2xl font-bold">Order Placed Successfully!</h2>
              <p className="text-muted-foreground mb-6">
                Thank you for your order. You'll receive a confirmation email shortly.
              </p>
              <p className="text-muted-foreground text-sm">
                Redirecting to homepage...
              </p>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shopping
            </Link>
          </Button>

          <div className="grid gap-8 lg:grid-cols-[1fr,400px]">
            {/* Checkout Form */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">Checkout</h1>

              <form onSubmit={handlePlaceOrder} className="space-y-6">
                {/* Shipping Information */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      <CardTitle>Shipping Information</CardTitle>
                    </div>
                    <CardDescription>
                      Where should we deliver your items?
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          required
                          value={shippingInfo.fullName}
                          onChange={(e) =>
                            setShippingInfo({ ...shippingInfo, fullName: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={shippingInfo.email}
                          onChange={(e) =>
                            setShippingInfo({ ...shippingInfo, email: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={shippingInfo.phone}
                        onChange={(e) =>
                          setShippingInfo({ ...shippingInfo, phone: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address *</Label>
                      <Input
                        id="address"
                        required
                        value={shippingInfo.address}
                        onChange={(e) =>
                          setShippingInfo({ ...shippingInfo, address: e.target.value })
                        }
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="space-y-2">
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          required
                          value={shippingInfo.city}
                          onChange={(e) =>
                            setShippingInfo({ ...shippingInfo, city: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State *</Label>
                        <Input
                          id="state"
                          required
                          value={shippingInfo.state}
                          onChange={(e) =>
                            setShippingInfo({ ...shippingInfo, state: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">ZIP Code *</Label>
                        <Input
                          id="zipCode"
                          required
                          value={shippingInfo.zipCode}
                          onChange={(e) =>
                            setShippingInfo({ ...shippingInfo, zipCode: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Information */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      <CardTitle>Payment Information</CardTitle>
                    </div>
                    <CardDescription>
                      Enter your payment details securely
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number *</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        required
                        value={paymentInfo.cardNumber}
                        onChange={(e) =>
                          setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cardName">Name on Card *</Label>
                      <Input
                        id="cardName"
                        required
                        value={paymentInfo.cardName}
                        onChange={(e) =>
                          setPaymentInfo({ ...paymentInfo, cardName: e.target.value })
                        }
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="expiryDate">Expiry Date *</Label>
                        <Input
                          id="expiryDate"
                          placeholder="MM/YY"
                          required
                          value={paymentInfo.expiryDate}
                          onChange={(e) =>
                            setPaymentInfo({ ...paymentInfo, expiryDate: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV *</Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          required
                          maxLength={3}
                          value={paymentInfo.cvv}
                          onChange={(e) =>
                            setPaymentInfo({ ...paymentInfo, cvv: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Place Order Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : `Place Order - ${formatPrice(cart.total)}`}
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Cart Items */}
                  <div className="space-y-3">
                    {cart.items.map((item) => (
                      <div key={item.productId} className="flex gap-3">
                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded bg-gray-100">
                          <Image
                            src={item.product.images[0]}
                            alt={item.product.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 text-sm">
                          <h3 className="line-clamp-2 font-medium">
                            {item.product.title}
                          </h3>
                          <p className="text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <div className="text-sm font-semibold">
                          {formatPrice(item.product.price * item.quantity)}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Price Breakdown */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>{formatPrice(cart.subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax</span>
                      <span>{formatPrice(cart.tax)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">{formatPrice(cart.total)}</span>
                    </div>
                  </div>

                  {/* Security Note */}
                  <div className="rounded-lg bg-green-50 p-3 text-sm text-green-900">
                    <div className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0" />
                      <div>
                        <p className="font-semibold">Secure Checkout</p>
                        <p className="text-xs">
                          Your payment information is encrypted and secure.
                        </p>
                      </div>
                    </div>
                  </div>
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
