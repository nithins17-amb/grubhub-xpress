import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast.error("Please provide a rating");
      return;
    }
    toast.success("Thank you for your feedback!");
    setRating(0);
    setFeedback("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">We Value Your Feedback</h1>
            <p className="text-muted-foreground text-lg">Help us serve you better!</p>
          </div>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Share Your Experience</CardTitle>
              <CardDescription>
                Tell us about your recent order and help us improve our service
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label>Rate Your Experience</Label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          className={`h-10 w-10 ${
                            star <= (hoveredRating || rating)
                              ? 'fill-secondary text-secondary'
                              : 'text-muted'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="feedback">Your Feedback</Label>
                  <Textarea
                    id="feedback"
                    placeholder="Tell us what you loved or what we can improve..."
                    rows={6}
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="border-input resize-none"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                  Submit Feedback
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <Card className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">4.8</div>
              <div className="flex justify-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">2.5K+</div>
              <p className="text-sm text-muted-foreground mt-2">Happy Customers</p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-sm text-muted-foreground mt-2">Satisfaction Rate</p>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Feedback;
