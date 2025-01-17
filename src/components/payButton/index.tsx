import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { pageEnums } from "@/pages/enums/pageEnums";
import { useTranslation } from "react-i18next";

const PayButton = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleGoPay = () => {
    navigate(pageEnums.PAY);
  };
  return (
    <Button
      onClick={handleGoPay}
      className="bg-blue-500 text-white hover:bg-card w-[100%]"
    >
      {t("blog-page.book")}
    </Button>
  );
};

export default PayButton;
