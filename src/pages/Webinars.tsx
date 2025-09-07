import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const webinarsData = [
  {
    id: 1,
    title: "Mastering Digital Wallets",
    date: "2025-10-10",
    time: "3:00 PM - 4:00 PM GMT",
    description: "Learn how to manage digital wallets effectively, with tips for both personal and business use.",
    link: "#",
  },
  {
    id: 2,
    title: "Secure Online Transactions",
    date: "2025-10-17",
    time: "5:00 PM - 6:00 PM GMT",
    description: "Discover best practices for keeping your digital transactions safe and secure.",
    link: "#",
  },
  {
    id: 3,
    title: "Analytics for Finance Management",
    date: "2025-10-24",
    time: "2:00 PM - 3:00 PM GMT",
    description: "Explore the power of analytics in monitoring and growing your finances efficiently.",
    link: "#",
  },
];

const Webinars = () => {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">WalletX Webinars</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join our live webinars to gain insights into digital finance, secure transactions, and growing your business.
        </p>
      </section>

      {/* Upcoming Webinars */}
      <section className="grid md:grid-cols-3 gap-8 mb-20">
        {webinarsData.map((webinar) => (
          <Card key={webinar.id} className="border border-muted shadow-sm hover:shadow-md transition">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{webinar.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <p className="text-muted-foreground text-sm">{webinar.description}</p>
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <Calendar className="w-4 h-4" /> {webinar.date} | {webinar.time}
              </div>
              <Button asChild size="sm" className="mt-4">
                <a href={webinar.link} target="_blank" rel="noopener noreferrer">
                  Register
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center bg-muted rounded-2xl py-16 px-6 shadow-sm">
        <h2 className="text-3xl font-bold mb-4">Don’t Miss Our Next Webinar</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          Sign up for our newsletter to get updates on upcoming webinars, tips, and insights to stay ahead in digital finance.
        </p>
        <Button size="lg">Subscribe Now</Button>
      </section>
    </main>
  );
};

export default Webinars;
