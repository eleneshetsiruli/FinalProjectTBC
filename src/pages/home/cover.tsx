import React from "react";
import { useNavigate } from "react-router-dom";
import cover from "@/assets/svgs/cover.png";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export const Cover: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNavigate = () => {
    navigate("/1");
  };

  return (
    <div
      className="h-screen bg-cover bg-center "
      style={{
        backgroundImage: `url(${cover})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 dark:bg-opacity-70"></div>
      <div className="text-center lg:w-[150px] absolute z-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-white">{t("home-page.offer")}</h1>
        <h1 className="text-white font-bold text-3xl animate-bounce">
          {t("home-page.italy")}
        </h1>

        <Button
          className="bg-card text-popover w-32 "
          onClick={handleNavigate}
          size="sm"
        >
          {t("home-page.seeOffer")}
        </Button>
      </div>
    </div>
  );
};
