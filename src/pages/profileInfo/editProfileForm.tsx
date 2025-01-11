import { ProfileInput } from "./profileInput";

export const EditProfileForm = ({ updatedProfile, handleChange }: any) => (
  <div className="space-y-4">
    <ProfileInput
      name="full_name_en"
      label="Full Name (English)"
      value={updatedProfile?.full_name_en || ""}
      onChange={handleChange}
    />
    <ProfileInput
      name="full_name_ka"
      label="Full Name (Georgian)"
      value={updatedProfile?.full_name_ka || ""}
      onChange={handleChange}
    />
    <ProfileInput
      name="last_name_en"
      label="Last Name (English)"
      value={updatedProfile?.last_name_en || ""}
      onChange={handleChange}
    />
    <ProfileInput
      name="last_name_ka"
      label="Last Name (Georgian)"
      value={updatedProfile?.last_name_ka || ""}
      onChange={handleChange}
    />
    <ProfileInput
      name="telephone"
      label="Telephone"
      value={updatedProfile?.telephone || ""}
      onChange={handleChange}
    />
  </div>
);
