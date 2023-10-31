"use client";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { OutlinedWhiteButton } from "../buttons.component";
import { useSelector } from "react-redux";
import { baseURL } from "@/config";

const allTabs = [
  { id: 1, name: "Web" },
  { id: 2, name: "Apps" },
  { id: 3, name: "CMS" },
];

const webSlider = [
  {
    id: 1,
    name: "Sophia Home Decoration- Miami",
    image: "/images/our-portfolio/Sophia_miami.webp",
    btn1: "UI/UX Design",
    btn2: "CMS",
    link: "https://sophiacurtains.com/",
  },
  {
    id: 2,
    name: "IM Vision",
    image: "/images/our-portfolio/imvision.png",
    btn1: "UI/UX Design",
    btn2: "CMS",
    link: "https://www.imvision.se/",
  },
  {
    id: 3,
    name: "Trufflecorp",
    image: "/images/our-portfolio/truffle-portfolio.webp",
    btn1: "UI/UX Design",
    btn2: "CMS",
    link: "https://trufflecorp.com/",
  },
  {
    id: 4,
    name: "Unqueue",
    image: "/images/our-portfolio/Unqueue.jpg",
    btn1: "ReactJs",
    btn2: "Node",
    link: "https://unqueue.shop/",
  },
  {
    id: 5,
    name: "Mrs. Kumar's Indian Cuisine",
    image: "/images/our-portfolio/mr_kumar.png",
    btn1: "HTML/CSS",
    btn2: "Codeigniter",
    link: "https://www.mrskumars.com/",
  },
  {
    id: 6,
    name: "Carton.com",
    image: "/images/our-portfolio/carton.png",
    btn1: "ReactJs",
    btn2: "Laravel",
    link: "https://carton.com/en",
  },
  {
    id: 7,
    name: "Singapore Indians Matrimonial",
    image: "/images/our-portfolio/singapore-indians-matrimonial.jpg",
    btn1: "HTML/CSS",
    btn2: "Laravel",
    link: "https://singaporeindiansmatrimonial.com/",
  },
  {
    id: 8,
    name: "Moolathon",
    image: "/images/our-portfolio/moolathan-portfolio.png",
    btn1: "ReactJs",
    btn2: "Node",
    link: "https://moolathon.com/",
  },
  {
    id: 9,
    name: "BellstoneOnline",
    image: "/images/our-portfolio/bell-stone-casestudy.png",
    btn1: "ReactJs",
    btn2: "Laravel",
    link: "https://www.bellstoneonline.com/",
  },
  {
    id: 10,
    name: "Emad Energy",
    image: "/images/our-portfolio/emad-portfolio.png",
    btn1: "UI/UX Design",
    btn2: "CMS",
    link: "https://www.emadenergy.com/",
  },
  {
    id: 11,
    name: "Wesson Construction",
    image: "/images/our-portfolio/Wesson-portflio.png",
    btn1: "UI/UX Design",
    btn2: "CMS",
    link: "http://wessoncon.com/",
  },
  {
    id: 12,
    name: "Carlton Realtors",
    image: "/images/our-portfolio/carlton.jpg",
    btn1: "HTML/CSS",
    btn2: "Laravel",
    link: "https://carltonrealtors.com/",
  },
  {
    id: 13,
    name: "CHRG Network",
    image: "/images/our-portfolio/chrg-network.jpg",
    btn1: "UI/UX Design",
    btn2: "CMS",
    link: "https://chargingshop.eu/",
  },
  {
    id: 14,
    name: "Infinite Connect",
    image: "/images/our-portfolio/infinite-connect.png",
    btn1: "UI/UX Design",
    btn2: "CMS",
    link: "https://infiniteconnect.com/",
  },
];

const appSlider = [
  {
    id: 1,
    name: "Tranqui App",
    image: "/images/our-portfolio/Tranqui.png",
    btn1: "IOS",
    btn2: "Android",
    link: "https://apps.apple.com/app/id1591424229",
  },
  {
    id: 2,
    name: "Tranqui App",
    image: "/images/our-portfolio/Tranqui.png",
    btn1: "IOS",
    btn2: "Android",
    link: "https://apps.apple.com/app/id1591424229",
  },
];

export default function PortfolioTab() {
  const [selectedTab, setSelectedTab] = useState(1);
  const { portfolios } = useSelector((state) => state.portfolios);

  const webSliderContent =
    portfolios && portfolios.filter((item, key) => item?.type === "web");

  const appSliderContent =
    portfolios && portfolios.filter((item, key) => item?.type === "app");

  const cmsSliderContent =
    portfolios && portfolios.filter((item, key) => item?.type === "cms");

  const sliderSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div  style={{backgroundColor:"#f4f5fd"}} className="w-full m-auto px-2 py-6  sm:px-0 overflow-y-hidden overflow-x-hidden">
      <Tab.Group>
       
        <Tab.Panels className="mt-2">
          <Tab.Panel key={1} className=" ml-[-10px]">
            <Slider {...sliderSetting}>
              {webSliderContent.map((item, key) => (
                <div
                  key={key}
                  className="portfolio-items-container flex justify-center gap-24 mt-10"
                >
                  <div className="flex flex-col justify-center items-center gap-8">
                    <a href={item?.url} target="_blank">
                      <div className="portfolio-item-left rounded-2xl pt-0  h-3/4 scaleup-image ">
                        {/* <div className="text-center text-2xl font-bold text-white">
                          {item?.title}
                        </div> */}
                        <div className="h-full">
                          {<img src="/icons/LMS.jpg" alt="img" height={400} width={400}></img>
                          
                            /* <Image
                            src={`${baseURL}/${item?.image}`}
                            // src={item?.image}
                            className="rounded-t-2xl h-full w-full"
                            width={400}
                            height={400}
                            alt="portfolio-img"
                          /> */}
                          <div className="text-center text-2xl font-bold">
                          ERP
                        </div>
                        </div>
                      </div>

                      
                    </a>
                    {/* <div className="portfolio-footer flex justify-center gap-8 items-center">
                      {`${item?.technology}`.split(",").map((tech, key) => (
                        <OutlinedWhiteButton key={key}>
                          {tech}
                        </OutlinedWhiteButton>
                      ))}
                    </div> */}
                  </div>
                </div>
              ))}
            </Slider>
          </Tab.Panel>
          <Tab.Panel key={2} className="my-2 ml-[-10px]">
            <Slider {...sliderSetting}>
              {appSliderContent.map((item, key) => (
                <div
                  key={key}
                  className="portfolio-items-container flex justify-between gap-24 mt-10"
                >
                  <div className="flex flex-col gap-8">
                    <a href={item?.url} target="_blank">
                      <div className="portfolio-item-right rounded-2xl pt-16 px-16 h-3/4 scaleup-image pb-2">
                        <div className="text-center text-2xl font-bold">
                          {item?.title}
                        </div>
                        <div className="h-full">
                          { 
                            /* <Image
                            src={`${baseURL}/${item?.image}`}
                            // src={item?.image}
                            className="rounded-t-2xl h-full w-full"
                            width={400}
                            height={400}
                            alt="portfolio"
                          /> }
                        </div>
                      </div>
                    </a>
                    <div className="portfolio-footer flex justify-center gap-8 items-center">
                      {`${item?.technology}`.split(",").map((tech, key) => (
                        <OutlinedWhiteButton key={key}>
                          {tech}
                        </OutlinedWhiteButton>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Tab.Panel>
          <Tab.Panel key={3} className="my-2 ml-[-10px]">
            <Slider {...sliderSetting}>
              {cmsSliderContent.map((item, key) => (
                <div
                  key={key}
                  className="portfolio-items-container flex justify-between gap-24 mt-10"
                >
                  <div className="flex flex-col gap-8">
                    <a href={item?.url} target="_blank">
                      <div className="portfolio-item-right rounded-2xl pt-16 px-16 h-3/4 scaleup-image pb-2">
                        <div className="text-center text-2xl font-bold">
                          {item?.title}
                        </div>
                        <div className="h-full">
                          {/* <Image
                            src={`${baseURL}/${item?.image}`}
                            // src={item?.image}
                            className="rounded-t-2xl h-full w-full"
                            width={400}
                            height={400}
                            alt="portfolio"
                          /> */}
                        </div>
                      </div>
                    </a>
                    <div className="portfolio-footer flex justify-center gap-8 items-center">
                      {`${item?.technology}`.split(",").map((tech, key) => (
                        <OutlinedWhiteButton key={key}>
                          {tech}
                        </OutlinedWhiteButton>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
