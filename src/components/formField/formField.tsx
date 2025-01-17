import { FormFieldProps } from "@/pages/signUp/interfaces";
import { FieldError } from "react-hook-form";
import { InputLabelBox } from "../ui/inputLabelBox";
import InputCva from "../ui/cva/formField/input";
import { ParagrCva } from "../ui/cva/paragraph";
import { Label } from "../ui/label";
import { useTranslation } from "react-i18next";

const FormField = ({
  label,
  name,
  type = "text",
  register,
  errors,
}: FormFieldProps) => {
  const { t } = useTranslation();
  return (
    <InputLabelBox>
      <Label>{label}</Label>
      <InputCva
        placeholder={`${t("auth-page.enter")} ${label}`}
        id={name}
        type={type}
        {...register(name, { required: `${label} is required` })}
      />
      {errors[name] && (
        <ParagrCva>{(errors[name] as FieldError)?.message}</ParagrCva>
      )}
    </InputLabelBox>
  );
};

export default FormField;
