import { aiImage } from '@/lib/ai-image'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

const highlights = [
  'Award-winning real estate photography across Australia',
  'Certified drone pilots — CASA approved',
  'Next business day delivery, guaranteed',
  '5.0 Google rating with 35+ verified reviews',
  'State-of-the-art editing and retouching',
  'Dedicated account manager for every client',
]

export default function About() {
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src={aiImage('professional real estate photographer working with camera tripod luxury property exterior australia sunlight', 1200, 900, 60)}
                alt="Perfect Property Media — professional photographer at work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#066aab] text-white rounded-2xl p-5 shadow-xl">
              <div className="text-4xl font-bold">10+</div>
              <div className="text-sm text-blue-200 mt-1">Years Experience</div>
            </div>
            {/* Second small image */}
            <div className="absolute -top-5 -left-5 w-32 h-32 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden lg:block">
              <img
                src={aiImage('drone aerial photography real estate suburb australia pilot professional', 300, 300, 61)}
                alt="Drone aerial photography"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="text-[#066aab] text-sm font-semibold tracking-widest uppercase mb-3">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
              Australia&rsquo;s Most Trusted Real Estate Photography Agency
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Perfect Property Media is an award-winning real estate photography agency headquartered in Melbourne, providing exceptional photography and videography services to real estate agents, property developers, and businesses across Australia.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Our team of professional photographers, drone pilots, and 3D rendering specialists deliver stunning visual content with creativity, concept and passion — with guaranteed next business day delivery.
            </p>

            <ul className="space-y-3 mb-9">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#066aab] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="bg-[#066aab] hover:bg-[#055a93] text-white font-semibold px-8 py-3.5 rounded-full transition-all"
              >
                Get A Free Quote
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-[#066aab] text-[#066aab] hover:bg-[#066aab] hover:text-white font-semibold px-8 py-3.5 rounded-full transition-all"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
