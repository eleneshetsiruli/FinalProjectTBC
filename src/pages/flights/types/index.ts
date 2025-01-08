import { ReactNode } from "react";

export interface BackgroundProps {
  children: ReactNode;
}
export interface OptionsComponentProps {
  title: string;
  result: ReactNode;
}

export interface Country {
  value: string;
  label: string;
}

export interface ComboboxDemoProps {
  select: string;
  list: Country[];
}
