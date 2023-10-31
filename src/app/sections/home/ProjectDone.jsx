"use client";
import { SectionContainer } from "@/components/layout.component";
import Image from "next/image";

export default function ProjectDone() {
  return (
    <section className="bg-[#F3F5FD] project-done-section">
      <SectionContainer
        className="w-full flex justify-between items-center gap-3 sm:gap-8 md:gap-10 company-status"
        style={{ marginTop: "-70px" }}
      >
        <div className="hidden md:block w-[30%]"></div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 md:gap-8 w-full md:w-[70%] px-5 -mb-10 md:-mb-0"></div>
      </SectionContainer>
    </section>
  );
}
