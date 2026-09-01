import Image from "next/image"
import ArrowIcon from "@/components/icons/ArrowIcon"

const SelectedWork = () => {
    const projects = [
        { name: "NexGen FinTech", image: "/images/work-nexgen-fintech.png" },
        { name: "Aura Wellness", image: "/images/work-aura-wellness.png" },
        { name: "505 Arctic", image: "/images/work-505-arctic.png" },
        { name: "505 Arctic", image: "/images/work-505-arctic.png" },
    ]

    return (
        <section id="work" className="relative mt-zintra-14 py-zintra-13 bg-zintra-surface overflow-hidden">
            <div className="absolute -top-zintra-11 -left-zintra-11 w-80 h-80 rounded-full bg-gradient-to-br from-zintra-success via-zintra-secondary to-transparent opacity-70 blur-3xl pointer-events-none" />

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

                <div className="flex gap-zintra-6 mt-zintra-10 overflow-x-auto pb-zintra-4 -mx-zintra-7 px-zintra-7 snap-x snap-mandatory">
                    {projects.map((project, index) => (
                        <div
                            key={`${project.name}-${index}`}
                            className="relative shrink-0 w-72 h-96 rounded-zintra-6 overflow-hidden snap-start"
                        >
                            <Image
                                src={project.image}
                                alt={project.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default SelectedWork