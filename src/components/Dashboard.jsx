import React from "react";
import dashboardData from "../utils/dashboardData";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Welcome, {dashboardData.user.name}!</h2>
      <p>Selected Career Path: <strong>{dashboardData.user.selectedCareer}</strong></p>
      <p>Progress: <strong>{dashboardData.user.progress}%</strong></p>

      <h3>Recent AI Consultations</h3>
      <ul>
        {dashboardData.consultations.map((session, index) => (
          <li key={index}>
            <strong>{session.date}:</strong> {session.recommendation}
          </li>
        ))}
      </ul>

      <h3>Saved Career Roadmaps</h3>
      <ul>
        {dashboardData.savedRoadmaps.map((roadmap, index) => (
          <li key={index}>{roadmap}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
