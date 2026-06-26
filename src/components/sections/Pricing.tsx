import { BentoPricing } from '@/components/ui/bento-pricing'
import { cn } from '@/lib/utils'

export function PricingSection() {
  return (
    <div
      id="pricing"
      className="bg-[radial-gradient(35%_80%_at_50%_0%,rgba(255,255,255,0.03),transparent)] relative flex w-full items-center justify-center py-20 md:py-32"
    >
      {/* Dots background */}
      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0 -z-10 size-full',
          'bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)]',
          'bg-[size:12px_12px]',
        )}
      />

      <section className="mx-auto w-full max-w-5xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-purple-400 mb-6 backdrop-blur-sm">
            PARTNERSHIP PROGRAMS
          </div>
          <h2 className="text-4xl font-bold tracking-tight lg:text-6xl text-white">
            Work With Us
          </h2>
          <p className="text-muted-foreground mt-4 text-sm md:text-base">
            Whether you're a research institution, enterprise, or government agency — 
            we have programs designed to bring humanoid robotics into your operations.
          </p>
        </div>
        <BentoPricing />
      </section>
    </div>
  )
}
