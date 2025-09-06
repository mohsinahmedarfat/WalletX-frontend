import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services, categories } from "@/constants/services";
import type { Service } from "@/types";

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

      {/* Category Filter */}
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
        {filteredServices.map((service: Service, index) => {
          const Icon = service.icon; // instantiate the component here
          return (
            <Card
              key={index}
              className="border border-muted shadow-sm hover:shadow-md transition"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          );
        })}

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
