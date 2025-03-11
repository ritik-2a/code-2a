import React from "react";
import careerData from "../utils/careerData";
import CareerCard from "../components/CareerCard";
import "./CareerInsights.css";

const CareerInsights = () => {
  return (
    <div className="career-insights">
      <h2>Explore Career Paths</h2>
      <div className="career-grid">
        {careerData.map((career) => (
          <CareerCard key={career.id} career={career} />
        ))}
      </div>
    </div>
  );
};

export default CareerInsights;
