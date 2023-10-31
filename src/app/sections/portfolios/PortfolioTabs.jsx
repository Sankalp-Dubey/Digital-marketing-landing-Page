"use client";
import { useEffect, useMemo, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import {
  OutlinedWhiteButton,
  PrimaryButton,
  SecondaryButton,
} from "@/components/buttons.component";
import { SectionContainer } from "@/components/layout.component";
import Iconify from "@/components/iconify";
import { baseURL } from "@/config";
import { useDispatch, useSelector } from "react-redux";
import { getPortfolios } from "@/redux/slices/portfolios";

const allTabs = [
  { id: 1, name: "Web" },
  { id: 2, name: "Apps" },
];
const webSlider = [
  {
    id: 1,
    name: "Sophia Home Decoration- Miami",
    image: "/images/our-portfolio/Sophia_miami.webp",
    technology: "UI/UX Design,CMS",
    link: "https://sophiacurtains.com/",
  },
  {
    id: 2,
    name: "IM Vision",
    image: "/images/our-portfolio/imvision.png",
    technology: "UI/UX Design,CMS",
  },
  {
    id: 3,
    name: "Trufflecorp",
    image: "/images/our-portfolio/truffle-portfolio.webp",
    technology: "UI/UX Design,CMS",
    link: "https://trufflecorp.com/",
  },
  {
    id: 4,
    name: "Unqueue",
    image: "/images/our-portfolio/Unqueue.jpg",
    technology: "React Js,Node",
    link: "https://unqueue.shop/",
  },
  {
    id: 5,
    name: "Mrs. Kumar's Indian Cuisine",
    image: "/images/our-portfolio/mr_kumar.png",
    technology: "HTML/CSS,Codeigniter",
    link: "https://www.mrskumars.com/",
  },
  {
    id: 6,
    name: "Carton.com",
    image: "/images/our-portfolio/carton.png",
    technology: "React JS,Laravel",
    link: "https://carton.com/en",
  },
  {
    id: 7,
    name: "Singapore Indians Matrimonial",
    image: "/images/our-portfolio/singapore-indians-matrimonial.jpg",
    technology: "HTML/CSS,Laravel",
    link: "https://singaporeindiansmatrimonial.com/",
  },
  {
    id: 8,
    name: "Moolathon",
    image: "/images/our-portfolio/moolathan-portfolio.png",
    technology: "React Js,Node",
    link: "https://moolathon.com/",
  },
  {
    id: 9,
    name: "BellstoneOnline",
    image: "/images/our-portfolio/bell-stone-casestudy.png",
    technology: "React JS,Laravel",
    link: "https://www.bellstoneonline.com/",
  },
  {
    id: 10,
    name: "Emad Energy",
    image: "/images/our-portfolio/emad-portfolio.png",
    technology: "UI/UX Design,CMS",
    link: "https://www.emadenergy.com/",
  },
  {
    id: 11,
    name: "Wesson Construction",
    image: "/images/our-portfolio/Wesson-portflio.png",
    technology: "UI/UX Design,CMS",
    link: "http://wessoncon.com/",
  },
  {
    id: 12,
    name: "Carlton Realtors",
    image: "/images/our-portfolio/carlton.jpg",
    technology: "HTML/CSS,Laravel",
    link: "https://carltonrealtors.com/",
  },
  {
    id: 13,
    name: "CHRG Network",
    image: "/images/our-portfolio/chrg-network.jpg",
    technology: "UI/UX Design,CMS",
    link: "https://chargingshop.eu/",
  },
  {
    id: 14,
    name: "Infinite Connect",
    image: "/images/our-portfolio/infinite-connect.png",
    technology: "UI/UX Design,CMS",
    link: "https://infiniteconnect.com/",
  },
];
const appSlider = [
  {
    id: 1,
    name: "Tranqui App",
    image: "/images/our-portfolio/Tranqui.png",
    technology: "ios,Android",
    link: "https://apps.apple.com/app/id1591424229",
  },
  {
    id: 4,
    name: "Unequeue",
    image: "/images/our-portfolio/Unqueue.jpg",
    technology: "React Native,Node",
    link: "https://unqueue.shop/",
  },
];

export default function PortfolioTab() {
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState(1);
  const { portfolios } = useSelector((state) => state.portfolios);
  const [webLimitData, setWebLimitData] = useState([]);
  const [appLimitData, setAppLimitData] = useState([]);
  const [webloadMore, setWebLoadMore] = useState(true);
  const [apploadMore, setAppLoadMore] = useState(true);

  const webSliderContent =
    portfolios && portfolios.filter((item, key) => item?.type === "web");

  const appSliderContent =
    portfolios && portfolios.filter((item, key) => item?.type === "app");

  const newWeb = webSliderContent.slice(0, 10);
  const newApp = appSliderContent.slice(0, 10);

  useEffect(() => {
    if (newWeb) {
      setWebLimitData(newWeb);
    }
    setAppLimitData(newApp);
  }, [portfolios, newWeb, newApp]);

  const loadMoreWebData = () => {
    setWebLoadMore(false);
    setWebLimitData(webSliderContent);
  };
  const loadMoreAppData = () => {
    setAppLoadMore(false);
    setAppLimitData(appSliderContent);
  };

  return (
    <div className="w-full m-auto px-2 py-5 sm:px-0 overflow-x-hidden bg-slate-200">
      <SectionContainer>
        <Tab.Group>
          <Tab.List className="max-w-md m-auto flex space-x-1 rounded-full p-1">
            {allTabs.map((tab, key) => (
              <Tab
                key={key}
                className={`w-full rounded-full py-2.5 text-sm font-medium leading-5   focus:outline-none ${
                  selectedTab === tab?.id
                    ? "border border-red-400"
                    : "border border-black"
                }`}
                onClick={() => {
                  setSelectedTab(tab?.id);
                }}
              >
                {tab?.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel key={1} className="my-2 ml-[-10px]">
              <div className="flex flex-col gap-8 items-center">
                <div
                  className="flex portfolio-wrapper"
                  style={{ flexWrap: "wrap" }}
                >
                  {webLimitData &&
                    webLimitData?.map((item, key) => (
                      <div
                        className="flex flex-col portfolio-item rounded-lg"
                        key={key}
                      >
                        <div
                          className="h-full portfolio-img"
                          style={{ cursor: "pointer" }}
                        >
                          <a href={item?.url} target="_blank">
                            <Image
                              // src={item?.image}
                              src={`${baseURL}/${item?.image}`}
                              className="h-full w-full rounded-lg"
                              width={600}
                              height={600}
                              alt="web-portfolio"
                            />
                          </a>
                          <a
                            href={item?.url}
                            className="hover-style"
                            target="_blank"
                          >
                            <div className="portfolio-link-icon">
                              <Iconify icon="uil:link" fontSize={40} />
                            </div>
                          </a>
                        </div>
                        <div className="text-center font-bold text-2xl py-2">
                          {item?.title}
                        </div>
                        <div className="portfolio-footer flex justify-center gap-8 items-center mt-3">
                          {`${item?.technology}`.split(",").map((tech, key) => (
                            <PrimaryButton key={key}>{tech}</PrimaryButton>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
                {webLimitData.length > 0 && webloadMore && (
                  <div className="text-black text-center">
                    <div
                      className="secondary-button rounded-full cursor-pointer"
                      onClick={loadMoreWebData}
                    >
                      Load More
                    </div>
                  </div>
                )}
              </div>
            </Tab.Panel>
            <Tab.Panel key={2} className="my-2 ml-[-10px]">
              <div className="flex flex-col gap-8 items-center">
                <div
                  className="flex portfolio-wrapper"
                  style={{ flexWrap: "wrap" }}
                >
                  {appLimitData?.map((item, key) => (
                    <div
                      className="flex flex-col portfolio-item rounded-lg"
                      key={key}
                    >
                      <div
                        className="h-full portfolio-img"
                        style={{ cursor: "pointer" }}
                      >
                        <a href={item?.url} target="_blank">
                          <Image
                            // src={item?.image}
                            src={`${baseURL}/${item?.image}`}
                            className="h-full w-full rounded-lg"
                            width={600}
                            height={600}
                            alt="app-portfolio"
                          />
                        </a>
                        <a
                          href={item?.url}
                          className="hover-style"
                          target="_blank"
                        >
                          <div className="portfolio-link-icon">
                            <Iconify icon="uil:link" fontSize={40} />
                          </div>
                        </a>
                      </div>
                      <div className="text-center font-bold text-2xl py-2">
                        {item?.title}
                      </div>
                      <div className="portfolio-footer flex justify-center gap-8 items-center mt-3">
                        {`${item?.technology}`.split(",").map((tech, key) => (
                          <PrimaryButton key={key}>{tech}</PrimaryButton>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                {appLimitData.length > 0 && apploadMore && (
                  <div className="text-black text-center">
                    <div
                      className="secondary-button rounded-full cursor-pointer"
                      onClick={loadMoreAppData}
                    >
                      Load More
                    </div>
                  </div>
                )}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </SectionContainer>
    </div>
  );
}
