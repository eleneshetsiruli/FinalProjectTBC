import { Emails } from "./components/emails";
import { AboutParagrap } from "./components/aboutParagrap";
import { Phones } from "./components/phones";
import { Office } from "./components/office";
import { SocMedia } from "./components/socMedia";
import { ContactForm } from "./components/contactForm";
import { BusinessHours } from "./components/businessHours";
import MapComponent from "./components/map";

const AboutUsView = () => {
  return (
    <div className="flex flex-col  gap-10 lg:m-10 lg:p-8 m-2 ">
      <AboutParagrap />
      <Office />
      <MapComponent />
      <div className="flex flex-col gap-6 lg:justify-around ">
        <Emails />
        <SocMedia />
        <BusinessHours />
        <Phones />
      </div>
      <ContactForm />
    </div>
  );
};
export default AboutUsView;
