import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { InputFieldProps } from "./types";

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  label,
  required,
}) => (
  <div>
    <Label htmlFor={id} className="block font-semibold mb-1 text-gray-600">
      {label}
    </Label>
    <Input
      type="text"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-2 border border-gray-300 rounded"
      required={required}
    />
  </div>
);

export default InputField;
