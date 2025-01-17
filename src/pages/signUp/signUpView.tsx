// import { useForm, SubmitHandler } from "react-hook-form";
// import CardCva from "@/components/ui/cva/card";
// import { ParagrCva } from "@/components/ui/cva/paragraph";
// import { FormContainer } from "@/components/ui/formContainer";
// import { SignUpFormInputs } from "./interfaces";
// import FormField from "@/components/formField/formField";
// import { useSignUp } from "@/api/query/hooks/useSignUp";
// import { Button } from "@/components/ui/button";
// import { useTranslation } from "react-i18next";
// import { useNavigate } from "react-router-dom";
// import { pageEnums } from "../enums/pageEnums";

// export const SignUpView = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<SignUpFormInputs>();
//   const { t } = useTranslation();
//   const navigate = useNavigate();
//   const onSubmit: SubmitHandler<SignUpFormInputs> = (data) => {
//     mutation.mutate(data);
//   };

//   const handleGoHome = () => {
//     navigate(pageEnums.HOME);
//   };

//   const mutation = useSignUp();

//   return (
//     <FormContainer>
//       <CardCva size="md" padding="md" gap="md">
//         <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
//           <FormField
//             label={t("auth-page.first")}
//             name="firstName"
//             register={register}
//             errors={errors}
//           />
//           <FormField
//             label={t("auth-page.last")}
//             name="lastName"
//             register={register}
//             errors={errors}
//           />
//           <FormField
//             label={t("auth-page.email")}
//             name="email"
//             type="email"
//             register={register}
//             errors={errors}
//           />
//           <FormField
//             label={t("auth-page.password")}
//             name="password"
//             type="password"
//             register={register}
//             errors={errors}
//           />
//           <Button
//             onClick={handleGoHome}
//             className="bg-card text-white hover:text-popover"
//             type="submit"
//           >
//             {t("auth-page.register")}
//           </Button>
//         </form>

//         <ParagrCva color="secondary" size="sm">
//           {t("auth-page.by")}
//           <span className="text-orange-600">
//             <span className="mx-1">{t("auth-page.terms")}</span>
//           </span>
//           {t("auth-page.and")}
//           <span className="text-orange-600 mx-1">{t("auth-page.privacy")}</span>
//           .
//         </ParagrCva>
//       </CardCva>
//     </FormContainer>
//   );
// };

import { useForm, SubmitHandler } from "react-hook-form";
import CardCva from "@/components/ui/cva/card";
import { ParagrCva } from "@/components/ui/cva/paragraph";
import { FormContainer } from "@/components/ui/formContainer";
import { SignUpFormInputs } from "./interfaces";
import FormField from "@/components/formField/formField";
import { useSignUp } from "@/api/query/hooks/useSignUp";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { pageEnums } from "../enums/pageEnums";

export const SignUpView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const mutation = useSignUp();

  const onSubmit: SubmitHandler<SignUpFormInputs> = (data) => {
    mutation.mutate(data);
  };

  if (mutation.isSuccess) {
    setTimeout(() => {
      navigate(pageEnums.LOGIN);
    }, 1000);
  }

  return (
    <FormContainer>
      <CardCva size="md" padding="md" gap="md">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <FormField
            label={t("auth-page.first")}
            name="firstName"
            register={register}
            errors={errors}
          />
          <FormField
            label={t("auth-page.last")}
            name="lastName"
            register={register}
            errors={errors}
          />
          <FormField
            label={t("auth-page.email")}
            name="email"
            type="email"
            register={register}
            errors={errors}
          />
          <FormField
            label={t("auth-page.password")}
            name="password"
            type="password"
            register={register}
            errors={errors}
          />
          <Button
            className="bg-card text-white hover:text-popover"
            type="submit"
          >
            {t("auth-page.register")}
          </Button>
        </form>

        <ParagrCva color="secondary" size="sm">
          {t("auth-page.by")}
          <span className="text-orange-600">
            <span className="mx-1">{t("auth-page.terms")}</span>
          </span>
          {t("auth-page.and")}
          <span className="text-orange-600 mx-1">{t("auth-page.privacy")}</span>
          .
        </ParagrCva>
      </CardCva>
    </FormContainer>
  );
};
