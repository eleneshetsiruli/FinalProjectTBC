import { useState } from "react";
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

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`h-[100px] flex items-center justify-around z-10 my-0   ${
        isHomePage ? "absolute w-full text-white" : " bg-gray-800 p-5"
      }`}
    >
      <Logo size="lg:w-[170px] w-[100px] cursor-pointer" />

      {/* Mobile Sidebar Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden text-white focus:outline-none"
      >
        ☰
      </button>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-9">
        <NavLinks />
        <Theme />
        <LanguageSwitcher />
        <User />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden space-x-3 fixed top-0 left-0 w-3/4 h-full bg-gray-800 text-white transition-transform ${
          isSidebarOpen
            ? "transform translate-x-0"
            : "transform -translate-x-full"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-white"
        >
          ✖
        </button>
        <div className="mt-20 space-y-5 ">
          <NavLinks />
          <div className="flex gap-3">
            <Theme />
            <LanguageSwitcher />
          </div>
          <User />
        </div>
      </div>
    </div>
  );
};
