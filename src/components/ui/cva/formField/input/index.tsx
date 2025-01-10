import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const inputCva = cva(
  "text-black block w-full rounded-md border bg-transparent px-3 py-2 text-sm   ",
  {
    variants: {
      variant: {
        default: "border-[#FF6700] focus:ring-[#FF6700]",
      },
      size: {
        sm: "h-8 text-xs",
        md: "h-10 text-sm",
        lg: "h-12 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputCva> {}

const InputCva = forwardRef<HTMLInputElement, InputProps>(
  ({ variant = "default", size = "md", className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(inputCva({ variant, size }), className)}
        {...props}
      />
    );
  }
);

InputCva.displayName = "InputCva";

export default InputCva;
