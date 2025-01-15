import { LoginFormData, LoginFormProps } from "./interfaces";
import InputCva from "@/components/ui/cva/formField/input";
import { ParagrCva } from "@/components/ui/cva/paragraph";

import { useFormContext } from "react-hook-form";
import { InputLabelBox } from "../../components/ui/inputLabelBox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const methods = useFormContext<LoginFormData>();

  return (
    <form
      className="flex flex-col gap-5 "
      onSubmit={methods.handleSubmit(onSubmit)}
    >
      <InputLabelBox>
        <Label>Email</Label>
        <InputCva
          placeholder="Enter your email address"
          type="email"
          {...methods.register("email")}
        />
        {methods.formState.errors.email && (
          <ParagrCva>{methods.formState.errors.email.message}</ParagrCva>
        )}
      </InputLabelBox>

      <InputLabelBox>
        <Label>Password</Label>
        <InputCva
          placeholder="Enter your password"
          {...methods.register("password")}
          type="password"
        />
        {methods.formState.errors.password && (
          <ParagrCva>{methods.formState.errors.password.message}</ParagrCva>
        )}
      </InputLabelBox>

      <Button type="submit">Continue</Button>
    </form>
  );
};

export default LoginForm;
