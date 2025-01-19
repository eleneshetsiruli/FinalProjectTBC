import { useEffect } from "react";
import supabase from "@/lib/supabase";

const useCreateProfileOnLogin = () => {
  useEffect(() => {
    const checkAndCreateProfile = async () => {
      const { data: userResponse, error: userError } =
        await supabase.auth.getUser();

      if (userError) {
        console.error("User is not authenticated:", userError);
        return;
      }

      const user = userResponse?.user;
      if (!user) {
        console.error("No user found");
        return;
      }

      const { data: existingProfile, error: profileError } = await supabase
        .from("profiles")
        .select("id")
        .eq("id", user.id)
        .single();

      if (profileError && profileError.code !== "PGRST116") {
        console.error("Error checking profile:", profileError.message);
        return;
      }

      if (!existingProfile) {
        const { error: createError } = await supabase.from("profiles").insert([
          {
            id: user.id,
            avatar_url: "https://api.dicebear.com/9.x/lorelei/svg?seed=Vivian",
          },
        ]);

        if (createError) {
          console.error("Error creating profile:", createError.message);
        } else {
          console.log("Profile created successfully!");
        }
      } else {
        console.log("Profile already exists for the user.");
      }
    };

    checkAndCreateProfile();
  }, []);
};

export default useCreateProfileOnLogin;
