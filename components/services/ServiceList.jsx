import Button from "../ui/Button"
import ServiceCard from "./ServiceCard"
import ServiceProjectCard from "./ServiceProjectCard"
import { expertiseData } from "@/constants/expertiseData"
import { projectsData } from "@/constants/projectData"


const ServiceList = () => {
  
    const projects = projectsData.slice(0, 2)

    return (
        <main>
            <div className="py-zintra-12 bg-zintra-surface">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-zintra-5">
                        <p className="flex items-center gap-2.5 uppercase font-semibold text-xs">
                            <span className="inline-flex justify-center items-center bg-zintra-primary w-2 h-2 rounded-full" />
                            What can we do
                        </p>
                    </div>

                    <div className="flex items-end gap-30 mb-zintra-9">
                        <h1 className="font-extrabold text-h1 self-start">Built around what your business needs.</h1>
                        <p className="text-body-lg self-end ml-zintra-14">Choose the expertise you need, or bring it all together for one considered digital experience.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
                        {expertiseData.map((expertise) => (
                            <ServiceCard key={expertise.id} expertise={expertise} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-zintra-12">
                <div className="mb-zintra-5">
                    <p className="flex items-center gap-2.5 uppercase font-semibold text-xs">
                        <span className="inline-flex justify-center items-center bg-zintra-primary w-2 h-2 rounded-full" />
                        From expertise to experience
                    </p>
                </div>

                <div className="flex items-center justify-between gap-30 mb-zintra-9">
                    <h1 className="font-extrabold text-h1 self-start">A little of what we can do.</h1>
                    <Button iconRight="/images/nav-arrow.svg" type="ctaSecondary" size="iconOnly" className="bg-zintra-card text-zintra-ink">
                        Explore our work
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {projects.map((project) => (
                        <ServiceProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </main>
    )
}
export default ServiceList