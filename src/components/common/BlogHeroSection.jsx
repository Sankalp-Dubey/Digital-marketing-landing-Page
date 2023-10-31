import React from "react";
import { SectionContainer } from "../layout.component";
import Image from "next/image";

const BlogHeroSection = ({
  backgroundImage,
  secondaryImage,
  children,
  ...others
}) => {
  const customStyle = {
    backgroundImage: `linear-gradient(to right, 
      rgba(39,61,80, 0.9), rgba(39,61,80, 0.9)), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };
  return (
    <div
      className="pt-20 md:py-20 lg:py-24 text-white min-h-[60vh] flex items-center"
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

export default BlogHeroSection;
