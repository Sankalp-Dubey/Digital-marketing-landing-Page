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

export default function Faq() {
  return (
    <section style={{marginTop: "-85px", marginBottom:"-65px"}} className=" mb-6 w-full">
    <div style={{backgroundColor: "#1CF3F8"}} className=" container m-auto p-6 w-3/4 flex flex-col md:flex-row text-center">
     <div className=" flex flex-row justify-center items-center md:w-1/3 p-2">
     <div>

     </div>
     <div >
       <h1 className=" text-xl  font-sans font-bold">Noida</h1>
        <p className="  font-sans text-gray-400">our office</p>
       </div>
     </div>

     <div className=" flex flex-row justify-center p-2 md:w-1/3">
     <div>

     </div>
     <div>
       <h1 className=" text-xl font-sans font-bold">+91 8467947766</h1>
        <p className="  font-sans text-gray-400">Give us a call</p>
       </div>
     </div>

     <div className=" flex flex-row justify-center p-2 md:w-1/3">
     <div>

     </div>
     <div>
       <h1 className=" text-xl  font-sans font-bold">info@spirehub.com</h1>
        <p className="  font-sans text-gray-400">Get in touch</p>
       </div>
     </div>
    </div>
    </section>
  );
}
