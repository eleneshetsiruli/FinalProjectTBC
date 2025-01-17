import EraWhite from "@/assets/svgs/Erawhite.png";
import { useNavigate } from "react-router-dom";
import { LogoProps } from "./types";
import { pageEnums } from "@/pages/enums/pageEnums";

export const Logo = ({ size }: LogoProps) => {
  const navigate = useNavigate();

  const handelGoHome = () => {
    navigate(pageEnums.HOME);
  };

  return (
    <img
      onClick={handelGoHome}
      className={size}
      src={EraWhite}
      alt="Explore Era Logo"
    />
  );
};
