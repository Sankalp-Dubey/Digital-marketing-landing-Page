"use client";
import ServiceCard from "@/components/home/ServiceCard_old";
import Iconify from "@/components/iconify";
import { SectionContainer } from "@/components/layout.component";
import {
  SectionSubTitle,
  SectionTitle,
} from "@/components/typography.component";

const allProcess = [
  {
    id: 1,
    count: "1",
    title: "Choose A Service",
    description: "Check the service as per your need.",
  },
  {
    id: 2,
    count: "2",
    title: "Request A Meeting",
    description: "Book a slot for meeting.",
  },
  {
    id: 3,
    count: "3",
    title: "Start Planning",
    description: "Add up the execution to meet the goal",
  },
  {
    id: 4,
    icon: "charm:tick",
    title: "Lets Make It Happen",
    description: "Work together to ensure your requirement id full-filled",
  },
];

// =================== WORK PROCESS =========================== //

export default function WorkProcess() {
  return (
    <section className="mt-10">
      <SectionContainer className="w-full py-20">
        <SectionSubTitle className="text-center">
          <span>DESIGN & MANAGEMENT</span>
        </SectionSubTitle>
        <SectionTitle className="text-center">
          <span>
            Our <span className="font-[800] text-[#f57E32]"> Work</span> Process
          </span>
        </SectionTitle>
        <div
          className="work-process-container"
          style={{ justifyItems: "center" }}
        >
          {allProcess.map((item, key) => (
            <div
              className="process-items text-center relative flex flex-col items-center justify-center w-full h-full scaleup-image"
              key={key}
            >
              <div className={`count-container count-${key + 1}`}>
                <span>{item?.count}</span>
                <Iconify icon={item?.icon} fontSize={40} />
              </div>
              <div className="flex flex-col gap-2">
                <SectionSubTitle>
                  <span className="font-[800] capitalize">{item?.title}</span>
                </SectionSubTitle>
                <p>{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
