import Button from "../ui/Button"



const ServiceHero = () => {
  return (
    <section className="bg-zintra-primary-on">
      <div className="max-w-7xl mx-auto py-zintra-11">
        <span className="inline-flex items-center border border-zintra-primary text-zintra-primary text-body-sm px-zintra-5 py-zintra-2  rounded-full">
          Our Services
        </span>

        <div className="flex justify-between  mt-zintra-8">
          <div className="flex-2 self-end">
            <h1 className="font-extrabold text-display-1--line-height leading-20">Clear Ideas.</h1>
            <h2 className="font-extrabold text-display-1 text-zintra-primary ">Exceptional execution.</h2>
          </div>
          <div className="flex-1">
            <p>Design, development and branding for businesses ready to take their next step. From the first idea to the final handover, we help make it real.</p>

            <Button iconRight="/images/nav-arrow.svg" type="ctaPrimary" size="iconOnly" className="mt-zintra-9">
              Let&apos;s talk
            </Button>
          </div>
        </div>

        <div className="flex justify-between mt-zintra-8">
          <p>A new brand. A better website. A product worth using.</p>
          <p>Explore our expertise  ↓</p>
        </div>
      </div>
    </section>
  )
}
export default ServiceHero