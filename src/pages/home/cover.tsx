import React from "react";
import { useNavigate } from "react-router-dom";
import cover from "@/assets/svgs/cover.png";
import ButtonCva from "@/components/ui/cva/button";
import { ParagrCva } from "@/components/ui/cva/paragraph";
import { useTranslation } from "react-i18next";

export const Cover: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNavigate = () => {
    navigate("/1");
  };

  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${cover})`,
      }}
    >
      <div className="text-center lg:w-[150px] absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ParagrCva size="lg" color="def">
          {t("home-page.offer")}
        </ParagrCva>
        <h1 className="text-white font-bold text-3xl animate-bounce">
          {t("home-page.italy")}
        </h1>

        <ButtonCva onClick={handleNavigate} size="sm">
          {t("home-page.seeOffer")}
        </ButtonCva>
      </div>
    </div>
  );
};
