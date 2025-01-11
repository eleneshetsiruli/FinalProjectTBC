import { ProfileContentProps } from "./types";

const ProfileDetail = ({ label, value }: { label: string; value: string }) => (
  <div className="space-y-2">
    <h2 className="text-lg">
      {label}: {value}
    </h2>
  </div>
);

export const ProfileContent = ({ profile }: ProfileContentProps) => {
  if (!profile) return <p>No profile available</p>;
  const profileFields = [
    { label: "Username", value: profile.username },
    { label: "Full Name (English)", value: profile.full_name_en },
    { label: "Full Name (Georgian)", value: profile.full_name_ka },
    { label: "Last Name (English)", value: profile.last_name_en },
    { label: "Last Name (Georgian)", value: profile.last_name_ka },
    { label: "Telephone", value: profile.telephone },
  ];

  return (
    <div className="space-y-2">
      {profileFields.map(({ label, value }) => (
        <ProfileDetail key={label} label={label} value={value} />
      ))}
    </div>
  );
};
