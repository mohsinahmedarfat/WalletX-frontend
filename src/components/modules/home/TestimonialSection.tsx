// TestimonialsSection.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jane Doe",
    role: "CEO, Acme Corp",
    message:
      "WalletX has completely transformed the way we manage transactions. Fast, secure, and easy to use!",
    avatar: "https://i.pravatar.cc/100?img=8",
  },
  {
    name: "John Smith",
    role: "Product Manager, FinTech Inc",
    message:
      "The platform is incredibly reliable and the support team is always responsive. Highly recommended!",
    avatar: "https://i.pravatar.cc/100?img=9",
  },
  {
    name: "Alice Johnson",
    role: "Developer, Tech Solutions",
    message:
      "I love how intuitive the dashboard is. It saves so much time on managing wallet transactions.",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
];

const TestimonialSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-6">What Our Users Say</h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Hear from some of our satisfied customers who are using WalletX to streamline their digital wallet management.
      </p>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border border-muted shadow-sm hover:shadow-md transition hover:bg-primary/10">
            <CardContent className="flex flex-col items-center text-center p-6">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <Quote className="w-6 h-6 text-primary mb-2" />
              <p className="text-sm text-muted-foreground mb-4">{testimonial.message}</p>
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
