import React from "react";
import "./CareerCard.css";

const CareerCard = ({ career }) => {
  return (
    <div className="career-card">
      <h3>{career.title}</h3>
      <p>{career.description}</p>
      <h4>Key Skills:</h4>
      <ul>
        {career.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default CareerCard;
