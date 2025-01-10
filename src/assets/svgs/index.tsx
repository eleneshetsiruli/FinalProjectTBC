import { useAuth, useLogout } from "@/api/query/hooks/useAuth";
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

export const User = () => {
  const logout = useLogout();
  const { isAuthenticated, user } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {isAuthenticated ? (
          <div className="flex items-center gap-2 hover:text-card">
            <h1>{user?.user.email?.split("@")[0]}</h1>
            <Dicebear />
          </div>
        ) : (
          <FontAwesomeIcon
            className={`${isAuthenticated ? `text-card` : ""}h-5 w-5 `}
            icon={faUser}
          />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-2 cursor-pointer ">
        <DropdownMenuSeparator />

        {!isAuthenticated ? (
          <>
            <UserMenuItem item="Sign in" path={pageEnums.LOGIN} />
            <UserMenuItem item="Sign up" path={pageEnums.SIGNUP} />
          </>
        ) : (
          <>
            <UserMenuItem
              onClick={logout}
              item="Sign out"
              path={pageEnums.HOME}
            />
            <UserMenuItem item="Profile info" path={pageEnums.PROFILE} />
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
