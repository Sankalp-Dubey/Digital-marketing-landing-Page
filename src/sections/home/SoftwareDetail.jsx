"use client";
import "../../styles/faqs.css";
// import "../../styles/software.css"
import { useState } from "react";
import {
  OutlinedWhiteButton,
  PrimaryButton,
  SecondaryButton,
} from "@/components/buttons.component";
import CurveShape from "@/components/common/CurveShape";
import HeroSection from "@/components/common/HeroSection";
import { SectionContainer } from "@/components/layout.component";
import {
  PageTitle,
  SectionSubTitle,
  SectionTitle,
} from "@/components/typography.component";
import FaqQuestions from "@/sections/faq/FaqQuestions";
import Image from "next/image";
import React from "react";
import { data } from "autoprefixer";

const softwares = [
  {
    id: 1,
    title: "ERP Software",
    icon: "/icons/erp.png",
  },
  {
    id: 2,
    title: "CRM Software",
    icon: "/icons/crm.png",
  },
  {
    id: 3,
    title: "LMS",
    icon: "/icons/lws.png",
  },
  {
    id: 4,
    title: "Marketplace (Web & Apps)",
    icon: "/icons/market.png",
  },
  {
    id: 5,
    title: "Food Delivery (Web & Mob Apps)",
    icon: "/icons/food.png",
  },
  {
    id: 6,
    title: "Service Booking Marketplace",
    icon: "/icons/service.png",
  },
  {
    id: 7,
    title: "E-wallets system for digital payments ",
    icon: "/icons/e.png",
  },
  {
    id: 8,
    title: "Classifieds Web/App Portal",
    icon: "/icons/classi.png",
  },
];
const softwareDetails = [
  {
    category: "ERP Software",
    icon: "/icons/blu1.png",
    ans: "If you want to find the best web design company in India for your business, you must first determine what type of website you need. Budget is also an important factor to consider. To ensure a proven track record, search online for companies in India and read customer testimonials or reviews.",
  },
  {
    category: "CRM Software",
    icon: "/icons/crm.png",
    ans: "A wireframe is a blueprint for the web page you are about to create. Known also as a page schematic or screen blueprint, a wireframe helps you arrange elements – such as buttons, banners, and navigation bars – in a way that helps them achieve their purposes.",
  },
  {
    category: "LMS",
    icon: "/icons/lws.png",
    ans: "Yes.",
  },
  {
    category: "Marketplace (Web & Apps)",
    icon: "/icons/market.png",
    ans: "We use paypal basic as our default payment system. So you can pay us using your paypal account or using your credit card supported on paypal. Also we accept international credit cards transaction using EBS payment method and also support wire transfer direct to our bank.",
  },
  {
    category: "Food Delivery (Web & Mob Apps)",
    icon: "/icons/food.png",
    ans: "If you want to find the best web design company in India for your business, you must first determine what type of website you need. Budget is also an important factor to consider. To ensure a proven track record, search online for companies in India and read customer testimonials or reviews.",
  },
  {
    category: "Service Booking Marketplace",
    icon: "/icons/service.png",
    ans: "All prices are in USD (United States Dollar).",
  },
  {
    category: "E-wallets system for digital payments ",
    icon: "/icons/e.png",
    ans: "If you are not satisfied by our service we guarantee to issue you a full refund when you request.",
  },
  {
    category: "Classifieds Web/App Portal",
    icon: "/icons/classi.png",
    ans: "If you don't want your design to be shown in our portfolio or for personal references, we are willing to sign an NDA to protect your rights.",
  },
  {
    category: "Website Development",
    Ques: "How to Choose a Web Design Company?",
    ans: "If you want to find the best web design company in India for your business, you must first determine what type of website you need. Budget is also an important factor to consider. To ensure a proven track record, search online for companies in India and read customer testimonials or reviews.",
  },
  {
    category: "CMS Development",
    Ques: "Do you sign an NDA (non disclosure agreement)?",
    ans: "Yes.",
  },
  {
    category: "App Development",
    Ques: "How to Choose a Web Design Company?",
    ans: "If you want to find the best web design company in India for your business, you must first determine what type of website you need. Budget is also an important factor to consider. To ensure a proven track record, search online for companies in India and read customer testimonials or reviews.",
  },
  {
    category: "Hire Team",
    Ques: "How can we pay: Amex, Mastercard, Paypal?",
    ans: "We use paypal basic as our default payment system. So you can pay us using your paypal account or using your credit card supported on paypal. Also we accept international credit cards transaction using EBS payment method and also support wire transfer direct to our bank.",
  },
  {
    category: "Digital Marketing",
    Ques: "What is a Wireframe in Web Design?",
    ans: "A wireframe is a blueprint for the web page you are about to create. Known also as a page schematic or screen blueprint, a wireframe helps you arrange elements – such as buttons, banners, and navigation bars – in a way that helps them achieve their purposes.",
  },
  {
    category: "Hosting Services",
    Ques: "Do you sign an NDA (non disclosure agreement)?",
    ans: "Yes.",
  },
];
const customStyle = {
  backgroundImage: `url(/images/growbusiness.webp)`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
};
function SoftwareDetail() {
  const [selectedcategory, setSelectedcategory] = useState(
    softwares[0]?.title
  );
  return (
    <div style={{backgroundColor:"#7F3AC5"}} className=" w-full" >
      <div className=" container m-auto flex flex-col md:flex-row py-7 ">
       <div className=" p-7 w-full md:w-1/3  ">
       <h1 className=" text-white text-3xl font-bold p-2">
       What makes us the best Digital Marketing Company in Noida
       </h1>
       </div>
       {/* 1st colum */}
       <div  className=" w-full md:w-1/3 px-3 mt-12 ">
        <div className="my-5 bg-white rounded-3xl flex flex-col justify-center items-center p-7 text-center">
        <div  style={{backgroundColor:"#7F3AC5"}} className=" h-[200px] w-[200px] rounded-full my-4 p-6"><img src="/icons/e.png" alt="img" height={50} width={50} ></img></div>
        <h1 className=" text-2xl font-bold my-5">Dedicated Specialists</h1>
        <p>Get dedicated specialists with proven expertise for different key areas of branding and digital marketing in Lucknow. Thus, providing a one stop digital solution for all marketing functions! </p>
        </div>
        <div className="my-5 bg-white rounded-3xl flex flex-col justify-center items-center p-7 text-center">
        <div style={{backgroundColor:"#F7415C"}} className=" h-[200px] w-[200px] rounded-full my-4 p-6"><img src="/icons/e.png" alt="img" height={50} width={50} ></img></div>
        <h1 className=" text-2xl font-bold my-5">Performance Guaranteed</h1>
        <p>100% Guarantee of increase in Sales, Leads, brand awareness, Social reach & likes. Being the best digital marketing company in Lucknow, we offer you consistent deliverables with a result oriented approach! </p>
        </div>
       </div>
   {/* 2nd column */}
       <div className=" w-full pt-1 mt-1 px-3  ">
       <div className="  bg-white rounded-3xl flex flex-col justify-center items-center p-7 text-center">
        <div  style={{backgroundColor:"#F95A04"}} className=" h-[200px] w-[200px] rounded-full my-4 p-6"><img src="/icons/e.png" alt="img" height={50} width={50} ></img></div>
        <h1 className=" text-2xl font-bold my-5">Great Savings</h1>
        <p>Save a great deal by avoiding multiple resource hiring, overhead, and operational costs. Hand it over to the certified digital marketing experts in Lucknow, who have been there, done that!</p>
        </div>
        <div className="my-5 bg-white rounded-3xl flex flex-col justify-center items-center p-7 text-center">
        <div  style={{backgroundColor:"#2FAED8"}} className=" h-[200px] w-[200px] rounded-full my-4 p-6"><img src="/icons/e.png" alt="img" height={50} width={50} ></img></div>
        <h1 className=" text-2xl font-bold my-5">100% Transparency</h1>
        <p>100% transparent digital marketing services in Lucknow with live operations, reports and status updates. Keeping you up to date with the latest digital marketing trends! </p>
        </div>
       </div>
         {/* 3rd column */}
      </div>
     
    </div>
  );
}

export default SoftwareDetail;


