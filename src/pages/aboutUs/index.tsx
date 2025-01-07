import { Emails } from "./components/emails";
import { AboutParagrap } from "./components/aboutParagrap";
import { Phones } from "./components/phones";
import { Office } from "./components/office";
import { SocMedia } from "./components/socMedia";
import { ContactForm } from "./components/contactForm";
import { BusinessHours } from "./components/businessHours";

export const AboutUsView = () => {
  return (
    <div className="flex flex-col  gap-10 lg:m-10 m-2 ">
      <AboutParagrap />
      <Emails />
      <Phones />
      <SocMedia />
      <Office />
      <ContactForm />
      <BusinessHours />
    </div>
  );
};
