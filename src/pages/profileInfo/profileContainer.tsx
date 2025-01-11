import React from "react";
import { ProfileContainerProps } from "./types";

export const ProfileContainer: React.FC<ProfileContainerProps> = ({
  children,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="space-y-6">{children}</div>
    </div>
  );
};
