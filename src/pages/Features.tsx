
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, BarChart, Globe, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeaturesSection from "@/components/modules/home/FeaturesSection";
import { Link } from "react-router";

const extraFeatures = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Advanced Security",
    description:
      "Multi-factor authentication, encryption, and fraud detection to keep your account and transactions safe.",
  },
  {
    icon: <BarChart className="w-10 h-10 text-primary" />,
    title: "Real-Time Analytics",
    description:
      "Track your spending, transfers, and earnings with real-time charts and insights.",
  },
  {
    icon: <Globe className="w-10 h-10 text-primary" />,
    title: "Global Reach",
    description:
      "Send and receive money across borders with minimal fees and maximum reliability.",
  },
  {
    icon: <CreditCard className="w-10 h-10 text-primary" />,
    title: "Multiple Payment Options",
    description:
      "Link your bank accounts, cards, and digital wallets for seamless transactions.",
  },
];

const Features = () => {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Features</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore everything our platform has to offer. From security to scalability, 
          we’ve built tools that help you manage your digital wallet with ease.
        </p>
      </header>

      {/* Reuse Home Feature Section */}
      <FeaturesSection />

      {/* Extra Features */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-6">More Powerful Features</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Beyond the basics, WalletX offers advanced features designed for businesses and individuals alike.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {extraFeatures.map((feature, index) => (
            <Card
              key={index}
              className="border border-muted shadow-sm hover:shadow-md transition"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-24 text-center bg-muted rounded-2xl py-16 px-6 shadow-sm">
        <h2 className="text-3xl font-bold mb-4">Ready to get started with WalletX?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          Join thousands of users managing their money smarter, faster, and more securely. 
          Sign up today and experience the future of digital wallet management.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/register">Get Started</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/pricing">View Pricing</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Features;
