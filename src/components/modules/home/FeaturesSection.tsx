import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Zap, Shield, Users } from "lucide-react";

const features = [
  {
    icon: <CheckCircle className="w-8 h-8 text-primary" />,
    title: "Easy to Use",
    description:
      "Our platform is designed with simplicity in mind, so you can get started quickly without any hassle.",
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Fast & Reliable",
    description:
      "Enjoy lightning-fast performance and uptime reliability for all your projects and workflows.",
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Secure by Default",
    description:
      "Your data is protected with industry-standard security practices to ensure safety and privacy.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Collaboration",
    description:
      "Work seamlessly with your team and share resources effortlessly across different projects.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-6">Features</h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Discover what makes our platform powerful and unique.  
        Everything you need to grow and succeed.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Card key={index} className="border border-muted shadow-sm hover:shadow-md transition hover:bg-primary/10">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
