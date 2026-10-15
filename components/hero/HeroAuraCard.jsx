import Image from "next/image";

const HeroAuraCard = () => {
    return (
        <div className="absolute right-130 -top-15 w-37.5 h-31.75 p-2.5 rounded-zintra-5  overflow-hidden flex flex-col justify-start">
            <Image
                src="/images/herotopleft.png"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center z-0"
                priority
            />

           

            
        </div>
    );
};

export default HeroAuraCard