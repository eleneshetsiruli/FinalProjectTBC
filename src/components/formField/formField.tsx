import { FormFieldProps } from "@/pages/signUp/interfaces";
import { FieldError } from "react-hook-form";
import { InputLabelBox } from "../ui/inputLabelBox";
import { LabelCva } from "../ui/cva/formField/label";
import InputCva from "../ui/cva/formField/input";
import { ParagrCva } from "../ui/cva/paragraph";

const FormField = ({
  label,
  name,
  type = "text",
  register,
  errors,
}: FormFieldProps) => (
  <InputLabelBox>
    <LabelCva>{label}</LabelCva>
    <InputCva
      placeholder={`Enter ${label}`}
      id={name}
      type={type}
      {...register(name, { required: `${label} is required` })}
    />
    {errors[name] && (
      <ParagrCva>{(errors[name] as FieldError)?.message}</ParagrCva>
    )}
  </InputLabelBox>
);

export default FormField;
