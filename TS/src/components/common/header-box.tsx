"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const HeaderBox = ({
  type = "title",
  title,
  subtext,
  user,
}: HeaderBoxProps) => {
  const router = useRouter();
  return (
    <>
      <div className="flex gap-2">
        <button type="button" onClick={() => router.back()}>
          <Image
            src="/icons/actions/nav-prev.svg"
            width={24}
            height={24}
            alt="back"
          />
          Back
        </button>
      </div>
      <div className="header-box">
        <h1 className="header-box-title">
          {title}
          {type === "greeting" && (
            <span className="text-bankGradient">&nbsp;{user}</span>
          )}
        </h1>
        <p className="header-box-subtext">{subtext}</p>
      </div>
      <div className="header-box-divider"></div>
    </>
  );
};

export default HeaderBox;
