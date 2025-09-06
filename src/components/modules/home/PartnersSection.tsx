// PartnersSection.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

// Example partner logos (replace with real logos)
const partners = [
  { name: "Stripe", logo: "/logos/stripe.svg" },
  { name: "PayPal", logo: "/logos/paypal.svg" },
  { name: "Visa", logo: "/logos/visa.svg" },
  { name: "Mastercard", logo: "/logos/mastercard.svg" },
  { name: "Google Pay", logo: "/logos/googlepay.svg" },
  { name: "Apple Pay", logo: "/logos/applepay.svg" },
];

const PartnersSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-6">Trusted By</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Leading companies and payment providers trust WalletX to securely manage transactions and digital assets.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
        {partners.map((partner) => (
          <Card key={partner.name} className="border border-muted shadow-sm hover:shadow-md transition p-4 flex items-center justify-center">
            <CardContent className="flex items-center justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 object-contain"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
