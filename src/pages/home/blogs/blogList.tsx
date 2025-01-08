import { useFetchBlogs } from "@/api/query/hooks/useFetchBlogs";
import React from "react";
import { CountryImg } from "../countries/countryImg";
import { ParagrCva } from "@/components/ui/cva/paragraph";
import { Loading } from "@/pages/isLoading";

const BlogList: React.FC = () => {
  const { data: blogs, isLoading } = useFetchBlogs();
  isLoading && <Loading />;

  return (
    <div className="ml-10 flex flex-col gap-10 justify-center items-center mt-14">
      <ParagrCva size="xl" color="secondary">
        Blogs
      </ParagrCva>
      <div className="flex justify-center  flex-wrap  lg:w-[1000px] gap-5">
        {blogs?.map((blog: any) => (
          <div className="flex flex-col " key={blog.id}>
            <CountryImg src={blog.image_url} />
            <ParagrCva color="secondary">{blog.title_en}</ParagrCva>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
