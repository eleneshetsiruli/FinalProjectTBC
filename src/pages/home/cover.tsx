import cover from "@/assets/svgs/cover.png";
import ButtonCva from "@/components/ui/cva/button";
import { ParagrCva } from "@/components/ui/cva/paragraph";

export const Cover = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${cover})`,
      }}
    >
      <div className="text-center lg:w-[150px] absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ParagrCva size="lg" color="def">
          Visit Mountains In
        </ParagrCva>
        <ParagrCva size="lg" color="def">
          ITALY
        </ParagrCva>
        <ButtonCva size="sm">See offer</ButtonCva>
      </div>
    </div>
  );
};
