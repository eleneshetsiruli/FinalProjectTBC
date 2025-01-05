import { LeftBox } from "./leftBox";
import { MiddleBox } from "./middleBox";
import { RightBox } from "./rightBox";

export const Footer = () => {
  return (
    <div className="bg-[#e4e3e3] lg:flex-row mt-24  p-10 flex flex-col gap-7 lg:justify-around lg:items-baseline ">
      <LeftBox />
      <MiddleBox />
      <RightBox />
    </div>
  );
};
