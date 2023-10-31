import React from "react";
import { OutlinedWhiteButton, PrimaryButton } from "../buttons.component";
import Image from "next/image";
import { SectionContainer } from "../layout.component";
import HireProgrammers from "./HireProgrammers";

const EmpoweringBusiness = () => {
  return (
    <section className="bg-slate-100 py-12">
      <SectionContainer>
        <h2 className="text-center text-[28px] sm:text-[30px] md:text-[32px] text-dark-teal font-semibold pb-2">
          Empowering{" "}
          <span className="font-[800] text-[#f57E32]">Businesses</span>
        </h2>
        <p className="text-center text-xl pb-14 m-auto">
          Why Global Brands prefer hiring Programmers from Spirehubs.
        </p>
        <div className="empbiz-box flex justify-center align-center pb-[250px] max-sm:pb-[725px]">
          <div className="empbox-circle flex justify-center align-center text-center relative w-[300px] h-[300px] bg-white rounded-full shadow-xl">
            <ul className="boxcircle-points flex flex-col justify-center">
              <li>
                <p className="text-xl font-bold">
                  <span className="counter">120</span>+
                </p>
                <p className="text-xl font-medium">Professionals</p>
              </li>
              <li>
                <p className="text-xl font-bold">
                  <span className="counter">600</span>+
                </p>
                <p className="text-xl font-medium">Global Clients</p>
              </li>
              <li>
                <p className="text-xl font-bold">
                  <span className="counter">5</span>+ Years
                </p>
                <p className="text-xl font-medium">of Expertise</p>
              </li>
            </ul>
            <div className="emp-topcircle w-[350px] absolute top-[-30px] left-[-24px]">
              <div className="emptop-sec">
                <Image
                  src="/images/hire-resources-prg/emp-top-circle.png"
                  alt="circle"
                  width={350}
                  height={100}
                  className="..."
                />
              </div>
            </div>
            <div className="emp-bottomcircle w-[415px] absolute bottom-[-65px] invisible sm:visible">
              <div className="emptop-sec">
                <Image
                  src="/images/hire-resources-prg/emp-btmcircle.png"
                  alt="pcircle"
                  width={415}
                  height={100}
                  className="..."
                />
              </div>
              <div
                id="emp-point1"
                className="btm-cir bg-[#48cdd9] p-[14px] absolute rounded-full top-[-8px] left-[-104px]"
              >
                <div className="inner-circle bg-[#f3f7f7] flex justify-center align-center text-center relative rounded-full shadow-xl w-[56px] h-[56px]">
                  <div className="inimg-sec w-[70px] p-[14px] min-h-[50px]">
                    <Image
                      src="/images/hire-resources-prg/zero-fees.png"
                      alt="pcircle"
                      width={28}
                      height={100}
                      className="..."
                    />
                  </div>
                  <div className="triangle-right absolute top-[8px] right-[-30px]"></div>
                </div>
                <p className="emppoint-txt absolute w-max bottom-[-60px] left-[-22px] font-semibold">
                  Zero recruitment<br></br>fees
                </p>
              </div>

              <div
                id="emp-point2"
                className="btm-cir bg-[#48cdd9] p-[14px] absolute rounded-full bottom-[-16px] left-[-43px]"
              >
                <div className="inner-circle bg-[#f3f7f7] flex justify-center align-center text-center relative rounded-full shadow-xl w-[56px] h-[56px]">
                  <div className="inimg-sec w-[70px] p-[14px] min-h-[50px]">
                    <Image
                      src="/images/hire-resources-prg/week-trail.png"
                      alt="pcircle"
                      width={28}
                      height={100}
                      className="..."
                    />
                  </div>
                  <div className="triangle-right absolute left-[58px] top-[-10px]"></div>
                </div>
                <p className="emppoint-txt absolute w-max bottom-[-60px] left-[0px] font-semibold">
                  1 weeks<br></br>no-risk trial
                </p>
              </div>

              <div
                id="emp-point3"
                className="btm-cir bg-[#48cdd9] p-[14px] absolute rounded-full bottom-[-102px] left-[76px]"
              >
                <div className="inner-circle bg-[#f3f7f7] flex justify-center align-center text-center relative rounded-full shadow-xl w-[56px] h-[56px]">
                  <div className="inimg-sec w-[70px] p-[14px] min-h-[50px]">
                    <Image
                      src="/images/hire-resources-prg/obligation.png"
                      alt="pcircle"
                      width={28}
                      height={100}
                      className="..."
                    />
                  </div>
                  <div className="triangle-right absolute right-[-3px] top-[-25px]"></div>
                </div>
                <p className="emppoint-txt absolute w-max bottom-[-60px] left-[-5px] font-semibold">
                  No obligation<br></br>interview
                </p>
              </div>

              <div
                id="emp-point4"
                className="btm-cir bg-[#48cdd9] p-[14px] absolute rounded-full bottom-[-104px] right-[81px]"
              >
                <div className="inner-circle bg-[#f3f7f7] flex justify-center align-center text-center relative rounded-full shadow-xl w-[56px] h-[56px]">
                  <div className="inimg-sec w-[70px] p-[14px] min-h-[50px]">
                    <Image
                      src="/images/hire-resources-prg/30-day-replacement.png"
                      alt="pcircle"
                      width={28}
                      height={100}
                      className="..."
                    />
                  </div>
                  <div className="triangle-right absolute top-[-27px] left-[0px]"></div>
                </div>
                <p className="emppoint-txt absolute w-max bottom-[-60px] left-[-2px] font-semibold">
                  30-days<br></br>replacement
                </p>
              </div>

              <div
                id="emp-point5"
                className="btm-cir bg-[#48cdd9] p-[14px] absolute rounded-full right-[-33px] bottom-[-30px]"
              >
                <div className="inner-circle bg-[#f3f7f7] flex justify-center align-center text-center relative rounded-full shadow-xl w-[56px] h-[56px]">
                  <div className="inimg-sec w-[70px] p-[14px] min-h-[50px]">
                    <Image
                      src="/images/hire-resources-prg/easy-cancel.png"
                      alt="pcircle"
                      width={28}
                      height={100}
                      className="..."
                    />
                  </div>
                  <div className="triangle-right absolute top-[-21px] left-[-11px]"></div>
                </div>
                <p className="emppoint-txt absolute w-max bottom-[-60px] left-[6px] font-semibold">
                  Easy<br></br>cancellation
                </p>
              </div>
              <div
                id="emp-point6"
                className="btm-cir bg-[#48cdd9] p-[14px] absolute rounded-full right-[-97px] top-[25px]"
              >
                <div className="inner-circle bg-[#f3f7f7] flex justify-center align-center text-center relative rounded-full shadow-xl w-[56px] h-[56px]">
                  <div className="inimg-sec w-[70px] p-[14px] min-h-[50px]">
                    <Image
                      src="/images/hire-resources-prg/retention.png"
                      alt="pcircle"
                      width={28}
                      height={100}
                      className="..."
                    />
                  </div>
                  <div className="triangle-right absolute top-[-11px] left-[-19px]"></div>
                </div>
                <p className="emppoint-txt absolute w-max bottom-[-60px] left-[6px] font-semibold">
                  2x Retention<br></br>rate
                </p>
              </div>
            </div>

            <div className="emp-bottomcircle w-[26px] h-[100px] absolute bottom-[-100px] visible sm:invisible">
              <div className="emptop-sec">
                <Image
                  src="/images/hire-resources-prg/point-line.png"
                  alt="pline"
                  width={21}
                  height={100}
                  className="..."
                />
              </div>
              <div
                id="emp-point1"
                className="btm-cir bg-[#48cdd9] p-[14px] absolute rounded-full top-[36px] right-[-110px]"
              >
                <div className="inner-circle bg-[#f3f7f7] flex justify-center align-center text-center relative rounded-full shadow-xl w-[56px] h-[56px]">
                  <div className="inimg-sec w-[70px] p-[14px] min-h-[50px]">
                    <Image
                      src="/images/hire-resources-prg/zero-fees.png"
                      alt="pcircle"
                      width={28}
                      height={100}
                      className="..."
                    />
                  </div>
                  <div className="triangle-right absolute top-[22px] left-[-30px]"></div>
                </div>
                <p className="emppoint-txt absolute w-max bottom-[-60px] left-[-22px] font-semibold">
                  Zero recruitment<br></br>fees
                </p>
              </div>
              <div
                id="emp-point2"
                className="btm-cir bg-[#48cdd9] p-[14px] absolute rounded-full bottom-[-128px] left-[-112px]"
              >
                <div className="inner-circle bg-[#f3f7f7] flex justify-center align-center text-center relative rounded-full shadow-xl w-[56px] h-[56px]">
                  <div className="inimg-sec w-[70px] p-[14px] min-h-[50px]">
                    <Image
                      src="/images/hire-resources-prg/week-trail.png"
                      alt="pcircle"
                      width={28}
                      height={100}
                      className="..."
                    />
                  </div>
                  <div className="triangle-right absolute left-[67px] top-[20px]"></div>
                </div>
                <p className="emppoint-txt absolute w-max bottom-[-60px] left-[0px] font-semibold">
                  1 weeks<br></br>no-risk trial
                </p>
              </div>
              <div
                id="emp-point3"
                className="btm-cir bg-[#48cdd9] p-[14px] absolute rounded-full bottom-[-241px] right-[-110px]"
              >
                <div className="inner-circle bg-[#f3f7f7] flex justify-center align-center text-center relative rounded-full shadow-xl w-[56px] h-[56px]">
                  <div className="inimg-sec w-[70px] p-[14px] min-h-[50px]">
                    <Image
                      src="/images/hire-resources-prg/obligation.png"
                      alt="pcircle"
                      width={28}
                      height={100}
                      className="..."
                    />
                  </div>
                  <div className="triangle-right absolute left-[-31px] top-[15px]"></div>
                </div>
                <p className="emppoint-txt absolute w-max bottom-[-60px] left-[-5px] font-semibold">
                  No obligation<br></br>interview
                </p>
              </div>
              <div
                id="emp-point4"
                className="btm-cir bg-[#48cdd9] p-[14px] absolute rounded-full bottom-[-344px] right-[52px]"
              >
                <div className="inner-circle bg-[#f3f7f7] flex justify-center align-center text-center relative rounded-full shadow-xl w-[56px] h-[56px]">
                  <div className="inimg-sec w-[70px] p-[14px] min-h-[50px]">
                    <Image
                      src="/images/hire-resources-prg/30-day-replacement.png"
                      alt="pcircle"
                      width={28}
                      height={100}
                      className="..."
                    />
                  </div>
                  <div className="triangle-right absolute left-[67px] top-[20px]"></div>
                </div>
                <p className="emppoint-txt absolute w-max bottom-[-60px] left-[-2px] font-semibold">
                  30-days<br></br>replacement
                </p>
              </div>
              <div
                id="emp-point5"
                className="btm-cir bg-[#48cdd9] p-[14px] absolute rounded-full right-[-110px] bottom-[-458px]"
              >
                <div className="inner-circle bg-[#f3f7f7] flex justify-center align-center text-center relative rounded-full shadow-xl w-[56px] h-[56px]">
                  <div className="inimg-sec w-[70px] p-[14px] min-h-[50px]">
                    <Image
                      src="/images/hire-resources-prg/easy-cancel.png"
                      alt="pcircle"
                      width={28}
                      height={100}
                      className="..."
                    />
                  </div>
                  <div className="triangle-right absolute top-[14px] left-[-32px]"></div>
                </div>
                <p className="emppoint-txt absolute w-max bottom-[-60px] left-[6px] font-semibold">
                  Easy<br></br>cancellation
                </p>
              </div>
              <div
                id="emp-point6"
                className="btm-cir bg-[#48cdd9] p-[14px] absolute rounded-full right-[52px] top-[576px]"
              >
                <div className="inner-circle bg-[#f3f7f7] flex justify-center align-center text-center relative rounded-full shadow-xl w-[56px] h-[56px]">
                  <div className="inimg-sec w-[70px] p-[14px] min-h-[50px]">
                    <Image
                      src="/images/hire-resources-prg/retention.png"
                      alt="pcircle"
                      width={28}
                      height={100}
                      className="..."
                    />
                  </div>
                  <div className="triangle-right absolute top-[20px] left-[68px]"></div>
                </div>
                <p className="emppoint-txt absolute w-max bottom-[-60px] left-[6px] font-semibold">
                  2x Retention<br></br>rate
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
        <HireProgrammers btnTitle='Developer' />
        </div>
      </SectionContainer>
    </section>
  );
};

export default EmpoweringBusiness;
