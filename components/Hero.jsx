import Image from "next/image"
import Link from "next/link"
import HeroSlider from "./hero/HeroSlider"
import HeroContent from "./hero/HeroContent"
import HeroVisual from "./hero/HeroVisual"


const Hero = () => {
    return (
        <main className="min-h-screen mt-zintra-11">
            <section className="">
                <HeroContent />
            </section>
            <HeroVisual />
            <HeroSlider />

        </main>
    )
}
export default Hero


