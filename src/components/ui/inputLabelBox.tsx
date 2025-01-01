import { InputLabelBoxProps } from "../../pages/login/interfaces";

export const InputLabelBox: React.FC<InputLabelBoxProps> = ({ children }) => {
  return <div className="flex flex-col gap-1">{children}</div>;
};
