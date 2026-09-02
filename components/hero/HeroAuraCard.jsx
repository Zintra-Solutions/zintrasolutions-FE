import Image from "next/image";

const HeroAuraCard = () => {
    return (
        <div className="absolute right-92 -top-15 w-37.5 h-31.75 p-2.5 rounded-zintra-5 shadow-zintra overflow-hidden flex flex-col justify-start">
            <Image
                src="/images/black.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center z-0"
                priority
            />

            <div className="absolute inset-0 bg-linear-to-b from-black/70 to-[#666666]/07 z-10 pointer-events-none" />

            <div className="relative z-20 text-white flex flex-col gap-0.5 pb-1">
                <h4 className="text-[11px] font-bold tracking-wide">Aura Wellness</h4>
                <p className="text-[8px] text-zintra-ink-on/70">Website Development</p>
            </div>
        </div>
    );
};

export default HeroAuraCard