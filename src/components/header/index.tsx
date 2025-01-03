import { User } from "@/assets/svgs";
import { Logo } from "./logo";
import { NavLinks } from "./navLinks";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div
      className={`h-[50px] flex items-center justify-around   ${
        isHomePage ? "absolute w-full text-white" : ""
      }`}
    >
      <Logo size="lg:w-[182px] w-[100px] cursor-pointer" />
      <NavLinks />
      <User />
    </div>
  );
};
