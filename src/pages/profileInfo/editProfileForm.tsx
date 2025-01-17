import { useTranslation } from "react-i18next";
import { ProfileInput } from "./profileInput";

export const EditProfileForm = ({ updatedProfile, handleChange }: any) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      <ProfileInput
        name="full_name"
        label={t("profile-page.fullName")}
        value={updatedProfile?.full_name || ""}
        onChange={handleChange}
      />
      <ProfileInput
        name="last_name_en"
        label={t("profile-page.lastNameEn")}
        value={updatedProfile?.last_name_en || ""}
        onChange={handleChange}
      />
      <ProfileInput
        name="last_name_ka"
        label={t("profile-page.lastNameKa")}
        value={updatedProfile?.last_name_ka || ""}
        onChange={handleChange}
      />
      <ProfileInput
        name="telephone"
        label={t("profile-page.telephone")}
        value={updatedProfile?.telephone || ""}
        onChange={handleChange}
      />
    </div>
  );
};
