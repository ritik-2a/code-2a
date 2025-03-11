import React, { useState } from "react";
import userData from "../utils/userData";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(userData);
  const [editing, setEditing] = useState(false);
  const [newCareer, setNewCareer] = useState(user.careerInterest);

  const handleSave = () => {
    setUser({ ...user, careerInterest: newCareer });
    setEditing(false);
  };

  return (
    <div className="profile">
      <h2>User Profile</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Career Interest:</strong>
        {editing ? (
          <input
            type="text"
            value={newCareer}
            onChange={(e) => setNewCareer(e.target.value)}
          />
        ) : (
          <span> {user.careerInterest}</span>
        )}
      </p>
      {editing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={() => setEditing(true)}>Edit</button>
      )}
    </div>
  );
};

export default Profile;
