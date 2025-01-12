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
  console.log(i18n.language);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          {t("home-page.lang_version")} <FontAwesomeIcon icon={faCaretDown} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="hover:text-card cursor-pointer"
            onClick={() => {
              changeLanguage("en");
            }}
          >
            English
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:text-card cursor-pointer"
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
