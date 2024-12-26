import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_LINK}/api/blogs/${id}`
        );
        const data = await response.json();
        setBlog(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!blog) return <div>Blog post not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <div className="text-gray-600 mb-8">
        {new Date(blog.createdAt).toLocaleDateString()}
      </div>
      <div className="prose max-w-none">{blog.content}</div>
      {blog.tags && blog.tags.length > 0 && (
        <div className="mt-8">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPost;
