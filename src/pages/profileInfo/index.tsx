import { useProfileActions } from "@/api/query/hooks/useProfileAction";
import { PropsProfile } from "./types";

const ProfileInput = ({ name, label, value, onChange }: PropsProfile) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="input w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>
);

export const ProfileView = () => {
  const {
    profile,
    isLoading,
    isError,
    error,
    isEditMode,
    setIsEditMode,
    updatedProfile,
    handleChange,
    handleSave,
  } = useProfileActions();

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError)
    return (
      <p className="text-center text-red-500">
        Error: {(error as Error).message}
      </p>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {profile ? (
        <div className="space-y-6">
          <div className="flex justify-center">
            <img
              src={updatedProfile?.avatar_url || "/default-avatar.png"}
              alt="Profile Avatar"
              className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-md"
            />
          </div>

          {isEditMode ? (
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
                name="username"
                label="Username"
                value={updatedProfile?.username || ""}
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
          ) : (
            <div className="space-y-2">
              <h1 className="text-xl font-semibold">
                Username: {updatedProfile?.username}
              </h1>
              <h2 className="text-lg">
                Full Name (English): {updatedProfile?.full_name_en}
              </h2>
              <h2 className="text-lg">
                Last Name (English): {updatedProfile?.last_name_en}
              </h2>
              <p className="text-md">Telephone: {updatedProfile?.telephone}</p>
            </div>
          )}

          <div className="flex justify-between space-x-4">
            {isEditMode ? (
              <>
                <button
                  onClick={handleSave}
                  className="btn btn-primary px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditMode(false)}
                  className="btn btn-secondary px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditMode(true)}
                className="btn btn-primary px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">No profile data found</p>
      )}
    </div>
  );
};
