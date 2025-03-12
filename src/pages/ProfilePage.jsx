import React from "react";
import Profile from "../components/Profile";

const ProfilePage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 transition duration-300 ease-in-out">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full transform transition-transform duration-300 hover:scale-105">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center font-serif">
          User Profile
        </h2>
        <Profile />
      </div>
    </div>
  );
};

export default ProfilePage;
