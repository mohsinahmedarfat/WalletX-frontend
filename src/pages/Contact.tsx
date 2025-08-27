import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Got a question, feedback, or just want to say hello?  
        Fill out the form below or reach us through our contact details.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
              <Textarea placeholder="Your Message" rows={5} required />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="text-primary w-5 h-5" />
              <span>support@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-primary w-5 h-5" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-primary w-5 h-5" />
              <span>123 Main Street, City, Country</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
