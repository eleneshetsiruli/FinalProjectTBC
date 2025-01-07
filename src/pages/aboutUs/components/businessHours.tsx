import ContentBox from "./contentBox";

export const BusinessHours = () => {
  const hours = [
    { label: "Monday to Friday:", result: "9:00 AM - 6:00 PM" },
    { label: "Saturday:", result: "10:00 AM - 4:00 PM" },
    { label: "Sunday:", result: "Closed" },
  ];
  return <ContentBox title="Business Hours" contentItems={hours} />;
};
