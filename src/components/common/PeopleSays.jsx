"use client";
import { SectionContainer } from "@/components/layout.component";
import PortfolioTab from "@/components/home/PortfolioTab";

import {
  SectionSubTitle,
  SectionTitle,
} from "@/components/typography.component";
import { baseURL } from "@/config";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const Slider = () => {
  const { testimonials } = useSelector((state) => state.testimonials);
  return (
    <div  style={{backgroundColor:"#f4f5fd"}}  className=" w-full mb-7  ">
    <div className=" container m-auto">
    <div className="pt-5  flex justify-center flex-col items-center text-center  ">
       
       <h1 className=" font-bold text-3xl  text-[#f57E32]">
          <span className="uppercase ">Our Projects</span>
        </h1>
        <p  className=" mt-3 px-5 pt-5 ">
          Take a look at a few of our projects for buisness like yours. we take great pride in finding solutions to your need
        </p>
       
      </div>

      {/* <div className=" flex flex-row">
        <div className=" w-1/3 p-4">
          <img src="/icons/LMS.jpg" alt="img" height={300} width={300}></img>
          <h1 className=" mt-5 text-center font-bold">LMS Solution</h1>
        </div>
        <div className=" w-1/3 p-4">
          <img src="/icons/ERP.jpg" alt="img" height={300} width={300}></img>
          <h1 className=" mt-5 text-center font-bold">ERP Solution</h1>
        </div>
        <div className=" w-1/3 p-4">
          <img src="/icons/CRM.jpg" alt="img" height={300} width={300}></img>
          <h1 className=" mt-5 text-center font-bold">CRM Solution</h1>
        </div>
      </div> */}
      <PortfolioTab />
    </div>
    </div>

    
  );
};

export default Slider;
