import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormContainer } from "../../components/ui/formContainer";
import CardCva from "@/components/ui/cva/card";
import { LoginFormData } from "./interfaces";
import { LoginFooter } from "./loginFooter";
import { loginSchema } from "./zod";
import LoginForm from "./loginForm";
import { useLogin } from "@/api/query/hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { pageEnums } from "../enums/pageEnums";

export const LoginView = () => {
  const methods = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();
  const mutation = useLogin();

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    mutation.mutate(data, {
      onSuccess: () => {
        navigate(pageEnums.HOME);
      },
    });
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
