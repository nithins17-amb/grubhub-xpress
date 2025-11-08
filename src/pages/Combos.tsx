import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import vegBurger from "@/assets/veg-burger.jpg";
import chickenBurger from "@/assets/chicken-burger.jpg";

const Combos = () => {
  const combos = [
    {
      name: "Classic Veg Combo",
      items: ["Veg Burger", "French Fries", "Cold Drink"],
      originalPrice: 258,
      comboPrice: 199,
      savings: 59,
      image: vegBurger,
      isVeg: true
    },
    {
      name: "Chicken Feast",
      items: ["Chicken Burger", "Grilled Chicken", "Fries", "Drink"],
      originalPrice: 498,
      comboPrice: 399,
      savings: 99,
      image: chickenBurger,
      isVeg: false
    },
    {
      name: "Lunch Special",
      items: ["Any Burger", "Fries", "Salad", "Drink"],
      originalPrice: 348,
      comboPrice: 249,
      savings: 99,
      image: vegBurger,
      isVeg: true
    },
    {
      name: "Family Pack",
      items: ["2 Burgers", "2 Fries", "2 Drinks", "1 Pizza"],
      originalPrice: 647,
      comboPrice: 499,
      savings: 148,
      image: chickenBurger,
      isVeg: false
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Combo Meals</h1>
          <p className="text-muted-foreground text-lg">Save more with our special combo deals!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {combos.map((combo, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-hover transition-all duration-300 border-border group">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={combo.image} 
                  alt={combo.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={combo.isVeg ? 'bg-veg text-veg-foreground' : 'bg-primary text-primary-foreground'}>
                    {combo.isVeg ? '🌱 Veg' : '🍗 Non-Veg'}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-secondary text-secondary-foreground font-bold">
                    Save ₹{combo.savings}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{combo.name}</CardTitle>
                <CardDescription>
                  <ul className="space-y-1 mt-2">
                    {combo.items.map((item, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground line-through">₹{combo.originalPrice}</p>
                    <p className="text-3xl font-bold text-primary">₹{combo.comboPrice}</p>
                  </div>
                  <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
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

export default Combos;
