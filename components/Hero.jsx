import Image from "next/image"


const Hero = () => {
    return (
        <main className="min-h-screen mt-zintra-11">
            <section className="">
                <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
                    <h1 className="text-display-1 font-bold text-center" >
                        We Build Digital Experiences that <span className="text-zintra-primary">Inspire & perform</span>
                    </h1>
                    <p className="text-body-base max-w-3xl text-center mt-zintra-7" >
                        We combine strategy, design, and technology to create websites, digital products, and brand experiences that help businesses stand out, connect with their audience, and grow with confidence.
                    </p>
                    <div className="flex gap-2 mt-zintra-9">
                        <button className="bg-zintra-ink text-white px-8 py-5 rounded-full hover:bg-zintra-primary-dark" >
                            Book a call
                        </button>
                        <button className="border border-zintra-ink  px-8 py-5 rounded-full" >
                            See our work
                        </button>
                    </div>
                </div>
            </section>
            <section className="relative mt-zintra-13 flex justify-center items-center ">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="bg-gradient absolute inset-x-0 top-20 h-[150%] rounded-t-full"></div>
                </div>
                <div className="relative z-10 flex items-center justify-center">
                    <Image src="/images/hero-phone.png" alt="Hero background" width={301} height={600} />

                    <div className="absolute right-full mr-40 top-50 -translate-y-1/2 w-max inline-flex items-center p-5 gap-zintra-7 bg-zintra-success-focus rounded-xl shadow-zintra">
                        <div className="flex flex-col items-start gap-2">
                            <h4 className="text-h4 font-bold">80%</h4>
                            <p className="text-eyebrow">Increased Growth Rate</p>
                        </div>
                        <Image src="/images/ChartLineUp.svg" alt="chartup" width={48} height={48} />
                    </div>

                    <div className="absolute right-92 -top-15 w-37.5 h-31.75 p-2.5 rounded-xl shadow-zintra overflow-hidden flex flex-col justify-start">
                        <Image
                            src="/images/black.jpg"
                            alt="Card background"
                            fill
                            className="object-cover object-center z-0"
                            priority
                        />

                        <div className="absolute inset-0 bg-linear-to-b from-black/70 to-[#666666]/07 z-10 pointer-events-none" />

                        <div className="relative z-20 text-white flex flex-col gap-0.5 pb-1">
                            <h4 className="text-[11px] font-bold tracking-wide">Aura Wellness</h4>
                            <p className="text-[8px] text-zintra-ink-on/70">Website Development</p>
                        </div>
                    </div>

                </div>

            </section>
        </main>
    )
}
export default Hero


