import React from "react";
import "./Roadmap.css";

const Roadmap = ({ title, steps }) => {
  return (
    <div className="roadmap">
      <h3>{title}</h3>
      <ol>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default Roadmap;
