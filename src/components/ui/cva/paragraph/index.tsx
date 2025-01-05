import { cva } from "class-variance-authority";
import React from "react";

const paragraphStyles = cva("text-base text-gray-700", {
  variants: {
    color: {
      primary: "text-red-600",
      secondary: "text-gray-400",
      def: "text-white",
      green: "text-green-700",
    },
    size: {
      sm: "text-[12px]",
      md: "text-base",
      lg: "text-lg",
      xl: "text-[50px]",
    },
  },

  defaultVariants: {
    color: "primary",
    size: "md",
  },
});

interface ParagrCvaProps {
  color?: "primary" | "secondary" | "def" | "green";
  size?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

export const ParagrCva: React.FC<ParagrCvaProps> = ({
  color = "primary",
  size = "sm",
  children,
}) => {
  return <div className={paragraphStyles({ color, size })}>{children}</div>;
};
