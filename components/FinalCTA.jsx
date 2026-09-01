import ArrowRightIcon from "@/components/icons/ArrowRightIcon"

const FinalCTA = () => {
    return (
        <section className="mt-zintra-14 py-zintra-13 bg-zintra-ink">
            <div className="max-w-3xl mx-auto px-zintra-7 flex flex-col items-center text-center">
                <h2 className="text-display-2 font-bold text-white">Have something worth building?</h2>
                <p className="text-body-base text-white/70 mt-zintra-6">
                    Tell us where the numbers should move. We&apos;ll reply within two working days.
                </p>
                <a
                    href="#"
                    className="flex items-center gap-3 bg-zintra-primary text-white px-zintra-7 py-zintra-4 rounded-full mt-zintra-9 hover:bg-zintra-primary-hover"
                >
                    <ArrowRightIcon className="w-4 h-4" />
                    Let&apos;s Talk
                </a>
            </div>
        </section>
    )
}
export default FinalCTA