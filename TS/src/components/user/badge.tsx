import React from "react";

const UserBadge = ({ user }) => {
  return (
    <div>
      <p className="text-xl font-bold text-gray-700">{user[0]}</p>
      <span className="font-normal text-gray-600">{user}</span>
    </div>
  );
};

export default UserBadge;
