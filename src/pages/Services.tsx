import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Zap, Shield, Users } from "lucide-react";
import type { ReactElement } from "react";

type Service = {
  title: string;
  description: string;
  category: string;
  icon: ReactElement;
};

const services: Service[] = [
  {
    title: "Business Accounts",
    description:
      "Manage multiple accounts for your business with easy tracking, reporting, and advanced tools.",
    category: "Business",
    icon: <Briefcase className="w-8 h-8 text-primary" />,
  },
  {
    title: "Fast Payments",
    description:
      "Send and receive payments instantly with minimal fees and maximum security.",
    category: "Payments",
    icon: <Zap className="w-8 h-8 text-primary" />,
  },
  {
    title: "Secure Transactions",
    description:
      "All transactions are encrypted and protected by industry-standard security protocols.",
    category: "Security",
    icon: <Shield className="w-8 h-8 text-primary" />,
  },
  {
    title: "Collaboration Tools",
    description:
      "Invite team members, assign roles, and collaborate seamlessly on your accounts.",
    category: "Business",
    icon: <Users className="w-8 h-8 text-primary" />,
  },
  {
    title: "Analytics Dashboard",
    description: "Track your transactions, balances, and insights in real time.",
    category: "Analytics",
    icon: <Zap className="w-8 h-8 text-primary" />,
  },
];

const categories = ["All", "Business", "Payments", "Security", "Analytics"];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-6">Our Services</h1>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Explore our wide range of services and find the ones that fit your needs.
      </p>

      {/* Category Filter (Mega Menu Style) */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? "default" : "outline"}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredServices.map((service, index) => (
          <Card
            key={index}
            className="border border-muted shadow-sm hover:shadow-md transition"
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}

        {filteredServices.length === 0 && (
          <p className="text-center col-span-full text-muted-foreground">
            No services found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default Services;
