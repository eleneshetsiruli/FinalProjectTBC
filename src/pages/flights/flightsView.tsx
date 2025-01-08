import { Background } from "./background";
import { CalendarForm } from "./calendar";
import { OptionsComponent } from "./options";
import { ComboboxDemo } from "./options/combobox";
import { Passenger } from "./passenger";
import { countryList } from "./staticData";

export const FlightsView: React.FC = () => {
  return (
    <Background>
      <OptionsComponent
        title="TAKE OFF"
        result={<ComboboxDemo select="choose" list={countryList} />}
      />
      <CalendarForm label="DEPARTURE" />
      <CalendarForm label="ARRIVE" />
      <Passenger />
    </Background>
  );
};
