import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormContainer } from "./formContainer";
import CardCva from "@/components/ui/cva/card";
import { LoginFormData } from "./interfaces";
import { LoginFooter } from "./loginFooter";

import { loginSchema } from "./zod";
import LoginForm from "./loginForm";

export const LoginView = () => {
  const methods = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log(data);
  };
  return (
    <FormContainer>
      <FormProvider {...methods}>
        <CardCva>
          <LoginForm onSubmit={onSubmit} />
          <LoginFooter />
        </CardCva>
      </FormProvider>
    </FormContainer>
  );
};
