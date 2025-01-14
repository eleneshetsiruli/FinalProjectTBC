import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PassengerProps } from "../types";
import { useTranslation } from "react-i18next";

export const Passenger: React.FC<PassengerProps> = ({ value, onChange }) => {
  const { t } = useTranslation();
  return (
    <div className="gap-1 flex flex-col">
      <h1 className="font-bold">{t("flights-page.passengers")}</h1>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-[240px]">
          <SelectValue placeholder={t("flights-page.passengers")} />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <SelectItem key={index + 1} value={(index + 1).toString()}>
              {index + 1}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
