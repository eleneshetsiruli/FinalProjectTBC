import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { pageEnums } from "../enums/pageEnums";

const PayPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const reservationDetails = location.state || {
    item: "Default Reservation",
    price: 100,
  };

  const [days, setDays] = useState(1);
  const totalAmount = reservationDetails.price * days;

  const handlePaymentSuccess = () => {
    alert(
      `${t("pay-page.suc")} ${reservationDetails.item}. ${t("pay-page.total")}: ${totalAmount}€`
    );
    navigate(pageEnums.HOME, {
      state: { reservationDetails, days, totalAmount },
    });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-lg w-full text-center mt-24">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          {t("pay-page.pay")}
        </h1>
        <p className="text-lg text-gray-700 mb-3">{t("pay-page.paying")}</p>
        <p className="text-lg text-gray-700 mb-6">{t("pay-page.amount")}</p>

        <div className="mb-6">
          <label htmlFor="days" className="block text-lg text-gray-900 mb-3">
            {t("pay-page.selectDays")}
          </label>
          <input
            type="number"
            id="days"
            min="1"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            className="w-full max-w-xs mx-auto px-5 py-3 rounded-lg border border-gray-300 text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
          />
        </div>

        <p className="text-xl font-semibold text-gray-900 mb-6">
          {t("pay-page.total")}: {totalAmount}€
        </p>

        <Button
          onClick={handlePaymentSuccess}
          className="w-full py-3 bg-gradient-to-r from-green-400 to-teal-500 text-white font-semibold rounded-lg shadow-md hover:from-green-500 hover:to-teal-600 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300"
        >
          {t("pay-page.payNow")}
        </Button>
      </div>
    </div>
  );
};

export default PayPage;
