'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const services = [
  'Commercial Photography',
  'Residential Photography',
  'Drone Aerial Photography',
  'Virtual Visualisation',
  'Portrait Photography',
  'Package / Bundle',
]

export default function ContactForm() {
  const [form, setForm] = useState({
    full_name: '',
    phone: '',
    email: '',
    company_name: '',
    service: '',
    requirements: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')
      setStatus('success')
      setForm({ full_name: '', phone: '', email: '', company_name: '', service: '', requirements: '' })
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  return (
    <section className="py-20 bg-gray-900" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left info */}
          <div>
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Contact Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">
              Let&rsquo;s Capture Your Property Perfectly
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              Ready to showcase your property with award-winning photography? Get in touch for a free, no-obligation quote. We&rsquo;ll get back to you within 2 business hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#066aab]/20 text-[#066aab] rounded-xl p-3 flex-shrink-0">
                  <Phone size={20} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">Call Us</div>
                  <a href="tel:1300414255" className="text-gray-400 hover:text-white transition-colors">
                    1300 414 255
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#066aab]/20 rounded-xl p-3 flex-shrink-0">
                  <Mail size={20} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">Email Us</div>
                  <a href="mailto:info@perfectproperty.com.au" className="text-gray-400 hover:text-white transition-colors">
                    info@perfectproperty.com.au
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#066aab]/20 rounded-xl p-3 flex-shrink-0">
                  <MapPin size={20} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">Visit Us</div>
                  <div className="text-gray-400">45 Railway Road, Melbourne VIC 3130</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#066aab]/20 rounded-xl p-3 flex-shrink-0">
                  <Clock size={20} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">Business Hours</div>
                  <div className="text-gray-400">Monday – Friday, 8:00am – 6:00pm</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Get Your Free Quote</h3>

            {status === 'success' ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✅</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                <p className="text-gray-500">
                  We&rsquo;ve received your enquiry and will get back to you within 2 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      value={form.full_name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#066aab] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="0400 000 000"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#066aab] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@raywhite.com.au"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#066aab] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name <span className="text-gray-400">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    value={form.company_name}
                    onChange={handleChange}
                    placeholder="Ray White Brighton"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#066aab] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#066aab] focus:border-transparent bg-white"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Requirements / Details
                  </label>
                  <textarea
                    name="requirements"
                    value={form.requirements}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your property, preferred date, any special requirements..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#066aab] focus:border-transparent resize-none"
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#066aab] hover:bg-[#055a93] disabled:bg-gray-300 text-white font-bold py-3.5 rounded-full transition-all text-sm"
                >
                  {status === 'loading' ? 'Sending...' : 'Get My Free Quote →'}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  We&rsquo;ll respond within 2 business hours. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
