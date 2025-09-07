import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const CtaSection = () => {
  return (
    <section className="bg-primary text-white py-16 px-6 lg:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Experience the Future of Digital Finance?
      </h2>
      <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
        Join thousands of users already managing their money with ease, speed,
        and security. Get started today and take control of your financial
        journey.
      </p>
      <div className="flex justify-center gap-4">
        <Button
          size="lg"
          className="bg-background text-primary hover:bg-background/90"
        >
          <Link to="/register">Get Started</Link>
        </Button>
        <Button size="lg" variant="secondary">
          <Link to="/services">Learn More</Link>
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
