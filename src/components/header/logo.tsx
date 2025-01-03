import Explore from "@/assets/ExploreEra.png";
import EraWhite from "@/assets/svgs/Erawhite.png";
import { useLocation } from "react-router-dom";
import { LogoProps } from "./types";

export const Logo = ({ size }: LogoProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <img
      className={size}
      src={isHomePage ? EraWhite : Explore}
      alt="Explore Era Logo"
    />
  );
};
