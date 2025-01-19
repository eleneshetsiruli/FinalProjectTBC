import { useTranslation } from "react-i18next";
import { ProfileContentProps } from "./types";

const ProfileDetail = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-white p-4 rounded-lg shadow-md space-y-1">
    <h2 className="text-lg font-semibold text-orange-500">{label}</h2>
    <p className="text-md text-gray-500">{value || "N/A"}</p>
  </div>
);

export const ProfileContent = ({ profile }: ProfileContentProps) => {
  const { t } = useTranslation();
  if (!profile)
    return <p className="text-center text-gray-500">No profile available</p>;

  const profileFields = [
    { label: t("profile-page.username"), value: profile.username },
    { label: t("profile-page.fullName"), value: profile.full_name },
    { label: t("profile-page.lastNameEn"), value: profile.last_name_en },
    { label: t("profile-page.lastNameKa"), value: profile.last_name_ka },
    { label: t("profile-page.telephone"), value: profile.telephone },
  ];

  return (
    <div className="space-y-6 p-6 max-w-2xl mx-auto">
      {profileFields.map(({ label, value }) => (
        <ProfileDetail key={label} label={label} value={value} />
      ))}
    </div>
  );
};
