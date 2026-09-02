import Image from "next/image";

const HeroGrowthCard = () => {
    return (
        <div className="absolute right-full mr-40 top-50 -translate-y-1/2 w-max inline-flex items-center p-5 gap-zintra-7 bg-zintra-success-focus rounded-zintra-5 shadow-zintra">
            <div className="flex flex-col items-start gap-2">
                <h4 className="text-h4 font-bold">80%</h4>
                <p className="text-eyebrow">Increased Growth Rate</p>
            </div>

            <Image
                src="/images/ChartLineUp.svg"
                alt="chartup"
                width={48}
                height={48}
                
            />
        </div>
    );
};

export default HeroGrowthCard;