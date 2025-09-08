import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router";

const blogPosts = [
  {
    id: 1,
    title: "How Digital Wallets Are Changing the Future of Finance",
    excerpt:
      "Explore how modern wallets make transactions faster, safer, and more accessible worldwide.",
    date: "Sep 1, 2025",
    author: "John Doe",
    image:
      "https://images.unsplash.com/photo-1612351978641-ecdafe9caaa5?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "5 Security Tips to Keep Your Digital Wallet Safe",
    excerpt:
      "Learn best practices to secure your funds, avoid scams, and protect your personal data.",
    date: "Aug 20, 2025",
    author: "Jane Smith",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Why Businesses Should Adopt Digital Payments",
    excerpt:
      "Digital payments are no longer optional. Discover how they drive efficiency and customer trust.",
    date: "Aug 5, 2025",
    author: "Alex Brown",
    image:
      "https://images.unsplash.com/photo-1594025741226-9586279bd513?w=600&auto=format&fit=crop",
  },
];

const BlogSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-6">Latest Insights</h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Stay up to date with the latest trends, tips, and news in digital
        finance and technology.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card
            key={post.id}
            className="overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>{post.date}</span>
                <span>By {post.author}</span>
              </div>
              <Link
                to={`/resources/blog/${post.id}`}
                className="block mt-4 text-primary font-medium hover:underline"
              >
                Read More →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/resources/blogs">
          <Button size="lg">Show More Blogs</Button>
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
