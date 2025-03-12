import React from "react";
import Dashboard from "../components/Dashboard";

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 transition duration-300 ease-in-out">
      <aside className="w-64 bg-blue-600 text-white shadow-lg p-4">
        <h2 className="text-xl font-bold mb-4">Navigation</h2>
        <ul>
          <li className="mb-2">
            <a href="/profile" className="hover:text-blue-200">
              Profile
            </a>
          </li>
          <li className="mb-2">
            <a href="/roadmaps" className="hover:text-blue-200">
              Roadmaps
            </a>
          </li>
          <li className="mb-2">
            <a href="/consultation" className="hover:text-blue-200">
              Consultation
            </a>
          </li>
          <li className="mb-2">
            <a href="/career-insights" className="hover:text-blue-200">
              Career Insights
            </a>
          </li>
        </ul>
      </aside>
      <div className="flex-grow p-8">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full transform transition-transform duration-300 hover:scale-105">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Dashboard
          </h2>
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
