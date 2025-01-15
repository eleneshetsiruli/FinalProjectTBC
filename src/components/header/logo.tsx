import ExploreEra from "@/assets/ExploreEra.png";
import EraWhite from "@/assets/svgs/Erawhite.png";
import { useLocation, useNavigate } from "react-router-dom";
import { LogoProps } from "./types";
import { pageEnums } from "@/pages/enums/pageEnums";

export const Logo = ({ size }: LogoProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === pageEnums.HOME;
  const navigate = useNavigate();

  const handelGoHome = () => {
    navigate(pageEnums.HOME);
  };

  return (
    <img
      onClick={handelGoHome}
      className={size}
      src={isHomePage ? EraWhite : ExploreEra}
      alt="Explore Era Logo"
    />
  );
};
