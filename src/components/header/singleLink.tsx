import { NavLink, useLocation } from "react-router-dom";
import { SingleLinkProps } from "./types";
import { pageEnums } from "@/pages/enums/pageEnums";

export const SingleLink = ({ title, goTo }: SingleLinkProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === pageEnums.HOME;
  return (
    <NavLink
      className={`hover:text-orange-500 ${isHomePage ? "text-popover" : "text-muted"} `}
      to={goTo}
    >
      {title}
    </NavLink>
  );
};
