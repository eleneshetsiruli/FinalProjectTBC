import { ContentBoxProps } from "../../types";

const ContentBox: React.FC<ContentBoxProps> = ({ title, contentItems }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3>{title}</h3>
      {contentItems.map((item, index) => (
        <div key={index} className="flex lg:gap-2">
          <p className="text-card">{item.label}</p>
          <p>{item.result}</p>
        </div>
      ))}
    </div>
  );
};

export default ContentBox;
