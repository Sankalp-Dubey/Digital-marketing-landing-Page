"use client";
import React from "react";
import { SectionContainer } from "@/components/layout.component";
import {
  SectionSubTitle,
  SectionTitle,
} from "@/components/typography.component";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "@/redux/store";
import { baseURL } from "@/config";

const testimonialData = [
  {
    id: 1,
    title: "Singapore Indians Matrimonial",
    desc: "Singapore Indians Matrimonial Service was founded with a simple objective – to bridge two hearts together. Starting off from the website to Personalized service. We Specialize in connecting Singaporeans. Expanding our services to worldwide clients, we still provide specialized services for Singaporeans worldwide.",
    image: "/images/testimonial-01.jpg",
  },
  {
    id: 2,
    title: "Singapore Indians Matrimonial",
    desc: "Singapore Indians Matrimonial Service was founded with a simple objective – to bridge two hearts together. Starting off from the website to Personalized service. We Specialize in connecting Singaporeans. Expanding our services to worldwide clients, we still provide specialized services for Singaporeans worldwide.",
    image: "/images/testimonial-01.jpg",
  },
  {
    id: 3,
    title: "Singapore Indians Matrimonial",
    desc: "Singapore Indians Matrimonial Service was founded with a simple objective – to bridge two hearts together. Starting off from the website to Personalized service. We Specialize in connecting Singaporeans. Expanding our services to worldwide clients, we still provide specialized services for Singaporeans worldwide.",
    image: "/images/testimonial-01.jpg",
  },
];

const eventsData = [
  {
    id: 1,
    image: "/images/ourgroup.jpeg",
  },
  {
    id: 2,
    image: "/images/ourgroup.jpeg",
  },
  {
    id: 3,
    image: "/images/ourgroup.jpeg",
  },
  {
    id: 4,
    image: "/images/ourgroup.jpeg",
  },
  {
    id: 5,
    image: "/images/ourgroup.jpeg",
  },
  {
    id: 6,
    image: "/images/ourgroup.jpeg",
  },
];

// ================= || TESTIMONIAL || =============== //

const FunctionAndEvents = () => {
  const { event } = useSelector((state) => state.event);
  const parse = require("html-react-parser");
  // const sliderSetting = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  // };

  const sliderSetting = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="testimonial bg-[#f3f5fc] py-12 md:py-20 lg:py-24">
      <SectionContainer className="text-center">
        <SectionSubTitle>TRANSFORMING MOMENTS INTO MEMORIES</SectionSubTitle>
        <SectionTitle className="w-full md:w-3/4 lg:w-3/5 m-auto">
          <span className="font-[800] text-[#f57E32]">
            Functions and Events
          </span>
        </SectionTitle>
      </SectionContainer>
      {/* <SectionContainer className="mt-8">
        <Slider className="testimonial-slider p-0 m-0" {...sliderSetting}>
          {event &&
            event.map((item, key) => (
              <div className="testminial-item-box bg-white p-0 m-0" key={key}>
                <div className="w-full rounded-lg flex flex-col md:flex-row justify-between items-center">
                  <div className="image w-full md:w-1/3">
                    <Image
                      src={`${baseURL}/${item?.image}`}
                      // src={item?.image}
                      width={320}
                      height={250}
                      className="w-full h-auto scaleup-image"
                      style={{ borderRadius: 10 }}
                    />
                  </div>
                  <div className="content w-full md:w-2/3 p-4">
                    <p className="font-bold">{item?.title}</p>
                    <p className="text-sm mt-2">{parse(`${item?.desc}`)}</p>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </SectionContainer> */}
      <SectionContainer className="mt-8">
        <div className="grid grid-cols-6 gap-2 items-center testimonial-slider px-5 ">
          <div className="col-span-2">
            <Slider className="p-0 m-0" {...sliderSetting}>
              {eventsData.map((item, key) => (
                <div className="p-0 m-0" key={key}>
                  <div className="image">
                    <Image
                      src={item?.image}
                      alt="function-event"
                      width={400}
                      height={300}
                      className="h-full rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-span-4">
            <p className="text-sm mt-2">
              SpireHub Software Company hosts a diverse range of functions and
              events to foster innovation and collaboration. Regular hackathons
              provide a platform for employees to brainstorm and create
              cutting-edge solutions. Tech talks by industry experts offer
              insights into emerging trends. Team-building activities enhance
              internal bonds.
            </p>
            <p className="text-sm mt-2">
              Annual conferences gather global thought leaders, fostering
              knowledge exchange. Wellness workshops prioritize employee health.
              Diversity celebrations promote an inclusive environment.
              Innovation expos showcase internal projects. Town halls encourage
              open communication. Social responsibility drives charity drives.
              These initiatives collectively enrich SpireHub&apos;s culture,
              nurturing creativity, learning, and a strong sense of community
              among employees.
            </p>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default FunctionAndEvents;
