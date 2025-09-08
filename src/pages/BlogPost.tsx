import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/constants/blogs";
import { Link, useParams } from "react-router";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <p className="text-center text-red-500">Blog post not found.</p>
        <Link to="/blog" className="text-primary hover:underline text-center block mt-4">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-72 object-cover rounded-lg mb-8"
      />
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-500 text-sm mb-6">
        <span>{post.date}</span> • <span>By {post.author}</span>
      </div>
      <Card className="shadow-sm">
        <CardContent className="prose prose-gray max-w-none p-6 whitespace-pre-line text-start">
          {post.content}
        </CardContent>
      </Card>

      <Link to="/resources/blogs" className="mt-8 inline-block text-primary hover:underline">
        ← Back to Blog
      </Link>
    </div>
  );
};

export default BlogPost;
