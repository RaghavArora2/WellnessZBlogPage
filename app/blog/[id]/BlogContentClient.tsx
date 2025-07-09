"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Heart,
  Twitter,
  Facebook,
  Linkedin,
  Share2,
  Bookmark,
  Eye,
  MessageCircle
} from "lucide-react";

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

interface BlogContentClientProps {
  blog: BlogPost;
  relatedBlogs: BlogPost[];
}

export default function BlogContentClient({ blog, relatedBlogs }: BlogContentClientProps) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const generateBlogContent = (blog: BlogPost) => {
    return `
      <div class="prose prose-xl max-w-none">
        <p class="text-xl text-gray-700 leading-relaxed mb-8 font-light">
          ${blog.excerpt}
        </p>
        
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Understanding the Fundamentals</h2>
        <p class="text-lg text-gray-700 leading-relaxed mb-8">
          In today's fast-paced world, wellness professionals need to stay ahead of the curve. This comprehensive guide will walk you through the essential strategies and insights that can transform your practice and help you better serve your clients.
        </p>
        
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl mb-10 border-l-4 border-blue-500">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Key Strategies for Success</h3>
          <ul class="space-y-3 text-lg text-gray-700">
            <li class="flex items-start">
              <span class="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              Develop a deep understanding of your client's unique needs and goals
            </li>
            <li class="flex items-start">
              <span class="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              Stay updated with the latest research and evidence-based practices
            </li>
            <li class="flex items-start">
              <span class="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              Create personalized programs that adapt to individual lifestyles
            </li>
            <li class="flex items-start">
              <span class="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              Build strong relationships based on trust and consistent communication
            </li>
          </ul>
        </div>
        
        <blockquote class="border-l-4 border-[var(--accent-1)] pl-8 py-6 bg-gray-50 rounded-r-2xl mb-10 text-xl italic text-gray-700 font-medium">
          "The best wellness professionals are those who never stop learning and adapting to serve their clients better."
        </blockquote>
        
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Practical Implementation</h2>
        <p class="text-lg text-gray-700 leading-relaxed mb-8">
          Implementation is where theory meets reality. Here's how you can start applying these concepts in your daily practice to see immediate improvements in client satisfaction and outcomes.
        </p>
        
        <div class="grid md:grid-cols-2 gap-8 mb-10">
          <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Getting Started</h3>
            <p class="text-gray-700 leading-relaxed">
              Begin by assessing your current approach and identifying areas for improvement. Small, consistent changes often lead to the most significant long-term results.
            </p>
          </div>
          <div class="bg-[var(--accent-2)] p-6 rounded-2xl">
            <h4 class="font-semibold text-[var(--accent-3)] mb-3 text-lg">💡 Pro Tip</h4>
            <p class="text-gray-700">
              Start with one or two key changes and gradually build upon them. This approach ensures sustainable growth and prevents overwhelm.
            </p>
          </div>
        </div>
        
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Conclusion</h2>
        <p class="text-lg text-gray-700 leading-relaxed mb-8">
          By implementing these strategies and maintaining a commitment to continuous learning, you'll be well-positioned to make a meaningful impact in your clients' lives while building a thriving wellness practice.
        </p>
      </div>
    `;
  };

  const blogContent = generateBlogContent(blog);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative">
        <div className="relative h-[70vh] overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Back Button */}
          <div className="absolute top-8 left-8 z-10">
            <Link 
              href="/"
              className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center space-x-4 mb-6">
                <span className="bg-[var(--accent-1)] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {blog.category}
                </span>
                <span className="text-white/80 text-sm flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {blog.readTime}
                </span>
                <span className="text-white/80 text-sm flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  2.4k views
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {blog.title}
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-3xl leading-relaxed">
                {blog.excerpt}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Author Info & Actions */}
        <div className="flex items-center justify-between mb-16 pb-8 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-3)] rounded-full flex items-center justify-center text-white font-bold text-xl">
              {blog.author.charAt(0)}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{blog.author}</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span>{blog.date}</span>
                </div>
                <span>•</span>
                <span>Wellness Expert</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                liked 
                  ? 'bg-red-100 text-red-600 shadow-md' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
              <span className="text-sm font-medium">{liked ? '124' : '123'}</span>
            </button>
            
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`p-2 rounded-full transition-all duration-300 ${
                bookmarked 
                  ? 'bg-blue-100 text-blue-600' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
            </button>
            
            <div className="flex items-center space-x-2">
              <button className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors">
                <Linkedin className="w-4 h-4" />
              </button>
              <button className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <article 
          className="mb-16"
          dangerouslySetInnerHTML={{ __html: blogContent }}
        />

        {/* Tags & Engagement */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-500">Tags:</span>
              <div className="flex flex-wrap gap-2">
                {['wellness', 'coaching', blog.category.toLowerCase(), 'health', 'lifestyle'].map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-[var(--accent-2)] hover:text-[var(--accent-3)] transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <MessageCircle className="w-4 h-4" />
                <span>12 comments</span>
              </div>
              <div className="flex items-center space-x-1">
                <Share2 className="w-4 h-4" />
                <span>45 shares</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                You Might Also Like
              </h2>
              <p className="text-lg text-gray-600">
                More insights to help you grow your wellness practice
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <Link 
                  key={relatedBlog.id}
                  href={`/blog/${relatedBlog.id}`}
                  className="group block"
                >
                  <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <Image
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        width={400}
                        height={240}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[var(--accent-1)] text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {relatedBlog.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[var(--accent-1)] transition-colors">
                        {relatedBlog.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                        {relatedBlog.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-3)] rounded-full flex items-center justify-center text-white font-semibold text-xs">
                            {relatedBlog.author.charAt(0)}
                          </div>
                          <span>{relatedBlog.author}</span>
                        </div>
                        <span>{relatedBlog.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-3)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Never Miss an Update
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join 10,000+ wellness professionals getting weekly insights, tips, and industry trends delivered to their inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-white/50 outline-none text-lg"
              />
              <button className="bg-white text-[var(--accent-1)] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-lg">
                Subscribe
              </button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}