"use client"

import Image from "next/image"

const Testimonial = () => {
    const testimonials = [
        {
            quote:
                "Zintra rebuilt our checkout in nine weeks and treated our conversion rate like it was their own KPI. Best external team we've worked with.",
            name: "Maya Adeyemi",
            role: "VP Product, Aura Wellness",
            avatar: "https://i.pravatar.cc/150?img=47",
        },
        {
            quote:
                "Zintra rebuilt our checkout in nine weeks and treated our conversion rate like it was their own KPI. Best external team we've worked with.",
            name: "Maya Adeyemi",
            role: "VP Product, Aura Wellness",
            avatar: "https://i.pravatar.cc/150?img=47",
        },
    ]

    // Duplicated once so the marquee's -50% translate loops seamlessly
    const loop = [...testimonials, ...testimonials]

    return (
        <section className="mt-zintra-14 py-zintra-13 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-zintra-7">
                <span className="inline-flex items-center border border-zintra-primary text-zintra-primary text-body-sm px-zintra-5 py-zintra-2 rounded-full">
                    Testimonials
                </span>
                <h2 className="text-h1 font-bold mt-zintra-5">Hear from our clients</h2>
            </div>

            <div className="relative mt-zintra-9">
                <div className="carousel flex w-max gap-zintra-7 px-zintra-7 hover:[animation-play-state:paused]">
                    {loop.map((testimonial, index) => (
                        <div
                            key={index}
                            className="w-[380px] sm:w-[520px] shrink-0 bg-zintra-card rounded-zintra-6 p-zintra-9"
                        >
                            <p className="text-h4 font-medium leading-snug">&ldquo;{testimonial.quote}&rdquo;</p>
                            <div className="flex items-center gap-zintra-5 mt-zintra-8">
                                <Image
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    width={48}
                                    height={48}
                                    className="rounded-full"
                                />
                                <div>
                                    <p className="text-body-base font-bold">{testimonial.name}</p>
                                    <p className="text-body-sm text-zintra-ink-muted">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Testimonial