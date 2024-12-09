import Image from "next/image";
import React from "react";
import NavBar from "./_components/NavBarV1";
import WebPart from "./_components/WebPart";

const Main = () => {
  return (
    <div className="flex max-h-screen flex-col gap-3">
      <NavBar />
      <div className="flex gap-4 align-center  w-screen">
        <div className="">
          <div className="">Heading 1</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ea
          numquam maxime aspernatur, vitae dicta hic suscipit sint labore quam
          asperiores odit in optio amet iste repellat. Voluptas, magni harum!
        </div>
        <div className="">
          <div className="">Heading 2</div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga impedit
          praesentium tempore illum corporis! Architecto nostrum animi molestias
          distinctio aspernatur, nemo dolore iste eum modi omnis, saepe autem,
          ducimus ullam.
        </div>
        <WebPart />
        <WebPart />
        <WebPart />
        <WebPart />
        <WebPart />
        <WebPart />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sd:grid-cols-1 ">
        <WebPart />
        <WebPart />
        <WebPart />
        <WebPart />
        <WebPart />
        <WebPart />
      </div>
    </div>
  );
};

export default Main;
