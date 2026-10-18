
import {faqData} from "@/constants/processData"

const ServiceFaq = () => {
    return (
        <div className="py-zintra-12 bg-zintra-primary-on text-zintra-ink">
            <div className="max-w-7xl mx-auto">
                <div className="mb-zintra-5">
                    <p className="flex items-center gap-2.5 uppercase font-semibold text-xs">
                        <span className="inline-flex justify-center items-center bg-zintra-primary w-2 h-2 rounded-full" />
                        Before we begin
                    </p>
                </div>

                <div className="flex items-start justify-between mb-zintra-9 gap-25">
                    <div className="">
                        <h1 className="font-extrabold text-h1">A few things you might ask.</h1>
                        <p className="text-body-lg text-zintra-ink-muted">
                            A shared direction, visible progress and a considered handover. You always know what we&apos;re making, and why.
                        </p>
                    </div>
                    <div className="">
                        {faqData.map((item, index) => (
                            <div key={index} className="mb-4">
                                <h3 className="font-semibold text-lg">{item.question}</h3>
                                <p className="text-zintra-ink-muted text-body-base">{item.answer}</p>

                                <div className="w-full h-px bg-zintra-ink-muted/10 my-zintra-6" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ServiceFaq