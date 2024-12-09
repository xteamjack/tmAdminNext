"use client";

import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div
      className="
        flex flex-wrap
        items-center
        justify-between
        w-full
        py-4
        md:py-0
        px-4
        text-lg text-gray-700
        bg-white
      "
    >
      <div>
        <a href="#" className="font-bold text-3xl">
          Hello World!
        </a>
      </div>

      <Image
        src="/icons/actions/hamburger.svg"
        alt="Hamburger"
        className="h-6 w-6 cursor-pointer md:hidden block"
        width={24}
        height={24}
        onClick={() => {
          document.getElementById("menu")?.classList.toggle("hidden");
        }}
      />

      <div
        className="hidden w-full md:flex md:items-center md:w-auto"
        id="menu"
      >
        <ul
          className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
        >
          <li>
            <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
              Features
            </a>
          </li>
          <li>
            <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
              Pricing
            </a>
          </li>
          <li>
            <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
              Customers
            </a>
          </li>
          <li>
            <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
              Blog
            </a>
          </li>
          <li>
            <a
              className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
              href="#"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
