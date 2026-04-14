import Link from 'next/link'
import { aiImage } from '@/lib/ai-image'
import { ArrowRight, Clock, User } from 'lucide-react'

const posts = [
  {
    title: '10 Tips for Stunning Real Estate Photography in 2026',
    slug: 'tips-real-estate-photography-2026',
    excerpt: 'Master the art of real estate photography with these proven techniques — from lighting and angles to post-processing secrets that make properties irresistible.',
    image: aiImage('real estate photographer working camera equipment professional property interior bright natural light', 800, 500, 201),
    author: 'David Nguyen',
    date: 'March 12, 2026',
    readTime: '7 min read',
    category: 'Photography Tips',
  },
  {
    title: 'Why Drone Aerial Photography Sells Properties 40% Faster',
    slug: 'drone-aerial-photography-sells-faster',
    excerpt: 'New research confirms what agents have long suspected — properties with professional drone footage generate significantly more enquiries and achieve higher sale prices.',
    image: aiImage('drone aerial photography real estate tips flying suburb australia clear blue sky neighbourhood', 800, 500, 202),
    author: 'Sarah Mitchell',
    date: 'February 28, 2026',
    readTime: '5 min read',
    category: 'Drone',
  },
  {
    title: 'Virtual Staging vs Physical Staging: The 2026 Guide',
    slug: 'virtual-staging-vs-physical-staging-guide',
    excerpt: 'We break down the costs, timelines, and results of digital vs traditional staging — and why Melbourne agencies are switching to virtual staging in record numbers.',
    image: aiImage('virtual staging before after empty living room digital furniture 3D rendering comparison modern', 800, 500, 203),
    author: 'Emma Clarke',
    date: 'February 10, 2026',
    readTime: '8 min read',
    category: 'Virtual Staging',
  },
]

export default function Blog() {
  return (
    <section className="py-20 bg-white" id="blog">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-[#066aab] text-sm font-semibold tracking-widest uppercase mb-2">Latest Articles</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">From Our Blog</h2>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-[#066aab] font-semibold hover:gap-3 transition-all"
          >
            View All Articles <ArrowRight size={16} />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col"
            >
              {/* Cover */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#066aab] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 text-base leading-snug mb-3 group-hover:text-[#066aab] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400 border-t border-gray-100 pt-4">
                  <span className="flex items-center gap-1">
                    <User size={12} />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                  <span className="ml-auto">{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
