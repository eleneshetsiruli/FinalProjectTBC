import { ParagrCva } from "@/components/ui/cva/paragraph";
import CardCva from "@/components/ui/cva/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { truncateText } from "../trunc";
import { BlogCardProps } from "../types";

const BlogCard: React.FC<BlogCardProps> = ({ blog, isExpanded, onToggle }) => {
  return (
    <CardCva size="custom">
      <ParagrCva color="secondary">{blog.title_en}</ParagrCva>
      <img src={blog.image_url} alt="image" className="w-full h-auto" />
      <div className="flex flex-col">
        <ParagrCva color="secondary">
          {isExpanded
            ? blog.description_en
            : truncateText(blog.description_en, 200)}
        </ParagrCva>
        <div
          onClick={onToggle}
          className="flex justify-center items-center text-card gap-1 cursor-pointer"
        >
          <button className="text-card">
            {isExpanded ? "See less" : "See more"}
          </button>
          <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
        </div>
      </div>
    </CardCva>
  );
};

export default BlogCard;
