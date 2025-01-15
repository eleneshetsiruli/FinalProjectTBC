import { Logo } from "@/components/header/logo";
import { FooterMinBox } from "../footerMinBox";
import { ParagrCva } from "@/components/ui/cva/paragraph";
import { Icons } from "../icnos";
import { useTranslation } from "react-i18next";

export const LeftBox = () => {
  const { t } = useTranslation();
  return (
    <FooterMinBox>
      <Logo size="w-[200px] cursor-pointer" />
      <ParagrCva size="wid200">{t("footer-page.travel")}</ParagrCva>
      <ParagrCva size="text30">{t("footer-page.follow")}</ParagrCva>
      <Icons />
    </FooterMinBox>
  );
};
