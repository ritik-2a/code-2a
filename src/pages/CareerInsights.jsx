import React from "react";
import careerData from "../utils/careerData";
import CareerCard from "../components/CareerCard";

const CareerInsights = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-400 text-center p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <h2 className="text-4xl text-teal-800 transition-colors duration-300 hover:text-teal-900">
        Explore Career Paths
      </h2>
      <div className="career-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {careerData.map((career) => (
          <CareerCard key={career.id} career={career} />
        ))}
      </div>
    </div>
  );
};

export default CareerInsights;
