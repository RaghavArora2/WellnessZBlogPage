"use client";
import BlogDisplayCard from "@/components/blogs/BlogDisplayCard";
import { fetchData } from "@/helpers/api";
import { Star, ArrowRight, TrendingUp, Users, BookOpen } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

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

export default function Page() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const response = await fetchData("blogs");
        if (response.data) {
          setBlogs(response.data);
        } else {
          setError(response.error || "Please try again later");
        }
      } catch (err) {
        setError("Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--accent-1)]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!blogs || blogs.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">No blog posts found</h1>
          <p className="text-gray-600">Please check back later for new content.</p>
        </div>
      </div>
    );
  }

  const featuredBlog = blogs[0];
  const otherBlogs = blogs.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-8 md:py-16 relative">
        <div className="text-center mb-8 md:mb-16">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[var(--accent-1)] rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 md:w-7 md:h-7 text-white" />
            </div>
            <span className="text-2xl md:text-3xl font-bold text-gray-900">WellnessZ</span>
          </div>
          <div className="inline-flex items-center bg-[var(--accent-2)] text-[var(--accent-3)] px-3 py-2 md:px-4 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
            <TrendingUp className="w-3 h-3 md:w-4 md:h-4 mr-2" />
            Latest Wellness Insights
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 px-4">
            <span className="text-[var(--accent-1)]">Your Guide to</span>
            <br />
            <span className="text-[var(--accent-3)]">Wellness Trends</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-xl text-gray-600 leading-relaxed mb-6 md:mb-8 px-4">
            Stay ahead in the fitness and wellness industry with insights, tips, and the latest trends. 
            Our blog is here to help fitness coaches and nutritionists like you thrive.
          </p>
          <div className="flex items-center justify-center space-x-4 md:space-x-8 text-xs md:text-sm text-gray-500 mb-8 md:mb-12">
            <div className="flex items-center">
              <Users className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-[var(--accent-1)]" />
              <span>10K+ Readers</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-[var(--accent-1)]" />
              <span>Weekly Updates</span>
            </div>
          </div>
        </div>

        {/* Featured Article */}
        {featuredBlog && (
          <div className="max-w-4xl mx-auto mb-12 md:mb-20">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              <div className="relative">
                <Image
                  src={featuredBlog.image}
                  height={400}
                  width={800}
                  alt={featuredBlog.title}
                  className="w-full h-[250px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4 md:top-6 md:left-6">
                  <span className="bg-[var(--accent-1)] text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold">
                    Featured
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 text-white">
                  <div className="flex items-center space-x-2 md:space-x-4 mb-2 md:mb-4">
                    <span className="bg-white/20 backdrop-blur-sm px-2 py-1 md:px-3 rounded-full text-xs md:text-sm">
                      {featuredBlog.category}
                    </span>
                    <span className="text-xs md:text-sm opacity-90">{featuredBlog.readTime}</span>
                  </div>
                  <h2 className="text-xl md:text-3xl font-bold mb-1 md:mb-2 line-clamp-2">
                    {featuredBlog.title}
                  </h2>
                  <p className="text-sm md:text-lg opacity-90 line-clamp-2 mb-2 md:mb-4 hidden sm:block">
                    {featuredBlog.excerpt}
                  </p>
                </div>
              </div>
              <div className="p-4 md:p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-3)] rounded-full flex items-center justify-center">
                      <span className="text-xs md:text-sm font-semibold text-white">
                        {featuredBlog.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm md:text-base">
                        {featuredBlog.author}
                      </p>
                      <p className="text-xs md:text-sm text-gray-500">{featuredBlog.date}</p>
                    </div>
                  </div>
                  <Link 
                    href={`/blog/${featuredBlog.id}`}
                    className="inline-flex items-center bg-[var(--accent-1)] text-white px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-[var(--accent-3)] transition-colors duration-300 text-sm md:text-base font-semibold group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Articles Grid */}
        {otherBlogs.length > 0 && (
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Latest Articles</h2>
              <div className="flex items-center text-[var(--accent-1)] hover:text-[var(--accent-3)] transition-colors cursor-pointer">
                <span className="text-sm md:text-base font-semibold mr-2">View All</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {otherBlogs.map((blog) => (
                <BlogDisplayCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}