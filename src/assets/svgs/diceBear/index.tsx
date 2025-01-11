import { useAuth } from "@/api/query/hooks/useAuth";

export const Dicebear = () => {
  const { isAuthenticated } = useAuth();

  return (
    <img
      className={`${isAuthenticated ? `text-card` : ""}h-8 w-10`}
      src={`https://api.dicebear.com/9.x/avataaars/svg?seed=Vivian`}
      alt="avatar"
    />
  );
};
