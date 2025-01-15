import { ParagrCva } from "@/components/ui/cva/paragraph";
import { FooterMinBox } from "../footerMinBox";
import { Link } from "react-router-dom";
import { pageEnums } from "@/pages/enums/pageEnums";
import { useTranslation } from "react-i18next";

export const MiddleBox = () => {
  const { t } = useTranslation();
  const links = [
    { label: t("footer-page.home"), to: pageEnums.HOME },
    { label: t("footer-page.login"), to: pageEnums.LOGIN },
    { label: t("footer-page.signUp"), to: pageEnums.SIGNUP },
    { label: t("footer-page.about"), to: pageEnums.ABOUT },
    { label: t("footer-page.blogs"), to: pageEnums.BLOGS },
  ];

  return (
    <FooterMinBox>
      <ParagrCva color="def" size="text30">
        {t("footer-page.links")}
      </ParagrCva>

      <div className="flex flex-col gap-2">
        {links.map(({ label, to }, i) => (
          <Link key={i} to={to}>
            <ParagrCva>{label}</ParagrCva>
          </Link>
        ))}
      </div>
    </FooterMinBox>
  );
};
