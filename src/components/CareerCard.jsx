import React from "react";
import "./CareerCard.css"; 

const CareerCard = ({ career }) => {
  return (
    <div className="career-card bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
      <h3 className="text-2xl font-bold text-gray-800 mb-2 font-serif">
        {career.title}
      </h3>
      <p className="text-gray-600 mb-4 font-sans">{career.description}</p>
      <h4 className="text-lg font-medium text-gray-700 mb-2 font-serif">
        Key Skills:
      </h4>
      <ul className="list-disc list-inside">
        {career.skills.map((skill, index) => (
          <li
            key={index}
            className="text-gray-600 transition-colors duration-300 hover:text-blue-500 font-sans"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CareerCard;
