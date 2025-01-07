import { useForm, SubmitHandler } from "react-hook-form";
import ButtonCva from "@/components/ui/cva/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Label } from "@radix-ui/react-dropdown-menu";
import { IFormInput } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../zod";
import { ParagrCva } from "@/components/ui/cva/paragraph";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label>Your email address</Label>
        <Input type="email" className="w-[300px]" {...register("email")} />
        {errors.email && <ParagrCva>{errors.email.message}</ParagrCva>}
      </div>

      <div>
        <Label>Your question</Label>
        <Textarea className="w-[300px]" {...register("question")} />
        {errors.question && <ParagrCva>{errors.question.message}</ParagrCva>}
      </div>

      <ButtonCva size="l" type="submit">
        Send <FontAwesomeIcon className="ml-2" icon={faPaperPlane} />
      </ButtonCva>
    </form>
  );
};
