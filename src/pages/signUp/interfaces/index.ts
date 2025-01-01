import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface SignUpFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface FormFieldProps {
  label: string;
  name: keyof SignUpFormInputs;
  type?: string;
  register: any;
  errors: FieldErrors<FieldValues>;
}
