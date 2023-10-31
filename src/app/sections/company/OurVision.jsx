import { PrimaryButton } from "@/components/buttons.component";
import Iconify from "@/components/iconify";
import { SectionContainer } from "@/components/layout.component";
import { Heading } from "@/components/typography.component";
import React from "react";

function OurVision() {
  return (
    <div className="our-vision pb-[100px]">
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
          <div className="our-vision-content md:mb-0 mb-10">
            <Heading className="text-transform: capitalize">
              Our <span className="font-[800] text-[#f57E32]">Vision</span>
            </Heading>
            <p className="lg:mt-8 mt-5 lg:mb-4 mb-3">
              At SpireHub Softwares, our vision is to be a trailblazing force in
              the digital realm, empowering businesses with transformative web
              and app solutions. We aim to set new benchmarks in innovation and
              user-centric design, fostering growth and success for our clients.{" "}
            </p>
            <p>
              Through cutting-edge technology and unwavering dedication, we
              aspire to shape the future of digital experiences and leave a
              lasting impact on the global tech landscape.
            </p>

            <PrimaryButton className="mt-4">Schedule a Meeting</PrimaryButton>
          </div>
          <div className="our-vision-bubbles grid grid-cols-2 md:gap-10 gap-5">
            <div className="love-for-technology">
              <Iconify icon="mdi:heart" fontSize={30} />
              <p className="mt-2 our-vision-width">Loves for Technology</p>
            </div>
            <div className="dedication-and-credibility">
              <Iconify icon="icon-park-twotone:protect" fontSize={30} />
              <p className="mt-2 our-vision-width">
                Dedication and Credibility
              </p>
            </div>
            <div className="excellence-and-transparency">
              <Iconify icon="healthicons:clean-hands" fontSize={45} />
              <p className="mt-2 our-vision-width">
                Excellence and Transparency
              </p>
            </div>
            <div className="strive-for-excellence">
              <Iconify icon="ion:rocket-sharp" fontSize={35} />
              <p className="mt-2 our-vision-width">Strive for Excellence</p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}

export default OurVision;
