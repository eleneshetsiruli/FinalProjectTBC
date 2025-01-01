import { ReactNode } from "react";
import { SubmitHandler } from "react-hook-form";

export interface FormContainerProps {
  children: ReactNode;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginFormProps {
  onSubmit: SubmitHandler<LoginFormData>;
}

export interface InputLabelBoxProps {
  children: ReactNode;
}
