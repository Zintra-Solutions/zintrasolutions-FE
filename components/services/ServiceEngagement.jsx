import { engagementData } from "@/constants/processData"

const ServiceEngagement = () => {
    return (
        <div className="py-zintra-12 bg-zintra-surface">
            <div className="max-w-7xl mx-auto">
                <div className="mb-zintra-5">
                    <p className="flex items-center gap-2.5 uppercase font-semibold text-xs">
                        <span className="inline-flex justify-center items-center bg-zintra-primary w-2 h-2 rounded-full" />
                        Ways to work together
                    </p>
                </div>

                <div className="flex items-center mb-zintra-9">
                    <h1 className="font-extrabold text-h1 flex-1">The right shape for your project.</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {engagementData.map(({id, title, description, details}) => (
                        <div key={id} className="flex flex-col items-start gap-4 p-8 bg-zintra-primary-on rounded-[16px]">
                            <div className="shrink-0 flex justify-between items-center w-full">
                                <h2 className="font-bold text-h3">{title}</h2>
                                <span className="text-zintra-primary text-caption">{id}</span>
                            </div>
                            <p className="text-base text-zintra-ink-muted">{description}</p>
                            <div className="w-full h-px bg-zintra-ink-muted/10 my-zintra-6" />
                            <p className="text-sm text-zintra-text-secondary">{details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ServiceEngagement