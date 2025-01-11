import { ParagrCva } from "@/components/ui/cva/paragraph";
import { FooterMinBox } from "../footerMinBox";
import { Link } from "react-router-dom";
import { pageEnums } from "@/pages/enums/pageEnums";

export const MiddleBox = () => {
  const links = [
    { label: "Home", to: pageEnums.HOME },
    { label: "Login", to: pageEnums.LOGIN },
    { label: "Sign Up", to: pageEnums.SIGNUP },
    { label: "About Us", to: pageEnums.ABOUT },
    { label: "Blogs", to: pageEnums.BLOGS },
  ];

  return (
    <FooterMinBox>
      <ParagrCva size="text30" color="secondary">
        Links
      </ParagrCva>

      <div className="flex flex-col gap-2">
        {links.map(({ label, to }, i) => (
          <Link key={i} to={to}>
            <ParagrCva color="secondary">{label}</ParagrCva>
          </Link>
        ))}
      </div>
    </FooterMinBox>
  );
};
