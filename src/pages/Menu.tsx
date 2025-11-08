import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import vegBurger from "@/assets/veg-burger.jpg";
import chickenBurger from "@/assets/chicken-burger.jpg";
import fries from "@/assets/fries.jpg";

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const vegItems = [
    { id: 1, name: "Veg Burger", price: 99, image: vegBurger, description: "Fresh veggies with special sauce" },
    { id: 2, name: "Paneer Roll", price: 120, image: vegBurger, description: "Grilled paneer with mint chutney" },
    { id: 3, name: "French Fries", price: 79, image: fries, description: "Crispy golden fries" },
    { id: 4, name: "Veg Pizza", price: 199, image: vegBurger, description: "Loaded with fresh vegetables" },
  ];

  const nonVegItems = [
    { id: 5, name: "Chicken Burger", price: 149, image: chickenBurger, description: "Juicy grilled chicken patty" },
    { id: 6, name: "Grilled Chicken", price: 180, image: chickenBurger, description: "Perfectly seasoned and grilled" },
    { id: 7, name: "Fish Roll", price: 160, image: chickenBurger, description: "Crispy fish with tartar sauce" },
    { id: 8, name: "Egg Wrap", price: 89, image: chickenBurger, description: "Scrambled eggs with veggies" },
  ];

  const MenuItem = ({ item, isVeg }: { item: typeof vegItems[0], isVeg: boolean }) => (
    <Card className="overflow-hidden hover:shadow-hover transition-all duration-300 border-border group">
      <div className="relative overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className={`absolute top-4 right-4 ${isVeg ? 'bg-veg' : 'bg-primary'} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
          {isVeg ? '🌱 Veg' : '🍗 Non-Veg'}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
        <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-primary font-bold text-xl">₹{item.price}</span>
          <Button size="sm" className="bg-primary hover:bg-primary-hover text-primary-foreground">
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
          <p className="text-muted-foreground text-lg mb-6">Explore our delicious offerings</p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-input"
            />
          </div>
        </div>

        {/* Menu Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="all">All Items</TabsTrigger>
            <TabsTrigger value="veg">🌱 Veg</TabsTrigger>
            <TabsTrigger value="non-veg">🍗 Non-Veg</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="w-2 h-2 bg-veg rounded-full mr-2"></span>
                Vegetarian
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {vegItems.map(item => <MenuItem key={item.id} item={item} isVeg={true} />)}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Non-Vegetarian
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {nonVegItems.map(item => <MenuItem key={item.id} item={item} isVeg={false} />)}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="veg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vegItems.map(item => <MenuItem key={item.id} item={item} isVeg={true} />)}
            </div>
          </TabsContent>

          <TabsContent value="non-veg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nonVegItems.map(item => <MenuItem key={item.id} item={item} isVeg={false} />)}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
