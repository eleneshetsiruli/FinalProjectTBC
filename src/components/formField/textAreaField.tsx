import React from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TextareaFieldProps } from "./types";

const TextareaField: React.FC<TextareaFieldProps> = ({
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
    <Textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-2 border border-gray-300 rounded"
      rows={4}
      required={required}
    />
  </div>
);

export default TextareaField;
