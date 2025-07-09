// Mock API function to simulate fetching blog data
export async function fetchData(endpoint: string) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  if (endpoint === "blogs") {
    return {
      data: [
        {
          id: 1,
          title: "The Ultimate Guide to Mindful Eating for Wellness Coaches",
          excerpt: "Discover how to help your clients develop a healthier relationship with food through mindful eating practices and evidence-based techniques that transform lives.",
          author: "Sarah Johnson",
          date: "Dec 15, 2024",
          readTime: "8 min read",
          image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
          category: "Nutrition"
        },
        {
          id: 2,
          title: "Building Sustainable Fitness Habits: A Coach's Perspective",
          excerpt: "Learn the key strategies for helping clients create lasting fitness routines that stick long-term and drive real results in their wellness journey.",
          author: "Mike Thompson",
          date: "Dec 12, 2024",
          readTime: "6 min read",
          image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
          category: "Fitness"
        },
        {
          id: 3,
          title: "Mental Health and Wellness: The Connection You Can't Ignore",
          excerpt: "Explore the crucial relationship between mental health and physical wellness in your coaching practice and how to address both effectively.",
          author: "Dr. Emma Wilson",
          date: "Dec 10, 2024",
          readTime: "10 min read",
          image: "https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
          category: "Mental Health"
        },
        {
          id: 4,
          title: "Nutrition Trends 2024: What Every Coach Should Know",
          excerpt: "Stay updated with the latest nutrition trends and scientific breakthroughs, and learn how to incorporate them into your client programs effectively.",
          author: "Lisa Martinez",
          date: "Dec 8, 2024",
          readTime: "7 min read",
          image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
          category: "Nutrition"
        },
        {
          id: 5,
          title: "Client Motivation: Proven Strategies That Work",
          excerpt: "Discover effective techniques to keep your clients motivated and engaged throughout their wellness journey with actionable psychology-based methods.",
          author: "James Rodriguez",
          date: "Dec 5, 2024",
          readTime: "9 min read",
          image: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
          category: "Coaching"
        },
        {
          id: 6,
          title: "The Science of Recovery: Optimizing Rest for Better Results",
          excerpt: "Learn how proper recovery protocols can enhance your clients' performance and overall well-being through evidence-based rest and restoration techniques.",
          author: "Dr. Alex Chen",
          date: "Dec 3, 2024",
          readTime: "8 min read",
          image: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
          category: "Recovery"
        }
      ]
    };
  }

  return {
    error: "Endpoint not found",
    data: null
  };
}