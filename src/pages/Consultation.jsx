import React from "react";
import ChatBox from "../components/ChatBox";

const Consultation = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-400 text-center p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <h2 className="text-4xl text-teal-800 transition-colors duration-300 hover:text-teal-900">
        AI Career Consultation
      </h2>
      <p className="text-lg text-teal-700 mb-6 transition-colors duration-300 hover:text-teal-600">
        Ask our AI assistant about your career path.
      </p>
      <ChatBox />
    </div>
  );
};

export default Consultation;
