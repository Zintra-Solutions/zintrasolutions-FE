import Image from "next/image"
import Link from "next/link"
import Button from "./ui/Button"



const Header = () => {
    const navlinks = [
        { link: "Home", href: "/" },
        { link: "Services", href: "#services" },
        { link: "Work", href: "#work" },
        { link: "About", href: "#about" },
        { link: "Insights", href: "#insights" },
    ]
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
                        {navlinks.map(navlink => (
                            <Link className="" key={navlink.link} href={navlink.href}>
                                {navlink.link}
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