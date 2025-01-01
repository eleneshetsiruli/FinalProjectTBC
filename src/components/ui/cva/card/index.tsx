import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const cardStyles = cva(
  " justify-center rounded-lg shadow-md transition-transform transform  ",
  {
    variants: {
      bg: {
        primary: "bg-white",
        secondary: "bg-gray-100",
        danger: "bg-red-100",
      },
      color: {
        primary: "text-[#868687]",
        secondary: "bg-gray-200 text-gray-900",
        danger: "bg-red-500 text-white",
      },
      display: {
        flex: "flex",
        block: "block",
      },
      size: {
        sm: "w-[340px] h-[350px]",
        md: "w-[340px] h-[580px]",
      },
      border: {
        none: "",
        thin: "border border-gray-300",
        thick: "border-2 border-gray-500",
      },

      padding: {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        custom: "p-[30px]",
      },
      flexDirection: {
        row: "flex-row",
        column: "flex-col",
      },
      gap: {
        sm: "gap-2",
        md: "gap-4",
        lg: "gap-6",
        custom: "gap-[30px]",
      },
    },
    defaultVariants: {
      size: "sm",
      bg: "primary",
      padding: "custom",
      color: "primary",
      display: "flex",
      flexDirection: "column",
      gap: "md",
    },
  }
);

type CardProps = VariantProps<typeof cardStyles> & {
  children: React.ReactNode;
};

const CardCva: React.FC<CardProps> = ({ children, color, size, border }) => {
  return <div className={cardStyles({ color, size, border })}>{children}</div>;
};

export default CardCva;
