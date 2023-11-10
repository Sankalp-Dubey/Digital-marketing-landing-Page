"use client"
import React from "react";
import { SectionContainer } from "../layout.component";
import { SectionSubTitle, SectionTitle } from "../typography.component";
import Slider from "react-slick";
import Image from "next/image";
import { useSelector } from "@/redux/store";
import { baseURL } from "@/config";

// ================= || TESTIMONIAL || =============== //

const Contact = () => {
  const { story } = useSelector((state) => state.story);
  const parse = require("html-react-parser");
  const sliderSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  

  return (
    <section style={{backgroundColor:"#c552ff "}} className=" w-full  md:py-4 lg:py-4 ">
      <div className=" container m-auto text-white flex flex-col md:w-3/4  p-5">
      <div className=" w-full  px-3  md:p-8 m-0">
       <div className="  flex flex-col text-center">
       <h1 className="  py-2 font-sans font-bold text-xl md:text-2xl">FREE Website Analysis & SEO Consultation</h1>
       <h1 className=" py-2 font-bold font-sans text-xl  md:text-5xl">Get Website & SEO Analysis!</h1>
    
       </div>
      </div>

      <div className="  w-full  px-3  m-0 md:p-8 ">
       <div className=" pb-4 flex flex-col md:flex-row justify-center ">
       <input  className="  outline-none border-b-2 rounded-full my-2 p-4 md:w-1/3 " type="text" placeholder="Type website URL"></input>
       <input   className="  outline-none border-b-2 rounded-full my-2 md:w-1/3 md:border-l-8 md:-ml-12 border-fuchsia-500 p-4" type="email" placeholder="Your Mobile no."></input>
       <button style={{backgroundColor:"#7F3AC5"}} className="  my-2 p-4 md:w-1/3  font-sans text-white rounded-full  md:-ml-12  cursor-pointer hover:bg-slate-400" type="submit">GET RECOMMENDATIONS</button>
       </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
