"use client"

import Image from "next/image"
import Carousel from "./selectedWork/Carousel"

const SelectedWork = () => {
    const projects = [
        { name: "NexGen FinTech", subtitle: "Mobile App & Infrastructure", desc: "200% INCREASE IN CONVERSION", image: "/images/black.jpg", staggered: false, },
        { name: "Aura Wellness", subtitle: "Health & Fitness", desc: "150% USER ENGAGEMENT", image: "/images/black.jpg", staggered: true, },
        { name: "505 Arctic", subtitle: "E-Commerce Platform", desc: "90% RETENTION RATE", image: "/images/black.jpg", staggered: false, },
        { name: "505 Arctic Retail", subtitle: "E-Commerce Platform", desc: "90% RETENTION RATE", image: "/images/black.jpg", staggered: true, },
    ]

    return (
        <section id="work" className="relative mt-zintra-14 pt-zintra-13 bg-white overflow-hidden">

            <div className="relative max-w-7xl mx-auto px-zintra-7">

                <span className="inline-flex items-center border border-zintra-primary text-zintra-primary text-body-sm px-zintra-5 py-zintra-2 rounded-full">
                    Selected work
                </span>

                <div className="flex items-center justify-between gap-zintra-6 mt-zintra-5">
                    <h2 className="text-h1 font-bold">Projects we&apos;ve worked on</h2>
                    <a
                        href="#"
                        className="flex items-center gap-4 bg-white border border-zintra-border w-fit text-zintra-ink py-zintra-3 ps-zintra-7 pe-zintra-3 rounded-full shrink-0"
                    >
                        See more
                        <span className="bg-zintra-secondary w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                            <Image src="/images/nav-arrow.svg" width={12} height={12} alt="" />
                        </span>
                    </a>
                </div>

                <Carousel projects={projects} />

            </div>
        </section>
    )
}
export default SelectedWork;