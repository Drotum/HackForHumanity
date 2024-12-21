import { Link } from "react-router-dom";
import { useState } from "react";
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-900 border-b-4 border-yellow-400">
        <h2 className="text-4xl font-bold text-yellow-400 mb-4">
          Crowdsourcing Accessibility Solutions
        </h2>
        <p className="text-lg text-white mb-8">
          Help make digital platforms inclusive for everyone.
        </p>
        {/* <Link to="/submit-feedback"> */}
        <Link to="/login">
        <button className="px-6 py-3 bg-yellow-400 text-black font-bold rounded hover:bg-black hover:text-yellow-400 border-2 border-yellow-400 transition-all">
          Get Started
        </button>
          </Link>
        {/* </Link> */}
      </section>

      {/* Feedback List Section */}
      <section className="py-12 bg-black text-center">
        <h3 className="text-3xl font-bold text-yellow-400 mb-8">
          Recent Feedback
        </h3>
        <ul className="space-y-4 max-w-2xl mx-auto">
          <li className="bg-gray-800 text-left px-6 py-4 border-l-4 border-yellow-400 rounded">
            <p className="text-white">Website A: Issue with navigation for screen readers.</p>
          </li>
          <li className="bg-gray-800 text-left px-6 py-4 border-l-4 border-yellow-400 rounded">
            <p className="text-white">Website B: Low contrast in text.</p>
          </li>
          <li className="bg-gray-800 text-left px-6 py-4 border-l-4 border-yellow-400 rounded">
            <p className="text-white">Website C: Inaccessible forms.</p>
          </li>
        </ul>
      </section>
    </>
  );
}
