import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, ArrowLeft } from "lucide-react";

const ShopLogin = () => {
  return (
    <div className="min-h-screen bg-muted flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        
        <Card className="shadow-card">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Store className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <CardTitle className="text-2xl text-center">Shop Staff Login</CardTitle>
            <CardDescription className="text-center">
              Canteen staff access portal
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="shop-id">Shop ID</Label>
                <Input 
                  id="shop-id" 
                  type="text" 
                  placeholder="SHOP001"
                  className="border-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shop-password">Password</Label>
                <Input 
                  id="shop-password" 
                  type="password"
                  placeholder="••••••••"
                  className="border-input"
                />
              </div>
              <div className="flex items-center justify-end">
                <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                Access Shop Panel
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ShopLogin;
