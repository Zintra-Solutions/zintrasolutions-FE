import Image from "next/image"
import ArrowIcon from "@/components/icons/ArrowIcon"

const Insights = () => {
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
        <section id="insights" className="max-w-7xl mx-auto px-zintra-7 mt-zintra-14">
            <h2 className="text-h1 font-bold">Latest Insights</h2>

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
                                <a href="#" className="flex items-center gap-3 text-body-base shrink-0">
                                    Read more
                                    <span className="bg-zintra-ink text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                                        <ArrowIcon className="w-3 h-3" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
export default Insights