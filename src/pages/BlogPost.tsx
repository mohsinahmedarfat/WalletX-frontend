import { Card, CardContent } from "@/components/ui/card";
import { Link, useParams } from "react-router";

// Dummy blog data (replace with API later)
const blogPosts = [
  {
    id: "1",
    title: "How Digital Wallets Are Changing the Future of Finance",
    content: `
      Digital wallets are transforming the financial landscape. 
      They offer secure, fast, and accessible solutions that are 
      replacing traditional cash and even bank cards. 

      In this article, we dive deep into the rise of e-wallets, 
      their benefits, and how they are shaping the future of global finance.
    `,
    date: "Sep 1, 2025",
    author: "John Doe",
    image:
      "https://images.unsplash.com/photo-1612351978641-ecdafe9caaa5?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: "2",
    title: "5 Security Tips to Keep Your Digital Wallet Safe",
    content: `
      Security is a top concern when it comes to digital wallets. 
      By following simple practices such as enabling 2FA, 
      using strong passwords, and avoiding public Wi-Fi, 
      you can protect your funds and sensitive data.
    `,
    date: "Aug 20, 2025",
    author: "Jane Smith",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Why Businesses Should Adopt Digital Payments",
    content: `
      Businesses adopting digital payments gain efficiency, 
      increase customer trust, and expand their reach. 
      In this post, we’ll explore why going cashless is 
      the smart move for companies today.
    `,
    date: "Aug 5, 2025",
    author: "Alex Brown",
    image:
      "https://images.unsplash.com/photo-1594025741226-9586279bd513?w=600&auto=format&fit=crop",
  },
];

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
        <CardContent className="prose prose-gray max-w-none p-6 whitespace-pre-line">
          {post.content}
        </CardContent>
      </Card>

      <Link to="/blog" className="mt-8 inline-block text-primary hover:underline">
        ← Back to Blog
      </Link>
    </div>
  );
};

export default BlogPost;
