import { OptionsComponentProps } from "../types";

export const OptionsComponent: React.FC<OptionsComponentProps> = ({
  title,
  result,
}) => {
  return (
    <div className="flex flex-col ">
      <h1 className="font-bold">{title}</h1>
      {result}
    </div>
  );
};
