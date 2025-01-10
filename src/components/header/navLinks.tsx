import { pageEnums } from "@/pages/enums/pageEnums";
import { SingleLink } from "./singleLink";

export const NavLinks = () => {
  return (
    <div className="lg:flex gap-16 hidden">
      <SingleLink title="HOME" goTo={pageEnums.HOME} />
      <SingleLink title="ABOUT US" goTo={pageEnums.ABOUT} />
      <SingleLink title="BLOGS" goTo={pageEnums.BLOGS} />
      <SingleLink title="OUR TOURS" goTo={pageEnums.SERVICES} />
      <SingleLink title="HOTELS" goTo={pageEnums.HOTELS} />
      <SingleLink title="FLIGHTS" goTo={pageEnums.FLIGHTS} />
    </div>
  );
};
