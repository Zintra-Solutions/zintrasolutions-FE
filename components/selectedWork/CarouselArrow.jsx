

import { ChevronLeft } from "lucide-react"

const CarouselArrow = ({direction,onClick,disabled}) => {
    const isLeft = direction === "left"

    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={` absolute top-[45%] -translate-y-1/2 z-30 bg-zintra-secondary/90 text-zintra-ink w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95 disabled:opacity-0 disabled:pointer-events-none 
                ${isLeft ? "left-[-20px]" : "right-[-20px]"}`}
        >
            <ChevronLeft className={`w-6 h-6 ${isLeft ? "" : "rotate-180"}`} />
        </button>
    )
}

export default CarouselArrow