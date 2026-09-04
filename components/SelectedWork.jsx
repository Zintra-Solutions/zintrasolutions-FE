
"use client"

import ArrowIcon from "@/components/icons/ArrowIcon"
import Carousel from "./selectedWork/Carousel"

const SelectedWork = () => {
    const projects = [
        { name: "NexGen FinTech", subtitle: "Mobile App & Infrastructure", desc: "200% INCREASE IN CONVERSION", image: "/images/black.jpg", staggered: false, },
        { name: "Aura Wellness", subtitle: "Health & Fitness", desc: "150% USER ENGAGEMENT", image: "/images/black.jpg", staggered: true, },
        { name: "505 Arctic", subtitle: "E-Commerce Platform", desc: "90% RETENTION RATE", image: "/images/black.jpg", staggered: false, },
        { name: "505 Arctic Retail", subtitle: "E-Commerce Platform", desc: "90% RETENTION RATE", image: "/images/black.jpg", staggered: true, },
    ]

    return (
        <section id="work" className="relative mt-zintra-14 pt-zintra-13 bg-zintra-surface overflow-hidden">
            <div  className=" absolute -top-52 -left-24 w-96 h-96 rounded-full bg-[radial-gradient(circle_at_25%_55%,var(--color-zintra-success)_0%,var(--color-zintra-secondary)_42%,transparent_70%)] blur-[20px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-zintra-7">

                <div className="flex items-center justify-between gap-zintra-6">
                    <h2 className="text-h1 font-bold">Selected work</h2>
                    <a href="#" className="flex items-center gap-3 text-body-base shrink-0">
                        See more
                        <span className="bg-zintra-ink text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                            <ArrowIcon className="w-3 h-3" />
                        </span>
                    </a>
                </div>

                <Carousel projects={projects} />

            </div>
        </section>
    )
}
export default SelectedWork;
