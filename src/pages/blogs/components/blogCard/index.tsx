import { useTranslation } from "react-i18next";
import { ParagrCva } from "@/components/ui/cva/paragraph";
import CardCva from "@/components/ui/cva/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { truncateText } from "../../trunc";
import { BlogCardProps } from "../../types";
import dayjs from "dayjs";

const BlogCard: React.FC<BlogCardProps> = ({ blog, isExpanded, onToggle }) => {
  const { i18n, t } = useTranslation();

  const title = i18n.language === "ka" ? blog.title_ka : blog.title_en;
  const description =
    i18n.language === "ka" ? blog.description_ka : blog.description_en;

  const formattedDate = dayjs(blog.created_at).format("YYYY-MM-DD");

  return (
    <CardCva size="custom">
      <div className="flex justify-between flex-col lg:flex-row">
        <ParagrCva color="secondary">{title}</ParagrCva>
        <ParagrCva color="orange">
          <span className="italic text-primary m-2">
            {t("blog-page.created")}:
          </span>
          {formattedDate}
        </ParagrCva>
      </div>
      <img src={blog.image_url} alt="image" className="w-full h-[450px]" />

      <div className="flex flex-col">
        <ParagrCva color="secondary">
          {isExpanded ? description : truncateText(description, 200)}
        </ParagrCva>
        <div
          onClick={onToggle}
          className="flex justify-center items-center text-card gap-1 cursor-pointer"
        >
          <button className="text-orange-500">
            {isExpanded ? t("blog-page.less") : t("blog-page.more")}
          </button>
          <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
        </div>
      </div>
    </CardCva>
  );
};

export default BlogCard;
