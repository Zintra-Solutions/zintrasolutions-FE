import Button from "@/components/ui/Button"


const ButtonSample = () => {
    return (
        <div className="min-h-screen flex justify-center items-center gap-4">


        
            <Button>
                Book a call
            </Button>
            <Button type="secondary" label="Book a call">
                Book a call
            </Button>
            <Button type="outline" label="Book a call">
                Book a call
            </Button>
            <Button type="ghost" label="Book a call">
                Book a call
            </Button>
            <Button type="brand" label="Book a call">
                Book a call
            </Button>
            <Button type="outlineBrand" label="Book a call">
                Book a call
            </Button>
            <Button type="link" label="Book a call">
                Book a call
            </Button>
            <Button type="destructive" label="Book a call">
                Book a call
            </Button>
            <Button type="success" iconRight={"/images/nav-arrow.svg"}>
                Book a call
            </Button>
           
            <Button type="warning" label="Book a call">
                Book a call
            </Button>

            <Button iconRight="/images/nav-arrow.svg" type="ctaPrimary" size="iconOnly" >
                Book a call
            </Button>
             

        </div>
    )
}
export default ButtonSample