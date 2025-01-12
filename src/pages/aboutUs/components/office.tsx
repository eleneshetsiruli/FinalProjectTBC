import { ParagrCva } from "@/components/ui/cva/paragraph";
import { useTranslation } from "react-i18next";

export const Office = () => {
  const { t } = useTranslation();
  return (
    <>
      <h3>{t("about-page.office")}</h3>
      <ParagrCva color="secondary" size="wid300">
        {t("about-page.visit")}
        <strong className="text-card ml-1 mr-1">ExploreEra</strong>
        {t("about-page.adress")}
      </ParagrCva>
    </>
  );
};
