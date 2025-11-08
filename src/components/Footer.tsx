import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">C</span>
              </div>
              <span className="text-xl font-bold">Canteen</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your favorite food destination. Fresh, delicious, and made with love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/menu" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Menu
              </Link>
              <Link to="/offers" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Special Offers
              </Link>
              <Link to="/combos" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Combos
              </Link>
              <Link to="/feedback" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Feedback
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Mail className="h-4 w-4" />
                <span>support@canteen.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4" />
                <span>123 Food Street, City</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Canteen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
