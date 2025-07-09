import Image from "next/image";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
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

interface BlogDisplayCardProps {
  blog: BlogPost;
}

export default function BlogDisplayCard({ blog }: BlogDisplayCardProps) {
  return (
    <Link href={`/blog/${blog.id}`} className="group block">
      <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
        <div className="relative overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            width={400}
            height={240}
            className="w-full h-[240px] object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 left-4">
            <span className="bg-[var(--accent-1)] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              {blog.category}
            </span>
          </div>
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
              <ArrowRight className="w-4 h-4 text-[var(--accent-1)]" />
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[var(--accent-1)] transition-colors duration-300">
            {blog.title}
          </h3>
          
          <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
            {blog.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-3)] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                {blog.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{blog.author}</p>
                <div className="flex items-center space-x-3 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar size={12} />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={12} />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-[var(--accent-1)] group-hover:translate-x-1 transition-transform duration-300">
              <ArrowRight size={20} />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}