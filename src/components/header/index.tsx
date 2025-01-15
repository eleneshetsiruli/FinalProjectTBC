import { User } from "@/assets/svgs";
import { Logo } from "./logo";
import { NavLinks } from "./navLinks";
import { useLocation } from "react-router-dom";
import LanguageSwitcher from "./changeLanguage";
import { Theme } from "./theme";
import { pageEnums } from "@/pages/enums/pageEnums";

export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === pageEnums.HOME;

  return (
    <div
      className={` h-[100px] flex items-center justify-around p-5 z-10 ${
        isHomePage ? "absolute w-full text-white " : ""
      }`}
    >
      <Logo size="lg:w-[182px] w-[100px] cursor-pointer" />
      <NavLinks />
      <Theme />
      <LanguageSwitcher />
      <User />
    </div>
  );
};
