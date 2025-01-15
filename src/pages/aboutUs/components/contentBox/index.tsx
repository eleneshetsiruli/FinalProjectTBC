import { ContentBoxProps } from "../../types";

const ContentBox: React.FC<ContentBoxProps> = ({ title, contentItems }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-popover-foreground">{title}</h3>
      {contentItems.map((item, index) => (
        <div key={index} className="flex lg:gap-2">
          <p className="text-muted font-bold italic">{item.label}</p>
          <p className="text-popover-foreground">{item.result}</p>
        </div>
      ))}
    </div>
  );
};

export default ContentBox;
