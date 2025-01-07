import ContentBox from "./contentBox";

export const Phones = () => {
  const phones = [
    { label: "Call us at:", result: "+1 (555) 123-4567" },
    {
      label: "For bookings  inquiries:",
      result: "+1 (555) 1235-4567",
    },
  ];
  return <ContentBox title="Phones" contentItems={phones} />;
};
