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

function OurPortfolio() {
  return (
   
    <section  className=" w-full  mb-8 mt-6 ">
      <div className="pt-5 mb-10 flex justify-center flex-col items-center text-center  ">
       
       <h1 className=" font-bold text-3xl  text-[#f57E32]">
          <span className="uppercase ">Our Best Services</span>
        </h1>
        <p  className=" mt-5 p-3   ">
          We design and develop website that give result
        </p>
       
      </div>
      

      <div className=" container m-auto ">
        <div className=" flex  flex-col md:flex-row   md:pb-8   px-4 mr-4"  >
          <div  className="  flex flex-row ">
            <div className=" p-4 ">
              <img src="/icons/service1.png" alt="img" height={50} width={50}></img>
            </div>

            <div>
              <h1 className=" py-4 font-bold">Website Development</h1>
              <p>Noun is the name of any person place things or animals</p>
            </div>
          </div>

          <div  className=" flex flex-row ">
            <div className=" p-4">
              <img src="/icons/service2.png" alt="img" height={50} width={50}></img>
            </div>

            <div>
              <h1 className=" py-4 font-bold">Mobile App Development</h1>
              <p>Noun is the name of any person place things or animals</p>
            </div>
          </div>

          <div  className=" flex flex-row ">
            <div className=" p-4 ">
              <img src="/icons/service3.png" alt="img" height={50} width={50}></img>
            </div>

            <div>
              <h1 className=" py-4  font-bold">E-Commerce Development</h1>
              <p>Noun is the name of any person place things or animals</p>
            </div>
          </div>
        </div>


        <div className=" flex  flex-col md:flex-row px-4  mr-4"  >
          <div  className="   flex flex-row ">
            <div className=" p-4 ">
              <img src="/icons/service4.png" alt="img" height={50} width={50}></img>
            </div>

            <div>
              <h1 className=" py-4  font-bold">Digital marketing services</h1>
              <p>Noun is the name of any person place things or animals</p>
            </div>
          </div>

          <div  className=" flex flex-row ">
            <div className=" p-4 ">
              <img src="/icons/service5.png" alt="img" height={50} width={50}></img>
            </div>

            <div>
              <h1 className=" py-4  font-bold">Hire Resources (Remote Team)</h1>
              <p>Noun is the name of any person place things or animals</p>
            </div>
          </div>

          <div  className=" flex flex-row ">
            <div className=" p-4 ">
              <img src="/icons/service6.png" alt="img" height={50} width={50}></img>
            </div>

            <div>
              <h1 className=" py-4  font-bold">Software maintainance services</h1>
              <p>Noun is the name of any person place things or animals</p>
            </div>
          </div>
        </div>
      </div>

     
    </section>
  
  );
}

export default OurPortfolio;
