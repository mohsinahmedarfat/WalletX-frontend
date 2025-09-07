import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

type CaseStudy = {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  link: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Boosting Business Efficiency",
    category: "Business",
    excerpt: "See how WalletX helped a small business streamline its financial operations and improve team collaboration.",
    image: "https://plus.unsplash.com/premium_photo-1670917243492-712ce3634244?w=600&auto=format&fit=crop",
    link: "/case-studies/1",
  },
  {
    id: 2,
    title: "Fast & Secure Payments",
    category: "Payments",
    excerpt: "Discover how WalletX enabled instant payments and secure transactions for a growing e-commerce platform.",
    image: "https://images.unsplash.com/photo-1430276084627-789fe55a6da0?w=600&auto=format&fit=crop",
    link: "/case-studies/2",
  },
  {
    id: 3,
    title: "Analytics for Finance Growth",
    category: "Analytics",
    excerpt: "Learn how our analytics dashboard provided actionable insights that drove strategic financial decisions.",
    image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?w=600&auto=format&fit=crop",
    link: "/case-studies/3",
  },
  {
    id: 4,
    title: "Secure Transactions Worldwide",
    category: "Security",
    excerpt: "WalletX ensured secure global transactions for an international business, maintaining trust and compliance.",
    image: "https://plus.unsplash.com/premium_photo-1677256977859-bef4e02e9a10?w=600&auto=format&fit=crop",
    link: "/case-studies/4",
  },
];

const categories = ["All", "Business", "Payments", "Analytics", "Security"];

const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredStudies =
    selectedCategory === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.category === selectedCategory);

  return (
    <main className="container mx-auto px-4 py-16">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore real-life examples of how WalletX helps businesses and individuals improve their financial management.
        </p>
      </section>

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

      {/* Case Studies Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredStudies.map((study) => (
          <Card key={study.id} className="border border-muted shadow-sm hover:shadow-md transition">
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardHeader className="px-6 pt-4">
              <CardTitle className="text-lg font-semibold">{study.title}</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 flex flex-col gap-2">
              <p className="text-muted-foreground text-sm">{study.excerpt}</p>
              <Button asChild size="sm" className="mt-2">
                <Link to={study.link}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}

        {filteredStudies.length === 0 && (
          <p className="text-center col-span-full text-muted-foreground">
            No case studies found in this category.
          </p>
        )}
      </div>
    </main>
  );
};

export default CaseStudies;
