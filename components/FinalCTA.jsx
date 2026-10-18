import Image from "next/image"
import Button from "./ui/Button"

const FinalCTA = () => {
    return (
        <section className="py-zintra-13 bg-zintra-ink">
            <div className="max-w-3xl mx-auto px-zintra-7 flex flex-col items-center text-center">
                <h2 className="text-display-2 font-bold text-white text-center">Have something worth building?</h2>
                <p className="text-body-base text-white/70 mt-zintra-6">
                    Tell us where the numbers should move. We&apos;ll reply within two working days.
                </p>
                <Button iconRight="/images/nav-arrow.svg" type="ctaSecondary" size="iconOnly" className="bg-zintra-card text-zintra-ink mt-zintra-9">
                    Start a conversation
                </Button>
            </div>
        </section>
    )
}
export default FinalCTA