import { toast } from "@/hooks/useToast/use-toast";
import { Background } from "./background";
import { CalendarForm } from "./calendar";
import { OptionsComponent } from "./options";
import { ComboboxDemo } from "./options/combobox";
import { Passenger } from "./passenger";
import { countryList } from "./staticData";
import { useState } from "react";
import { flightRequestSchema } from "./zod";
import { useTranslation } from "react-i18next";

const FlightsView: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [departureDate, setDepartureDate] = useState<string>("");
  const [arrivalDate, setArrivalDate] = useState<string>("");
  const [pessengers, setPessengers] = useState<string>("");
  const { t } = useTranslation();

  const handleSubmit = () => {
    const result = flightRequestSchema.safeParse({
      selectedCountry,
      departureDate,
      arrivalDate,
      pessengers,
    });

    if (!result.success) {
      const errors = result.error.errors;
      errors.forEach((error) =>
        toast({
          title: error.message,
          variant: "destructive",
        })
      );
      return;
    }

    toast({
      title: "Your request is sent. Please wait for feedback on email.",
      variant: "success",
    });

    setSelectedCountry("");
    setDepartureDate("");
    setArrivalDate("");
    setPessengers("");
  };

  const translatedList = countryList.map((country) => ({
    value: country.value,
    label: t(`countries-page.countries.${country.value}`),
  }));

  return (
    <Background>
      <OptionsComponent
        title={t("flights-page.take")}
        result={
          <ComboboxDemo
            select={t("flights-page.choose")}
            list={translatedList}
            value={selectedCountry}
            onChange={setSelectedCountry}
          />
        }
      />
      <CalendarForm
        label={t("flights-page.departure")}
        value={departureDate}
        onChange={setDepartureDate}
      />
      <CalendarForm
        value={arrivalDate}
        onChange={setArrivalDate}
        label={t("flights-page.arrive")}
      />
      <Passenger value={pessengers} onChange={setPessengers} />
      <button
        onClick={handleSubmit}
        type="submit"
        className="bg-card rounded-sm p-2 self-auto mt-6 text-white text-sm hover:bg-gray-600"
      >
        {t("flights-page.request")}
      </button>
    </Background>
  );
};

export default FlightsView;
