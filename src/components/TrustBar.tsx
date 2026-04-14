import { Star, Clock, Globe, Award } from 'lucide-react'

const stats = [
  { icon: Star, label: '5.0 Google Rating', sub: '35+ Reviews' },
  { icon: Clock, label: 'Next Day Delivery', sub: 'Guaranteed' },
  { icon: Globe, label: 'Australia-Wide', sub: 'All States' },
  { icon: Award, label: 'Award-Winning', sub: 'Since 2015' },
]

const clients = [
  'Ray White', 'Barry Plant', 'Hocking Stuart', 'LJ Hooker', 'McGrath', 'Marshall White',
]

export default function TrustBar() {
  return (
    <>
      {/* Stats strip */}
      <section className="bg-[#066aab] text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="bg-white/20 rounded-full p-3">
                  <Icon size={22} />
                </div>
                <div>
                  <div className="font-bold text-base">{label}</div>
                  <div className="text-blue-200 text-sm">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm font-semibold tracking-widest uppercase text-gray-400 mb-8">
            Trusted by Leading Real Estate Agencies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
            {clients.map((name) => (
              <div
                key={name}
                className="text-gray-400 font-bold text-lg tracking-tight hover:text-gray-600 transition-colors cursor-default"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
