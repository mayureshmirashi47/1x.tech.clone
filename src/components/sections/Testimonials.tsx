import { AnimatedTestimonialGrid } from '@/components/ui/testimonial-2'

const testimonials = [
  { imgSrc: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300', alt: 'Industry Leader' },
  { imgSrc: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=300', alt: 'Tech Executive' },
  { imgSrc: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300', alt: 'Research Director' },
  { imgSrc: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300', alt: 'Operations Manager' },
  { imgSrc: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300', alt: 'CTO' },
  { imgSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300', alt: 'AI Researcher' },
  { imgSrc: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=300', alt: 'Robotics Engineer' },
  { imgSrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300', alt: 'VP Engineering' },
  { imgSrc: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=300', alt: 'Product Designer' },
  { imgSrc: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=300', alt: 'Lab Director' },
  { imgSrc: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300', alt: 'Safety Officer' },
  { imgSrc: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300', alt: 'Facility Manager' },
]

export function TestimonialsSection() {
  return (
    <div id="testimonials" className="w-full bg-[#0B0B0B]">
      <AnimatedTestimonialGrid
        testimonials={testimonials}
        badgeText="Trusted Worldwide"
        title={
          <>
            Trusted by innovators
            <br />
            across industries
          </>
        }
        description="From warehouses to living rooms — leaders trust 1X to redefine how humans and robots work together."
        ctaText="Read Success Stories"
        ctaHref="#"
      />
    </div>
  )
}
