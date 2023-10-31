import React from "react";

const CurveShapeBottom = ({
  curveD = "M0,128L120,144C240,160,480,192,720,186.7C960,181,1200,139,1320,117.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z",
  firstColor = "#00ffff",
  secondColor = "#ff0000",
  thirdColor = "#ffffff",
  fourthColor = "#33495d",
}) => {
  return (
    <div className="bg-shape-group w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        width="100%"
        preserveAspectRatio="none"
        className="z-50 h-[70px] sm:h-[80px] md:h-[110px] lg:h-[150px]"
      >
        <path fill={fourthColor} fillOpacity="1" d={curveD}></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        width="100%"
        preserveAspectRatio="none"
        className="z-40 h-[70px] sm:h-[80px] md:h-[110px] lg:h-[150px] -mt-[250px]"
      >
        <path fill={thirdColor} fillOpacity="1" d={curveD}></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        width="100%"
        preserveAspectRatio="none"
        className="z-30 h-[70px] sm:h-[80px] md:h-[110px] lg:h-[150px]"
      >
        <path fill={secondColor} fillOpacity="1" d={curveD}></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        width="100%"
        preserveAspectRatio="none"
        className="z-20 h-[70px] sm:h-[80px] md:h-[110px] lg:h-[150px]"
      >
        <path fill={firstColor} fillOpacity="1" d={curveD}></path>
      </svg>
    </div>
  );
};

export default CurveShapeBottom;
