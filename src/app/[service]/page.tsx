import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { aiImage } from '@/lib/ai-image'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { notFound } from 'next/navigation'

const serviceData: Record<string, {
  title: string
  subtitle: string
  description: string
  heroSeed: number
  features: string[]
  includes: string[]
  price: string
}> = {
  commercial: {
    title: 'Commercial Photography',
    subtitle: 'Business, Corporate & Industrial',
    description: 'Professional commercial photography for businesses, builders, developers and corporates across Australia. We capture your commercial property, workplace and brand with precision and creativity.',
    heroSeed: 10,
    features: ['Business Photography', 'Corporate Videography', 'Industrial & Construction', 'Builders Showcase', 'Pool Photography', 'Renovation Documentation', 'Events Coverage'],
    includes: ['High-res edited images', 'Commercial licensing', 'Next business day delivery', 'Dedicated photographer', 'Full retouching'],
    price: 'From $450',
  },
  residential: {
    title: 'Residential Photography',
    subtitle: 'Real Estate, Airbnb & Floor Plans',
    description: 'Award-winning residential real estate photography that makes your property stand out online. We deliver stunning images with next business day turnaround — guaranteed.',
    heroSeed: 20,
    features: ['Real Estate Photography', 'Airbnb Photography', 'Twilight Photography', 'Floor Plans', 'Virtual Tours', 'Dusk Shoots'],
    includes: ['25+ edited images', 'MLS-ready resolution', 'Next business day delivery', 'Interior & exterior shots', 'Full retouching & sky replacement'],
    price: 'From $195',
  },
  drone: {
    title: 'Drone Aerial Photography',
    subtitle: 'CASA Certified Aerial Specialists',
    description: 'Breathtaking aerial photography and videography by our CASA-certified drone pilots. Capture your property from dramatic heights and give buyers a stunning birds-eye perspective.',
    heroSeed: 30,
    features: ['Aerial Photography', 'Aerial Videography', '360° Panoramas', 'Site Plans & Maps', 'Construction Progress', 'Suburb Context Shots'],
    includes: ['20+ aerial shots', '4K aerial video', 'CASA certified pilots', 'Fully insured', 'Same-day delivery available'],
    price: 'From $295',
  },
  virtual: {
    title: 'Virtual Visualisation',
    subtitle: '3D Staging, Rendering & Floor Plans',
    description: 'Transform empty or outdated properties with photorealistic virtual staging and 3D rendering. Sell faster and for more — digitally furnished homes get 73% more enquiries.',
    heroSeed: 40,
    features: ['Virtual Staging', '3D Interior Rendering', 'Digital Furniture Placement', 'Floor Plans', 'Virtual Tours', 'Off-the-plan Renders'],
    includes: ['Photorealistic output', 'Unlimited revisions (1st round)', '48hr turnaround', 'Multiple room styles', 'Print & web resolution'],
    price: 'From $85 per room',
  },
  portraits: {
    title: 'Portrait Photography',
    subtitle: 'Corporate Headshots & Team Photos',
    description: 'Professional corporate portrait photography for real estate agents, executives and teams. First impressions matter — let us help you look your best on every listing and profile.',
    heroSeed: 50,
    features: ['Corporate Headshots', 'Agent Profile Photos', 'Team Photography', 'LinkedIn Portraits', 'On-location Shoots', 'Studio Sessions'],
    includes: ['10+ edited portraits', 'Professional retouching', 'Multiple outfit changes', 'Print & digital files', 'Same-day delivery available'],
    price: 'From $195',
  },
}

const validSlugs = Object.keys(serviceData)

export function generateStaticParams() {
  return validSlugs.map((service) => ({ service }))
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params
  const data = serviceData[service]
  if (!data) notFound()

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[480px]">
          <img
            src={aiImage('', 1920, 900, data.heroSeed)}
            alt={data.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="flex justify-start gap-2 text-sm text-gray-400 mb-5">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="text-white">{data.title}</span>
              </div>
              <p className="text-blue-300 text-sm font-semibold tracking-widest uppercase mb-3">{data.subtitle}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl">{data.title}</h1>
              <p className="text-white/80 text-lg max-w-xl mb-8">{data.description}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="bg-[#066aab] hover:bg-[#055a93] text-white font-semibold px-8 py-3.5 rounded-full transition-all"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="/portfolio"
                  className="border-2 border-white/60 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full transition-all"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
              {/* Services list */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What&apos;s Included</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {data.features.map((f) => (
                    <div key={f} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                      <CheckCircle size={16} className="text-[#066aab] flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{f}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-4">Every Package Includes</h3>
                <ul className="space-y-3">
                  {data.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <ArrowRight size={15} className="text-[#066aab] flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing CTA */}
              <div className="flex flex-col gap-6">
                <div className="bg-[#f0f7ff] rounded-2xl p-8 border border-blue-100">
                  <div className="text-[#066aab] text-sm font-semibold tracking-widest uppercase mb-2">Pricing</div>
                  <div className="text-4xl font-bold text-gray-900 mb-1">{data.price}</div>
                  <p className="text-gray-500 text-sm mb-6">Exact quote based on your property and requirements.</p>
                  <Link
                    href="/#contact"
                    className="block w-full bg-[#066aab] hover:bg-[#055a93] text-white font-bold text-center py-3.5 rounded-full transition-all"
                  >
                    Get My Free Quote
                  </Link>
                </div>

                <div className="bg-gray-900 rounded-2xl p-8 text-white">
                  <div className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-2">Why Us</div>
                  <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex items-center gap-2"><span className="text-yellow-400">★★★★★</span> 5.0 Google Rating (35+ reviews)</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#066aab]" /> Next business day delivery</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#066aab]" /> Australia-wide service</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#066aab]" /> Award-winning photographers</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#066aab]" /> Satisfaction guaranteed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
