"use client";
import { PrimaryButton } from "@/components/buttons.component";
import { SectionContainer } from "@/components/layout.component";
import { SectionTitle } from "@/components/typography.component";
import Image from "next/image";
import React from "react";

function BusinessGoal() {
  return (
    <section className="bg-lite-gray md:pb-8 pb-5">
      <SectionContainer className="w-full">
        <div className="business-goal-container">
          <div className="goal-content-container flex flex-col gap-2 flex-1">
            <SectionTitle>
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
          </div>
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
layout;
export default BusinessGoal;
