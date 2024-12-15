import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_LINK}/contact`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Response:", response.data);
      toast.success("Done!! Thank you");
    } catch (error) {
      console.error("Error during saving:", error);
      toast.success("An error occurred during saving. Please try again.");
      alert("An error occurred during saving. Please try again.");
    }
  };

  return (
    <div className="pt-[10vh]">
      <div className="max-w-md mx-auto p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Name"
              name="name" // Match backend field
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border-b border-gray-300 bg-[#121212]"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border-b border-gray-300 bg-[#121212]"
            />
          </div>

          <div>
            <textarea
              name="msg" // Match backend field
              placeholder="Message"
              value={formData.msg}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border-b border-gray-300 bg-[#121212]"
              rows="2"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 mt-4 font-semibold rounded-md bg-gray-800"
            >
              Contact Us
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
