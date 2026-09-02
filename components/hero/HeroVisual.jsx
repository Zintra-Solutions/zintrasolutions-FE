import Image from "next/image";
import Link from "next/link";
import HeroGrowthCard from "./HeroGrowthCard";
import HeroAuraCard from "./HeroAuraCard";


const HeroVisual = () => {
    return (
        <section className="relative mt-zintra-13 flex justify-center items-center">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="bg-gradient absolute inset-x-0 top-20 h-[150%] rounded-t-full" />
            </div>

            {/* Main visual */}
            <div className="relative z-10 flex items-center justify-center">
                <Image
                    src="/images/hero-phone.png"
                    alt="Hero phone"
                    width={301}
                    height={600}
                />

                <HeroGrowthCard />

                <HeroAuraCard />

                <div className="absolute left-90 -top-4 border w-max h-max bg-zintra-secondary-focus p-zintra-6 inline-flex items-center justify-center rounded-zintra-5 gap-zintra-6 text-zintra-ink shadow-zintra">

                    <div>
                        <h4 className="font-bold text-2xl leading-6 tracking-[-0.345px] ">10 <span className="text-sm">items</span></h4>
                        <p className="text-sm font-medium leading-6">Sold this week</p>
                    </div>
                    <Image src="/images/hero-bottle.png" width={40} height={60} alt="hero bottle" className="aspect-2/3" />
                </div>

                <div className="absolute -right-90 top-50 -translate-y-1/2 bg-zintra-card w-37.5 h-max px-1 pt-1 pb-6 rounded-zintra-5 shadow-zintra">
                    <div className="rounded-zintra-4 overflow-hidden">
                        <Image src="/images/hero-girl.png" alt="hero girl" width="150" height="60" className="w-full" object-cover="true" />
                    </div>
                    <div className="px-2 mt-zintra-4">
                        <div className="pb-zintra-1">
                            <p className="text-zintra-primary font-bold text-[6px] ">Engineering <span className="text-zintra-ink-muted"> &middot; June 2026</span></p>
                        </div>
                        <div className="inline-flex justify-between items-center self-stretch gap-2  w-full ">
                            <h4 className="text-[6px] font-semibold">The case for boring infrastructure on marketing sites</h4>
                            <Link className="text-[4px] w-full  inline-flex items-center gap-zintra-4 font-semibold" href="#" >
                                Read more
                                <span className="bg-zintra-secondary w-5 h-5 rounded-full flex justify-center items-center">
                                    <Image src="/images/nav-arrow.svg" width={5} height={5} alt="nav-arrow" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroVisual;