import { ParagrCva } from "@/components/ui/cva/paragraph";
import { useTranslation } from "react-i18next";

export const AboutParagrap = () => {
  const { t } = useTranslation();
  return (
    <>
      <ParagrCva color="def">{t("about-page.welcome")}</ParagrCva>
    </>
  );
};
