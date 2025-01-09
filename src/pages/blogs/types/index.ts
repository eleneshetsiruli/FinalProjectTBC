export interface BlogCardProps {
  blog: {
    id: string;
    title_en: string;
    image_url: string;
    description_en: string;
    created_at: string;
  };
  isExpanded: boolean;
  onToggle: () => void;
}

export interface LoadButtonProps {
  handleLoadMore: () => void;
}
