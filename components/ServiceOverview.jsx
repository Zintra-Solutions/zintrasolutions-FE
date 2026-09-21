"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import ArrowRightSmallIcon from "@/components/icons/ArrowRightSmallIcon"

const Insights = () => {
    const capabilities = [
        {
            number: "01",
            title: "Product Design",
            description: "Research, UX and Interface design that take product from fuzzy design to shipped feature",
            image: "/images/black.jpg",
        },
        {
            number: "02",
            title: "Web Development",
            description: "Fast, accessible marketing sites and web platforms, built to be maintained",
            image: "/images/black.jpg",
        },
        {
            number: "03",
            title: "Branding",
            description: "Identity systems, voice and guidelines that hold together everywhere your product shows up",
            image: "/images/black.jpg",
        },
    ]

    const containerRef = useRef(null)
    const listRef = useRef(null)
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = useState(false)

    const handleMouseMove = (event) => {
        if (!containerRef.current) return
        const bounds = containerRef.current.getBoundingClientRect()
        setPosition({
            x: event.clientX - bounds.left,
            y: event.clientY - bounds.top,
        })
    }

    useEffect(() => {
        const node = listRef.current
        if (!node) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.2 }
        )

        observer.observe(node)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="insights" className="bg-white mt-zintra-14">
            <div className="max-w-7xl mx-auto px-zintra-7">
                <span className="inline-flex items-center border border-zintra-primary text-zintra-primary text-body-sm px-zintra-5 py-zintra-2 rounded-full">
                    About us
                </span>

                <div className="flex items-center justify-between gap-zintra-6 mt-zintra-5">
                    <h2 className="text-h1 font-bold">Get to know Zintra</h2>
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

                <div
                    ref={(node) => {
                        containerRef.current = node
                        listRef.current = node
                    }}
                    onMouseMove={handleMouseMove}
                    className="relative mt-zintra-9 border-t border-zintra-ink/10"
                >
                    {capabilities.map((item, index) => (
                        <div
                            key={item.number}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="relative z-10 flex flex-wrap items-center py-zintra-8 border-b border-zintra-ink/10 gap-zintra-6 cursor-pointer transition-all duration-700 ease-out"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? "translateY(0)" : "translateY(32px)",
                                transitionDelay: `${index * 150}ms`,
                            }}
                        >
                            <span className="text-body-base text-zintra-ink-muted w-8">{item.number}</span>
                            <h3 className="text-h3 font-bold w-full sm:w-64 shrink-0">{item.title}</h3>
                            <p className="text-body-base text-zintra-ink-muted flex-1 sm:text-center">
                                {item.description}
                            </p>
                            <ArrowRightSmallIcon className="w-4 h-4 text-zintra-primary shrink-0" />
                        </div>
                    ))}

                    {capabilities.map((item, index) => (
                        <div
                            key={`preview-${item.number}`}
                            className="absolute z-20 w-52 h-40 rounded-2xl overflow-hidden pointer-events-none transition-opacity duration-200 ease-out"
                            style={{
                                left: position.x,
                                top: position.y,
                                transform: "translate(-30%, -110%)",
                                opacity: hoveredIndex === index ? 1 : 0,
                            }}
                        >
                            <Image src={item.image} alt="" fill className="object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Insights