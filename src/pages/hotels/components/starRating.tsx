import { StarRatingProps } from "../types";

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={index < Number(rating) ? "#FB923C" : "#E5E7EB"}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 2.5l2.917 5.908 6.524.95-4.721 4.607 1.113 6.495-5.833-3.066-5.833 3.066 1.113-6.495-4.721-4.607 6.524-.95L11.48 2.5z"
          />
        </svg>
      ))}
      <span className="ml-2 text-gray-600 text-sm">{rating} / 5</span>
    </div>
  );
};
