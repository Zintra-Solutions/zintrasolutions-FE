import Button from "../ui/Button";


const HeroContent = () => {
    return (
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center">
            <h1 className="text-display-1 font-bold text-center" >
                We design and build digital products that <span className="text-zintra-primary">move the numbers</span>
            </h1>
            <p className="text-body-base max-w-xl text-center mt-zintra-7" >
                Strategy, design and technology for ambitious businesses that need digital products built to perform — from first idea to measurable growth.
            </p>
            <div className="flex gap-2 mt-zintra-9">
                <Button iconRight="/images/nav-arrow.svg" type="ctaSecondary" size="iconOnly" >
                    Learn More
                </Button>

            </div>
        </div>
    );
};

export default HeroContent;