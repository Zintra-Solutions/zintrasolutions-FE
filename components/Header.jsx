import Image from "next/image"
import Link from "next/link"



const Header = () => {
    const navlinks = [
        { link: "Services", href: "#services" },
        { link: "Work", href: "#work" },
        { link: "About", href: "#about" },
        { link: "Insights", href: "#insights" },
    ]
    return (
        <main className=" text-zintra-ink border-b border-zintra-ink/5">
            <header className="max-w-7xl mx-auto flex justify-between items-center py-zintra-4 ">
                <div>
                    <Link href="/">
                        <Image src="/images/nav-img.png" alt="Logo" width={100} height={36} />
                    </Link>
                </div>
                <div className="flex justify-between items-center gap-zintra-11">
                    <nav className="flex gap-zintra-10">
                        {navlinks.map(navlink => (
                            <Link className="" key={navlink.link} href={navlink.href}>
                                {navlink.link}
                            </Link>
                        ))}
                    </nav>

                    <nav>
                        <Link href="#" className="flex items-center gap-4 bg-zintra-ink w-fit text-zintra-ink-on py-zintra-3 ps-zintra-7 pe-zintra-3 rounded-full">
                            Book a call
                            <span className="bg-zintra-secondary w-10 h-10 rounded-full flex justify-center items-center"><Image src="/images/nav-arrow.svg" width={12} height={12} alt="nav-arrow" /></span>
                        </Link>
                    </nav>
                </div>
            </header>
        </main>
    )
}
export default Header