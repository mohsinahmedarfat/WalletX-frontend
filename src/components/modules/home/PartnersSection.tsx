import { Card, CardContent } from "@/components/ui/card";

const partners = [
  {
    name: "Stripe",
    logo: "https://cdn.simpleicons.org/stripe/635bff",
  },
  {
    name: "PayPal",
    logo: "https://cdn.simpleicons.org/paypal/003087",
  },
  {
    name: "Visa",
    logo: "https://cdn.simpleicons.org/visa/1a1f71",
  },
  {
    name: "Mastercard",
    logo: "https://cdn.simpleicons.org/mastercard/eb001b",
  },
  {
    name: "Apple",
    logo: "https://cdn.simpleicons.org/apple/000000",
  },
  {
    name: "Google",
    logo: "https://cdn.simpleicons.org/google/4285F4",
  },
];

const PartnersSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-6">
        Trusted by Leading Companies
      </h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        We partner with industry leaders to ensure seamless and secure
        experiences for our users.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
        {partners.map((partner, index) => (
          <Card
            key={index}
            className="border border-muted shadow-sm hover:shadow-md transition w-full flex items-center justify-center hover:bg-primary/10"
          >
            <CardContent className="p-6 flex items-center justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-10 object-contain"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
