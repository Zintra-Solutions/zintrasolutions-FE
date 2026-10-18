import { ArrowUpRight } from "lucide-react";
import Image from "next/image";




const ServiceCard = ({ expertise }) => {
    const { id, title, description, whatYouGet, goodFitFor, imagePlaceholder } = expertise;
    return (
        <div className="bg-zintra-primary-on px-zintra-7 pt-zintra-7 pb-zintra-8 rounded-[20px]">
            <Image
                src={imagePlaceholder}
                alt={title}
                width={400}
                height={400}
                className="w-full h-auto mb-zintra-6 rounded-zintra-5" />

            <div>
                <h2 className="flex items-center mb-zintra-6 gap-3.5">
                    <span className="text-zintra-primary text-caption">{id}</span>
                    <span className="font-semibold text-h4">{title}</span>
                </h2>

                <p className="mb-zintra-6">{description}</p>

                <div>
                    <h3 className="font-semibold text-[10px] text-zintra-deep-muted mb-zintra-4 uppercase text-caption">What you get</h3>
                    <ul className="mb-zintra-6 grid grid-cols-2 text-body-sm text-zintra-ink gap-2">
                        {whatYouGet.map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <ArrowUpRight size="12" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-full h-px bg-zintra-deep-tint my-zintra-6" />

                <div className="text-zintra-deep-muted flex justify-between flex-col gap-1.5">
                    <h3 className="font-semibold text-[10px] uppercase text-caption">A good fit for</h3>
                    <p className="text-body-sm text-zintra-ink">{goodFitFor}</p>
                </div>

            </div>


        </div>
    )
}
export default ServiceCard