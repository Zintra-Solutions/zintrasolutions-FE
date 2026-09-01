import ArrowIcon from "@/components/icons/ArrowIcon"

const ServiceOverview = () => {
    const services = [
        {
            number: "01",
            title: "Product Design",
            description: "Research, UX and Interface design that take product from fuzzy design to shipped feature",
        },
        {
            number: "02",
            title: "Web Development",
            description: "Fast, accessible marketing sites and web platforms, built to be maintained",
        },
        {
            number: "03",
            title: "Branding",
            description: "Identity systems, voice and guidelines that hold together everywhere your product shows up",
        },
    ]

    return (
        <section id="services" className="max-w-7xl mx-auto px-zintra-7 mt-zintra-14">
            <p className="text-body-base text-zintra-primary">End-to-end expertise for the modern enterprise.</p>

            <div className="flex items-center justify-between mt-zintra-4 gap-zintra-6">
                <h2 className="text-h1 font-bold">What We Can Do For You</h2>
                <a href="#" className="flex items-center gap-3 text-body-base shrink-0">
                    Learn more
                    <span className="bg-zintra-ink text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                        <ArrowIcon className="w-3 h-3" />
                    </span>
                </a>
            </div>

            <div className="mt-zintra-9 border-t border-zintra-ink/10">
                {services.map((service) => (
                    <div
                        key={service.number}
                        className="flex flex-wrap items-center py-zintra-8 border-b border-zintra-ink/10 gap-zintra-6"
                    >
                        <span className="text-body-base text-zintra-ink-muted w-8">{service.number}</span>
                        <h3 className="text-h3 font-bold w-full sm:w-64 shrink-0">{service.title}</h3>
                        <p className="text-body-base text-zintra-ink-muted flex-1 sm:text-center">
                            {service.description}
                        </p>
                        <ArrowIcon className="w-4 h-4 text-zintra-primary shrink-0" />
                    </div>
                ))}
            </div>
        </section>
    )
}
export default ServiceOverview