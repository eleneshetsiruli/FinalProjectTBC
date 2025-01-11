// import { useFetchBlogs } from "@/api/query/hooks/useFetchBlogs";
// import React from "react";
// import { CountryImg } from "../countries/countryImg";
// import { ParagrCva } from "@/components/ui/cva/paragraph";
// import { Loading } from "@/pages/isLoading";

// const BlogList: React.FC = () => {
//   const { data: blogs, isLoading } = useFetchBlogs();
//   isLoading && <Loading />;

//   return (
//     <div className="ml-10 flex flex-col gap-2 justify-center items-center mt-14">
//       <h1 className="text-card text-lg">Blogs</h1>
//       <div className="flex justify-center  flex-wrap  lg:w-[1000px] gap-5">
//         {blogs?.map((blog: any) => (
//           <div className="flex flex-col " key={blog.id}>
//             <CountryImg src={blog.image_url} />
//             <ParagrCva color="secondary">{blog.title_en}</ParagrCva>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogList;

import { useFetchBlogs } from "@/api/query/hooks/useFetchBlogs";
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { CountryImg } from "../countries/countryImg";
import { ParagrCva } from "@/components/ui/cva/paragraph";
import { Loading } from "@/pages/isLoading";

const BlogList: React.FC = () => {
  const { data: blogs, isLoading } = useFetchBlogs();
  const navigate = useNavigate(); // Initialize useNavigate

  if (isLoading) {
    return <Loading />;
  }

  const handleNavigate = (blogId: string) => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <div className=" flex flex-col gap-2 justify-center items-center mt-14">
      <h1 className="text-card text-lg">Blogs</h1>
      <div className="flex justify-center flex-wrap lg:w-[1000px] gap-5">
        {blogs?.map((blog: any) => (
          <div
            className="flex flex-col cursor-pointer"
            key={blog.blogId}
            onClick={() => handleNavigate(blog.id)}
          >
            <CountryImg src={blog.image_url} />
            <ParagrCva color="secondary">{blog.title_en}</ParagrCva>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
