import React from "react";
import { AvatarSelectProps } from "./types";
import { useTranslation } from "react-i18next";

export const AvatarSelect: React.FC<AvatarSelectProps> = ({
  value,
  onChange,
}) => {
  const { t } = useTranslation();
  return (
    <div>
      <label htmlFor="avatar_url" className="block">
        {t("profile-page.select")}
      </label>
      <select
        name="avatar_url"
        value={value}
        onChange={onChange}
        className="mt-1 p-2 border rounded"
      >
        <option value="">Select Avatar</option>
        <option value="https://api.dicebear.com/9.x/dylan/svg?seed=Kingston">
          Kingston
        </option>
        <option value="https://api.dicebear.com/9.x/dylan/svg?seed=Eden">
          Eden
        </option>
        <option value="https://api.dicebear.com/9.x/dylan/svg?seed=Aiden">
          Aiden
        </option>
        <option value="https://api.dicebear.com/9.x/avataaars/svg?seed=Jocelyn">
          Jocelyn
        </option>
      </select>
    </div>
  );
};
