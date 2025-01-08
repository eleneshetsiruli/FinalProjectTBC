import { Country } from "./types";

export const TourTips = ({ country }: { country: Country }) => {
  const tips = [
    {
      title: "Transportation",
      text: `Use ${country?.name} efficient metro system or guided tours for day trips.`,
      styles: "bg-blue-50 border-l-4 border-blue-500 text-blue-600",
    },
    {
      title: "Packing List",
      text: "Comfortable shoes, a camera, a travel adapter, and weather-appropriate clothing.",
      styles: "bg-yellow-50 border-l-4 border-yellow-500 text-yellow-600",
    },
    {
      title: "Budget",
      text: `Plan for approximately ${country?.price}€ per person for 5 days, including accommodation, meals, and tours.`,
      styles: "bg-green-50 border-l-4 border-green-500 text-green-600",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        {country?.name} 5-Day Tour Tips
      </h1>
      {tips.map((tip, index) => (
        <div key={index} className={`p-4 mb-6 rounded-md ${tip.styles}`}>
          <h2 className="text-xl font-semibold mb-2">{tip.title}</h2>
          <p className="text-gray-700">{tip.text}</p>
        </div>
      ))}
    </div>
  );
};
