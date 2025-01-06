import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { UserMenuItemProps } from "./types";
import { useNavigate } from "react-router-dom";

export const UserMenuItem = ({ item, path, onClick }: UserMenuItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    navigate(path);
  };
  return (
    <DropdownMenuItem
      onClick={handleClick}
      className="hover:text-card focus:outline-none focus:ring-0"
    >
      {item}
    </DropdownMenuItem>
  );
};
