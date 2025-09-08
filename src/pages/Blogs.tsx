import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/constants/blogs";
import { Link } from "react-router";

const Blogs = () => {
  const [page, setPage] = useState(1);
  const pageSize = 6; // posts per page

  const totalPages = Math.ceil(blogPosts.length / pageSize);

  const paginatedPosts = blogPosts.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  // Generate numbered page buttons
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-6">Our Blog</h1>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Stay up to date with the latest trends, tips, and news in digital finance and technology.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {paginatedPosts.map((post) => (
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
                to={`/resources/blog/${post.id}`}
                className="block mt-4 text-primary font-medium hover:underline"
              >
                Read More →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
        <button
          className="px-4 py-2 border rounded hover:bg-gray-100 disabled:opacity-50 cursor-pointer"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>

        {pageNumbers.map((num) => (
          <button
            key={num}
            className={`px-4 py-2 border rounded hover:bg-gray-100 cursor-pointer ${
              num === page ? "bg-primary text-white border-primary" : ""
            }`}
            onClick={() => setPage(num)}
          >
            {num}
          </button>
        ))}

        <button
          className="px-4 py-2 border rounded hover:bg-gray-100 disabled:opacity-50 cursor-pointer"
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Blogs;
