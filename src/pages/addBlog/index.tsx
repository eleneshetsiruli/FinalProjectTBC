import { useAddBlog } from "@/api/query/hooks/useAddBlogMutations";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "@/hooks/useToast/use-toast";
import InputField from "@/components/formField/InputField";
import TextareaField from "@/components/formField/textAreaField";
import FileInputField from "@/components/formField/fileInfpitField";
import { defoultFormData } from "./defoulyData";

export const AddBlog = () => {
  const [formData, setFormData] = useState(defoultFormData);
  const [file, setFile] = useState<File | null>(null);
  const { message, loading, handleFileUpload } = useAddBlog();

  const { t } = useTranslation();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (file) {
        await handleFileUpload(file, formData);
      } else {
        await handleFileUpload(null, formData);
      }
      toast({
        title: "Success",
        description: "Your blog was added successfully",
      });

      setFormData(defoultFormData);
      setFile(null);

      const fileInput = document.getElementById(
        "image_url",
      ) as HTMLInputElement;
      if (fileInput) fileInput.value = "";
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-11">
      <h1 className="text-2xl font-bold text-orange-600 mb-4">
        {t("addBlog-page.add")}
      </h1>
      {message && (
        <p
          className={`mb-4 ${
            message.includes("successfully") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <InputField
          id="title_ka"
          name="title_ka"
          value={formData.title_ka}
          onChange={handleInputChange}
          placeholder={t("addBlog-page.enterGe")}
          label={t("addBlog-page.titleGe")}
          required
        />
        <InputField
          id="title_en"
          name="title_en"
          value={formData.title_en}
          onChange={handleInputChange}
          placeholder={t("addBlog-page.enterEn")}
          label={t("addBlog-page.titleEn")}
          required
        />
        <TextareaField
          id="description_ka"
          name="description_ka"
          value={formData.description_ka}
          onChange={handleInputChange}
          placeholder={t("addBlog-page.enterDes")}
          label={t("addBlog-page.descriptionKa")}
          required
        />
        <TextareaField
          id="description_en"
          name="description_en"
          value={formData.description_en}
          onChange={handleInputChange}
          placeholder={t("addBlog-page.enterDesEn")}
          label={t("addBlog-page.descriptionEn")}
          required
        />
        <FileInputField
          id="image_url"
          name="image_url"
          onChange={handleFileChange}
          label={t("addBlog-page.image")}
          required
        />
        <Button
          type="submit"
          className={`p-3 bg-card text-white rounded-lg font-semibold hover:bg-orange-700 transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Adding Blog..." : t("addBlog-page.image")}
        </Button>
      </form>
    </div>
  );
};
