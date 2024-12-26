import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminModal from "../components/AdminModal";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_LINK}/api/blogs`
        );
        const data = await response.json();
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
        >
          Create Post
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link to={`/blog/${blog._id}`} key={blog._id}>
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-2">
                {blog.content.length > 100
                  ? `${blog.content.substring(0, 100)}... `
                  : blog.content}
                {blog.content.length > 100 && <span>Read more</span>}
              </p>
              <div className="text-sm text-gray-500">
                {new Date(blog.createdAt).toLocaleDateString()}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <AdminModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Blog;
