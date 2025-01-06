import { useAuth } from "@/api/query/hooks/useAuth";

export const Dicebear = () => {
  const { isAuthenticated } = useAuth();

  const icons = ["Destiny", "Sophia", "Leah", "Emery", "Ryker"];
  const randomIcon = icons[Math.floor(Math.random() * icons.length)];
  return (
    <img
      className={`${isAuthenticated ? `text-card` : ""}h-10 w-10`}
      src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${randomIcon}`}
      alt="avatar"
    />
  );
};
