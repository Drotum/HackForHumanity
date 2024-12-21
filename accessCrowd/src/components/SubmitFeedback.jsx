import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SubmitFeedback() {
  const [formData, setFormData] = useState({
    url: "",
    issueType: "visual",
    description: "",
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError(false);

    try {
      // Create a FormData object for file upload
      const data = new FormData();
      data.append("url", formData.url);
      data.append("issueType", formData.issueType);
      data.append("description", formData.description);
      if (file) data.append("file", file);

      // Send POST request to the backend
      await axios.post("http://localhost:5000/feedback", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("Feedback submitted successfully!");
      setTimeout(() => navigate("/"), 2000); // Redirect to Home after 2 seconds
    } catch (error) {
      console.error(error);
      setMessage("Error submitting feedback. Please try again.");
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-yellow-500 to-black flex items-center justify-center">
      <div className="max-w-xl w-full bg-black p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Submit Feedback
        </h1>

        {/* Message Section */}
        {message && (
          <div
            className={`p-4 mb-6 text-sm rounded ${
              error ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
            }`}
          >
            {message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Website URL
            </label>
            <input
              type="text"
              name="url"
              value={formData.url}
              onChange={handleChange}
              placeholder="Enter the website URL"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Type of Issue
            </label>
            <select
              name="issueType"
              value={formData.issueType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="visual">Visual Issue</option>
              <option value="navigation">Navigation Issue</option>
              <option value="content">Content Issue</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the issue"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows="4"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Attach File (Optional)
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full text-gray-600"
              accept=".png, .jpg, .jpeg, .pdf"
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3 px-6 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Feedback"}
          </button>
        </form>
      </div>
    </div>
  );
}
