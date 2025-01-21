import React from "react";
import { useTranslation } from "react-i18next";

interface PayButtonProps {
  id: string;
  onPay: () => void;
}

const PayButton: React.FC<PayButtonProps> = ({ onPay }) => {
  const { t } = useTranslation();
  return (
    <button
      onClick={() => onPay()}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      {t("pay-page.book")}
    </button>
  );
};

export default PayButton;
