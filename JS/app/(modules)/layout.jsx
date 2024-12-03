import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div className="container mx-auto">
        <div>
          <h3>Module Layout</h3>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default layout;
