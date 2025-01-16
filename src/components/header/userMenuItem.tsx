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
      className="text-orange-500 focus:outline-none focus:ring-0  hover:text-gray-700 "
    >
      {item}
    </DropdownMenuItem>
  );
};
