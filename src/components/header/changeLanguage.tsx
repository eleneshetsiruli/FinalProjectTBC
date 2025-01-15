import { pageEnums } from "@/pages/enums/pageEnums";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  const location = useLocation();
  const isHomePage = location.pathname === pageEnums.HOME;
  const commonClasses = `hover:text-foreground cursor-pointer focus:outline-none focus:ring-0 ${isHomePage ? "text-popover" : "text-muted"}`;
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className={commonClasses}>
          {t("home-page.lang_version")} <FontAwesomeIcon icon={faCaretDown} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className={commonClasses}
            onClick={() => {
              changeLanguage("en");
            }}
          >
            English
          </DropdownMenuItem>
          <DropdownMenuItem
            className={commonClasses}
            onClick={() => {
              changeLanguage("ka");
            }}
          >
            ქართული
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default LanguageSwitcher;
