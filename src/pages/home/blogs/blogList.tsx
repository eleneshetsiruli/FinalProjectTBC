import { useFetchBlogs } from "@/api/query/hooks/useFetchBlogs";
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { CountryImg } from "../countries/countryImg";
import { ParagrCva } from "@/components/ui/cva/paragraph";
import { Loading } from "@/pages/isLoading";
import { useTranslation } from "react-i18next";

const BlogList: React.FC = () => {
  const { data: blogs, isLoading } = useFetchBlogs();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  if (isLoading) {
    return <Loading />;
  }
  const getLocalizedField = (blog: any, field: string) => {
    return i18n.language === "ka" ? blog[`${field}_ka`] : blog[`${field}_en`];
  };
  const handleNavigate = (blogId: string) => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <div className=" flex flex-col gap-2 justify-center items-center mt-14">
      <h1 className="text-card text-lg"> {t("home-page.blogs")}</h1>
      <div className="flex justify-center flex-wrap lg:w-[1000px] gap-5">
        {blogs?.map((blog: any) => (
          <div
            className="flex flex-col cursor-pointer"
            key={blog.id}
            onClick={() => handleNavigate(blog.id)}
          >
            <CountryImg src={blog.image_url} />
            <ParagrCva>{getLocalizedField(blog, "title")}</ParagrCva>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
