"use client";
import { SectionContainer } from "@/components/layout.component";
import {
  SectionSubTitle,
  SectionTitle,
} from "@/components/typography.component";
import { baseURL } from "@/config";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const CommentTab = () => {
  const { testimonials } = useSelector((state) => state.testimonials);
  return (
    <SectionContainer className="py-12 view-project-container">
      {/* <SectionSubTitle className="text-center">
        <span className="uppercase">Client Tesitmonials</span>
      </SectionSubTitle> */}
      {/* <SectionTitle className="text-center">
        <span>
          See what people are{" "}
          <span className="font-[800] text-[#f57E32]">saying</span> about us.
        </span>
      </SectionTitle> */}
      <div className="testimonial-container flex justify-between px-28">
        <div className="p-5 flex flex-col gap-20 md:mt-20 mt-8">
          <div className="flex flex-col">
            <div className="first-testo-desc rounded-3xl p-5 div-boxshadow">
              {" "}
              &quot;{testimonials[0]?.desc}&quot;
              <div className="node"></div>
            </div>
            <div className="flex flex-row items-center gap-3">
              <div className="testo-avatar">
                <Image
                  // src="/images/client-testimonial/Sabreena.png"
                  src={`${baseURL}/${testimonials[0]?.image}`}
                  alt="client-testimonial"
                  height={40}
                  width={200}
                  className="rounded-t-2xl h-full w-full"
                />
              </div>
              <div>
                <p className="font-[800]">{testimonials[0]?.name}</p>
                <p className="text-sm">{testimonials[0]?.role}</p>
                <p className="text-sm">{testimonials[0]?.company}</p>
                <p className="text-sm">{testimonials[0]?.country}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="second-testo-desc rounded-3xl p-5 div-boxshadow">
              {" "}
              &quot;{testimonials[1]?.desc}&quot;
              <div className="node"></div>
            </div>
            <div className="flex flex-row items-center gap-3">
              <div className="testo-avatar">
                <Image
                  // src="/images/client-testimonial/Elroy Peters.jpg"
                  src={`${baseURL}/${testimonials[1]?.image}`}
                  alt="client-testimonial"
                  height={40}
                  width={200}
                  className="rounded-t-2xl h-full w-full"
                />
              </div>
              <div>
                <p className="font-[800]">{testimonials[1]?.name}</p>
                <p className="text-sm">{testimonials[1]?.role}</p>
                <p className="text-sm">{testimonials[1]?.company}</p>
                <p className="text-sm">{testimonials[1]?.country}</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center p-5">
          <div className="flex flex-col">
            <div className="third-testo-desc rounded-3xl p-5 div-boxshadow">
              {" "}
              &quot;{testimonials[2]?.desc}&quot;
              <div className="node"></div>
            </div>
            <div className="flex flex-row items-center gap-3">
              <div className="testo-avatar">
                <Image
                  // src="/images/client-testimonial/Bryan_Elpitiya.jpg"
                  src={`${baseURL}/${testimonials[2]?.image}`}
                  alt="client-testimonial"
                  height={40}
                  width={200}
                  className="rounded-t-2xl h-full w-full"
                />
              </div>
              <div>
                <p className="font-[800]">{testimonials[2]?.name}</p>
                <p className="text-sm">{testimonials[2]?.role}</p>
                <p className="text-sm">{testimonials[2]?.company}</p>
                <p className="text-sm">{testimonials[2]?.country}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 flex flex-col gap-20">
          <div className="flex flex-col">
            <div className="fourth-testo-desc rounded-3xl p-5 div-boxshadow">
              {" "}
              &quot;{testimonials[3]?.desc}&quot;
              <div className="node"></div>
            </div>
            <div className="flex flex-row items-center gap-3">
              <div className="testo-avatar">
                <Image
                  //  src="/images/avatar.jpg"
                  src={`${baseURL}/${testimonials[3]?.image}`}
                  alt="client-testimonial"
                  className="rounded-t-2xl h-full w-full"
                  height={40}
                  width={200}
                />
              </div>
              <div>
                <p className="font-[800]">{testimonials[3]?.name}</p>
                <p className="text-sm">{testimonials[3]?.role}</p>
                <p className="text-sm">{testimonials[3]?.company}</p>
                <p className="text-sm">{testimonials[3]?.country}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="fifth-testo-desc rounded-3xl p-5 div-boxshadow">
              {" "}
              &quot;{testimonials[4]?.desc}&quot;
              <div className="node"></div>
            </div>
            <div className="flex flex-row items-center gap-3">
              <div className="testo-avatar">
                <Image
                  src={`${baseURL}/${testimonials[4]?.image}`}
                  alt="client-testimonial"
                  // src="/images/avatar.jpg"
                  className="rounded-t-2xl h-full w-full"
                  height={40}
                  width={200}
                />
              </div>
              <div>
                <p className="font-[800]">{testimonials[4]?.name}</p>
                <p className="text-sm">{testimonials[4]?.role}</p>
                <p className="text-sm">{testimonials[4]?.company}</p>
                <p className="text-sm">{testimonials[4]?.country}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default CommentTab;
