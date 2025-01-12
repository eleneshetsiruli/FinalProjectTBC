import { useTranslation } from "react-i18next";
import ContentBox from "./contentBox";

export const Emails = () => {
  const { t } = useTranslation();
  const mails = [
    { label: "info@exploreera.com", result: "For general inquiries:" },
    { label: "bookings@exploreera.com", result: "For bookings:" },
    { label: "support@exploreera.com", result: "For support:" },
  ];

  return <ContentBox title={t("about-page.email")} contentItems={mails} />;
};
