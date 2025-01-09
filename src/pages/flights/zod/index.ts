import { z } from "zod";

export const flightRequestSchema = z.object({
  selectedCountry: z.string().min(1, "Country is required"),
  departureDate: z.string().min(1, "Departure date is required"),
  arrivalDate: z.string().min(1, "Arrival date is required"),
  pessengers: z.string().min(1, "Passengers count is required"),
});
