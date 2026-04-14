import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Portfolio from '@/components/Portfolio'
import Link from 'next/link'

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page header */}
        <section className="bg-gray-900 pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Our Work</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Portfolio</h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Browse our latest shoots — residential, commercial, drone, virtual staging and portraits.
            </p>
            <div className="flex justify-center gap-2 mt-6 text-sm text-gray-500">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Portfolio</span>
            </div>
          </div>
        </section>
        <Portfolio />
        {/* CTA */}
        <section className="py-16 bg-[#066aab] text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Book Your Shoot?</h2>
          <p className="text-blue-200 mb-7">Next business day delivery. Australia-wide.</p>
          <Link
            href="/#contact"
            className="bg-white text-[#066aab] font-bold px-10 py-3.5 rounded-full hover:bg-blue-50 transition-colors"
          >
            Get a Free Quote
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
