import { OutlinedWhiteButton } from "@/components/buttons.component";
import HeroSection from "@/components/common/HeroSection";
import { PageTitle } from "@/components/typography.component";
import React from "react";

function Trending() {
  return (
    <div className="mt-[-88px] mb-[90px]">
      <HeroSection
        backgroundImage="/images/coding.jpg"
        secondaryImage="/images/manwithlaptop.png"
      >
        <PageTitle>
          Web Dessign & <br />
          <span className="font-[800]"> Development</span>
        </PageTitle>
        <p className="text-lg my-5">
          Spirehub Softwares offers robust and scalable web application
          development services across various platforms and industry verticals.
        </p>
        <OutlinedWhiteButton url="/company" className="mt-8">
          Let&apos;s Work Together
        </OutlinedWhiteButton>
      </HeroSection>
    </div>
  );
}

export default Trending;
