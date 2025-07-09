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
          setError(response.message || response.error || "Please try again later");
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
      <div className="min-h-[50vh] font-bold text-[24px] text-center leading-[40vh] container">
        {error}
      </div>
    );
  }

  const featuredBlog = blogs[0];
  const otherBlogs = blogs.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-16 relative">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-12 h-12 bg-[var(--accent-1)] rounded-lg flex items-center justify-center">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold text-gray-900">WellnessZ</span>
          </div>
          <div className="inline-flex items-center bg-[var(--accent-2)] text-[var(--accent-3)] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Latest Wellness Insights
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-[var(--accent-1)]">Your Guide to</span>
            <br />
            <span className="text-[var(--accent-3)]">Wellness Trends</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed mb-8">
            Stay ahead in the fitness and wellness industry with insights, tips, and the latest trends. 
            Our blog is here to help fitness coaches and nutritionists like you thrive.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 mb-12">
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-[var(--accent-1)]" />
              <span>10K+ Readers</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-[var(--accent-1)]" />
              <span>Weekly Updates</span>
            </div>
          </div>
        </div>

        {/* Featured Article */}
        {featuredBlog && (
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              <div className="relative">
                <Image
                  src={featuredBlog.image}
                  height={500}
                  width={1000}
                  alt={featuredBlog.title}
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="bg-[var(--accent-1)] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                      {featuredBlog.category}
                    </span>
                    <span className="text-sm opacity-90">{featuredBlog.readTime}</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-2 line-clamp-2">
                    {featuredBlog.title}
                  </h2>
                  <p className="text-lg opacity-90 line-clamp-2 mb-4">
                    {featuredBlog.excerpt}
                  </p>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-3)] rounded-full flex items-center justify-center text-white font-semibold">
                      {featuredBlog.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{featuredBlog.author}</p>
                      <p className="text-sm text-gray-500">{featuredBlog.date}</p>
                    </div>
                  </div>
                  <Link 
                    href={`/blog/${featuredBlog.id}`}
                    className="inline-flex items-center bg-[var(--accent-1)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[var(--accent-3)] transition-colors group"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Decorative Elements */}
        <div className="absolute top-20 left-8 w-20 h-20 bg-[var(--accent-2)] rounded-full opacity-60 animate-pulse hidden lg:block" />
        <div className="absolute top-40 right-12 w-16 h-16 bg-[var(--accent-1)] rounded-full opacity-40 animate-bounce hidden lg:block" />
        <div className="absolute bottom-20 left-16 w-12 h-12 bg-[var(--accent-3)] rounded-full opacity-50 hidden lg:block" />
      </header>

      {/* Articles Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest Articles & News
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover expert insights, practical tips, and the latest trends in wellness and fitness coaching.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherBlogs.map((blog) => (
            <BlogDisplayCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-3)] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of wellness professionals who trust our insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }, (_, i) => (
              <ReviewDisplayCard key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from real professionals who've transformed their practice.
            </p>
          </div>
          
          <div className="flex gap-8 overflow-x-auto pb-4">
            {Array.from({ length: 6 }, (_, i) => (
              <RatingDisplayCard key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-[var(--accent-1)] rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">WellnessZ</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Empowering wellness professionals with the latest insights, trends, and practical advice to grow their practice and help more people live healthier lives.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/categories" className="hover:text-white transition-colors">Categories</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/category/nutrition" className="hover:text-white transition-colors">Nutrition</Link></li>
                <li><Link href="/category/fitness" className="hover:text-white transition-colors">Fitness</Link></li>
                <li><Link href="/category/mental-health" className="hover:text-white transition-colors">Mental Health</Link></li>
                <li><Link href="/category/coaching" className="hover:text-white transition-colors">Coaching</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WellnessZ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ReviewDisplayCard() {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
      <Image
        src="https://images.pexels.com/photos/6787275/pexels-photo-6787275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        height={200}
        width={300}
        alt="Wellness Coach"
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <p className="text-white/80 text-sm mb-2">Wellness Coach</p>
      <h5 className="text-white text-xl font-bold">Mr Pahuja</h5>
    </div>
  );
}

function RatingDisplayCard() {
  return (
    <div className="min-w-[375px] bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="mb-4 flex gap-1">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            fill="#67BC2A"
            className="text-[var(--accent-1)] w-5 h-5"
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed">
        "Amazing! It's saved me lots of tension, also reduced burdens. Cool app, easy to use. I regret why I couldn't get it earlier."
      </p>
      <div className="flex items-center gap-3">
        <Image
          src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          height={50}
          width={50}
          alt="Arjun Kapoor"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-900">Arjun Kapoor</h4>
          <p className="text-sm text-gray-500">Fitness Enthusiast</p>
        </div>
      </div>
    </div>
  );
}