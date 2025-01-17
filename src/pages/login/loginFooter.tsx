import { ParagrCva } from "@/components/ui/cva/paragraph";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const LoginFooter = () => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-between items-center">
      <ParagrCva size="sm" color="secondary">
        {t("auth-page.doNot")}
      </ParagrCva>

      <Link className="hover:underline text-[#FF6700]" to={"/signUp"}>
        {t("auth-page.signUp")}
      </Link>
    </div>
  );
};
