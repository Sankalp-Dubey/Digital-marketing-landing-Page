import { OutlinedWhiteButton } from "@/components/buttons.component";
import { SectionContainer } from "@/components/layout.component";
import {
  SectionSubTitle,
  SectionTitle,
} from "@/components/typography.component";
import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio-container bg-dark-teal pb-28">
      <SectionContainer className="pt-5">
        <SectionSubTitle className="text-center">
          <span className="uppercase text-white">Clients who trust us</span>
        </SectionSubTitle>
        <SectionTitle className="text-center">
          <span className="text-white">Our Portfolios</span>
        </SectionTitle>
        <div className="flex justify-between gap-24 mt-10 mb-20">
          <div className="w-full flex flex-col gap-8">
            <div className="rounded-2xl px-16">
              <Image
                alt="portfolio-image"
                src="/images/portfolio-1.jpg"
                width={300}
                height={400}
                className="rounded-t-2xl h-auto w-full"
              />
            </div>
            <div className="portfolio-footer flex justify-center gap-8 items-center">
              <OutlinedWhiteButton>UI/UX Design</OutlinedWhiteButton>
              <OutlinedWhiteButton>Laravel</OutlinedWhiteButton>
            </div>
          </div>
          <div className="w-full flex flex-col gap-8">
            <div className="rounded-2xl px-16">
              <Image
                alt="portfolio-image"
                src="/images/portfolio-2.jpg"
                width={300}
                height={400}
                className="rounded-t-2xl h-auto w-full"
              />
            </div>
            <div className="portfolio-footer flex justify-center gap-8 items-center">
              <OutlinedWhiteButton>UI/UX Design</OutlinedWhiteButton>
              <OutlinedWhiteButton>Laravel</OutlinedWhiteButton>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default Portfolio;
