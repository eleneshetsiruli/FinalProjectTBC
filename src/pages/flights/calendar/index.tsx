import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarFormProps } from "../types";
import { useTranslation } from "react-i18next";

export function CalendarForm({ label, value, onChange }: CalendarFormProps) {
  const form = useForm();
  const { t } = useTranslation();
  return (
    <Form {...form}>
      <form className="space-y-8">
        <FormField
          control={form.control}
          name="dob"
          render={() => (
            <FormItem className="flex flex-col">
              <FormLabel className="font-bold">{label}</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !value && "text-muted-foreground"
                      )}
                    >
                      {value ? (
                        format(new Date(value), "PPP")
                      ) : (
                        <span>{t("flights-page.date")}</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={value ? new Date(value) : undefined}
                    onSelect={(date) =>
                      onChange(date ? date.toISOString() : "")
                    }
                    disabled={(date) =>
                      date < new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
