import React from "react";
import { SectionContainer } from "../layout.component";
import Image from "next/image";

const HireHeroSection = ({
  backgroundImage,
  secondaryImage,
  children,
  ...others
}) => {
  const customStyle = {
    backgroundImage: `linear-gradient(to right, 
      rgba(39,61,80, 0.4), rgba(39,61,80, 0.4)), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };
  return (
    <div
      className="py-14 md:py-20 lg:py-24 text-white min-h-screen flex items-center"
      style={customStyle}
      {...others}
    >
      <div className="w-full">
        <SectionContainer className="">
          <div className="flex items-center">
            <div className="w-full">{children}</div>
            {secondaryImage && (
              <Image
                className="w-full h-auto hidden lg:block"
                src={secondaryImage}
                alt="hero-secondary-image"
                width={600}
                height={600}
              />
            )}
          </div>
        </SectionContainer>
      </div>
    </div>
  );
};

export default HireHeroSection;