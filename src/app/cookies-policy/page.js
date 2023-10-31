import React from "react";
import { SectionContainer } from "@/components/layout.component";
import Image from "next/image";
import CurveShape from "@/components/common/CurveShape";
import {
  SectionSubTitle,
  SectionTitle,
} from "@/components/typography.component";
import { PrimaryButton, SecondaryButton } from "@/components/buttons.component";

function CookiesPolicy() {
  const customStyle = {
    backgroundImage: `url(/images/growbusiness.webp)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };
  return (
    <>
      <div className="hero-section">
        <div className="top-heading">
          <h1>Cookies Policy</h1>
        </div>
      </div>
      <SectionContainer>
        <div className="flex flex-col md:gap-y-8 gap-y-5 m-auto md:pb-28 pb-14 pt-3">
          <div className="flex md:flex-row flex-col gap-5 items-center py-5">
            <div>
              <Image
                src="/images/cokkies.png"
                alt="cookies"
                height={350}
                width={400}
                className="h-full w-full rounded-xl"
              />
            </div>
            <div>
              <p>
                A SpireHub Softwares cookies policy is a critical component of
                its website, outlining how it collects, uses, and manages user
                data through cookies. Cookies are small text files that are
                placed on a user&apos;s device when they visit a website. They
                serve various functions such as enhancing user experience,
                tracking user behavior, and providing personalized content. This
                policy aims to inform users about the types of cookies used,
                their purpose, and how users can control their cookie
                preferences.
              </p>
            </div>
          </div>
          <div className="term-privacy-cookies-items">
            <div>
              <h2 className="mb-2 sub-heading ">Types of Cookies:</h2>
              <ul
                style={{
                  listStyle: "square",
                  marginLeft: "20px",
                  lineHeight: "35px",
                }}
              >
                <li>
                  <b>Necessary Cookies: &nbsp;</b>
                  <span>
                    These are essential for the website to function properly.
                    They enable basic functionalities like page navigation and
                    access to secure areas of the website. Users cannot opt out
                    of these cookies as they are crucial for the site&apos;s
                    operation.
                  </span>
                </li>
                <li>
                  <b>Functional Cookies: &nbsp;</b>
                  <span>
                    These cookies enhance user experience by remembering user
                    preferences and choices. They may include language
                    preferences, font size selections, and personalized layouts.
                  </span>
                </li>
                <li>
                  <b>Analytical Cookies: &nbsp;</b>
                  <span>
                    These cookies gather information about how users interact
                    with the website. They provide insights into which pages are
                    visited most often, how much time is spent on pages, and any
                    errors encountered. This data helps in optimizing the
                    website&apos;s performance and content.
                  </span>
                </li>
                <li>
                  <b>Marketing Cookies: &nbsp;</b>
                  <span>
                    These cookies track user behavior across websites to create
                    a profile that can be used to display targeted ads and
                    promotions. They are used to deliver relevant content based
                    on a user&apos;s interests and browsing history.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="log-files">
            <h2 className="mb-2 sub-heading">Purpose of Cookies:</h2>
            <p>
              The web development company uses cookies to enhance user
              experience and improve website functionality. Cookies help in
              understanding user preferences, analyzing site traffic, and
              customizing content to suit individual needs. They also enable the
              company to deliver personalized marketing campaigns that are
              relevant to the user&apos;s interests.
            </p>
          </div>
          <div className="advertising-partner">
            <h2 className="mb-2 sub-heading ">
              User Control and Cookie Preferences:
            </h2>
            <p>
              The web development company respects user privacy and provides
              options to control cookie preferences:
            </p>
            <ul
              style={{
                listStyle: "square",
                marginLeft: "20px",
                lineHeight: "35px",
              }}
            >
              <li>
                <b>Cookie Consent Banner: &nbsp;</b>
                <span>
                  When users visit the website for the first time, they will be
                  presented with a cookie consent banner. Users can choose to
                  accept or reject non-essential cookies
                </span>
              </li>
              <li>
                <b>Browser Settings: &nbsp;</b>
                <span>
                  Users can manage and control cookies through their browser
                  settings. They can choose to block or delete cookies, and some
                  browsers allow users to set preferences for different types of
                  cookies.
                </span>
              </li>
              <li>
                <b>Third-Party Cookies: &nbsp;</b>
                <span>
                  The website may contain content and links from third-party
                  websites. Users are encouraged to review the cookies policies
                  of these third parties as they are not covered by the web
                  development company&apos;s policy.
                </span>
              </li>
            </ul>
          </div>
          <div className="log-files">
            <h2 className="mb-2 sub-heading">Data Security:</h2>
            <p>
              The web development company takes data security seriously. Cookies
              do not store sensitive personal information like names, addresses,
              or payment details. Any data collected is anonymized and used
              solely for improving website performance and user experience.
            </p>
          </div>
          <div className="log-files">
            <h2 className="mb-2 sub-heading">Policy Updates:</h2>
            <p>
              The company&apos;s cookies policy may be updated periodically to
              reflect changes in regulations and business practices. Users are
              encouraged to review the policy regularly to stay informed about
              how their data is being used. In conclusion, the web development
              company&apos;s cookies policy is designed to inform users about
              the types of cookies used, their purpose, and how user data is
              managed. By providing transparency and control over cookie
              preferences, the company aims to ensure a positive and secure user
              experience on its website.
            </p>
          </div>
        </div>
      </SectionContainer>
      <CurveShape
        className=""
        firstColor="#f3f5fc"
        secondColor="#f3f5fc"
        thirdColor="#f3f5fc"
        fourthColor="#f3f5fc"
        curveD="M0,160L120,138.7C240,117,480,75,720,85.3C960,96,1200,160,1320,192L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      />
      <section
        className="bg-lite-gray pb-[110px]  pt-5 lg:pt-20 -mt-5 sm:-mt-[30px] md:-mt-[40px] lg:-mt-[50px] lg:-mb-[90px] md:-mb-[100px] sm:-mb-[120px] -mb-[135px]"
        style={customStyle}
      >
        <SectionContainer>
          <div className="business-grow-container flex justify-between">
            <div className="w-full flex flex-col gap-1 lg:gap-2 items-center justify-center text-center">
              <SectionSubTitle>
                <span className="uppercase text-left">
                  Let&apos;s get started
                </span>
              </SectionSubTitle>
              <SectionTitle>
                <span>
                  Want to{" "}
                  <span className="font-[800] text-[#f57E32]">grow</span> your
                  business?
                </span>
              </SectionTitle>
              <SectionSubTitle>
                <span className="normal-case">
                  Book a call to see how can I help your business grow.
                </span>
              </SectionSubTitle>
              <div className="btn-container flex gap-5 mt-5 lg:pb-0 pb-28">
                <PrimaryButton className="">Schedule a meeting</PrimaryButton>
                <SecondaryButton className="">Book a call</SecondaryButton>
              </div>
            </div>
            <div className="w-full img-container hidden lg:block ">
              <Image
                src="/images/spirehubservices-stripe.png"
                alt="call-us"
                height={500}
                width={426}
                // style={{ width: "70%" }}
              />
            </div>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}

export default CookiesPolicy;
