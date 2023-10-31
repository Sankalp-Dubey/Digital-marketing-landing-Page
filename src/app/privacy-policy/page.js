import React from "react";
import { SectionContainer } from "@/components/layout.component";
import Image from "next/image";
import {
  SectionSubTitle,
  SectionTitle,
} from "@/components/typography.component";
import CurveShape from "@/components/common/CurveShape";
import { PrimaryButton, SecondaryButton } from "@/components/buttons.component";

function PrivacyPolicy() {
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
          <h1>Privacy Policy</h1>
        </div>
      </div>
      <SectionContainer>
        <div className="flex flex-col md:gap-y-8 gap-y-5 m-auto md:pb-28 pb-14 pt-3">
          <div className="flex flex-row gap-5 items-center py-5">
            <div>
              <Image
                src="/images/privacy-policy.jpg"
                height={350}
                width={400}
                alt="term-conditions"
                className="h-full w-full rounded-xl"
              />
            </div>
            <div>
              <p>
                Welcome to SpireHub Softwares a fast growing web development
                company dedicated to providing cutting-edge digital solutions.
                We are committed to safeguarding your privacy and ensuring the
                security of your personal information. This privacy policy
                outlines how we collect, use, and protect your data when you
                interact with our website and services.
              </p>
            </div>
          </div>
          <div className="advertising-partner">
            <h2 className="mb-2 sub-heading ">Information Collection</h2>
            <p>
              We collect certain information from you when you visit our website
              or use our services. This may include:
            </p>
            <ul
              style={{
                listStyle: "square",
                marginLeft: "20px",
                lineHeight: "35px",
              }}
            >
              <li>
                <b>Personal Information: &nbsp;</b>
                <span>
                  When you contact us or subscribe to our newsletters, we may
                  collect your name, email address, and other contact details to
                  effectively communicate with you.
                </span>
              </li>
              <li>
                <b>Usage Data: &nbsp;</b>
                <span>
                  We automatically collect data about your interaction with our
                  website, such as your IP address, browser type, operating
                  system, pages visited, and time spent on our site. This data
                  helps us enhance your browsing experience
                </span>
              </li>
              <li>
                <b>Cookies &nbsp;</b>
                <span>
                  We use cookies and similar tracking technologies to improve
                  our website&apos;s functionality and personalize your
                  experience. You can adjust your browser settings to refuse
                  cookies, but this may affect your ability to access certain
                  features.
                </span>
              </li>
            </ul>
          </div>

          <div className="advertising-partner">
            <h2 className="mb-2 sub-heading ">Information Use</h2>
            <p>We use the collected information for various purposes:</p>
            <ul
              style={{
                listStyle: "square",
                marginLeft: "20px",
                lineHeight: "35px",
              }}
            >
              <li>
                <b>Communication: &nbsp;</b>
                <span>
                  Your personal information allows us to respond to your
                  inquiries, provide updates, and deliver requested services.
                </span>
              </li>
              <li>
                <b>Analytics: &nbsp;</b>
                <span>
                  Usage data helps us analyze trends, track website performance,
                  and improve our services.
                </span>
              </li>
              <li>
                <b>Marketing: &nbsp;</b>
                <span>
                  With your consent, we may send you promotional materials and
                  newsletters about our services, industry insights, and events.
                </span>
              </li>
            </ul>
          </div>
          <div className="advertising-partner">
            <h2 className="mb-2 sub-heading ">Data Sharing</h2>
            <p>
              We value your trust and do not sell, trade, or rent your personal
              information to third parties. However, we may share your
              information under the following circumstances:
            </p>
            <ul
              style={{
                listStyle: "square",
                marginLeft: "20px",
                lineHeight: "35px",
              }}
            >
              <li>
                <b>Service Providers: &nbsp;</b>
                <span>
                  We engage trusted third-party service providers who assist us
                  in delivering our services, subject to strict confidentiality
                  agreements.
                </span>
              </li>
              <li>
                <b>Legal Compliance: &nbsp;</b>
                <span>
                  We may disclose information if required by law or to protect
                  our rights, safety, and property.
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 sub-heading">Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your
              data from unauthorized access, alteration, or disclosure. While we
              strive to protect your personal information, no method of data
              transmission over the internet is completely secure. Therefore, we
              cannot guarantee absolute security.
            </p>
          </div>
          <div className="advertising-partner">
            <h2 className="mb-2 sub-heading ">Your Choices</h2>
            <ul
              style={{
                listStyle: "square",
                marginLeft: "20px",
                lineHeight: "35px",
              }}
            >
              <li>
                <b>Opt-Out: &nbsp;</b>
                <span>
                  1.You can opt out of receiving marketing emails by clicking
                  the unsubscribe link in the emails.
                </span>
              </li>
              <li>
                <b>Access and Correction: &nbsp;</b>
                <span>
                  You have the right to access and update your personal
                  information. If you would like to do so, please contact us at
                  [contact email].
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 sub-heading">Children&apos;s Privacy</h2>
            <p>
              Our services are not intended for children under 13 years of age.
              We do not knowingly collect personal information from children. If
              you believe we have inadvertently collected such information,
              please contact us immediately.
            </p>
          </div>
          <div>
            <h2 className="mb-2 sub-heading">Changes to this Policy</h2>
            <p>
              We may update this privacy policy from time to time to reflect
              changes in our practices or for legal reasons. Any revisions will
              be posted on this page.
            </p>
            <p className="mt-2">
              By using our website and services, you consent to the terms
              outlined in this privacy policy. If you have any questions or
              concerns about our privacy practices, please contact us at
              Connect@spirehubs.com
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

export default PrivacyPolicy;
