import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoadButtonProps } from "../../types";

export const LoadButton: React.FC<LoadButtonProps> = ({ handleLoadMore }) => {
  return (
    <button
      onClick={handleLoadMore}
      className="flex items-center justify-center gap-2 px-4 py-2 bg-card text-white rounded hover:bg-secondary border-2 hover:text-card"
    >
      <span>Load more blogs</span>
      <FontAwesomeIcon icon={faSpinner} />
    </button>
  );
};
