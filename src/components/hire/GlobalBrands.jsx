"use client";
import React from "react";
import { SectionContainer } from "../layout.component";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const hirelogData = [
  {
    id: 1,
    image: "/images/hire-resources-prg/clutch-rate.png",
  },
  {
    id: 2,
    image: "/images/hire-resources-prg/good-firm-rate.png",
  },
  {
    id: 3,
    image: "/images/hire-resources-prg/clutch-rate.png",
  },
  {
    id: 4,
    image: "/images/hire-resources-prg/good-firm-rate.png",
  },
  {
    id: 5,
    image: "/images/hire-resources-prg/good-firm-rate.png",
  },
  {
    id: 6,
    image: "/images/hire-resources-prg/good-firm-rate.png",
  },
];

function GlobalBrands() {
  const sliderSetting = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <SectionContainer>
      <div className="grid grid-cols-6 gap-4">
        <div className="px-4 col-span-2">
          <h4 className="text-xl">Trusted by Global Brands</h4>
        </div>
        <div className="col-span-4 px-4">
          <Slider className="hirelogo-slider p-0 m-0" {...sliderSetting}>
            {hirelogData.map((item, key) => (
              <div className="hire-item-box p-0 m-0" key={key}>
                <div className="image">
                  <Image
                    src={item?.image}
                    alt="..."
                    width={200}
                    height={100}
                    className="..."
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </SectionContainer>
  );
}

export default GlobalBrands;
