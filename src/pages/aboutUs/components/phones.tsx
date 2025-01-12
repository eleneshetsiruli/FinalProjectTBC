import { useTranslation } from "react-i18next";
import ContentBox from "./contentBox";

export const Phones = () => {
  const { t } = useTranslation();
  const phones = [
    { label: "Call us at:", result: "+1 (555) 123-4567" },
    {
      label: "For bookings  inquiries:",
      result: "+1 (555) 1235-4567",
    },
  ];
  return <ContentBox title={t("about-page.phones")} contentItems={phones} />;
};
