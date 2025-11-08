import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Gift, Percent } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Offers = () => {
  const offers = [
    {
      title: "Student Special",
      description: "Get 20% off on all orders with valid student ID",
      discount: "20% OFF",
      icon: <Percent className="h-8 w-8 text-primary" />,
      validUntil: "Valid till Month End",
      code: "STUDENT20"
    },
    {
      title: "Lunch Combo Deal",
      description: "Any burger + Fries + Drink at just ₹149",
      discount: "₹50 OFF",
      icon: <Gift className="h-8 w-8 text-secondary" />,
      validUntil: "12 PM - 3 PM Daily",
      code: "LUNCH149"
    },
    {
      title: "Weekend Bonanza",
      description: "Buy 2 Get 1 Free on all veg items",
      discount: "BUY 2 GET 1",
      icon: <Gift className="h-8 w-8 text-veg" />,
      validUntil: "Saturday & Sunday",
      code: "WEEKEND3"
    },
    {
      title: "First Order Discount",
      description: "New users get flat ₹100 off on first order",
      discount: "₹100 OFF",
      icon: <Percent className="h-8 w-8 text-primary" />,
      validUntil: "One time use",
      code: "FIRST100"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Special Offers</h1>
          <p className="text-muted-foreground text-lg">Save big with our exclusive deals!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {offers.map((offer, index) => (
            <Card key={index} className="hover:shadow-hover transition-all duration-300 border-border">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {offer.icon}
                      <Badge className="bg-primary text-primary-foreground">
                        {offer.discount}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2">{offer.title}</CardTitle>
                    <CardDescription className="text-base">{offer.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="h-4 w-4 mr-2" />
                    {offer.validUntil}
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Promo Code</p>
                    <p className="font-mono font-bold text-lg">{offer.code}</p>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                    Apply Offer
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Offers;
