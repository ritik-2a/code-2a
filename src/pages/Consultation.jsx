import React from "react";
import ChatBox from "../components/ChatBox";

const Consultation = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>AI Career Consultation</h2>
      <p>Ask our AI assistant about your career path.</p>
      <ChatBox />
    </div>
  );
};

export default Consultation;
