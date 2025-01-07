export interface BlogCardProps {
  blog: {
    id: string;
    title_en: string;
    image_url: string;
    description_en: string;
  };
  isExpanded: boolean;
  onToggle: () => void;
}
