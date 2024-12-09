import React from "react";

const ActionBox = () => {
  return (
    <div>
      <ul
        className="
        pt-4
        text-base text-gray-700
        md:flex
        md:justify-between 
        md:pt-0 items-bottom"
      >
        <li>
          <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
            Export
          </a>
        </li>
        <li>
          <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
            Share
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ActionBox;
