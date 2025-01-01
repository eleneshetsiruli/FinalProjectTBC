import { FormContainerProps } from "../../pages/login/interfaces";

export const FormContainer = ({ children }: FormContainerProps) => {
  return (
    <div className=" h-100vh flex justify-center items-center bg-background ">
      {children}
    </div>
  );
};
