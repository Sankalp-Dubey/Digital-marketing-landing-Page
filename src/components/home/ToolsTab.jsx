"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { baseURL } from "@/config";

const allTabs = [
  { id: 1, name: "Web" },
  { id: 2, name: "Apps" },
  { id: 3, name: "DB/Server" },
  { id: 4, name: "Tools" },
];

const webSlider = [
  { id: 1, title: "PHP", image: "/images/Php.png" },
  { id: 2, title: "Laravel", image: "/images/Laravel.png" },
  { id: 3, title: "Python", image: "/images/Python.png" },
  { id: 4, title: ".NET", image: "/images/ASP.NET-Developer.png" },
  { id: 5, title: "Node JS", image: "/images/Node-JS.png" },
  { id: 6, title: "Java", image: "/images/logo-java-imp-it.png" },
  { id: 7, title: "WordPress", image: "/images/wordpress.png" },
  { id: 8, title: "React.js", image: "/images/React-JS.png" },
  { id: 9, title: "JavaScript", image: "/images/Java-Script.png" },
  { id: 10, title: "Vue.js", image: "/images/Vue-JS.png" },
  { id: 11, title: "Angular", image: "/images/Angular-JS.png" },
];

const appSlider = [
  { id: 1, title: "Swift", image: "/images/Swift.png" },
  { id: 2, title: "SwiftUI", image: "/images/Swift-UI.png" },
  { id: 3, title: "Android Native", image: "/images/Android-Native.png" },
  { id: 4, title: "React Native", image: "/images/React-JS.png" },
  { id: 5, title: "Ionic", image: "/images/Ionic.png" },
  { id: 6, title: "Flutter", image: "/images/Flutter.png" },
];
const serverSlider = [
  { id: 1, title: "SQL", image: "/images/SQL.png" },
  { id: 2, title: "MySQL", image: "/images/My-SQL.png" },
  { id: 3, title: "MariaDB", image: "/images/Maria-DB.png" },
  { id: 4, title: "MongoDB", image: "/images/Mongo-DB.png" },
  { id: 5, title: "PostgreSQL", image: "/images/Postgre-SQL.png" },
  { id: 6, title: "Firebase", image: "/images/Firebase.png" },
  { id: 7, title: "AWS", image: "/images/AWS.png" },
  { id: 8, title: "Azure", image: "/images/Azure.png" },
  { id: 9, title: "DigitalOcean", image: "/images/Digital-Ocean.png" },
  { id: 10, title: "Google Cloud", image: "/images/Google-Cloud.png" },
];

const toolSlider = [
  { id: 1, title: "Postman", image: "/images/postman-icon.png" },
  { id: 2, title: "Visual Code", image: "/images/Visual-code.png" },
  { id: 3, title: "Docker", image: "/images/docker-logo.png" },
  { id: 4, title: "Puppet", image: "/images/Puppet-logo.png" },
  { id: 5, title: "Kubernetes", image: "/images/Kubernetes-logo.png" },
  { id: 6, title: "Jenkins", image: "/images/Jenkins-logo.png" },
  { id: 7, title: "Azure DevOps", image: "/images/Azure-Devops-Logo.png" },
  { id: 8, title: "Github", image: "/images/Github.png" },
  { id: 9, title: "Bitbucket", image: "/images/Bitbucket.png" },
  { id: 10, title: "Gitlab", image: "/images/Gitlab.png" },
  { id: 11, title: "Asana", image: "/images/Asana.png" },
  { id: 12, title: "Trello", image: "/images/Trello.png" },
  { id: 13, title: "Jira", image: "/images/Jira.png" },
  { id: 14, title: "Selenium", image: "/images/Selenium-logo.png" },
  { id: 15, title: "Apache Maven", image: "/images/maven-logo.png" },
];

export default function ToolsTab() {
  const [selectedTab, setSelectedTab] = useState(1);
  const { toolsAndTechnology } = useSelector(
    (state) => state.toolsAndTechnology
  );

  const webTools =
    toolsAndTechnology &&
    toolsAndTechnology.filter((tool, key) => tool?.type === "web");
  const appsTools =
    toolsAndTechnology &&
    toolsAndTechnology.filter((tool, key) => tool?.type === "app");
  const dbServerTools =
    toolsAndTechnology &&
    toolsAndTechnology.filter((tool, key) => tool?.type === "db server");
  const tools =
    toolsAndTechnology &&
    toolsAndTechnology.filter((tool, key) => tool?.type === "tools");

  const sliderSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full m-auto px-2 py-5 sm:px-0 overflow-x-hidden">
      <Tab.Group>
        <Tab.List className="max-w-md m-auto flex space-x-1 rounded-full p-1">
          {allTabs.map((tab, key) => (
            <Tab
              key={key}
              className={`w-full rounded-full py-2.5 text-sm font-medium leading-5 text-slate-700 focus:outline-none ${
                selectedTab === tab?.id
                  ? "border border-blue-400"
                  : "border border-white"
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
            <Slider {...sliderSetting}>
              {webTools.map((item, key) => (
                <div
                  className="p-5 m-5 tool-technology-carousel-item flex flex-col justify-center items-center text-center gap-5 scaleup-image"
                  key={key}
                >
                  <Image
                    // src={item?.image}
                    src={`${baseURL}/${item?.image}`}
                    alt="Logo"
                    width={60}
                    height={60}
                    className="m-auto mb-1"
                  />
                  <span className="font-bold">{item?.title}</span>
                </div>
              ))}
            </Slider>
          </Tab.Panel>
          <Tab.Panel key={2} className="my-2 ml-[-10px]">
            <Slider {...sliderSetting}>
              {appsTools.map((item, key) => (
                <div
                  className="tool-technology-carousel-item p-5 m-5 flex flex-col justify-center items-center text-center gap-5 scaleup-image"
                  key={key}
                >
                  <Image
                    src={`${baseURL}/${item?.image}`}
                    // src={item?.image}
                    alt="Logo"
                    width={60}
                    height={60}
                    className="m-auto mb-1"
                  />
                  <span className="font-bold">{item?.title}</span>
                </div>
              ))}
            </Slider>
          </Tab.Panel>
          <Tab.Panel key={3} className="my-2 ml-[-10px]">
            <Slider {...sliderSetting}>
              {dbServerTools.map((item, key) => (
                <div
                  className="tool-technology-carousel-item p-5 m-5 flex flex-col justify-center items-center text-center gap-5 scaleup-image"
                  key={key}
                >
                  <Image
                    src={`${baseURL}/${item?.image}`}
                    // src={item?.image}
                    alt="Logo"
                    width={60}
                    height={60}
                    className="m-auto mb-1"
                  />
                  <span className="font-bold">{item?.title}</span>
                </div>
              ))}
            </Slider>
          </Tab.Panel>
          <Tab.Panel key={4} className="my-2 ml-[-10px]">
            <Slider {...sliderSetting}>
              {tools.map((item, key) => (
                <div
                  className="tool-technology-carousel-item p-5 m-5 flex flex-col justify-center items-center text-center gap-5 scaleup-image"
                  key={key}
                >
                  <Image
                    src={`${baseURL}/${item?.image}`}
                    // src={item?.image}
                    alt="Logo"
                    width={60}
                    height={60}
                    className="m-auto mb-1"
                  />
                  <span className="font-bold">{item?.title}</span>
                </div>
              ))}
            </Slider>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
