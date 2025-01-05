import { CountriesList } from "./countries/countriesList";
import { Cover } from "./cover";

export default function HomeLayOut() {
  return (
    <div>
      <Cover />
      <CountriesList />
    </div>
  );
}
