"use client";

import CountUp from "react-countup";

const AnimatedCounter = ({ val }: { val: number }) => {
  return (
    <div className="w-full">
      <CountUp decimals={0} decimal="," end={val} />
    </div>
  );
};

export default AnimatedCounter;
