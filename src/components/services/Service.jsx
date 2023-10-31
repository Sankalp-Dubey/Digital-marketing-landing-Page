"use client";
import { OutlinedButton, PrimaryButton } from "@/components/buttons.component";
import Iconify from "@/components/iconify";
import { SectionContainer } from "@/components/layout.component";
import {
  Heading,
  SectionSubTitle,
  SectionTitle,
} from "@/components/typography.component";
import { baseURL } from "@/config";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";

const color = [
  "#35cad8",
  "#cf03b8",
  "#dc5914",
  "#2370ec",
  "#33495d",
  "#333333",
  "#bb1d6b",
  "#35cad8",
  "#cf03b8",
  "#dc5914",
  "#2370ec",
  "#33495d",
  "#333333",
  "#bb1d6b",
];

function ServiceSection() {
  const parse = require("html-react-parser");
  const { services } = useSelector((state) => state.services);
  return (
    <>
      {services &&
        services.map((item, key) => (
          <div
            key={key}
            className="service-section flex flex-col md:flex-row justify-between items-center gap-x-10 gap-y-10"
          >
            <div className="service-section-img md:mt-0 mt-5 w-full">
              <Image
                alt="service-section"
                src={`${baseURL}/${item?.image}`}
                // src={item?.image}
                height={700}
                width={500}
                className="w-full"
              />
            </div>

            <div className="service-section-content md: mb-0 mb-8 w-full">
              <SectionTitle className="text-transform: capitalize">
                {item?.title}
              </SectionTitle>
              <p className="my-4"> {parse(`${item?.desc}`)}</p>
              <div className="flex flex-wrap py-2 gap-x-7 gap-y-5">
                {`${item?.tags}`.split(",").map((tag, index) => (
                  <div
                    key={index}
                    className="tag-item flex items-center gap-3 px-4 py-2 bg-[#dff2ff]"
                    style={{ minWidth: 180 }}
                  >
                    <span
                      className="w-4 h-4"
                      style={{ backgroundColor: color[index] }}
                    />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
              <OutlinedButton className="md: mt-10 mt-5" url={`/${item.slug}`}>
                Read more
              </OutlinedButton>
            </div>
          </div>
        ))}
    </>
  );
}

export default ServiceSection;
