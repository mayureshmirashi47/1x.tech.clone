'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  {
    label: 'Androids',
    href: '#features',
    children: [
      { label: 'NEO Gamma', href: '#features', description: 'General-purpose humanoid for homes and workplaces' },
      { label: 'EVE', href: '#features', description: 'Autonomous mobile robot for security and logistics' },
    ],
  },
  {
    label: 'AI',
    href: '#features',
    children: [
      { label: '1X World Model', href: '#features', description: 'Video-foundation model grounded in physics' },
      { label: 'Redwood VLA', href: '#features', description: 'Vision-Language-Action framework for complex tasks' },
    ],
  },
  {
    label: 'Discover',
    href: '#testimonials',
  },
  {
    label: 'Careers',
    href: '#pricing',
  },
  {
    label: 'Company',
    href: '#footer',
  },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-2xl font-black tracking-tighter text-white transition-colors group-hover:text-purple-400">
              1X
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className={cn(
                    'inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-neutral-300 transition-colors hover:text-white hover:bg-white/5',
                    activeDropdown === link.label && 'text-white bg-white/5'
                  )}
                >
                  {link.label}
                  {link.children && (
                    <svg className={cn("ml-1 h-3 w-3 transition-transform", activeDropdown === link.label && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-72 rounded-lg border border-white/10 bg-neutral-950/95 backdrop-blur-xl p-2 shadow-2xl">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block rounded-md p-3 transition-colors hover:bg-white/5"
                      >
                        <div className="text-sm font-medium text-white">{child.label}</div>
                        <p className="mt-1 text-xs text-neutral-400">{child.description}</p>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#pricing"
              className="hidden md:inline-flex h-9 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-violet-500 px-5 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-purple-500/25 hover:brightness-110"
            >
              Contact Us
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-2"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-6 pt-2 border-t border-white/5">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5"
                  >
                    {link.label}
                  </a>
                  {link.children && (
                    <div className="ml-4">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-md px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex h-9 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-violet-500 px-5 text-sm font-medium text-white"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
