import { ParagrCva } from "@/components/ui/cva/paragraph";
import { FooterMinBox } from "../footerMinBox";
import { useTranslation } from "react-i18next";

export const RightBox = () => {
  const { t } = useTranslation();
  const titles = ["exploreera@gmail.com", "555111222", t("footer-page.sub")];
  return (
    <FooterMinBox>
      <ParagrCva color="def" size="text30">
        {t("footer-page.contact")}
      </ParagrCva>
      {titles.map((title, i) => {
        return <ParagrCva key={i}>{title}</ParagrCva>;
      })}
    </FooterMinBox>
  );
};
