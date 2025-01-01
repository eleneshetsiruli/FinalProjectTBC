import { VariantProps } from "class-variance-authority";
import { buttonStyles } from ".";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}
