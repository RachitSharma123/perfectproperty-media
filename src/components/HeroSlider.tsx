'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { aiImage } from '@/lib/ai-image'

const slides = [
  {
    image: aiImage('luxury modern australian home exterior twilight photography real estate professional warm lighting', 1920, 900, 42),
    title: 'Real Estate Photography Melbourne',
    subtitle: 'We take photographs with creativity, concept & passion',
    cta: 'Book Your Real Estate Shoot',
  },
  {
    image: aiImage('stunning aerial drone view luxury australian home swimming pool garden golden hour warm light', 1920, 900, 77),
    title: 'Drone Aerial Photography',
    subtitle: 'Capture your property from breathtaking heights with our certified drone pilots',
    cta: 'View Drone Services',
  },
  {
    image: aiImage('modern luxury apartment interior living room professional photography bright natural light minimal', 1920, 900, 123),
    title: 'Award-Winning Results',
    subtitle: '5.0 Google Rating — Trusted by leading agencies across Australia',
    cta: 'See Our Portfolio',
  },
  {
    image: aiImage('commercial office building glass facade exterior professional architectural photography blue sky modern', 1920, 900, 200),
    title: 'Commercial Photography',
    subtitle: 'Professional commercial photography for businesses, builders and corporates nationwide',
    cta: 'Explore Commercial',
  },
]

export default function HeroSlider() {
  const swiperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Dynamically import Swiper to avoid SSR issues
    const initSwiper = async () => {
      const { Swiper } = await import('swiper')
      const { Navigation, Pagination, Autoplay, EffectFade } = await import('swiper/modules')

      if (!swiperRef.current) return

      new Swiper(swiperRef.current, {
        modules: [Navigation, Pagination, Autoplay, EffectFade],
        effect: 'fade',
        fadeEffect: { crossFade: true },
        loop: true,
        autoplay: { delay: 5000, disableOnInteraction: false },
        pagination: { el: '.hero-pagination', clickable: true },
        navigation: {
          nextEl: '.hero-next',
          prevEl: '.hero-prev',
        },
      })
    }

    initSwiper()
  }, [])

  return (
    <section className="relative h-screen min-h-[600px]">
      {/* Swiper container */}
      <div ref={swiperRef} className="swiper hero-swiper h-full">
        <div className="swiper-wrapper">
          {slides.map((slide, i) => (
            <div key={i} className="swiper-slide relative h-full">
              {/* Background image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading={i === 0 ? 'eager' : 'lazy'}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/45 z-10" />
              {/* Content */}
              <div className="relative z-20 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 w-full">
                  <div className="max-w-2xl animate-fade-up">
                    <p className="text-blue-300 text-sm font-semibold tracking-widest uppercase mb-3">
                      Award-Winning Photography
                    </p>
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-white/85 text-lg md:text-xl mb-8 leading-relaxed">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link
                        href="#contact"
                        className="bg-[#066aab] hover:bg-[#055a93] text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5"
                      >
                        {slide.cta}
                      </Link>
                      <Link
                        href="/portfolio"
                        className="border-2 border-white/70 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:bg-white/10"
                      >
                        View Our Projects
                      </Link>
                    </div>
                    {/* Trust badges */}
                    <div className="flex items-center gap-6 mt-10">
                      <div className="flex items-center gap-2 text-white/90">
                        <span className="text-yellow-400 text-lg">★★★★★</span>
                        <span className="text-sm font-medium">5.0 Google Rating</span>
                      </div>
                      <div className="w-px h-5 bg-white/30" />
                      <div className="text-white/90 text-sm font-medium">Next Business Day Delivery</div>
                      <div className="hidden md:block w-px h-5 bg-white/30" />
                      <div className="hidden md:block text-white/90 text-sm font-medium">Australia-Wide</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <button className="hero-prev swiper-button-prev" aria-label="Previous slide" />
        <button className="hero-next swiper-button-next" aria-label="Next slide" />
        <div className="hero-pagination swiper-pagination" style={{ bottom: '28px' }} />
      </div>
    </section>
  )
}
