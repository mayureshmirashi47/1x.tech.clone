'use client'

import { GlobePulse } from '@/components/ui/cobe-globe-pulse'

const markers = [
  { id: 'norway', location: [59.91, 10.75] as [number, number], delay: 0 },
  { id: 'usa-sf', location: [37.77, -122.42] as [number, number], delay: 0.5 },
  { id: 'usa-ny', location: [40.71, -74.01] as [number, number], delay: 1 },
  { id: 'japan', location: [35.68, 139.65] as [number, number], delay: 1.5 },
  { id: 'germany', location: [52.52, 13.41] as [number, number], delay: 2 },
]

export function GlobeSection() {
  return (
    <section id="globe" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-black to-[#0B0B0B]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-purple-400 mb-6 backdrop-blur-sm">
              GLOBAL OPERATIONS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Deployed
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400">
                Worldwide
              </span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-lg leading-relaxed mb-8">
              From our headquarters in Norway to pilot programs across North America, Europe, and Asia — 
              1X humanoids are operating in real-world environments today.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white font-mono">5+</div>
                <div className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">Countries</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white font-mono">50+</div>
                <div className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">Active Deployments</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white font-mono">24/7</div>
                <div className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">Operations</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white font-mono">100+</div>
                <div className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">Team Members</div>
              </div>
            </div>
          </div>

          {/* Globe */}
          <div className="flex-1 w-full max-w-lg">
            <GlobePulse markers={markers} />
          </div>
        </div>
      </div>
    </section>
  )
}
