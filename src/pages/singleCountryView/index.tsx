import useFetchCountry from "@/api/query/hooks/useSingleCountry";
import { useParams } from "react-router-dom";
import { TourTips } from "./tourTips";

export const SingleCountryView = () => {
  const { id } = useParams();

  if (!id) {
    return <div>Country ID is missing</div>;
  }
  const { country } = useFetchCountry(id);
  const tours = country?.description_en
    ?.split(".")
    .filter((item: string) => item.trim() !== "");

  return (
    <div className="flex flex-col items-center gap-5">
      <img
        className="w-full h-64 object-cover rounded-lg shadow-lg "
        src={country?.image}
        alt={country?.name}
      />
      <ul className="space-y-4 w-full max-w-xl">
        {tours?.map((day: string, index: string) => (
          <li
            key={index}
            className="flex items-center space-x-3 p-4 bg-white shadow-md rounded-md border-l-4 border-blue-500"
          >
            <div className="text-xl font-semibold text-blue-600">{`Day ${index + 1}:`}</div>
            <p className="text-gray-700 text-lg">{day.trim()}</p>
          </li>
        ))}
      </ul>
      <TourTips country={country} />
    </div>
  );
};
