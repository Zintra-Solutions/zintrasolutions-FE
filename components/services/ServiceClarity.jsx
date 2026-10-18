
import { processData } from "@/constants/processData"
const ServiceClarity = () => {
    return (
        <div className="py-zintra-12 bg-zintra-ink text-zintra-primary-on">
            <div className="max-w-7xl mx-auto">
                <div className="mb-zintra-5">
                    <p className="flex items-center gap-2.5 uppercase font-semibold text-xs">
                        <span className="inline-flex justify-center items-center bg-zintra-secondary w-2 h-2 rounded-full" />
                        How we work
                    </p>
                </div>

                <div className="flex items-center mb-zintra-9">
                    <h1 className="font-extrabold text-h1 flex-1">Clarity at every step.</h1>
                    <p className="text-body-lg flex-1 text-zintra-ink-muted">
                        A shared direction, visible progress and a considered handover. You always know what we&apos;re making, and why.
                    </p>
                </div>

                <div className="w-full h-px bg-zintra-ink-muted/30 my-zintra-6" />

                <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-10 pt-zintra-10">
                    {processData.map((process) => (
                        <div key={process.id} className="flex flex-col items-start gap-4">
                            <div className="shrink-0">
                                <span className="inline-flex justify-center items-center text-zintra-secondary font-semibold">{process.id}</span>
                            </div>
                            <div className="flex flex-col h-full">
                                <h2 className="text-h5 mb-zintra-4">{process.title}</h2>
                                <div className="flex flex-col gap-4 h-full">
                                    <p className="text-body-base text-zintra-ink-muted flex-1 ">{process.description}</p>
                                    <p className="text-body-base text-zintra-ink-muted mt-auto">{process.outcome}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ServiceClarity