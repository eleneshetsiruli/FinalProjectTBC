import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { useTheme } from "@/hooks/useTheme";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useTranslation } from "react-i18next";

export const Theme = () => {
  const { t } = useTranslation();
  const [, setTheme] = useTheme();

  const commonClasses = `hover:text-foreground cursor-pointer focus:outline-none focus:ring-0 text-popover`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={commonClasses}>
        {t("home-page.theme")}
        <FontAwesomeIcon className="ml-1" icon={faCaretDown} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={commonClasses}
        >
          {t("home-page.dark")}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={commonClasses}
        >
          {t("home-page.light")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
