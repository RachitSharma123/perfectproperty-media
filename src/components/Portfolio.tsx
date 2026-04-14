'use client'

import { useState } from 'react'
import { aiImage } from '@/lib/ai-image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

const categories = ['All', 'Residential', 'Commercial', 'Drone', 'Virtual', 'Portraits']

const items = [
  {
    title: 'Beachfront Luxury Home',
    category: 'Residential',
    image: aiImage('luxury beachfront property exterior twilight real estate photography australia warm lights reflection', 800, 600, 101),
    location: 'Brighton, VIC',
  },
  {
    title: 'Corporate Tower — CBD',
    category: 'Commercial',
    image: aiImage('modern commercial glass office tower CBD exterior professional architecture photography blue sky', 800, 600, 102),
    location: 'Melbourne, VIC',
  },
  {
    title: 'Aerial Estate Shoot',
    category: 'Drone',
    image: aiImage('aerial drone shot large luxury estate property suburb australia bird eye view green gardens pool', 800, 600, 103),
    location: 'Toorak, VIC',
  },
  {
    title: 'Virtual Living Room Staging',
    category: 'Virtual',
    image: aiImage('3D rendered luxury living room virtual staging interior design modern furniture photorealistic bright', 800, 600, 104),
    location: 'Digital / Remote',
  },
  {
    title: 'Agent Team Portraits',
    category: 'Portraits',
    image: aiImage('professional corporate portrait headshot real estate agent team confident smile business attire', 800, 600, 105),
    location: 'South Yarra, VIC',
  },
  {
    title: 'Airbnb Rental — St Kilda',
    category: 'Residential',
    image: aiImage('airbnb holiday rental cozy modern bedroom interior professional photography bright natural light warm', 800, 600, 106),
    location: 'St Kilda, VIC',
  },
  {
    title: 'Penthouse Rooftop Pool',
    category: 'Residential',
    image: aiImage('luxury penthouse apartment rooftop pool city skyline view twilight real estate photography dramatic', 800, 600, 107),
    location: 'Docklands, VIC',
  },
  {
    title: 'Industrial Complex — West',
    category: 'Commercial',
    image: aiImage('large industrial warehouse complex exterior professional commercial photography modern facade', 800, 600, 108),
    location: 'Laverton, VIC',
  },
  {
    title: 'Aerial Pool Estate',
    category: 'Drone',
    image: aiImage('aerial drone view luxury outdoor swimming pool estate backyard australia sunshine green garden', 800, 600, 109),
    location: 'Portsea, VIC',
  },
]

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? items : items.filter((i) => i.category === active)

  return (
    <section className="py-20 bg-white" id="portfolio">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#066aab] text-sm font-semibold tracking-widest uppercase mb-2">Our Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Portfolio</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Browse our recent projects across residential, commercial, drone, virtual and portrait photography.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                active === cat
                  ? 'bg-[#066aab] border-[#066aab] text-white shadow-md'
                  : 'border-gray-200 text-gray-600 hover:border-[#066aab] hover:text-[#066aab]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <div
              key={item.title}
              className="portfolio-item group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/3] bg-gray-100"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="portfolio-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-5">
                <span className="text-[#066aab] bg-white text-xs font-bold px-2.5 py-1 rounded-full w-fit mb-2">
                  {item.category}
                </span>
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.location}</p>
              </div>
              {/* Hover icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <ExternalLink size={16} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="border-2 border-[#066aab] text-[#066aab] hover:bg-[#066aab] hover:text-white font-semibold px-10 py-3.5 rounded-full transition-all inline-block"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
