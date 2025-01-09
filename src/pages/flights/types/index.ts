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

export interface ControlledComboboxDemoProps {
  select: string;
  list: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
}

export interface CalendarFormProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}
