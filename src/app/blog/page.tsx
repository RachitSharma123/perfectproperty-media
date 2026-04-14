import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Blog from '@/components/Blog'
import Link from 'next/link'

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gray-900 pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Resources</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog & Tips</h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Photography tips, industry insights and real estate marketing advice from our team.
            </p>
            <div className="flex justify-center gap-2 mt-6 text-sm text-gray-500">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Blog</span>
            </div>
          </div>
        </section>
        <Blog />
      </main>
      <Footer />
    </>
  )
}
