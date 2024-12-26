import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_LINK}/api/blogs`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            content,
            tags: tags
              .split(",")
              .map((tag) => tag.trim())
              .filter(Boolean),
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create blog post");
      }

      navigate("/blog");
    } catch (error) {
      console.error("Error creating blog post:", error);
      alert("Failed to create blog post");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block  font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border-b border-gray-700 rounded-lg focus:outline-none focus:border-white bg-transparent "
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block  font-bold mb-2">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            rows={5}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 border-b border-gray-700 rounded-lg focus:outline-none focus:border-white bg-transparent"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="tags" className="block  font-bold mb-2">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full px-3 py-2 border-b border-gray-700 rounded-lg focus:outline-none focus:border-white bg-transparent "
            placeholder="e.g., React, JavaScript, Web Development"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-white text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-200 disabled:bg-gray-600 disabled:text-gray-400 transition-colors duration-200"
        >
          {isSubmitting ? "Creating..." : "Create Post"}
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
