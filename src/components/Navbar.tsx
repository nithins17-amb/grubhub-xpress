import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, User, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">C</span>
            </div>
            <span className="text-xl font-bold text-foreground">Canteen</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/menu" className="text-foreground hover:text-primary transition-colors">
              Menu
            </Link>
            <Link to="/offers" className="text-foreground hover:text-primary transition-colors">
              Offers
            </Link>
            <Link to="/combos" className="text-foreground hover:text-primary transition-colors">
              Combos
            </Link>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            {user ? (
              <Button 
                onClick={() => signOut()}
                variant="outline"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            ) : (
              <Link to="/user-login">
                <Button variant="outline">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>
            )}
            <Link to="/menu">
              <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
                Order Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/menu" className="text-foreground hover:text-primary transition-colors">
                Menu
              </Link>
              <Link to="/offers" className="text-foreground hover:text-primary transition-colors">
                Offers
              </Link>
              <Link to="/combos" className="text-foreground hover:text-primary transition-colors">
                Combos
              </Link>
              {user ? (
                <Button 
                  onClick={() => {
                    signOut();
                    setIsMobileMenuOpen(false);
                  }}
                  variant="outline" 
                  className="w-full"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              ) : (
                <Link to="/user-login">
                  <Button variant="outline" className="w-full">
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </Link>
              )}
              <Link to="/menu">
                <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                  Order Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
