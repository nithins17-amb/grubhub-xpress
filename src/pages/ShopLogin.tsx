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
        
        <div className="bg-gradient-to-br from-veg/10 via-veg/5 to-background rounded-t-lg p-8 border-b-2 border-veg/20">
          <div className="flex items-center justify-center mb-4">
            <div className="w-20 h-20 bg-veg rounded-full flex items-center justify-center shadow-lg">
              <Store className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-center text-veg">Shop Staff Login</h1>
          <p className="text-center text-muted-foreground mt-2">
            Canteen staff access portal
          </p>
        </div>
        
        <Card className="shadow-card rounded-t-none border-t-0">
          <CardHeader className="space-y-1 pt-2">
            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-md p-3 text-sm">
              <p className="font-semibold text-green-800 dark:text-green-200">Default Credentials:</p>
              <p className="text-green-700 dark:text-green-300">Shop ID: SHOP001</p>
              <p className="text-green-700 dark:text-green-300">Password: shop123</p>
            </div>
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
                  type="text"
                  defaultValue="shop123"
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
