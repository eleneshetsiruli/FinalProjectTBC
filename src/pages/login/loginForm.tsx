import { LoginFormData, LoginFormProps } from "./interfaces";
import InputCva from "@/components/ui/cva/formField/input";
import { ParagrCva } from "@/components/ui/cva/paragraph";

import { useFormContext } from "react-hook-form";
import { InputLabelBox } from "../../components/ui/inputLabelBox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const methods = useFormContext<LoginFormData>();
  const { t } = useTranslation();

  return (
    <form
      className="flex flex-col gap-5 "
      onSubmit={methods.handleSubmit(onSubmit)}
    >
      <InputLabelBox>
        <Label className="mb-1">{t("auth-page.email")}</Label>
        <InputCva
          placeholder={t("auth-page.enterEmail")}
          type="email"
          {...methods.register("email")}
        />
        {methods.formState.errors.email && (
          <ParagrCva>{methods.formState.errors.email.message}</ParagrCva>
        )}
      </InputLabelBox>

      <InputLabelBox>
        <Label className="mb-1">{t("auth-page.password")}</Label>
        <InputCva
          placeholder={t("auth-page.enterP")}
          {...methods.register("password")}
          type="password"
        />
        {methods.formState.errors.password && (
          <ParagrCva>{methods.formState.errors.password.message}</ParagrCva>
        )}
      </InputLabelBox>

      <Button className="bg-card text-white hover:text-popover" type="submit">
        {t("auth-page.continiue")}
      </Button>
    </form>
  );
};

export default LoginForm;
