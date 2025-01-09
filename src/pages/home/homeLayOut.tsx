import { BlogsContainer } from "./blogs/blogsContainer";
import { CountriesList } from "./countries/countriesList";
import { Cover } from "./cover";

export default function HomeLayOut() {
  return (
    <div className="bg-[#e4e3e3]">
      <Cover />
      <CountriesList />
      <BlogsContainer />
    </div>
  );
}
