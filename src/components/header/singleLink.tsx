import { NavLink } from "react-router-dom";
import { SingleLinkProps } from "./types";

export const SingleLink = ({ title, goTo }: SingleLinkProps) => {
  return (
    <NavLink className="hover:text-orange-500" to={goTo}>
      {title}
    </NavLink>
  );
};
