import Link from 'next/link'
import { aiImage } from '@/lib/ai-image'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Commercial',
    description: 'Business, corporate, industrial, builders, pool photography, renovations & events.',
    href: '/commercial',
    image: aiImage('modern glass commercial office building exterior professional photography australia blue sky', 700, 500, 10),
    items: ['Business Photography', 'Corporate Videography', 'Industrial & Construction', 'Builders', 'Events'],
  },
  {
    title: 'Virtual Visualisation',
    description: 'Stunning 3D virtual staging and digital rendering that sells properties faster.',
    href: '/virtual',
    image: aiImage('luxury 3D rendered living room interior design virtual staging modern furniture photorealistic', 700, 500, 40),
    items: ['Virtual Staging', '3D Rendering', 'Floor Plans', 'Digital Furniture'],
  },
  {
    title: 'Residential',
    description: 'Real estate photography, Airbnb listings and floor plans delivered next business day.',
    href: '/residential',
    image: aiImage('beautiful luxury home exterior swimming pool garden real estate photography australia blue sky golden', 700, 500, 20),
    items: ['Real Estate Photography', 'Airbnb Photography', 'Twilight Photography', 'Floor Plans'],
  },
  {
    title: 'Drone Aerial',
    description: 'Certified drone operators capturing breathtaking aerial views of your property.',
    href: '/drone',
    image: aiImage('stunning aerial drone photography luxury suburb australia bird eye view residential green gardens', 700, 500, 30),
    items: ['Aerial Photography', 'Aerial Videography', 'Site Plans', '360° Panoramas'],
  },
  {
    title: 'Portrait',
    description: 'Professional corporate headshots and portraits for agents, teams and executives.',
    href: '/portraits',
    image: aiImage('professional corporate portrait headshot business person confident smile clean studio background', 700, 500, 50),
    items: ['Corporate Headshots', 'Team Photography', 'Executive Portraits', 'Agent Profiles'],
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#066aab] text-sm font-semibold tracking-widest uppercase mb-2">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Photography Services
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From residential real estate to commercial complexes — we deliver award-winning results with next business day turnaround.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, i) => (
            <Link
              key={service.title}
              href={service.href}
              className={`group service-card relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white border border-gray-100 ${
                i === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-card-img w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#066aab] text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                    {service.title}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#066aab] transition-colors">
                  {service.title} Photography
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-1.5 mb-5">
                  {service.items.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-[#066aab] rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-1.5 text-[#066aab] text-sm font-semibold group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={15} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
