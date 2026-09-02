

const HeroContent = () => {
    return (
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
    );
};

export default HeroContent;