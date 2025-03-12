import React from "react";
import { useNavigate } from "react-router-dom"; // Updated import

const HomePage = () => {
  const navigate = useNavigate(); // Updated to useNavigate

  const handleNavigate = () => {
    navigate("/roadmaps"); // Updated navigation method
  };

  return (
    <div className="unique-homepage-container text-center p-8 bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080/?career,technology')" }}></div>
      <h1 className="unique-homepage-title text-4xl font-bold text-white mb-4 transition-transform transform hover:scale-110 duration-300 relative z-10">
        AI-Powered Career Mapping Tool
      </h1>
      <p className="unique-homepage-description text-lg text-white opacity-80 transition-opacity hover:opacity-100 duration-300 relative z-10">
        Explore your ideal career path with AI-driven recommendations.
      </p>
      <button
        onClick={handleNavigate}
        className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 relative z-10"
      >
        Get Started
      </button>
    </div>
  );
};

export default HomePage;