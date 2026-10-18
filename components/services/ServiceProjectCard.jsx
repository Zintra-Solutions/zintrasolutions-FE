'use client'
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


const ServiceProjectCard = ({ project }) => {
    const pathname = usePathname()
    const { title, description, tags, imagePlaceholder, link } = project

    return (
        <div className="bg-zintra-primary-on pt-zintra-7 pb-zintra-8 rounded-[20px]">
            <Image
                src={imagePlaceholder}
                alt={title}
                width={500}
                height={200}
                className="w-full h-auto mb-zintra-6 rounded-zintra-5"
            />
            <div className="py-zintra-7">
                <div className="flex justify-between items-center">
                    <h3 className="text-h3 font-semibold">{title}</h3>
                    <Link href={link} className="text-zintra-primary hover:text-zintra-primary-hover p-4 border rounded-full border-zintra-deep-tint hover:border-zintra-deep-muted">
                        <ArrowUpRight size={16} />
                    </Link>
                </div>
                <p className="text-[16px] text-zintra-deep-muted">{description}</p>
                <div className="flex flex-wrap gap-2 mt-zintra-4">
                    {pathname === "/services" ? (tags.slice(0, 2).map((tag, index) => (
                        <span
                            key={index}
                            className="bg-zintra-primary-on text-zintra-deep-muted border border-zintra-primary-tint text-[13px] px-zintra-4 py-zintra-2 rounded-full"
                        >
                            {tag}
                        </span>
                    ))) : (tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-zintra-primary-on text-zintra-deep-muted border border-zintra-primary-tint text-[13px] px-zintra-4 py-zintra-2 rounded-full"
                        >
                            {tag}
                        </span>
                    )))}
                </div>
            </div>

        </div>
    )
}
export default ServiceProjectCard