import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const plans = [
  {
    name: "Basic",
    price: "$9/mo",
    description: "For individuals getting started.",
  },
  {
    name: "Pro",
    price: "$29/mo",
    description: "Perfect for professionals and small teams.",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Best for large organizations with advanced needs.",
  },
];

export default function PricingSection() {
  return (
    <section className="py-16 bg-muted/40">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Choose a plan that works for you. Upgrade anytime as your needs grow.
        </p>

        {/* Pricing Cards Preview */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`border shadow-sm ${
                plan.highlighted ? "border-primary shadow-md" : ""
              }`}
            >
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <p className="text-2xl font-bold">{plan.price}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {plan.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <Link to="/pricing">
          <Button size="lg">See Full Pricing</Button>
        </Link>
      </div>
    </section>
  );
}
