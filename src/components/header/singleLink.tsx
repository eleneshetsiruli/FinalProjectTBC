import { NavLink, useLocation } from "react-router-dom";
import { SingleLinkProps } from "./types";
import { pageEnums } from "@/pages/enums/pageEnums";

export const SingleLink = ({ title, goTo }: SingleLinkProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === pageEnums.HOME;

  return (
    <NavLink
      to={goTo}
      className={({ isActive }) =>
        `hover:text-card ${
          isActive
            ? "text-orange-600"
            : isHomePage
              ? "text-popover"
              : "text-popover"
        }`
      }
    >
      {title}
    </NavLink>
  );
};
