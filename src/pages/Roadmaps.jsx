import React from "react";
import roadmapData from "../utils/roadmapData";
import Roadmap from "../components/Roadmap";

const Roadmaps = () => {
  return (
    <div className="unique-roadmaps-container p-8 bg-gradient-to-r from-blue-100 to-blue-200 min-h-screen flex flex-col items-center">
      <h2 className="unique-roadmaps-title text-4xl font-extrabold text-gray-800 mb-8 transition-transform transform hover:scale-105 duration-300">
        Career Roadmaps
      </h2>
      <div className="unique-roadmaps-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {Object.keys(roadmapData).map((career) => (
          <div
            key={career}
            className="unique-roadmaps-card bg-white p-6 rounded-lg shadow-lg transition-shadow hover:shadow-2xl duration-300 transform hover:scale-105"
          >
            <Roadmap title={career} steps={roadmapData[career]} />
          </div>
        ))}
      </div>
      <footer className="mt-10 text-center text-gray-600">
        <p className="text-sm">
          Explore your career path with our comprehensive roadmaps!
        </p>
      </footer>
    </div>
  );
};

export default Roadmaps;
