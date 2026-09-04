

import Image from "next/image"

const CarouselCard = ({ project, priority = false }) => {
    return (
        <div
            className={` group relative shrink-0 w-94.75 h-96 snap-start rounded-2xl text-white overflow-hidden transition-all duration-300 ease-out hover:h-112.5 origin-top ${project.staggered ? "mt-16" : ""}`}
        >
            {/* Background image */}
            <Image
                src={project.image}
                alt={project.name}
                fill
                priority={priority}
                className="object-cover rounded-2xl pointer-events-none transition-transform duration-500 ease-out group-hover:scale-105"
            />

            
            <div className="absolute inset-0 bg-linear-180 from-black/70 to-[#666]/7  transition-opacity duration-300 group-hover:opacity-90 z-0" />

            {/* Content */}
            <div className="relative z-10 p-zintra-7 flex flex-col items-start h-full w-full">
                <h3 className="text-[28px] font-bold m-0 origin-left text-white transition-transform duration-300 ease-out group-hover:scale-[0.714]">
                    {project.name}
                </h3>

                 <p className="text-[14px] m-0 mt-1 text-white/80 transition-transform duration-300 ease-out group-hover:-translate-y-1.5">
                    {project.subtitle}
                </p>

                <p className="text-[20px] font-bold mt-6 text-white opacity-0 translate-y-3.75 transition-all duration-300 ease-out delay-50 group-hover:opacity-100 group-hover:translate-y-0">
                    {project.desc}
                </p>
            </div>
        </div>
    )
}

export default CarouselCard