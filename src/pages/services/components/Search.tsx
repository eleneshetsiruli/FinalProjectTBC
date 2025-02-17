import { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Input } from "@/components/ui/input";
import { useNavigate, useLocation } from "react-router-dom";
import { SearchProps } from "./types";
import { useTranslation } from "react-i18next";

const Search = ({ onSearchChange }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const query = urlParams.get("search") || "";
    if (query !== searchTerm) {
      setSearchTerm(query);
    }
  }, [location.search, searchTerm]);

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const term = event.target.value;
      setSearchTerm(term);
      onSearchChange(term);

      const urlParams = new URLSearchParams(location.search);
      if (term) {
        urlParams.set("search", term);
      } else {
        urlParams.delete("search");
      }
      navigate(`?${urlParams.toString()}`, { replace: true });
    },
    [navigate, location.search, onSearchChange],
  );

  return (
    <div className="relative">
      <Input
        type="text"
        placeholder={t("countries-page.search")}
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-[300px] h-12 pl-4 pr-12 border border-gray-300 rounded-md text-popover-foreground"
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500"
      />
    </div>
  );
};

export default Search;
