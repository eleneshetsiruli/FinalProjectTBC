import { useTranslation } from "react-i18next";
import ContentBox from "./contentBox";

export const SocMedia = () => {
  const { t } = useTranslation();
  const content = [
    { label: "Facebook:", result: "ExploreEra on Facebook" },
    { label: "Instagram:", result: "@ExploreEra" },
    { label: "Twitter:", result: "Twitter: @ExploreEraTours" },
  ];
  return <ContentBox title={t("about-page.soc")} contentItems={content} />;
};
