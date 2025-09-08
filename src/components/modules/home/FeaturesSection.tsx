import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/constants/features";
import type { Feature } from "@/types";
import { Link } from "react-router";

const FeaturesSection = ({ showButton = true }) => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-6">Features</h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Discover what makes our platform powerful and unique.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature: Feature, index: number) => {
          const Icon = feature.icon;
          return (
            <Card
              key={index}
              className="border border-muted shadow-sm hover:shadow-md transition hover:bg-primary/10"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {showButton && (
        <div className="text-center mt-10">
          <Link to="/features">
            <Button size="lg">See All Features</Button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default FeaturesSection;
