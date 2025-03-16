import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

function Text({ as: Tag = "p", children, className, variant, size }) {
  const textStyles = cva("text-black transition-all", {
    variants: {
      variant: {
        heading: "font-bold text-2xl",
        subheading: "font-semibold text-xl",
        description: "text-neutral-400 text-base",
        body: "font-normal text-base",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl",
        "5xl": "text-5xl",
        "6xl": "text-6xl",
      },
    },
    defaultVariants: {
      variant: "body",
      size: "md",
    },
  });

  return (
    <Tag className={twMerge(textStyles({ variant, size }), className)}>
      {children}
    </Tag>
  );
}

export default Text;
