

"use client"

import { useRef, useState } from "react"
import CarouselDots from "./CarouselDot"
import CarouselArrow from "./CarouselArrow"
import CarouselCard from "./CarouselCard"


const CARD_WIDTH = 379
const CARD_GAP = 25
const SCROLL_AMOUNT = CARD_WIDTH + CARD_GAP

const Carousel = ({ projects }) => {
    const carouselRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)

    const scrollCarousel = (direction) => {
        if (!carouselRef.current) return

        carouselRef.current.scrollBy({
            left:
                direction === "left"
                    ? -SCROLL_AMOUNT
                    : SCROLL_AMOUNT,
            behavior: "smooth",
        })
    }

    const handleScroll = () => {
        if (!carouselRef.current) return
        const { scrollLeft } = carouselRef.current
        const index = Math.round(scrollLeft / SCROLL_AMOUNT)
        setActiveIndex(index)
    }

    return (
        <section className="relative mt-17.5">
            {/* Left arrow */}
            <CarouselArrow
                direction="left"
                onClick={() => scrollCarousel("left")}
                disabled={activeIndex === 0}
            />

            {/* Right arrow */}
            <CarouselArrow
                direction="right"
                onClick={() => scrollCarousel("right")}
                disabled={activeIndex >= projects.length - 1}
            />

            {/* Carousel */}
            <div
                ref={carouselRef}
                onScroll={handleScroll}
                className=" flex items-start gap-5 h-131.25 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth scrollbar-none"
            >
                {projects.map((project, index) => (
                    <CarouselCard
                        key={`${project.name}-${index}`}
                        project={project}
                        priority={index === 0}
                    />
                ))}
            </div>

            {/* Progress dots */}
            <CarouselDots
                count={projects.length}
                activeIndex={activeIndex}
            />
        </section>
    )
}

export default Carousel