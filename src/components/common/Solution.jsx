"use client";
import React from "react";
import { SectionContainer } from "../layout.component";
import { SectionSubTitle, SectionTitle } from "../typography.component";
import Image from "next/image";

function Solution({ className }) {
  return (
    <section className=" mt-6 mb-6 w-full">
      <div className=" container m-auto flex flex-col md:flex-row p-7" >
       <div className="md:w-1/2 p-6 mt-6">
        <img src="https://digitalmarketingrobo.com/wp-content/uploads/2021/12/digital-marketing-company-in-lucknow.png" alt="img"/>
       </div>

       <div className=" md:w-1/2 p-4">
       <p style={{color:"#6EC1E4"}} className=" text-xl font-bold ">Know more about our</p>
          <h1 style={{color:"#c552ff"}} className=" mt-4 text-3xl font-bold">Digital Marketing Services</h1>
          <p className=" font-sans pr-7 py-7">Increase your Website Traffic and Website Rankings on various types of Search Engines including Google Search Results through Organic Marketing</p>
          <p className=" font-sans pr-7 ">Pay Per Click and get instant Website Traffic and conversions through Paid Advertising on Google Search and Display networks</p>

       </div>
      </div>
    </section>
  );
}

export default Solution;
