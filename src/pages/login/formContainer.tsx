import { FormContainerProps } from "./interfaces";

export const FormContainer = ({ children }: FormContainerProps) => {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-background">
      {children}
    </div>
  );
};
