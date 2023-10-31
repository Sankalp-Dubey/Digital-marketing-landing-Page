"use client";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { PrimaryButton } from "@/components/buttons.component";
import { SectionContainer } from "@/components/layout.component";
import Iconify from "@/components/iconify";
import { baseURL } from "@/config";
import { useDispatch, useSelector } from "react-redux";
import CommentTab from "../Comments/CommentTab";

const allTabs = [
  { id: 1, name: "Video" },
  { id: 2, name: "Comments" },
  // { id: 3, name: "CMS" },
];
const videoSlider = [
  {
    id: 1,
    name: "John Doe",
    video:
      "https://player.vimeo.com/external/461537768.sd.mp4?s=25d8e45dc9f73cfa7df540718447ea771e0469ba&profile_id=164&oauth2_token_id=57447761",
  },
  {
    id: 2,
    name: "John Doe",

    video:
      "https://player.vimeo.com/external/461537768.sd.mp4?s=25d8e45dc9f73cfa7df540718447ea771e0469ba&profile_id=164&oauth2_token_id=57447761",
  },
  {
    id: 3,
    name: "John Doe",
    video:
      "https://player.vimeo.com/external/461537768.sd.mp4?s=25d8e45dc9f73cfa7df540718447ea771e0469ba&profile_id=164&oauth2_token_id=57447761",
  },
  {
    id: 4,
    name: "John Doe",
    video:
      "https://player.vimeo.com/external/461537768.sd.mp4?s=25d8e45dc9f73cfa7df540718447ea771e0469ba&profile_id=164&oauth2_token_id=57447761",
  },
];

export default function TestimonialTab() {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <div className="w-full m-auto px-2 py-5 sm:px-0 overflow-x-hidden">
      <SectionContainer>
        <div className="flex flex-row gap-2 justify-center items-center m-auto">
          <a
            href="#videos"
            className="rounded-full py-2.5 text-sm font-medium leading-5 border border-red-400  px-10 focus:outline-none"
            style={{ fontSize: "18px" }}
          >
            Videos
          </a>
          <a
            href="#comments"
            className="rounded-full py-2.5 text-sm font-medium leading-5 border border-red-400  px-10 focus:outline-none "
            style={{ fontSize: "18px" }}
          >
            Comments
          </a>
        </div>
        <div id="videos" className="flex flex-col gap-8 items-center py-5">
          <div className="flex portfolio-wrapper" style={{ flexWrap: "wrap" }}>
            {videoSlider &&
              videoSlider?.map((item, key) => (
                <div
                  className="flex flex-col portfolio-item rounded-lg"
                  key={key}
                >
                  <div
                    className="h-full portfolio-img"
                    style={{ cursor: "pointer" }}
                  >
                    <video
                      muted
                      autoPlay
                      loop
                      src={item?.video}
                      // src={`${baseURL}/${item?.image}`}
                      className="h-full w-full rounded-lg"
                      width={600}
                      height={600}
                      alt="web-portfolio"
                    />
                  </div>
                  <div className="text-center font-bold text-2xl py-2">
                    {item?.name}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div id="comments">
          <CommentTab />
        </div>
      </SectionContainer>
    </div>
  );
}
