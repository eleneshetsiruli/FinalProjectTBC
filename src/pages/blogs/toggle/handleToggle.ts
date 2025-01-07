export const handleToggle = (blogId: string) => {
  setExpandedBlogs((prev) => {
    const newSet = new Set(prev);
    if (newSet.has(blogId)) {
      newSet.delete(blogId);
    } else {
      newSet.add(blogId);
    }
    return newSet;
  });
};
