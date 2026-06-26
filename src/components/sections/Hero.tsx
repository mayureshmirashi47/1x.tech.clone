'use client'

import { SplineScene } from "@/components/ui/splite"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { ArrowRight, Play } from 'lucide-react'

export function Hero() {
  return (
    <section id="hero" className="relative pt-16">
      <Card className="w-full min-h-[90vh] bg-black/[0.96] relative overflow-hidden rounded-none border-0">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#A855F7"
        />

        {/* Ambient glow effects */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-violet-600/8 rounded-full blur-3xl" />

        <div className="flex h-full min-h-[calc(90vh-64px)] flex-col lg:flex-row">
          {/* Left content */}
          <div className="flex-1 p-8 lg:p-16 relative z-10 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-purple-400 mb-8 w-fit backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
              </span>
              NOW INTRODUCING
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-purple-100 to-purple-300">
                NEO
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-purple-300 to-purple-600">
                Gamma
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-neutral-400 max-w-lg leading-relaxed">
              Safe, intelligent humanoids designed for people. The next generation of embodied AI, 
              built to work alongside humans in homes and workplaces.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#features"
                className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-violet-500 px-8 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-purple-500/30 hover:brightness-110 group"
              >
                Explore NEO
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/20 group backdrop-blur-sm"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch NEO
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-12 mt-16 pt-8 border-t border-white/5">
              <div>
                <div className="text-3xl font-bold text-white font-mono">22</div>
                <div className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">Degrees of Freedom</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white font-mono">10dB</div>
                <div className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">Noise Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white font-mono">1X</div>
                <div className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">World Model</div>
              </div>
            </div>
          </div>

          {/* Right content - 3D Scene */}
          <div className="flex-1 relative min-h-[400px] lg:min-h-0">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/50 z-10 pointer-events-none lg:block hidden" />
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0B0B] to-transparent pointer-events-none" />
      </Card>
    </section>
  )
}
