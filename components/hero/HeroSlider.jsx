const HeroSlider = () => {
    const slider = [
        { id: 1, text: "Novara health" },
        { id: 2, text: "Catway" },
        { id: 3, text: "Freda" },
        { id: 4, text: "Beaconpay" },
        { id: 5, text: "Aura Wellness" },
        { id: 6, text: "505 Arctic" },
    ];
    const doubleSlider = [...slider, ...slider]

    return (
        <main className="w-full overflow-hidden">
            <div className="flex w-max carousel">

                <div className="flex shrink-0 items-center gap-32 py-zintra-10 pr-32 font-display bg-zintra-background font-semibold text-zintra-deep text-h3">
                    {doubleSlider.map((item, index) => (
                        <p key={`${item.id}-${index}`}>
                            {item.text}
                        </p>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default HeroSlider;