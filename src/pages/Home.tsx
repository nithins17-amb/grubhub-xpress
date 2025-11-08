import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock, Star, Truck, Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-food.jpg";
import vegBurger from "@/assets/veg-burger.jpg";
import chickenBurger from "@/assets/chicken-burger.jpg";
import fries from "@/assets/fries.jpg";

const Home = () => {
  const features = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Quick Service",
      description: "Get your order ready in minutes with real-time tracking"
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Quality Food",
      description: "Fresh ingredients and authentic flavors guaranteed"
    },
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Easy Payment",
      description: "Online or offline, pay the way you prefer"
    },
    {
      icon: <Leaf className="h-8 w-8 text-veg" />,
      title: "Veg & Non-Veg",
      description: "Wide variety for all taste preferences"
    }
  ];

  const featuredItems = [
    {
      name: "Veg Burger",
      image: vegBurger,
      price: "₹99",
      isVeg: true
    },
    {
      name: "Chicken Burger",
      image: chickenBurger,
      price: "₹149",
      isVeg: false
    },
    {
      name: "French Fries",
      image: fries,
      price: "₹79",
      isVeg: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Delicious Food<br />
                <span className="text-secondary">Delivered Fast</span>
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Order your favorite meals from our canteen. Fresh, tasty, and ready in minutes!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/menu">
                  <Button size="lg" className="bg-secondary hover:bg-secondary-hover text-secondary-foreground text-lg px-8">
                    Order Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/offers">
                  <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8">
                    View Offers
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-slide-up hidden md:block">
              <img 
                src={heroImage} 
                alt="Delicious food" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-hover transition-all duration-300 border-border">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Items */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Items</h2>
          <p className="text-muted-foreground text-lg">Try our most popular dishes</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-hover transition-all duration-300 border-border group">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute top-4 right-4 ${item.isVeg ? 'bg-veg' : 'bg-primary'} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                  {item.isVeg ? '🌱 Veg' : '🍗 Non-Veg'}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-xl">{item.name}</h3>
                  <span className="text-primary font-bold text-xl">{item.price}</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/menu">
            <Button size="lg" variant="outline" className="text-lg">
              View Full Menu
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl mb-8 text-white/90">Join thousands of happy customers enjoying delicious food!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/user-login">
              <Button size="lg" className="bg-secondary hover:bg-secondary-hover text-secondary-foreground text-lg px-8">
                Sign Up Now
              </Button>
            </Link>
            <Link to="/admin-login">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8">
                Admin Login
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
