"use client";
import ToolsTab from "@/components/home/ToolsTab";
import { SectionContainer } from "@/components/layout.component";
import {
  SectionSubTitle,
  SectionTitle,
} from "@/components/typography.component";

// =================== Tools Technologies =========================== //

export default function ToolsTechnologies() {
  return (
    <section className="tools-technology -mt-[50px]">
      <SectionContainer className="text-center">
        <SectionSubTitle className="mt-4">Tools & Technology</SectionSubTitle>
        <SectionTitle>
          We are <span className="font-[800] text-[#f57E32]">experts</span> in
          the following technologies.
        </SectionTitle>
      </SectionContainer>
      <ToolsTab />
    </section>
  );
}
