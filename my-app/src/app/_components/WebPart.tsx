import Image from "next/image";
import React from "react";

const WebPart = () => {
  return (
    <div className="gap-4">
      <div className="flex flex-wrap justify-between p-1 m-1 bg-slate-200 text-gray-700 h-[36px] gap-2">
        <div className="flex flex-row gap-2">
          <Image
            className="fill-yellow-200"
            src="/icons/actions/search.svg"
            alt="Search"
            width={24}
            height={24}
          />
          Heading 3
        </div>
        <Image
          className="flex-row place-content-end stroke-red-500"
          src="/icons/actions/ellipses-vertical.svg"
          alt="Menu"
          width={24}
          height={24}
        />
      </div>
      <div className="p-1 m-1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias deserunt
        qui vitae quia et accusantium ipsam nisi eos ab. Officia dolore adipisci
        sunt molestias non mollitia voluptas, consectetur laboriosam asperiores?
      </div>
    </div>
  );
};

export default WebPart;
