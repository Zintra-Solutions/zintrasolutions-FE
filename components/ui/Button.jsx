import { tv } from "tailwind-variants"
import Image from "next/image"
import { forwardRef } from "react"

const buttonVariants = tv({
    slots: {
        base: "inline-flex justify-center items-center gap-zintra-3 rounded-full font-semibold transition-colors cursor-pointer whitespace-nowrap",
        iconLeftWrapper: "flex justify-center items-center shrink-0",
        iconRightWrapper: "flex justify-center items-center shrink-0"
    },
    variants: {
        type: {
            primary: { base: "bg-zintra-ink text-zintra-ink-on hover:bg-zintra-ink-hover" },
            secondary: { base: "bg-zintra-secondary text-zintra-secondary-on hover:bg-zintra-secondary-hover hover:text-zintra-ink-on" },
            outline: { base: "border border-zintra-ink text-zintra-ink hover:border-zintra-ink-hover" },
            ghost: { base: "rounded-full" },
            brand: { base: "bg-zintra-primary text-zintra-primary-on hover:bg-zintra-primary-hover" },
            outlineBrand: { base: "border border-zintra-primary text-zintra-primary hover:border-zintra-primary-hover" },
            link: { base: "underline text-zintra-primary hover:text-zintra-primary-hover" },
            destructive: { base: "bg-[#d92d20] text-zintra-ink-on hover:bg-[#b42318]" },
            success: { base: "bg-zintra-success text-zintra-success-on hover:bg-zintra-success-hover" },
            warning: { base: "bg-zintra-secondary text-zintra-secondary-on hover:bg-zintra-secondary-hover" },

            ctaPrimary: {
                base: "bg-zintra-ink text-zintra-ink-on hover:bg-zintra-ink-hover pr-2",
                iconRightWrapper: "bg-zintra-secondary w-10 h-10 rounded-full"
            },

            ctaSecondary: {
                base: "border border-zintra-surface-focus text-zintra-secondary-on hover:bg-zintra-surface-hover pr-2",
                iconRightWrapper: "bg-zintra-secondary w-10 h-10 rounded-full"

            }



        },

        size: {
            lg: { base: "text-[16px] px-zintra-8 py-zintra-6" },
            md: { base: "text-[14px] px-zintra-7 py-zintra-5" },
            sm: { base: "text-[14px] px-zintra-6 py-zintra-4" },
            xs: { base: "text-[12px] px-zintra-4 py-zintra-3" },
            iconOnly: { base: "pl-zintra-7 py-zintra-3 gap-zintra-4" },

        },

    },



    defaultVariants: {
        type: "primary",
        size: "md",
    }

})

const Button = forwardRef(({ type, className, children, size, iconLeft, iconRight, ...props }, ref) => {
    const { base, iconLeftWrapper, iconRightWrapper } = buttonVariants({ type, size })
    return (
        <button {...props} className={base({ className })} ref={ref}>
            {iconLeft && (
                <span className={iconLeftWrapper()}>
                    {typeof iconLeft === "string" ? <Image src={iconLeft} alt="" width={16} height={16} /> : iconLeft}
                </span>
            )}
            {children && <span>{children}</span>}
            {iconRight && (
                <span className={iconRightWrapper()}>
                    {typeof iconRight === "string" ? <Image src={iconRight} alt="icon" width={12} height={12} /> : iconRight}
                </span>
            )}
        </button>
    )
})
Button.displayName = "Button"

export default Button