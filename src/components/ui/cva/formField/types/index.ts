import { VariantProps } from "class-variance-authority";
import { labelCva } from "../label";

export interface FormFieldProps {
  label: string;
}

export interface LabelProps
  extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, "color" | "size">,
    VariantProps<typeof labelCva> {
  children: React.ReactNode;
}
