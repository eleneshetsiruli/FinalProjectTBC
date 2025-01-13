export interface BlogCardProps {
  blog: {
    id: string;
    title_en: string;
    title_ka: string;
    image_url: string;
    description_en: string;
    description_ka: string;
    created_at: string;
  };
  isExpanded: boolean;
  onToggle: () => void;
}

export interface LoadButtonProps {
  handleLoadMore: () => void;
}
