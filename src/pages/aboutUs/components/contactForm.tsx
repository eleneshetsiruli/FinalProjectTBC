import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Label } from "@radix-ui/react-dropdown-menu";
import { IFormInput } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../zod";
import { ParagrCva } from "@/components/ui/cva/paragraph";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export const ContactForm = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = () => {
    reset();
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label className="text-popover-foreground mb-2">
          {t("about-page.yourEmail")}
        </Label>
        <Input
          type="email"
          className="w-[300px] border-muted"
          {...register("email")}
        />
        {errors.email && <ParagrCva>{errors.email.message}</ParagrCva>}
      </div>

      <div>
        <Label className="text-popover-foreground mb-2">
          {t("about-page.question")}
        </Label>
        <Textarea
          className="w-[300px] border-muted"
          {...register("question")}
        />
        {errors.question && <ParagrCva>{errors.question.message}</ParagrCva>}
      </div>

      <Button className="bg-popover lg:w-[23%] text-popover-foreground">
        {t("about-page.send")}
        <FontAwesomeIcon className="ml-2" icon={faPaperPlane} />
      </Button>
    </form>
  );
};
