import supabase from "@/lib/supabase";
import { Profile } from "@/pages/profileInfo/types";
import { useEffect, useState } from "react";

export const useProfileEdit = (profile: Profile | null | undefined) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const [updatedProfile, setUpdatedProfile] = useState<
    Profile | null | undefined
  >(profile);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedProfile((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  const handleSave = async () => {
    if (!updatedProfile) return;
    try {
      const { error } = await supabase
        .from("profiles")
        .update(updatedProfile)
        .eq("id", updatedProfile.id);

      if (error) {
        console.error("Error saving profile:", error);
        return;
      }

      setIsEditMode(false);
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  useEffect(() => {
    setUpdatedProfile(profile);
  }, [profile]);

  return {
    isEditMode,
    setIsEditMode,
    updatedProfile,
    handleChange,
    handleSave,
  };
};
