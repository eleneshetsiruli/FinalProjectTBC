import { toast } from "@/hooks/useToast/use-toast";
import { Background } from "./background";
import { CalendarForm } from "./calendar";
import { OptionsComponent } from "./options";
import { ComboboxDemo } from "./options/combobox";
import { Passenger } from "./passenger";
import { countryList } from "./staticData";
import { useState } from "react";
import { flightRequestSchema } from "./zod";

export const FlightsView: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [departureDate, setDepartureDate] = useState<string>("");
  const [arrivalDate, setArrivalDate] = useState<string>("");
  const [pessengers, setPessengers] = useState<string>("");

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

  return (
    <Background>
      <OptionsComponent
        title="TAKE OFF"
        result={
          <ComboboxDemo
            select="choose"
            list={countryList}
            value={selectedCountry}
            onChange={setSelectedCountry}
          />
        }
      />
      <CalendarForm
        label="DEPARTURE"
        value={departureDate}
        onChange={setDepartureDate}
      />
      <CalendarForm
        value={arrivalDate}
        onChange={setArrivalDate}
        label="ARRIVE"
      />
      <Passenger value={pessengers} onChange={setPessengers} />
      <button
        onClick={handleSubmit}
        type="submit"
        className="bg-card rounded-sm p-2 self-auto mt-6 text-white text-sm hover:bg-gray-600"
      >
        REQUEST
      </button>
    </Background>
  );
};
