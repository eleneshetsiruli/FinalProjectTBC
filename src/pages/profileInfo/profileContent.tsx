import { useTranslation } from "react-i18next";
import { ProfileContentProps } from "./types";

const ProfileDetail = ({ label, value }: { label: string; value: string }) => (
  <div className="space-y-2">
    <h2 className="text-lg">
      {label}: {value}
    </h2>
  </div>
);

export const ProfileContent = ({ profile }: ProfileContentProps) => {
  const { t } = useTranslation();
  if (!profile) return <p>No profile available</p>;

  const profileFields = [
    { label: t("profile-page.username"), value: profile.username },
    { label: t("profile-page.fullNameEn"), value: profile.full_name_en },
    { label: t("profile-page.fullNameKa"), value: profile.full_name_ka },
    { label: t("profile-page.lastNameEn"), value: profile.last_name_en },
    { label: t("profile-page.lastNameKa"), value: profile.last_name_ka },
    { label: t("profile-page.telephone"), value: profile.telephone },
  ];

  return (
    <div className="space-y-2">
      {profileFields.map(({ label, value }) => (
        <ProfileDetail key={label} label={label} value={value} />
      ))}
    </div>
  );
};
