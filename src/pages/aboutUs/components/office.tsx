import { ParagrCva } from "@/components/ui/cva/paragraph";

export const Office = () => {
  return (
    <>
      <h3>Our Office</h3>
      <ParagrCva color="secondary" size="wid300">
        Visit us at our headquarters:{" "}
        <strong className="text-card">ExploreEra</strong> Tours 123 Adventure
        Street, Travel City, Country 45678
      </ParagrCva>
    </>
  );
};
