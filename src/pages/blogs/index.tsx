import { useFetchBlogs } from "@/api/query/hooks/useFetchBlogs";
import { useToggleSet } from "@/hooks/useToggleSet";
import BlogCard from "./blogCard";

export const BlogsView = () => {
  const { data } = useFetchBlogs();
  const { toggledItems: expandedBlogs, handleToggle } = useToggleSet();

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {data?.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          isExpanded={expandedBlogs.has(blog.id)}
          onToggle={() => handleToggle(blog.id)}
        />
      ))}
    </div>
  );
};
