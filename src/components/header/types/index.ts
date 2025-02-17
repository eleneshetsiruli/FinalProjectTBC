import React from "react";

export interface SingleLinkProps {
  title: string;
  goTo: string;
}

export interface LogoProps {
  size: string;
}

export interface UserMenuItemProps {
  item: string | React.ReactNode;
  path: string;
  onClick?: () => void;
}
