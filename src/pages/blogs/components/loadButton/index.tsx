import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoadButtonProps } from "../../types";
import { useTranslation } from "react-i18next";

export const LoadButton: React.FC<LoadButtonProps> = ({ handleLoadMore }) => {
  const { t } = useTranslation();
  return (
    <button
      onClick={handleLoadMore}
      className="flex items-center justify-center gap-2 px-4 py-2 bg-card text-white rounded hover:bg-secondary border-2 hover:text-orange-500"
    >
      <span>{t("blog-page.load")}</span>
      <FontAwesomeIcon icon={faSpinner} />
    </button>
  );
};
