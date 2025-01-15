import { NavLink, useLocation } from "react-router-dom";
import { SingleLinkProps } from "./types";

export const SingleLink = ({ title, goTo }: SingleLinkProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <NavLink
      className={`hover:text-orange-500 ${isHomePage ? "text-popover" : "text-muted"} `}
      to={goTo}
    >
      {title}
    </NavLink>
  );
};
