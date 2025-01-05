import { ParagrCva } from "@/components/ui/cva/paragraph";
import { FooterMinBox } from "../footerMinBox";

export const RightBox = () => {
  const titles = ["exploreera@gmail.com", "555111222", "Subscribe news"];
  return (
    <FooterMinBox>
      <ParagrCva color="secondary" size="text30">
        Contact us
      </ParagrCva>
      {titles.map((title, i) => {
        return (
          <ParagrCva color="secondary" key={i}>
            {title}
          </ParagrCva>
        );
      })}
    </FooterMinBox>
  );
};
