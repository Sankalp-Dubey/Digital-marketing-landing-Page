import { SectionContainer } from "@/components/layout.component";
import Image from "next/image";
import React from "react";

const Counter = () => {
  return (
    <section className="bg-[#ede8f7]">
      <SectionContainer
        className="w-full flex justify-between items-center gap-3 sm:gap-8 md:gap-10"
        style={{ marginTop: "-80px" }}
      >
        <div className="hidden md:block">
          <Image
            src="/images/man-with-laptop.png"
            alt="A man with laptop"
            width={200}
            height={300}
            className="w-52 h-auto"
          />
        </div>
        <div className="-mt-7">
          <p className="font-[800] text-2xl sm:text-3xl">+500</p>
          <p className="text-base sm:text-lg">Projects Done</p>
        </div>
        <div className="-mt-7">
          <p className="font-[800] text-2xl sm:text-3xl">+75</p>
          <p className="text-base sm:text-lg">Countries</p>
        </div>
        <div className="-mt-7">
          <p className="font-[800] text-2xl sm:text-3xl">+100</p>
          <p className="text-base sm:text-lg">Full Time Employement</p>
        </div>
      </SectionContainer>
    </section>
  );
};

export default Counter;
