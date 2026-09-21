import Image from "next/image"

const FinalCTA = () => {
    return (
        <section className="mt-zintra-14 py-zintra-13 bg-zintra-ink">
            <div className="max-w-3xl mx-auto px-zintra-7 flex flex-col items-center text-center">
                <h2 className="text-display-2 font-bold text-white text-center">Have something worth building?</h2>
                <p className="text-body-base text-white/70 mt-zintra-6">
                    Tell us where the numbers should move. We&apos;ll reply within two working days.
                </p>
                <a
                    href="#"
                    className="flex items-center gap-4 bg-zintra-surface text-zintra-ink py-zintra-3 ps-zintra-7 pe-zintra-3 rounded-full mt-zintra-9"
                >
                    Book a call
                    <span className="bg-zintra-secondary w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                        <Image src="/images/nav-arrow.svg" width={12} height={12} alt="" />
                    </span>
                </a>
            </div>
        </section>
    )
}
export default FinalCTA