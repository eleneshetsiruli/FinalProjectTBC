import { useForm, SubmitHandler } from "react-hook-form";
import ButtonCva from "@/components/ui/cva/button";
import CardCva from "@/components/ui/cva/card";
import { ParagrCva } from "@/components/ui/cva/paragraph";
import { FormContainer } from "@/components/ui/formContainer";
import { SignUpFormInputs } from "./interfaces";
import FormField from "@/components/formField/formField";

export const SignUpView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>();

  const onSubmit: SubmitHandler<SignUpFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <FormContainer>
      <CardCva size="md" padding="md" gap="md">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <FormField
            label="First name"
            name="firstName"
            register={register}
            errors={errors}
          />
          <FormField
            label="Last name"
            name="lastName"
            register={register}
            errors={errors}
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            register={register}
            errors={errors}
          />
          <FormField
            label="Password"
            name="password"
            type="password"
            register={register}
            errors={errors}
          />
          <ButtonCva type="submit">Register</ButtonCva>
        </form>
        <ParagrCva color="secondary" size="sm">
          By creating an account, you agree with our
          <span className="text-orange-600">Terms & conditions</span> and
          <span className="text-orange-600"> Privacy policy</span>
        </ParagrCva>
      </CardCva>
    </FormContainer>
  );
};
