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
    <section style={{backgroundColor: "#c74efa"}} className=" w-full  md:py-4 lg:py-4 ">
      <div className=" container m-auto text-white flex flex-col md:flex-row">
      <div className=" w-full md:w-1/2 px-3  md:p-8 m-0">
       <div className="  flex flex-col">
       <h1 className="  py-2 font-sans font-bold text-xl md:text-3xl">Save upto 50% of cost</h1>
       <h1 className=" py-2 font-bold font-sans text-xl  md:text-2xl">want to know more about our approach, terms and prices?</h1>
      <p className=" py-4 font-sans">Fill the Form, and get our presentation</p>
       </div>
      </div>

      <div className="  w-full md:w-1/2 px-3  m-0    md:p-8">
       <div className=" pb-4 flex flex-col  ">
       <input  className=" outline-none container border-b-2  placeholder-white bg-transparent py-4" type="text" placeholder="Tell us about your project or idea"></input>
       <input  className="  outline-none border-b-2  placeholder-white  bg-transparent  py-4" type="text" placeholder="Your Name"></input>
       <input   className="  outline-none border-b-2  placeholder-white   bg-transparent py-4" type="email" placeholder="Email"></input>
       <button className=" py-2  mt-4 font-sans text-black bg-white w-1/3 rounded-lg cursor-pointer hover:bg-slate-400" type="submit"> Send Message</button>
       </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
