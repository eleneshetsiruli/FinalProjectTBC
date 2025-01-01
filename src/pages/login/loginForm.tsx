import { LabelCva } from "@/components/ui/cva/formField/label";
import { LoginFormData, LoginFormProps } from "./interfaces";
import InputCva from "@/components/ui/cva/formField/input";
import { ParagrCva } from "@/components/ui/cva/paragraph";
import ButtonCva from "@/components/ui/cva/button";
import { useFormContext } from "react-hook-form";

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const methods = useFormContext<LoginFormData>();

  return (
    <form
      className="flex flex-col gap-5 "
      onSubmit={methods.handleSubmit(onSubmit)}
    >
      <div>
        <LabelCva>Email</LabelCva>
        <InputCva
          placeholder="Enter your email address"
          type="email"
          {...methods.register("email")}
        />
        {methods.formState.errors.email && (
          <ParagrCva>{methods.formState.errors.email.message}</ParagrCva>
        )}
      </div>

      <div>
        <LabelCva>Password</LabelCva>
        <InputCva
          placeholder="Enter your password"
          {...methods.register("password")}
          type="password"
        />
        {methods.formState.errors.password && (
          <ParagrCva>{methods.formState.errors.password.message}</ParagrCva>
        )}
      </div>

      <ButtonCva type="submit">Continue</ButtonCva>
    </form>
  );
};

export default LoginForm;
