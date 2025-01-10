import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Input } from "@/components/ui/input";
import { useNavigate, useLocation } from "react-router-dom";
import { SearchProps } from "./types";

const Search = ({ onSearchChange }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const query = urlParams.get("search");
    if (query) {
      setSearchTerm(query);
      onSearchChange(query);
    }
  }, [location.search, onSearchChange]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearchChange(term);

    navigate(`?search=${term}`, { replace: true });
  };

  return (
    <div className="relative">
      <Input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-[300px] h-12 pl-4 pr-12 border border-gray-300 rounded-md"
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500"
      />
    </div>
  );
};

export default Search;
