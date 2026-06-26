import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Cpu, Brain, Move3D, Volume2, type LucideIcon } from 'lucide-react'
import { type ReactNode } from 'react'

export function Features() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Engineered for Humans</h2>
                    <p className="text-lg text-neutral-400 max-w-2xl mx-auto">Every system in NEO is designed around one principle: safe, intuitive interaction with people in their daily environments.</p>
                </div>
                <div className="mx-auto grid gap-4 lg:grid-cols-2">
                    <FeatureCard>
                        <CardHeader className="pb-3">
                            <CardHeading
                                icon={Cpu}
                                title="Mechanical Compliance"
                                description="Tendon-driven joint actuation wrapped in soft covers for safe, close-quarter human interaction."
                            />
                        </CardHeader>
                        <div className="relative mb-6 border-t border-dashed border-white/10 sm:mb-0">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
                            <div className="aspect-[76/59] p-1 px-6 flex items-center justify-center">
                                <div className="w-full h-full bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 rounded-lg flex items-center justify-center">
                                    <Cpu className="size-16 text-purple-400/30" />
                                </div>
                            </div>
                        </div>
                    </FeatureCard>

                    <FeatureCard>
                        <CardHeader className="pb-3">
                            <CardHeading
                                icon={Brain}
                                title="Cognitive Core"
                                description="The 1X World Model — a video-foundation model grounded in physics for predictive execution."
                            />
                        </CardHeader>
                        <CardContent>
                            <div className="relative mb-6 sm:mb-0">
                                <div className="absolute -inset-6 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent"></div>
                                <div className="aspect-[76/59] border border-white/10 rounded-lg flex items-center justify-center bg-gradient-to-br from-neutral-800/50 to-neutral-900/50">
                                    <Brain className="size-16 text-purple-400/30" />
                                </div>
                            </div>
                        </CardContent>
                    </FeatureCard>

                    <FeatureCard>
                        <CardHeader className="pb-3">
                            <CardHeading
                                icon={Move3D}
                                title="Unified Locomotion & Manipulation"
                                description="Powered by Redwood VLA framework — handling complex tasks like unloading dishes or folding laundry."
                            />
                        </CardHeader>
                        <CardContent>
                            <div className="relative mb-6 sm:mb-0">
                                <div className="aspect-[76/59] border border-white/10 rounded-lg flex items-center justify-center bg-gradient-to-br from-neutral-800/50 to-neutral-900/50">
                                    <Move3D className="size-16 text-purple-400/30" />
                                </div>
                            </div>
                        </CardContent>
                    </FeatureCard>

                    <FeatureCard>
                        <CardHeader className="pb-3">
                            <CardHeading
                                icon={Volume2}
                                title="Acoustic Design"
                                description="10 dB noise reduction — refrigerator-quiet with beamforming mic arrays and spatial audio."
                            />
                        </CardHeader>
                        <CardContent>
                            <div className="relative mb-6 sm:mb-0">
                                <div className="aspect-[76/59] border border-white/10 rounded-lg flex items-center justify-center bg-gradient-to-br from-neutral-800/50 to-neutral-900/50">
                                    <Volume2 className="size-16 text-purple-400/30" />
                                </div>
                            </div>
                        </CardContent>
                    </FeatureCard>
                </div>
            </div>
        </section>
    )
}

interface FeatureCardProps {
    children: ReactNode
    className?: string
}

const FeatureCard = ({ children, className }: FeatureCardProps) => (
    <Card className={cn('group relative rounded-none shadow-zinc-950/5 bg-black/40 border-white/10', className)}>
        <CardDecorator />
        {children}
    </Card>
)

const CardDecorator = () => (
    <>
        <span className="border-purple-400 absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
        <span className="border-purple-400 absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
        <span className="border-purple-400 absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
        <span className="border-purple-400 absolute -bottom-px -right-px block size-2 border-b-2 border-r-2"></span>
    </>
)

interface CardHeadingProps {
    icon: LucideIcon
    title: string
    description: string
}

const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
    <div className="p-6">
        <span className="text-neutral-400 flex items-center gap-2">
            <Icon className="size-4 text-purple-400" />
            {title}
        </span>
        <p className="mt-8 text-2xl font-semibold text-white">{description}</p>
    </div>
)
