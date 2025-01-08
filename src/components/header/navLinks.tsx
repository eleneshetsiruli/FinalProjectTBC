import { pageEnums } from "@/pages/enums/pageEnums";
import { SingleLink } from "./singleLink";

export const NavLinks = () => {
  return (
    <div className="lg:flex gap-16 hidden">
      <SingleLink title="Home" goTo={pageEnums.HOME} />
      <SingleLink title="About us" goTo={pageEnums.ABOUT} />
      <SingleLink title="Blogs" goTo={pageEnums.BLOGS} />
      <SingleLink title="Our Tours" goTo={pageEnums.SERVICES} />
      <SingleLink title="Our offers" goTo={pageEnums.OFFERS} />
    </div>
  );
};
