import { Logo } from "@/components/header/logo";
import { FooterMinBox } from "../footerMinBox";
import { ParagrCva } from "@/components/ui/cva/paragraph";
import { Icons } from "../icnos";

export const LeftBox = () => {
  return (
    <FooterMinBox>
      <Logo size="w-[200px] cursor-pointer" />
      <ParagrCva size="wid200" color="secondary">
        Travel agency which helps you to plan your perfect holidays
      </ParagrCva>
      <ParagrCva size="text30" color="secondary">
        Follow us
      </ParagrCva>
      <Icons />
    </FooterMinBox>
  );
};
