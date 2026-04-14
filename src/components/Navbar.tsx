'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const navItems = [
  {
    label: 'Commercial',
    href: '/commercial',
    children: [
      'Business Photography',
      'Corporate Videography',
      'Industrial & Construction',
      'Builders',
      'Pool Photography',
      'Renovations',
      'Events',
    ],
  },
  {
    label: 'Residential',
    href: '/residential',
    children: [
      'Real Estate Photography',
      'Airbnb Photography',
      'Floor Plans',
    ],
  },
  { label: 'Drone Aerial', href: '/drone' },
  { label: 'Virtual Visualisation', href: '/virtual' },
  { label: 'Portraits', href: '/portraits' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex flex-col leading-none">
            <span
              className={`text-xl font-bold tracking-tight ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Perfect Property
            </span>
            <span
              className={`text-xs tracking-widest uppercase ${
                scrolled ? 'text-[#066aab]' : 'text-blue-300'
              }`}
            >
              Media
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-0.5 px-3 py-2 text-sm font-medium rounded transition-colors ${
                  scrolled
                    ? 'text-gray-700 hover:text-[#066aab]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
                {item.children && <ChevronDown size={14} />}
              </Link>
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 min-w-48 border border-gray-100 z-50">
                  {item.children.map((child) => (
                    <Link
                      key={child}
                      href={`${item.href}/${child.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#066aab] transition-colors"
                    >
                      {child}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:1300414255"
            className={`flex items-center gap-1.5 text-sm font-medium ${
              scrolled ? 'text-gray-700' : 'text-white/90'
            }`}
          >
            <Phone size={14} />
            1300 414 255
          </a>
          <Link
            href="#contact"
            className="bg-[#066aab] hover:bg-[#055a93] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Free Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden p-2 ${scrolled ? 'text-gray-900' : 'text-white'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-3 py-2.5 text-gray-800 font-medium hover:text-[#066aab] border-b border-gray-100"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-6">
                    {item.children.map((child) => (
                      <Link
                        key={child}
                        href={`${item.href}/${child.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-[#066aab]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <a href="tel:1300414255" className="flex items-center gap-2 text-gray-800 font-medium px-3 py-2">
                <Phone size={16} />
                1300 414 255
              </a>
              <Link
                href="#contact"
                className="bg-[#066aab] text-white text-center font-semibold px-5 py-3 rounded-full"
                onClick={() => setMobileOpen(false)}
              >
                Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
