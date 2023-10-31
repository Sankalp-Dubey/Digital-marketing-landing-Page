import React from "react";

const CurveShape = ({
  curveD = "M0,128L120,144C240,160,480,192,720,186.7C960,181,1200,139,1320,117.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z",
  firstColor = "#00ffff",
  secondColor = "#ff0000",
  thirdColor = "#ffffff",
  fourthColor = "#33495d",
  className = "",
}) => {
  return (
    <div className={`bg-shape-group w-full ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        width="100%"
        preserveAspectRatio="none"
        className="h-[70px] sm:h-[80px] md:h-[110px] lg:h-[150px]"
      >
        <path fill={firstColor} fillOpacity="1" d={curveD}></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        width="100%"
        preserveAspectRatio="none"
        className="h-[70px] sm:h-[80px] md:h-[110px] lg:h-[150px] -mt-[64px] sm:-mt-[73px] md:-mt-[103px] lg:-mt-[138px]"
      >
        <path fill={secondColor} fillOpacity="1" d={curveD}></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        width="100%"
        preserveAspectRatio="none"
        className="h-[70px] sm:h-[80px] md:h-[110px] lg:h-[150px] -mt-[68px] sm:-mt-[78px] md:-mt-[108px] lg:-mt-[147px]"
      >
        <path fill={thirdColor} fillOpacity="1" d={curveD}></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        width="100%"
        preserveAspectRatio="none"
        className="h-[70px] sm:h-[80px] md:h-[110px] lg:h-[150px] -mt-[65px] sm:-mt-[75px] md:-mt-[105px] lg:-mt-[140px]"
      >
        <path fill={fourthColor} fillOpacity="1" d={curveD}></path>
      </svg>
    </div>
  );
};

export default CurveShape;
