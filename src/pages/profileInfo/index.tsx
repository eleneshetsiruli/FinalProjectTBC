import { useProfile } from "@/api/query/hooks/useProfile";
import { useProfileEdit } from "@/api/query/hooks/useProfileAction";
import { ProfileContent } from "./profileContent";
import { EditProfileForm } from "./editProfileForm";
import { Button } from "./editInfoButtons";
import { Loading } from "../isLoading";
import { ProfileContainer } from "./profileContainer";

export const ProfileView = () => {
  const { data: profile, isLoading, refetch } = useProfile();
  const {
    isEditMode,
    setIsEditMode,
    updatedProfile,
    handleChange,
    handleSave,
  } = useProfileEdit(profile);

  const handleSaveAndRefetch = async () => {
    if (!updatedProfile) return;
    await handleSave();
    refetch();
  };

  const RenderProfileContent = () => {
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
            Save
          </Button>
          <Button onClick={() => setIsEditMode(false)} className="bg-gray-500">
            Cancel
          </Button>
        </>
      );
    }
    return (
      <Button onClick={() => setIsEditMode(true)} className="bg-blue-500">
        Edit Profile
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
