import { useAddBlog } from "@/api/query/hooks/useAddBlogMutations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/useToast/use-toast";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const AddBlog = () => {
  const [formData, setFormData] = useState({
    title_ka: "",
    title_en: "",
    description_ka: "",
    description_en: "",
    image_url: "",
  });
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
        title: "Succses",
        description: "your blog add succses",
      });

      setFormData({
        title_ka: "",
        title_en: "",
        description_ka: "",
        description_en: "",
        image_url: "",
      });
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
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
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
        <div>
          <Label
            htmlFor="title_ka"
            className="block font-semibold mb-1 text-gray-600"
          >
            {t("addBlog-page.titleGe")}
          </Label>
          <Input
            type="text"
            id="title_ka"
            name="title_ka"
            value={formData.title_ka}
            onChange={handleInputChange}
            placeholder={t("addBlog-page.enterGe")}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <Label
            htmlFor="title_en"
            className="block font-semibold mb-1 text-gray-600"
          >
            {t("addBlog-page.titleEn")}
          </Label>
          <Input
            type="text"
            id="title_en"
            name="title_en"
            value={formData.title_en}
            onChange={handleInputChange}
            placeholder={t("addBlog-page.enterEn")}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <Label
            htmlFor="description_ka"
            className="block font-semibold mb-1 text-gray-600"
          >
            {t("addBlog-page.descriptionKa")}
          </Label>
          <Textarea
            id="description_ka"
            name="description_ka"
            value={formData.description_ka}
            onChange={handleInputChange}
            placeholder={t("addBlog-page.enterDes")}
            className="w-full p-2 border border-gray-300 rounded"
            rows={4}
            required
          />
        </div>

        <div>
          <Label
            htmlFor="description_en"
            className="block font-semibold mb-1 text-gray-600"
          >
            {t("addBlog-page.descriptionEn")}
          </Label>
          <Textarea
            id="description_en"
            name="description_en"
            value={formData.description_en}
            onChange={handleInputChange}
            placeholder={t("addBlog-page.enterDesEn")}
            className="w-full p-2 border border-gray-300 rounded"
            rows={4}
            required
          />
        </div>

        <div>
          <Label
            htmlFor="image_url"
            className="block font-semibold mb-1 text-gray-600"
          >
            {t("addBlog-page.image")}
          </Label>
          <Input
            type="file"
            id="image_url"
            name="image_url"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

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
