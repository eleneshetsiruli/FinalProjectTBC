import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FileInputFieldProps } from "./types";

const FileInputField: React.FC<FileInputFieldProps> = ({
  id,
  name,
  onChange,
  label,
  required,
}) => (
  <div>
    <Label htmlFor={id} className="block font-semibold mb-1 text-gray-600">
      {label}
    </Label>
    <Input
      type="file"
      id={id}
      name={name}
      onChange={onChange}
      className="w-full p-2 border border-gray-300 rounded"
      required={required}
    />
  </div>
);

export default FileInputField;
