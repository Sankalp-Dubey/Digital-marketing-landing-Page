import React from "react";
import "../../styles/contact_us.css";
import { SectionContainer } from "@/components/layout.component";
import Iconify from "@/components/iconify";
import {
  PageTitle,
  SectionSubTitle,
  SectionTitle,
} from "@/components/typography.component";
import {
  OutlinedWhiteButton,
  PrimaryButton,
  SecondaryButton,
} from "@/components/buttons.component";
import HeroSection from "@/components/common/HeroSection";
import CurveShape from "@/components/common/CurveShape";
import GetInTouch from "@/sections/contact_us/GetInTouch";
import ContactUsMap from "@/sections/contact_us/ContactUsMap";
import Clock from "@/sections/contact_us/Clock";
import { PostContactUs } from "@/redux/slices/contact_us";
import ContactUsForm from "@/sections/contact_us/ContactUsForm";
import Image from "next/image";

export const metadata = {
  title: "Contact Us | SpireHub Software Private Limited",
  description:
    "SpireHub loves uniting with ambitious brands, startups, and enterprises. If you have a web and app idea for us to make it real, connect@spirehubs.com.",
  alternates: {
    canonical: "https://www.spirehubs.com/contact-us",
  },
  metadataBase: new URL("https://www.spirehubs.com"),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact Us | SpireHub Software Private Limited",
    description:
      "SpireHub loves uniting with ambitious brands, startups, and enterprises. If you have a web and app idea for us to make it real, connect@spirehubs.com.",
    url: "https://www.spirehubs.com/contact-us",
    siteName: "SpireHub",
    locale: "en_US",
    type: "website",
  },
};

function ContactUs() {
  const customStyle = {
    backgroundImage: `url(/images/growbusiness.webp)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };
  return (
    <div>
      <div className="mt-[-88px] mb-[90px]">
        <HeroSection
          backgroundImage="/images/contact-us-banner.jpg"
          secondaryImage="/images/contact-us-secondary.png"
        >
          <PageTitle>
            Get in touch with the Web & App
            <span className="font-[800] text-[#f57E32]"> Experts!</span>
          </PageTitle>
          <p className="text-lg my-5">
            Please feel free to reach out to us with any inquiries, concerns, or
            feedback. Our dedicated team is here to assist you. You can contact
            us through the form on our website or directly via email or phone.
            We look forward to hearing from you and providing the support you
            need.
          </p>
          <OutlinedWhiteButton url="/contact-us" className="mt-8">
            Contact Us
          </OutlinedWhiteButton>
        </HeroSection>
        <CurveShape
          className="-mt-[60px] sm:-mt-[80px] md:-mt-[110px] lg:-mt-[140px]"
          curveD="M0,64L120,85.3C240,107,480,149,720,154.7C960,160,1200,128,1320,112L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          firstColor="#ffffff"
          secondColor="#b387e3"
          thirdColor="#ffffff"
          fourthColor="#ffffff"
        />
        <SectionContainer>
          {/* <GetInTouch /> */}
          <div className="get-in-touch md:pb-15 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center justify-between">
              <div className="flex flex-col gap-5">
                <SectionTitle>
                  Get in{" "}
                  <span className="font-[800] text-[#f57E32]">Touch</span>
                </SectionTitle>
                <p>
                  Get in touch with the right people at{" "}
                  <span className="font-[700] text-purple-600">
                    SpireHub Softwares
                  </span>
                  , we are here to help.
                </p>
                <ul className="flex flex-col gap-8">
                  <li className="get-in-touch-li">
                    <div className="flex gap-5 items-center">
                      <a
                        href="http://maps.google.com/maps?saddr=Your+Location&daddr=SpireHub+Softwares+Pvt+Ltd.+H-89+H+Block,+Sector+63+Noida,+Uttar+Pradesh+201301"
                        target="_blank"
                      >
                        <div className="h-14 w-14 bg-cyan-400 rounded-lg text-white pl-3 pt-3 get-in-touch-icon">
                          <Iconify icon="mdi:location" fontSize={30} />
                        </div>
                      </a>
                      <div className="flex flex-col gap-3">
                        <p className="font-[700] text-lg text-cyan-500 get-in-touch-text">
                          Noida:
                        </p>
                        <p>
                          H-89, Block H, Sector 63 Noida GB Nagar UP, 201301
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="get-in-touch-li">
                    <div className="flex gap-5 items-center">
                      <a href="mailto:connect@spirehubs.com" target="_blank">
                        <div className="h-14 w-14 bg-cyan-400 get-in-touch-icon rounded-lg text-white pl-3 pt-3">
                          <Iconify icon="ic:baseline-mail" fontSize={30} />
                        </div>
                      </a>
                      <div className="flex flex-col gap-3">
                        <p className="font-[700] get-in-touch-text text-lg text-cyan-500">
                          Mail Us:
                        </p>
                        <p>connect@spirehubs.com</p>
                      </div>
                    </div>
                  </li>
                  <li className="get-in-touch-li">
                    <div className="flex gap-5 items-center">
                      <a href="tel:+91846-794-7766" target="_blank">
                        <div className="h-14 w-14 bg-cyan-400 get-in-touch-icon rounded-lg text-white pl-3 pt-3">
                          <Iconify
                            icon="solar:phone-calling-rounded-bold"
                            fontSize={30}
                          />
                        </div>
                      </a>
                      <div className="flex flex-col gap-3">
                        <p className="font-[700] get-in-touch-text text-lg text-cyan-500">
                          Call Us:
                        </p>
                        <p>+91 8467947766</p>
                      </div>
                    </div>
                  </li>
                  <li className="get-in-touch-li">
                    <div className="flex gap-5 items-center">
                      <a href="skype:nilesh.chaubey2?chat" target="_blank">
                        <div className="h-14 w-14 bg-cyan-400 get-in-touch-icon rounded-lg text-white pl-3 pt-3">
                          <Iconify
                            icon="foundation:social-skype"
                            fontSize={30}
                          />
                        </div>
                      </a>
                      <div className="flex flex-col gap-3">
                        <p className="font-[700] get-in-touch-text text-lg text-cyan-500">
                          Skype:
                        </p>
                        <p>nilesh.chaubey2</p>
                      </div>
                    </div>
                  </li>
                  <li className="get-in-touch-li">
                    <div className="flex gap-5 items-center">
                      <a target="_blank" href="http://wa.me/918467947766">
                        <div className="h-14 w-14 bg-cyan-400 get-in-touch-icon rounded-lg text-white pl-3 pt-3">
                          <Iconify icon="ic:twotone-whatsapp" fontSize={30} />
                        </div>
                      </a>
                      <div className="flex flex-col gap-3">
                        <p className="font-[700] get-in-touch-text text-lg text-cyan-500">
                          Whatsapp:
                        </p>
                        <p>+91 8467947766</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <ContactUsForm />
            </div>
          </div>
        </SectionContainer>

        <section className="analog-clock">
          {/* CLOCK S */}
          {/* <Clock /> */}
        </section>

        {/* CONTACT US MAP */}
        <ContactUsMap />

        <CurveShape
          className=""
          firstColor="#f3f5fc"
          secondColor="#f3f5fc"
          thirdColor="#f3f5fc"
          fourthColor="#f3f5fc"
          curveD="M0,160L120,138.7C240,117,480,75,720,85.3C960,96,1200,160,1320,192L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        />
        <section
          className="bg-lite-gray pb-[100px] lg:pb-12 pt-5 lg:pt-20 -mt-5 sm:-mt-[30px] md:-mt-[40px] lg:-mt-[50px] lg:-mb-[90px] md:-mb-[100px] sm:-mb-[120px] -mb-[135px]"
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
                <div className="btn-container flex gap-5 mt-5">
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
      </div>
    </div>
  );
}

export default ContactUs;
