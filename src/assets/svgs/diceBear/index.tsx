import { useAuth } from "@/api/query/hooks/useAuth";
import { useProfile } from "@/api/query/hooks/useProfile";

export const Dicebear = () => {
  const { isAuthenticated } = useAuth();
  const { data: profile, isLoading } = useProfile();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <img
      className={`${isAuthenticated ? "text-card" : ""} h-8 w-10`}
      src={
        profile?.avatar_url ||
        "https://api.dicebear.com/9.x/adventurer/svg?seed=Maria"
      }
      alt="avatar"
    />
  );
};
