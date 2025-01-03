import { cva } from "class-variance-authority";
import React from "react";

const paragraphStyles = cva("text-base text-gray-700", {
  variants: {
    color: {
      primary: "text-red-600",
      secondary: "text-gray-400",
    },
    size: {
      sm: "text-[12px]",
      md: "text-base",
      lg: "text-lg",
    },
  },

  defaultVariants: {
    color: "primary",
    size: "md",
  },
});

interface ParagrCvaProps {
  color?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const ParagrCva: React.FC<ParagrCvaProps> = ({
  color = "primary",
  size = "sm",
  children,
}) => {
  return <div className={paragraphStyles({ color, size })}>{children}</div>;
};
