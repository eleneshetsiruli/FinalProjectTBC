import { CountryImgProps } from "../types";

export const CountryImg = ({ src }: CountryImgProps) => {
  return <img className="w-[320px] h-[250px] rounded-xl" src={src} alt="img" />;
};
