import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { addBlogMutation } from "@/api/query/responce/addBlogMutation";
import supabase from "@/lib/supabase";

export const useAddBlog = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const mutation = useMutation({
    mutationFn: addBlogMutation,
    onSuccess: () => {
      setMessage("Blog added successfully!");
    },
    onError: (error: any) => {
      setMessage(error.message || "Something went wrong!");
    },
  });

  const handleFileUpload = async (file: File | null, formData: any) => {
    if (file) {
      try {
        const filePath = `blog_images/${Date.now()}_${file.name}`;

        await supabase.storage.from("blog_images").upload(filePath, file);

        const { data: publicData } = supabase.storage
          .from("blog_images")
          .getPublicUrl(filePath);

        const blogData = { ...formData, image_url: publicData.publicUrl };
        mutation.mutate(blogData);
      } catch {
        setMessage("Something went wrong during file upload!");
        setLoading(false);
      }
    } else {
      mutation.mutate(formData);
      setLoading(false);
    }
  };

  return {
    message,
    loading,
    handleFileUpload,
    mutation,
  };
};
