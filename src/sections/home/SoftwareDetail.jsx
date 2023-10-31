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
    <div style={{backgroundColor:"#f4f5fd"}} className="  w-full" >
      
      

      <div className="flex md:flex-row flex-col  gap-5 md:px-10  container m-auto   " >
        {/* aside tag starts here */}
        <div
          id="default-sidebar" 
          style={{backgroundColor: "#c74efa"}}
          className="  overflow-y-hidden w-full md:w-1/3 "

          aria-label="Sidebar"
        >
          <div className="h-full md:py-0 py-5 overflow-y-hidden  ">
            <ul className=" container h-full flex flex-col    font-medium mt-3  ">
              {softwares.map((card) => (
                <li
                
                
                  key={card.id}
                  
                  onClick={() => {
                    
                    setSelectedcategory(card.title);
                   
                    
                  }}
                  
                >
                  <a
                    className={` items-center p-2 rounded-lg group cursor-pointer flex hover:text-[#f57E32] ${
                      selectedcategory === card.title
                        ? " text-white"
                        : "text-white"
                    }`}
                  >
                   <Image src={card.icon}  alt="icons" height="30" width="30" />
                    <span className="ml-3 ">{card.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* aside ends here */}
        <div  className="  w-full md:w-2/3 p-2">
          {softwareDetails.filter((data) => data?.category === selectedcategory).map(
            (card,key) => (
              <div key={card.id} className=" p-6">
          
               <Image className=" " src={card.icon}  style={{filter:"brightness(0.1)"}} alt="icons" height={120} width={120} />
               <p className="ml-3 text-3xl font-bold mt-5">{card.category}</p>
               <p className="ml-3 mt-6">{card.ans}</p>
               <PrimaryButton className=" mt-5" url="/portfolios">
                Book Free Demo 
                </PrimaryButton>
                  </div>  )
          )}
        </div>
      </div>

      {/* <SectionContainer>
        <FaqQuestions />
      </SectionContainer> */}

      
     
    </div>
  );
}

export default SoftwareDetail;


