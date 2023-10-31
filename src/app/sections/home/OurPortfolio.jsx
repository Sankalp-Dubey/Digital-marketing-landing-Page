"use client"
import {
  OutlinedWhiteButton,
  PrimaryButton,
} from "@/components/buttons.component";
import PortfolioTab from "@/components/home/PortfolioTab";
import { SectionContainer } from "@/components/layout.component";
import {
  SectionSubTitle,
  SectionTitle,
} from "@/components/typography.component";
import React from "react";

function OurPortfolio() {
  return (
    <section className="portfolio-container bg-dark-teal pb-[100px]">
      <SectionContainer className="pt-5 mb-10">
        <SectionSubTitle className="text-center">
          <span className="uppercase text-white">Clients who trust us</span>
        </SectionSubTitle>
        <SectionTitle className="text-center">
          <span className="text-white text-[#f57E32]">Our Portfolios</span>
        </SectionTitle>
        <PortfolioTab />
      </SectionContainer>
      <PrimaryButton className="m-auto mt-5" url="/portfolios">
        View all projects
      </PrimaryButton>
    </section>
  );
}

export default OurPortfolio;
