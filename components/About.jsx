import Image from "next/image"



const About = () => {
    return (
        <section className="bg-zintra-primary-tint">
            <div className="max-w-7xl mx-auto px-zintra-7 py-zintra-13">
                <span className="inline-flex items-center border border-zintra-primary text-zintra-primary text-body-sm px-zintra-5 py-zintra-2 rounded-full">
                    About us
                </span>

                <div className="flex items-center justify-between gap-9 mt-zintra-5 ">
                    <h2 className="text-display-2 font-bold w-[52%]">At Zintra, we&apos;re more than just a digital agency</h2>
                    <p className="w-[48%]">We&apos;re your dedicated partners in finding the perfect property. With a passion for excellence and a commitment to personalized service, we&apos;re here to turn your real estate dreams into reality.</p>
                </div>

                <div className="flex items-center justify-between h-140.5 overflow-hidden gap-9 mt-zintra-10 rounded-zintra-7 bg-amber-50">
                    <Image src="/images/black.jpg" alt="About us" width={1280} height={100} className="mt-zintra-9 rounded-zintra-7 object-cover object-center" />
                </div>
            </div>
        </section>
    )
}
export default About