import Image from "next/image"
import ArrowIcon from "@/components/icons/ArrowIcon"

const SelectedWork = () => {
    const projects = [
        { name: "NexGen FinTech", category: "Mobile App & Infrastructure" },
        { name: "Aura Wellness", category: "Website Development" },
        { name: "505 Arctic", category: "Branding & UX Design" },
        { name: "505 Arctic", category: "Branding & UX Design" },
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
                            className="relative shrink-0 w-72 h-96 rounded-zintra-6 overflow-hidden snap-start bg-gradient-to-b from-zintra-ink-tint to-black"
                        >
                            <Image
                                src="/images/hero-phone.png"
                                alt=""
                                fill
                                className="object-cover object-bottom opacity-70 grayscale contrast-125 brightness-50"
                            />
                            <div className="absolute inset-0 flex flex-col justify-start p-zintra-7 text-white">
                                <h3 className="text-h4 font-bold">{project.name}</h3>
                                <p className="text-body-sm text-white/70 mt-zintra-2">{project.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default SelectedWork