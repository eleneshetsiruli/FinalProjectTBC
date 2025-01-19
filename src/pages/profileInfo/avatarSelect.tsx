import React from "react";
import { AvatarSelectProps } from "./types";
import { useTranslation } from "react-i18next";
import { Label } from "@/components/ui/label";

export const AvatarSelect: React.FC<AvatarSelectProps> = ({
  value,
  onChange,
}) => {
  const { t } = useTranslation();
  return (
    <div>
      <Label htmlFor="avatar_url" className="block">
        {t("profile-page.select")}
      </Label>
      <select
        name="avatar_url"
        value={value}
        onChange={onChange}
        className="mt-1 p-2 border rounded"
      >
        <option value="">Select Avatar</option>
        <option value="https://api.dicebear.com/9.x/adventurer/svg?seed=Emery">
          Emery
        </option>
        <option value="https://api.dicebear.com/9.x/adventurer/svg?seed=Sawyer">
          Sara
        </option>
        <option value="https://api.dicebear.com/9.x/adventurer/svg?seed=Easton">
          Easton
        </option>
        <option value="https://api.dicebear.com/9.x/adventurer/svg?seed=Maria">
          Maria
        </option>
      </select>
    </div>
  );
};
