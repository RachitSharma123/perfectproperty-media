'use client'

import { useEffect, useRef } from 'react'
import { aiImage } from '@/lib/ai-image'
import { Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Sarah Mitchell',
    role: 'Principal Agent',
    company: 'Ray White Brighton',
    rating: 5,
    review: 'Perfect Property Media delivered stunning photos with next-day turnaround. The quality blew me away — our listings sell 30% faster now. Absolutely the best photography agency in Melbourne.',
    avatar: aiImage('professional headshot portrait woman real estate agent confident smile office background', 200, 200, 401),
  },
  {
    name: 'James Kowalski',
    role: 'Director',
    company: 'Barry Plant Hawthorn',
    rating: 5,
    review: 'We\'ve used Perfect Property Media for over 3 years. Their drone work is exceptional and the virtual staging has completely transformed how we present off-the-plan properties. Highly recommended.',
    avatar: aiImage('professional headshot portrait man property agent confident smile business attire', 200, 200, 402),
  },
  {
    name: 'Lisa Chen',
    role: 'Marketing Manager',
    company: 'Hocking Stuart Balwyn',
    rating: 5,
    review: 'Incredible team — professional, creative, and always on time. The twilight photography they delivered for our premium listings was absolutely breathtaking. Our vendors are always blown away.',
    avatar: aiImage('professional headshot portrait woman marketing manager confident smile studio background', 200, 200, 403),
  },
  {
    name: 'Marcus Thompson',
    role: 'Property Developer',
    company: 'Apex Property Group',
    rating: 5,
    review: '5 stars without hesitation. The 3D virtual renderings saved us months on our off-the-plan sales. Their attention to detail and professionalism is second to none. Our go-to photography partner.',
    avatar: aiImage('professional headshot portrait man property developer confident smile business suit', 200, 200, 404),
  },
  {
    name: 'Emily Roberts',
    role: 'Licensed Estate Agent',
    company: 'McGrath Armadale',
    rating: 5,
    review: 'I\'ve tried many photography agencies over my 12 year career. Perfect Property Media is in a league of their own. Fast, professional, and the photos genuinely make properties look their absolute best.',
    avatar: aiImage('professional headshot portrait woman estate agent confident warm smile clean background', 200, 200, 405),
  },
]

export default function Testimonials() {
  const swiperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const init = async () => {
      const { Swiper } = await import('swiper')
      const { Pagination, Autoplay } = await import('swiper/modules')
      if (!swiperRef.current) return
      new Swiper(swiperRef.current, {
        modules: [Pagination, Autoplay],
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        autoplay: { delay: 4500, disableOnInteraction: false },
        pagination: { el: '.testimonial-pagination', clickable: true },
        breakpoints: {
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
      })
    }
    init()
  }, [])

  return (
    <section className="py-20 bg-[#f0f7ff]" id="testimonials">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#066aab] text-sm font-semibold tracking-widest uppercase mb-2">Reviews</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <span className="text-yellow-400 text-xl">★★★★★</span>
            <span className="font-semibold text-gray-700">5.0</span>
            <span>— 35 Google Reviews</span>
          </div>
        </div>

        {/* Swiper */}
        <div ref={swiperRef} className="swiper testimonial-swiper overflow-visible">
          <div className="swiper-wrapper pb-12">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="swiper-slide bg-white rounded-2xl p-7 shadow-sm border border-gray-100 flex flex-col"
              >
                <Quote size={28} className="text-[#066aab]/30 mb-4" />
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">&ldquo;{r.review}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="w-11 h-11 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{r.name}</div>
                    <div className="text-gray-400 text-xs">{r.role} · {r.company}</div>
                  </div>
                  <div className="ml-auto text-yellow-400 text-sm">
                    {'★'.repeat(r.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonial-pagination swiper-pagination" />
        </div>
      </div>
    </section>
  )
}
