import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_LINK}/newsletter/subscribe`,
        { email },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Response:", response.data);
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
    } catch (error) {
      console.error("Error during subscription:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-2xl">
        <div className="space-y-6">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Join my Newsletter
            </h2>
            <p className="text-gray-300 text-lg max-w-md mx-auto leading-relaxed">
              Get exclusive updates on new content, projects, and tech insights
              delivered straight to your inbox.
            </p>
          </div>

          {/* Subscription Form */}
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow px-6 py-4 bg-gray-800/50 rounded-lg border border-gray-700 focus:border-white transition-all duration-300 outline-none text-gray-100 placeholder-gray-400"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700  font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
