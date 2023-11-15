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

function Service() {
  return (
   
    <section style={{backgroundColor:"#c552ff "}} className=" w-full p-7  ">
     <div className=" container m-auto flex flex-col md:flex-row pt-7 px-7">
     <div className="md:w-1/2 p-7">
      <p className=" text-xl font-bold font-sans text-white"> We Measure Our Performance</p>
      <h1 className=" py-4 text-3xl text-white font-sans font-bold">Digital Marketing means Digital Results</h1>
      <p className=" text-lg text-white font-sans">Start working with our digital marketing experts that can provide you a measurable outcome.</p>
      <div className=" flex flex-col md:flex-row py-7 ">
      <div className=" p-6"><h1 className=" text-5xl font-sans font-bold text-white">200+</h1><span className="font-sans font-bold text-lg text-white">Leads</span></div>
      <div className=" p-6"><h1 className=" text-5xl font-sans font-bold text-white">674+</h1><span className="font-sans font-bold text-lg text-white">Likes</span></div>
      <div className=" p-6"><h1 className=" text-5xl font-sans font-bold text-white">76%</h1><span className="font-sans font-bold text-lg text-white">Social Reach</span></div>
      </div>
     </div>

     <div className=" pt-5 px-5">
      <img src="https://digitalmarketingrobo.com/wp-content/uploads/2021/12/best-digital-marketing-company-in-lucknow.png" alt=""/>
     </div>
     </div>
     
    </section>
  
  );
}

export default Service;
