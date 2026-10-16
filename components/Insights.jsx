import Image from "next/image"
import ArrowIcon from "@/components/icons/ArrowIcon"
import Button from "./ui/Button"

const LatestInsights = () => {
    const posts = [
        {
            category: "Engineering",
            date: "June 2026",
            title: "The case for boring infrastructure on marketing sites",
            image: "https://picsum.photos/seed/zintra-insight-1/700/460",
        },
        {
            category: "Engineering",
            date: "June 2026",
            title: "The case for boring infrastructure on marketing sites",
            image: "https://picsum.photos/seed/zintra-insight-2/700/460",
        },
        {
            category: "Engineering",
            date: "June 2026",
            title: "The case for boring infrastructure on marketing sites",
            image: "https://picsum.photos/seed/zintra-insight-3/700/460",
        },
        {
            category: "Engineering",
            date: "June 2026",
            title: "The case for boring infrastructure on marketing sites",
            image: "https://picsum.photos/seed/zintra-insight-4/700/460",
        },
    ]

    return (
        <section id="latest-insights" className="bg-white mt-zintra-14">
            <div className="max-w-7xl mx-auto px-zintra-7">
                <span className="inline-flex items-center border border-zintra-primary text-zintra-primary text-body-sm px-zintra-5 py-zintra-2 rounded-full">
                    Latest Insights
                </span>
                <h2 className="text-h1 font-bold mt-zintra-5">From our blog</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-zintra-8 mt-zintra-9">
                    {posts.map((post, index) => (
                        <article
                            key={index}
                            className="bg-zintra-card rounded-zintra-6 overflow-hidden border border-zintra-border"
                        >
                            <div className="relative w-full aspect-3/2">
                                <Image src={post.image} alt={post.title} fill className="object-cover" />
                            </div>
                            <div className="p-zintra-7">
                                <p className="text-body-sm">
                                    <span className="text-zintra-primary font-bold">{post.category}</span>
                                    <span className="text-zintra-ink-muted"> &middot; {post.date}</span>
                                </p>
                                <div className="flex items-center justify-between gap-zintra-6 mt-zintra-4">
                                    <h3 className="text-h5 font-bold">{post.title}</h3>
                                    <Button iconRight="/images/nav-arrow.svg"  type="ctaSecondary" size="iconOnly">
                                        Read more
                                    </Button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default LatestInsights