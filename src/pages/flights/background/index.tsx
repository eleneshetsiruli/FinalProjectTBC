import backgroundImage from "@/assets/svgs/flight.webp";
import { BackgroundProps } from "../types";

export const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      className=" lg:flex-row bg-cover bg-center min-h-screen flex flex-col items-center justify-center gap-7"
    >
      {children}
    </div>
  );
};
