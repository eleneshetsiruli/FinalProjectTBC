import ContentBox from "./contentBox";

export const SocMedia = () => {
  const content = [
    { label: "Facebook:", result: "ExploreEra on Facebook" },
    { label: "Instagram:", result: "@ExploreEra" },
    { label: "Twitter:", result: "Twitter: @ExploreEraTours" },
  ];
  return <ContentBox title="SocMedia" contentItems={content} />;
};
