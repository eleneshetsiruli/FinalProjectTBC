import { PropsProfile } from "./types";

export const ProfileInput = ({
  name,
  label,
  value,
  onChange,
}: PropsProfile) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="input w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>
);
