import React from "react";
import roadmapData from "../utils/roadmapData";
import Roadmap from "../components/Roadmap";

const Roadmaps = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Career Roadmaps</h2>
      {Object.keys(roadmapData).map((career) => (
        <Roadmap key={career} title={career} steps={roadmapData[career]} />
      ))}
    </div>
  );
};

export default Roadmaps;
