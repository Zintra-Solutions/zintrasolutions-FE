'use client'

import Image from "next/image"
import Link from "next/link"
import Button from "./ui/Button"
import { usePathname } from "next/navigation"



const Header = () => {
    const pathname = usePathname()

    const navlinks = [
        { link: "Home", href: "/" },
        { link: "Services", href: "/services" },
        { link: "Work", href: "/work" },
        { link: "About", href: "/about" },
        { link: "Insights", href: "/insights" },
    ]

    const links = navlinks.map((navlink) => ({
        ...navlink,
        isActive: pathname === navlink.href
    }))

    return (
        <main className=" text-zintra-ink border-b border-zintra-ink/5">
            <header className="max-w-7xl mx-auto flex justify-between items-center py-zintra-7 ">
                <div>
                    <Link href="/">
                        <Image src="/images/nav-img.png" alt="Logo" width={100} height={36} />
                    </Link>
                </div>
                <div className="flex justify-between items-center gap-zintra-11">
                    <nav className="flex gap-zintra-10">
                        {links.map(navlink => (
                            <Link
                                className="relative flex flex-col items-center"
                                key={navlink.link}
                                href={navlink.href}
                            >
                                <span className={navlink.isActive ? "font-semibold text-zintra-ink" : "text-zintra-ink-tint hover:text-zintra-ink"}>
                                    {navlink.link}
                                </span>
                                {navlink.isActive && (
                                    <span className="absolute -bottom-3.5 w-2 h-2 rounded-full bg-zintra-secondary" />
                                )}
                            </Link>
                        ))}
                    </nav>

                    <nav>
                        <Button iconRight="/images/nav-arrow.svg" type="ctaSecondary" size="iconOnly" >
                            Book a call
                        </Button>

                    </nav>
                </div>
            </header>
        </main>
    )
}
export default Header