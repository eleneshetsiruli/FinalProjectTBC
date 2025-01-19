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

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const commonClasses =
    "hover:text-foreground cursor-pointer focus:outline-none focus:ring-0 text-popover";
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
