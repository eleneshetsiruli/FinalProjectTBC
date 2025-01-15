import { ParagrCva } from "@/components/ui/cva/paragraph";
import { useTranslation } from "react-i18next";

export const Office = () => {
  const { t } = useTranslation();
  return (
    <>
      <h3 className="text-popover-foreground">{t("about-page.office")}</h3>
      <ParagrCva color="primary" size="wid300">
        {t("about-page.visit")}
        <strong className="text-popover-foreground ml-1 mr-1">
          ExploreEra
        </strong>
        {t("about-page.adress")}
      </ParagrCva>
    </>
  );
};
