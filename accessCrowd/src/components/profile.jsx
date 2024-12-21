import React from "react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex justify-center items-center">
      <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg p-8">
        {/* Profile Header */}
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-400">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Abhyudaya Singh</h1>
            <p className="text-yellow-400">ISE student</p>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold border-b-2 border-yellow-400 pb-2 mb-4">
            About Me
          </h2>
          <p>
            Hi, I'm Abhyudaya Singh, a passionate frontend developer with expertise in
            creating visually appealing and responsive web applications. I love
            collaborating on innovative projects and learning new
            technologies.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-2 gap-6">
          <div className="p-4 bg-gray-700 rounded-md">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Email</h3>
            <p>1abhyudayasingh@gmail.com</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-md">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Phone</h3>
            <p>+91 896 242 6766</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-md">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Location</h3>
            <p>Karnataka, India</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-md">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">GitHub</h3>
            <a
              href="https://github.com/Drotum"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Drotum
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex space-x-6 justify-center">
          <a
            href="#"
            className="text-yellow-400 hover:text-yellow-500 transition"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            href="#"
            className="text-yellow-400 hover:text-yellow-500 transition"
            title="Twitter"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a
            href="#"
            className="text-yellow-400 hover:text-yellow-500 transition"
            title="Instagram"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
