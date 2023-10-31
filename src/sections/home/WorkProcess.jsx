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
    <section className="mt-3 mb-6 w-full ">
     <div className=" container m-auto p-6">
     <div className=" flex justify-center flex-col items-center  ">
         <p
        className="mt-0 w-full font-bold  text-center text-3xl">Frequently <span className=" text-[#f57E32] ">Asked</span> Question
        </p>
        <p  className=" mt-5 p-5 ">
          Take a look at a few of our projects for buisness like yours. we take great pride in finding solutions to your need
        </p>
      </div>

      <div className=" flex flex-col md:flex-row container w-full  " > 
      <div className="  px-5 mx-5 ">
        <div className=" ">
          <h1 className=" font-bold text-slate-700 my-5">
          How can I log into my account?
          </h1>
          <p>
          If you want to fifor your business, you must first determine what type of website you need
          </p>
        </div>
        <div className=" ">
          <h1 className=" font-bold text-slate-700 my-5">
          How can I log into my account?
          </h1>
          <p>
          If you want to fifor your business, you must first determine what type of website you need
          </p>
        </div>
        <div className=" ">
          <h1 className=" font-bold text-slate-700 my-5">
          How can I log into my account?
          </h1>
          <p>
          If you want to fifor your business, you must first determine what type of website you need
          </p>
        </div>
        
      </div>

      <div className="  px-5 mx-5">
        <div className=" ">
          <h1 className=" font-bold text-slate-700 my-5">
          How can I log into my account?
          </h1>
          <p>
          If you want to fifor your business, you must first determine what type of website you need
          </p>
        </div>
        <div className=" ">
          <h1 className=" font-bold text-slate-700 my-5">
          How can I log into my account?
          </h1>
          <p>
          If you want to fifor your business, you must first determine what type of website you need
          </p>
        </div>
        <div className=" ">
          <h1 className=" font-bold text-slate-700 my-5">
          How can I log into my account?
          </h1>
          <p>
          If you want to fifor your business, you must first determine what type of website you need
          </p>
        </div>
        
      </div>
      </div>
     </div>
    </section>
  );
}
