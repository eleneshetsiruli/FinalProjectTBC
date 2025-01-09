import { useFetchBlogs } from "@/api/query/hooks/useFetchBlogs";
import { useToggleSet } from "@/hooks/useToggleSet";
import { useState } from "react";
import BlogCard from "./components/blogCard";
import { LoadButton } from "./components/loadButton";

export const BlogsView = () => {
  const { data: blogs } = useFetchBlogs();

  const { toggledItems: expandedBlogs, handleToggle } = useToggleSet();
  const [visibleCount, setVisibleCount] = useState(2);
  const handleLoadMore = () => {
    if (blogs && visibleCount < blogs.length) {
      setVisibleCount((prev) => prev + 2);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {blogs
        ?.slice(0, visibleCount)
        .map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            isExpanded={expandedBlogs.has(blog.id)}
            onToggle={() => handleToggle(blog.id)}
          />
        ))}
      {visibleCount < (blogs?.length || 0) && (
        <LoadButton handleLoadMore={handleLoadMore} />
      )}
    </div>
  );
};
