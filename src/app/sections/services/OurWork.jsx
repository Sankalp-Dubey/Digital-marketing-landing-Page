import Iconify from "@/components/iconify";
import { SectionContainer } from "@/components/layout.component";
import {
  SectionSubTitle,
  SectionTitle,
} from "@/components/typography.component";
import React from "react";

const stepperDetails = [
  {
    id: 1,
    title: "Post Your Project Requirements",
    description:
      "Analyzing your projects requirements thoroughly, we select the most experienced developers.",
  },
  {
    id: 2,
    title: "Post Your Project Requirements",
    description:
      "Analyzing your projects requirements thoroughly, we select the most experienced developers.",
  },
  {
    id: 3,
    title: "Post Your Project Requirements",
    description:
      "Analyzing your projects requirements thoroughly, we select the most experienced developers.",
  },
  {
    id: 4,
    title: "Post Your Project Requirements",
    description:
      "Analyzing your projects requirements thoroughly, we select the most experienced developers.",
  },
];

const cards = [
  {
    id: 1,
    icon: "healthicons:desktop-app-outline",
    title: "Custom web development",
    fontSize: 42,
    background: `linear-gradient(
        147deg,
        rgba(83, 147, 251, 1) 0%,
        rgba(149, 69, 255, 1) 73%`,
  },
  {
    id: 2,
    icon: "solar:bag-4-bold",
    title: "E commerce development",
    fontSize: 40,
    background: `linear-gradient(
        90deg,
        rgba(17, 142, 229, 1) 31%,
        rgba(34, 78, 200, 1) 92%`,
  },
  {
    id: 3,
    icon: "bi:building-fill-gear",
    title: "Enterprise development",
    fontSize: 40,
    background: `#33495d`,
  },
  {
    id: 4,
    icon: "icon-park-solid:ring",
    title: "Third party integration",
    fontSize: 40,
    background: `linear-gradient(
        90deg,
        rgba(6, 147, 227, 1) 11%,
        rgba(5, 197, 216, 1) 85%`,
  },
  {
    id: 5,
    icon: "pixelarticons:ungroup",
    title: "Intra not application",
    fontSize: 40,
    background: `#33495d`,
  },
  {
    id: 6,
    icon: "mdi:content-save-cog-outline",
    title: "Content management system",
    fontSize: 40,
    background: `linear-gradient(90deg, rgba(6,143,226,1) 5%, rgba(5,206,214,1) 50%)`,
  },
  {
    id: 7,
    icon: "clarity:lightbulb-solid-badged",
    title: "Smart tied solution",
    fontSize: 40,
    background: `linear-gradient(147deg, rgba(55,184,253,1) 0%, rgba(113,109,254,1) 77%)`,
  },
];

function OurWork() {
  return (
    <SectionContainer>
      <div className="work-process">
        <div className="flex flex-col  text-center">
          <SectionSubTitle>Design & Management</SectionSubTitle>
          <SectionTitle>
            Our <span className="text-[#f57E32] font-[800]">Work</span> Process
          </SectionTitle>
        </div>
        <div className="horizontal-stepper"></div>
        <div className="vertical-stepper"></div>
        <div className="work-process-cards">
          {cards &&
            cards.map((card, key) => (
              <div
                key={key}
                className="py-5 px-3 rounded-lg card"
                style={{ background: card?.background }}
              >
                <div className="flex flex-col gap-3 text-white ">
                  <Iconify icon={card?.icon} fontSize={card?.fontSize} />
                  <div className="w-1/4 font-semibold">{card?.title}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </SectionContainer>
  );
}

export default OurWork;
