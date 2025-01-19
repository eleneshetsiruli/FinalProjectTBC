import { Loading } from "../isLoading";
import { ProfileContainer } from "./profileContainer";
import { EditProfileForm } from "./editProfileForm";
import { ProfileContent } from "./profileContent";
import { useProfileEdit } from "@/api/query/hooks/useProfileAction";
import { useTranslation } from "react-i18next";
import { useProfile } from "@/api/query/hooks/useProfile";
import { Button } from "@/components/ui/button";

export const ProfileView = () => {
  const { data: profile, isLoading, refetch } = useProfile();
  const {
    isEditMode,
    setIsEditMode,
    updatedProfile,
    handleChange,
    handleSave,
  } = useProfileEdit(profile);
  const { t } = useTranslation();

  const handleSaveAndRefetch = async () => {
    if (!updatedProfile) return;
    await handleSave();
    refetch();
  };

  const RenderProfileContent = () => {
    if (!profile) {
      return (
        <EditProfileForm
          updatedProfile={updatedProfile}
          handleChange={handleChange}
        />
      );
    }
    return (
      <>
        {isEditMode ? (
          <EditProfileForm
            updatedProfile={updatedProfile}
            handleChange={handleChange}
          />
        ) : (
          <ProfileContent profile={profile} />
        )}
      </>
    );
  };

  const RenderActionButtons = () => {
    if (isEditMode) {
      return (
        <>
          <Button onClick={handleSaveAndRefetch} className="bg-blue-500">
            {t("profile-page.save")}
          </Button>
          <Button onClick={() => setIsEditMode(false)} className="bg-gray-500">
            {t("profile-page.cancel")}
          </Button>
        </>
      );
    }
    return (
      <Button
        onClick={() => setIsEditMode(true)}
        className="bg-blue-500 mx-auto "
      >
        {t("profile-page.edit")}
      </Button>
    );
  };

  if (isLoading) return <Loading />;
  if (!profile)
    return <p className="text-center text-gray-600">No profile data found</p>;

  return (
    <ProfileContainer>
      <div className="flex justify-center">
        <img
          src={profile?.avatar_url || "/default-avatar.png"}
          alt="Profile Avatar"
          className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-md"
        />
      </div>
      <RenderProfileContent />
      <div className="flex justify-between space-x-4">
        <RenderActionButtons />
      </div>
    </ProfileContainer>
  );
};
