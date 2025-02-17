import { ReactNode } from "react";

export interface Profile {
  id: string;
  username: string;
  full_name: string;
  last_name_en: string;
  last_name_ka: string;
  telephone: string;
  avatar_url?: string;
}

export interface PropsProfile {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ProfileContentProps {
  profile: Profile | undefined;
}

export type ProfileContainerProps = {
  children: ReactNode;
};
export interface AvatarSelectProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
