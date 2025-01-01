import Explore from "@/assets/ExploreEra.png";

interface LogoProps {
  size: string;
}

export const Logo = ({ size }: LogoProps) => {
  return <img className={size} src={Explore} alt="Explore Era Logo" />;
};
