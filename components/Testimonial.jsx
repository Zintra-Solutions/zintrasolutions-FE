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

    return (
        <section className="mt-zintra-14 py-zintra-13 bg-zintra-primary-tint">
            <div className="max-w-7xl mx-auto px-zintra-7">
                <p className="text-caption font-bold tracking-wide text-zintra-primary">FROM OUR CLIENTS</p>
                <h2 className="text-h1 font-bold mt-zintra-3">Testimonial</h2>

                <div className="flex gap-zintra-7 mt-zintra-9 overflow-x-auto pb-zintra-4 -mx-zintra-7 px-zintra-7 snap-x snap-mandatory">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="shrink-0 w-full max-w-xl bg-white rounded-zintra-6 p-zintra-9 snap-start"
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