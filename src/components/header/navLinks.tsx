import { pageEnums } from "@/pages/enums/pageEnums";
import { SingleLink } from "./singleLink";
import { useTranslation } from "react-i18next";

export const NavLinks = () => {
  const { t } = useTranslation();
  return (
    <div className="lg:flex gap-16 hidden">
      <SingleLink title={t("home-page.home")} goTo={pageEnums.HOME} />
      <SingleLink title={t("home-page.about")} goTo={pageEnums.ABOUT} />
      <SingleLink title={t("home-page.blogs")} goTo={pageEnums.BLOGS} />
      <SingleLink title={t("home-page.tours")} goTo={pageEnums.SERVICES} />
      <SingleLink title={t("home-page.hotels")} goTo={pageEnums.HOTELS} />
      <SingleLink title={t("home-page.flights")} goTo={pageEnums.FLIGHTS} />
    </div>
  );
};
