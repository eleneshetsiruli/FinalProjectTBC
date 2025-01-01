import { User } from "@/assets/svgs";
import { Logo } from "./logo";
import { NavLinks } from "./navLinks";

export const Header = () => {
  return (
    <div className="bg-[#e4e3e3] h-[80px] flex items-center justify-around">
      <Logo size="w-[182px]" />
      <NavLinks />
      <User />
    </div>
  );
};
