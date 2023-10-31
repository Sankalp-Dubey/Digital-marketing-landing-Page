"use client";
import { SectionContainer } from "@/components/layout.component";
import {
  SectionSubTitle,
  SectionTitle,
} from "@/components/typography.component";
import Image from "next/image";
import HiringModal from "./HiringModal";
import { useState } from "react";

const hireDevelopers = [
  {
    id: 1,
    img: "/images/Full-Stack-Developers.png",
    title: "Hire Full Stack Developers",
  },
  {
    id: 2,
    img: "/images/Front-End-Developers.png",
    title: "Hire Front End Developers",
  },
  {
    id: 3,
    img: "/images/UI-UX-Experts.png",
    title: "Hire UI/UX Experts",
  },
  {
    id: 4,
    img: "/images/wordpress.png",
    title: "Hire WordPress Developers",
  },
  {
    id: 5,
    img: "/images/Php.png",
    title: "Hire PHP Developers",
  },
  {
    id: 6,
    img: "/images/Laravel.png",
    title: "Hire Laravel Developers",
  },
  {
    id: 7,
    img: "/images/Node-JS.png",
    title: "Hire Node JS Developers",
  },
  {
    id: 8,
    img: "/images/Python.png",
    title: "Hire Python Developers",
  },
  {
    id: 9,
    img: "/images/React-JS.png",
    title: "Hire React JS Developers",
  },
  {
    id: 10,
    img: "/images/Angular-JS.png",
    title: "Hire Angular Developers",
  },
  {
    id: 11,
    img: "/images/ASP.NET-Developer.png",
    title: "Hire ASP.NET Developers",
  },
  {
    id: 12,
    img: "/images/logo-java.png",
    title: "Hire Java Developers",
  },
  {
    id: 13,
    img: "/images/Android-Native.png",
    title: "Hire Android Developers",
  },
  {
    id: 14,
    img: "/images/iOS-Developer.png",
    title: "Hire iOS Developers",
  },
  {
    id: 15,
    img: "/images/React-JS.png",
    title: "Hire React Native Developers",
  },
  {
    id: 16,
    img: "/images/Software-QA-Testers.png",
    title: "Hire Software QA Testers",
  },
  {
    id: 17,
    img: "/images/Flutter.png",
    title: "Hire Flutter Developers",
  },
];

const ExpertResources = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [selectedDeveloper, setSelectedDeveloper] = useState(undefined);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal(developer) {
    setIsOpen(true);
    setSelectedDeveloper(developer);
  }
  return (
    <div className="expert-resources">
      <SectionContainer>
        <div className="flex flex-col gap-8 text-center items-center">
          <SectionTitle>
            Expert <span className="text-[#f57E32] font-[800] ">Resources</span>{" "}
            Available For:
          </SectionTitle>
          <div>
            <div className="expert-resources-container">
              {hireDevelopers &&
                hireDevelopers.map((developer, key) => (
                  <div
                    key={key}
                    className="p-2 expert-resources-items"
                    onClick={() => {
                      openModal(developer);
                    }}
                  >
                    <div className="flex gap-2 items-center">
                      <Image
                        src={developer?.img}
                        height={35}
                        width={35}
                        alt=""
                      />
                      <p className="font-semibold">{developer?.title}</p>
                    </div>
                  </div>
                ))}
            </div>
            <HiringModal
              isOpen={isOpen}
              closeModal={closeModal}
              selectedDeveloper={selectedDeveloper}
            />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default ExpertResources;
