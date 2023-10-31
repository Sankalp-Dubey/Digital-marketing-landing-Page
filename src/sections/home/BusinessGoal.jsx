"use client";
import { PrimaryButton } from "@/components/buttons.component";
import { SectionContainer } from "@/components/layout.component";
import { SectionTitle } from "@/components/typography.component";
import Image from "next/image";
import React from "react";
const software = [
  {
    id: 1,
    title: "ERP Software",
  },
  {
    id: 1,
    title: "CRM Software",
  },
  {
    id: 1,
    title: "LMS",
  },
  {
    id: 1,
    title: "Marketplace (Web & Apps)",
  },
  {
    id: 1,
    title: "Food Delivery (Web & Mob Apps)",
  },
  {
    id: 1,
    title: "Service Booking Marketplace",
  },
  {
    id: 1,
    title: "E-wallets system for digital payment",
  },
  {
    id: 1,
    title: "Classifieds Web/App portal",
  },
];

const softwareDetails = [
  {
    category: "ERP Software",
    Ques: "How to Choose a Web Design Company?",
  },
  {
    category: "CRM Software",
    Ques: "How to Choose a Web Design Company?",
  },
  {
    category: "LMS",
    Ques: "How to Choose a Web Design Company?",
  },
  {
    category: "Marketplace (Web & Apps)",
    Ques: "How to Choose a Web Design Company?",
  },
  {
    category: "Food Delivery (Web & Mob Apps)",
    Ques: "How to Choose a Web Design Company?",
  },
  {
    category: "Service Booking Marketplace",
    Ques: "How to Choose a Web Design Company?",
  },
  {
    category: "E-wallets system for digital payment",
    Ques: "How to Choose a Web Design Company?",
  },
  {
    category: "Classifieds Web/App portal",
    Ques: "How to Choose a Web Design Company?",
  },
];
function BusinessGoal() {
  return (
    <section className="bg-lite-gray md:pb-8 pb-5">
      <SectionContainer className="w-full  ">
        <div className="business-goal-container">
          <div className="goal-content-container flex flex-col gap-2 flex-1">
            <SectionTitle className=" h-[32rem] w-[10rem]">
              <span>
                We Assist Our Clients In{" "}
                <span className="font-[800] text-[#f57E32]">Reaching </span>{" "}
                Their Business Goal
              </span>
            </SectionTitle>
            <div>
              <p className="text-base mb-3">
                SpireHub Softwares is a dynamic and innovative web and app
                development company that specializes in crafting cutting-edge
                digital solutions for businesses across diverse industries. With
                a commitment to excellence and a passion for technology.
              </p>
              <p className="mt-0">
                Together, let&apos;s navigate the evolving digital landscape and
                achieve remarkable success. Your journey to transformation
                starts here.
              </p>
            </div>

            {/* <PrimaryButton>Schedule a Meeting</PrimaryButton> */}
          </div>{" "}
          <div className="goal-img-container">
            <Image
              alt="spirehub-team"
              src="/images/girlwithmobile-stripe.png"
              className="w-auto h-full"
              width={500}
              height={700}
            />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default BusinessGoal;
