import { tv } from "tailwind-variants"
import Image from "next/image"
import { forwardRef } from "react"

const buttonVariants = tv({
    base: "inline-flex justify-center items-center gap-zintra-3 px-zintra-7 py-zintra-5 rounded-full font-semibold transition-colors",
    variants: {
        type: {
            primary: "bg-zintra-ink text-zintra-ink-on hover:bg-zintra-ink-hover",
            secondary: "bg-zintra-secondary text-zintra-secondary-on hover:bg-zintra-secondary-hover hover:text-zintra-ink-on",
            outline: "border border-zintra-ink text-zintra-ink hover:border-zintra-ink-hover",
            ghost: "rounded-full",
            brand: "bg-zintra-primary text-zintra-primary-on hover:bg-zintra-primary-hover",
            "outline-brand": "border border-zintra-primary text-zintra-primary hover:border-zintra-primary-hover",
            link: "underline text-zintra-primary hover:text-zintra-primary-hover",
            destructive: "bg-[#d92d20] text-zintra-ink-on hover:bg-[#b42318]",
            success: "bg-zintra-success text-zintra-success-on hover:bg-zintra-success-hover",
            warning: "bg-zintra-secondary text-zintra-secondary-on hover:bg-zintra-secondary-hover",


        },

        size: {
            iconOnly: "w-10 h-10 p-3",
            lg: "text-[16px] px-zintra-8 py-zintra-6",
            md: "text-[14px] px-zintra-7 py-zintra-5",
            sm: "text-[14px] px-zintra-6 py-zintra-4",
            xs: "text-[12px] px-zintra-4 py-zintra-3",

        },

    },

    defaultVariants: {
        type: "primary",
        size: "md",
    }

})

const Button = forwardRef(({ type, className, children, size, iconLeft, iconRight, ...props }, ref) => {
    return (
        <button {...props} className={buttonVariants({ type, className, size })} ref={ref}>
            {iconLeft && (
                <span className="flex justify-center items-center shrink-0">
                    {typeof iconLeft === "string" ? <Image src={iconLeft} alt="" width={16} height={16} /> : iconLeft}
                </span>
            )}
            {children && <span>{children}</span>}
            {iconRight && (
                <span className="bg-zintra-secondary p-2 rounded-full flex justify-center items-center shrink-0">
                    {typeof iconRight === "string" ? <Image src={iconRight} alt="icon" width={12} height={12} /> : iconRight}
                </span>
            )}
        </button>
    )
})
Button.displayName = "Button"

export default Button