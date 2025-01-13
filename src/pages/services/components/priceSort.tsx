import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";

interface PriceRangeProps {
  onSortChange: (sortOrder: string) => void;
}

export function PriceRange({ onSortChange }: PriceRangeProps) {
  const { t } = useTranslation();

  return (
    <Select onValueChange={onSortChange}>
      <SelectTrigger className="w-[180px] h-12 text-blue-600">
        <SelectValue placeholder={t("countries-page.select")} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="low-to-high">{t("countries-page.low")}</SelectItem>
          <SelectItem value="high-to-low">
            {t("countries-page.hight")}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
