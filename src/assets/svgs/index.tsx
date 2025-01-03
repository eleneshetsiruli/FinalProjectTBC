import { UserMenuItem } from "@/components/header/userMenuItem";
import { pageEnums } from "@/pages/enums/pageEnums";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

export const User = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <svg
          className="w-3 lg:w-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="#FF6700"
            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
          />
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-2 cursor-pointer ">
        <DropdownMenuSeparator />
        <UserMenuItem item="Sign in" path={pageEnums.LOGIN} />
        <UserMenuItem item="Sign up" path={pageEnums.SIGNUP} />
        <UserMenuItem item="Sign out" path={pageEnums.HOME} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
