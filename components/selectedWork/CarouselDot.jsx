

const CarouselDots = ({ count, activeIndex }) => {
    return (
        <div className="flex justify-center items-center gap-2 mt-4">
            {Array.from({ length: count }).map((_, index) => (
                <div
                    key={`dot-${index}`}
                    className={`
                        h-2
                        rounded-full
                        transition-all
                        duration-300
                        ${activeIndex === index
                            ? "w-6 bg-zintra-ink"
                            : "w-2 bg-zintra-ink/30"
                        }
                    `}
                />
            ))}
        </div>
    )
}

export default CarouselDots