import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    const companyLinks = [
        { label: "Services", href: "#services" },
        { label: "Work", href: "#work" },
        { label: "About", href: "#about" },
        { label: "Insights", href: "#insights" },
    ]

    const socialLinks = [
        { label: "LinkedIn", href: "#" },
        { label: "X/Twitter", href: "#" },
        { label: "Instagram", href: "#" },
    ]

    return (
        <footer className="bg-zintra-ink text-white pt-zintra-13 pb-zintra-7 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-zintra-7">
                <div className="flex flex-wrap justify-between gap-zintra-10">
                    <div className="max-w-xs">
                        <Image src="/images/nav-img.png" alt="Zintra Solutions" width={140} height={50} />
                        <p className="text-body-base text-white/70 mt-zintra-5">
                            A tech solutions company for teams that measure design in outcomes.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-zintra-13">
                        <nav>
                            <p className="text-label-base text-white/50">COMPANY</p>
                            <ul className="flex flex-col gap-zintra-5 mt-zintra-6">
                                {companyLinks.map((item) => (
                                    <li key={item.label}>
                                        <Link href={item.href} className="text-white hover:text-white/70">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <nav>
                            <p className="text-label-base text-white/50">SOCIAL</p>
                            <ul className="flex flex-col gap-zintra-5 mt-zintra-6">
                                {socialLinks.map((item) => (
                                    <li key={item.label}>
                                        <Link href={item.href} className="text-white hover:text-white/70">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div>
                            <p className="text-label-base text-white/50">CONTACT</p>
                            <p className="mt-zintra-6">
                                <a href="mailto:zintrasolutions@gmail.com" className="text-white hover:text-white/70">
                                    zintrasolutions@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-zintra-11 pt-zintra-7 flex flex-wrap justify-between gap-zintra-4 text-body-sm text-white/60">
                    <p>&copy; 2026 Zintra Solutions Ltd. All rights reserved.</p>
                    <div className="flex gap-zintra-7">
                        <Link href="#" className="hover:text-white">
                            Privacy
                        </Link>
                        <Link href="#" className="hover:text-white">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer