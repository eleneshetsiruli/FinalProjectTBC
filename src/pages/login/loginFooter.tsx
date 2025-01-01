import { ParagrCva } from "@/components/ui/cva/paragraph";
import { Link } from "react-router-dom";

export const LoginFooter = () => {
  return (
    <div className="flex justify-between items-center">
      <ParagrCva size="sm" color="secondary">
        Don't Have an Account?
      </ParagrCva>

      <Link className="hover:underline text-[#FF6700]" to={"#"}>
        Sign Up
      </Link>
    </div>
  );
};
