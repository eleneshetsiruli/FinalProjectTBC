import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const CartHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-7 my-5 flex justify-center items-center gap-8">
      <h2 className="text-popover-foreground text-center lg:text-4xl my-4">
        {t("pay-page.booked")}
      </h2>
      <FontAwesomeIcon
        className="w-8 h-8 text-orange-500 lg:w-10 lg:h-10"
        icon={faCartShopping}
      />
    </div>
  );
};
