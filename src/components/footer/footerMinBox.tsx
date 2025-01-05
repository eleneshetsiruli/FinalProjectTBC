import { FooterMinBoxProps } from "./types";

export const FooterMinBox = ({ children }: FooterMinBoxProps) => {
  return <div className="flex flex-col gap-4">{children}</div>;
};
