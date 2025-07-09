import { fetchData } from "@/helpers/api";
import BlogContentClient from "./BlogContentClient";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

export async function generateStaticParams() {
  const response = await fetchData("blogs");
  
  if (!response.data) {
    return [];
  }
  
  return response.data.map((blog: BlogPost) => ({
    id: blog.id.toString(),
  }));
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const response = await fetchData("blogs");
  
  if (!response.data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Failed to load blog posts</h1>
          <p className="text-gray-600">{response.error || "Please try again later"}</p>
        </div>
      </div>
    );
  }

  const blog = response.data.find((b: BlogPost) => b.id === parseInt(params.id));
  
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog post not found</h1>
        </div>
      </div>
    );
  }

  // Get related blogs (same category, excluding current)
  const relatedBlogs = response.data
    .filter((b: BlogPost) => b.category === blog.category && b.id !== blog.id)
    .slice(0, 3);

  return <BlogContentClient blog={blog} relatedBlogs={relatedBlogs} />;
}