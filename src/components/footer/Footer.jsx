"use client";
import React from "react";
import { SectionContainer } from "../layout.component";
import Link from "next/link";
import CurveShape from "../common/CurveShape";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Iconify from "../iconify";

const Footer = () => {
  return (
    <footer className=" bg-[#395673] w-full">
      {/* <CurveShape
        className="-mt-[60px] sm:-mt-[70px] md:-mt-[100px] lg:-mt-[120px]"
        firstColor="#395673"
        secondColor="#395673"
        thirdColor="#395673"
        fourthColor="#395673"
        curveD="M0,160L120,138.7C240,117,480,75,720,85.3C960,96,1200,160,1320,192L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      /> */}
      <div className=" pb-1 container m-auto w-full">
        
          <div className="footer-top w-full p-5 flex flex-col md:flex-row     gap-5 text-slate-300 container m-auto">
            <div className="logo w-full  md:p-6 flex  items-center flex-col text-center ">
              <Image
                src="/icons/Foot1.png"
                alt="Spirehub Logo"
                width={150}
                height={70}
                className="h-14 w-auto my-5"
              />
              <h4 className="font-bold text-xl text-slate-200 mb-3">
                Get in Touch
              </h4>
              <div className="flex flex-row gap-1">
                <p className="mt-[1px]">
                  H-89, Block H, Sector 63, Noida Gb Nagar UP, 201301 connect@spirehub                  
                </p>
                
              </div>
            </div>
            <div className="get-in-touch w-full  md:p-6 flex  items-center flex-col">
            <Image
                src="/icons/Foot2.png"
                alt="Spirehub Logo"
                width={150}
                height={70}
                className="h-14 w-auto my-5"
              />
              <h4 className="font-bold text-xl text-slate-200 mb-3">
                Social Media
              </h4>
              <div className="flex flex-row gap-1">
                <p className="mt-[1px]">
                  See bolow where you can find us
                </p>
                
              </div>
              

              {/* <br /> */}
              {/* <p>India: H-89, Block H, Sector 63 Noida GB Nagar UP, 201301</p> */}
              <div className="flex gap-2 mt-5 items-center lg:ml-[25px] ml-[0px]">
                <Link
                  href="https://www.facebook.com/spirehubsoftwares"
                  className="hover:text-slate-100 rotate-icons"
                >
                  <Icon icon="logos:facebook" fontSize={25} />
                </Link>
                <Link
                  href="https://www.instagram.com/spirehubsoftwares/"
                  className="hover:text-slate-100 rotate-icons"
                >
                  <Icon icon="skill-icons:instagram" fontSize={25} />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/spirehubsoftwares"
                  className="hover:text-slate-100 rotate-icons"
                >
                  <Icon icon="skill-icons:linkedin" fontSize={25} />
                </Link>
                <Link
                  href="https://www.youtube.com/@SpireHubSoftwares"
                  className="hover:text-slate-100 rotate-icons"
                >
                  <Icon icon="logos:youtube-icon" fontSize={22} />
                </Link>
                <Link
                  href="https://twitter.com/spirehub_soft"
                  className="hover:text-slate-100 rotate-icons"
                >
                  <Icon icon="devicon:twitter" fontSize={25} />
                </Link>
                <Link
                  href="https://www.behance.net/spirehubslayouts"
                  className="hover:text-slate-100 rotate-icons"
                >
                  <Icon icon="devicon:behance" fontSize={25} />
                </Link>
              </div>
            </div>
           
            <div className="useful-links w-full  md:p-6 flex  items-center flex-col">
            <Image
                src="/icons/Foot3.png"
                alt="Spirehub Logo"
                width={150}
                height={70}
                className="h-14 w-auto my-5"
              />
              <h4 className="font-bold text-xl text-slate-200 mb-3">Useful Links</h4>
              <div className="flex flex-col gap-2">
                <Link href="https://www.spirehubs.com/blog" className="hover:text-slate-100">
                  Blog
                </Link>
                {/* <Link href="/faq" className="hover:text-slate-100">
                  FAQs
                </Link> */}
                <Link href="https://www.spirehubs.com/company" className="hover:text-slate-100">
                  Company
                </Link>
                
                <Link href="https://www.spirehubs.com/portfolios" className="hover:text-slate-100">
                  Portfolios
                </Link>
                
              </div>
            </div>
        </div>
      </div>
      <div className="bg-dark-teal mt-auto">
        <SectionContainer>
          <div className="footer-bottom flex justify-center gap-2 p-3 text-center text-slate-300 text-sm font-semibold">
            <Link href="/term-conditions" className="hover:text-slate-100">
              Term & Conditions
            </Link>
            <span>|</span>
            <Link href="/privacy-policy" className="hover:text-slate-100">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/cookies-policy" className="hover:text-slate-100">
              Cookies Policy
            </Link>
            <span>|</span>
            <Link href="/sitemap" className="hover:text-slate-100">
              Sitemap
            </Link>
          </div>
        </SectionContainer>
      </div>
    </footer>
  );
};

export default Footer;


