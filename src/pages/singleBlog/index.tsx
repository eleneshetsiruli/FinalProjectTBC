import { useParams } from "react-router-dom";
import { useFetchBlogs } from "@/api/query/hooks/useFetchBlogs";
import { Loading } from "@/pages/isLoading";
import BlogCard from "../blogs/components/blogCard";
import { useToggleSet } from "@/hooks/useToggleSet";

const SingleBlog: React.FC = () => {
  const { blogId } = useParams();
  const { data: blogs, isLoading } = useFetchBlogs();
  const blog = blogs?.find((b: any) => String(b.id) === blogId);

  const { toggledItems: expandedBlogs, handleToggle } = useToggleSet();

  if (isLoading) {
    return <Loading />;
  }

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div className="flex justify-center mt-10">
      <BlogCard
        key={blog.id}
        blog={blog}
        isExpanded={expandedBlogs.has(blog.id)}
        onToggle={() => handleToggle(blog.id)}
      />
    </div>
  );
};

export default SingleBlog;
