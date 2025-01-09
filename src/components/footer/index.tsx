import { useLocation } from "react-router-dom";
import { LeftBox } from "./leftBox";
import { MiddleBox } from "./middleBox";
import { RightBox } from "./rightBox";
import { pageEnums } from "@/pages/enums/pageEnums";

export const Footer = () => {
  const location = useLocation();
  const isFlightsPage =
    location.pathname === pageEnums.FLIGHTS ||
    location.pathname === pageEnums.HOME;
  console.log(isFlightsPage);

  return (
    <div
      className={`bg-[#e4e3e3] lg:flex-row p-10 flex flex-col gap-7 lg:justify-around lg:items-baseline ${
        isFlightsPage ? "mt-0" : "mt-24"
      }`}
    >
      <LeftBox />
      <MiddleBox />
      <RightBox />
    </div>
  );
};
