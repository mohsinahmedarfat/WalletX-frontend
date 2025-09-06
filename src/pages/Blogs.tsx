import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/constants/blogs";
import { Link } from "react-router";

const Blogs = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-6">Our Blog</h1>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Stay up to date with the latest trends, tips, and news in digital finance and technology.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden hover:shadow-lg transition">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>{post.date}</span>
                <span>By {post.author}</span>
              </div>
              <Link
                to={`/blog/${post.id}`}
                className="block mt-4 text-primary font-medium hover:underline"
              >
                Read More →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Optional: Pagination / Load more can be added here */}
    </section>
  );
};

export default Blogs;
