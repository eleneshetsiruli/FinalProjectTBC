import { useLogout } from "@/api/query/hooks/useAuth";
import { UserMenuItem } from "@/components/header/userMenuItem";
import { pageEnums } from "@/pages/enums/pageEnums";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Dicebear } from "./diceBear";
import { useTranslation } from "react-i18next";

export const User = () => {
  const logout = useLogout();
  const userSession = localStorage.getItem("user");
  const parsedSession = userSession ? JSON.parse(userSession) : null;
  const userEmail = parsedSession?.user?.email;
  const { t } = useTranslation();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {userSession ? (
          <div className="flex items-center gap-2 hover:text-card ">
            <h1 className="text-orange-500">{userEmail?.split("@")[0]}</h1>
            <Dicebear />
          </div>
        ) : (
          <FontAwesomeIcon
            className={`${!userSession ? `text-card` : ""}h-5 w-5  `}
            icon={faUser}
          />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-2 cursor-pointer ">
        <DropdownMenuSeparator />

        {!userSession ? (
          <>
            <UserMenuItem item={t("home-page.signIn")} path={pageEnums.LOGIN} />
            <UserMenuItem
              item={t("home-page.signUp")}
              path={pageEnums.SIGNUP}
            />
          </>
        ) : (
          <>
            <UserMenuItem
              onClick={logout}
              item={t("home-page.signOut")}
              path={pageEnums.HOME}
            />
            <UserMenuItem
              item={t("home-page.profile")}
              path={pageEnums.PROFILE}
            />
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
