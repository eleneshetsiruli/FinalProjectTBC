import { useState } from "react";
import supabase from "@/lib/supabase";
import { useProfile } from "@/api/query/hooks/useProfile";

export const useProfileActions = () => {
  const { data: profile, isLoading, isError, error } = useProfile();
  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState(profile);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUpdatedProfile((prev) => (prev ? { ...prev, [name]: value } : prev));
  };

  const handleSave = async () => {
    if (updatedProfile && updatedProfile.id) {
      const { error: updateError } = await supabase
        .from("profiles")
        .update(updatedProfile)
        .eq("id", updatedProfile.id)
        .single();

      if (updateError) {
        console.error(updateError.message);
        return;
      }

      setIsEditMode(false);
    }
  };

  return {
    profile,
    isLoading,
    isError,
    error,
    isEditMode,
    setIsEditMode,
    updatedProfile,
    setUpdatedProfile,
    handleChange,
    handleSave,
  };
};
