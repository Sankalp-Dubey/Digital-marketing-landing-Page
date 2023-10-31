"use client";
import "../../styles/faqs.css";
import { useState } from "react";
import {
  OutlinedWhiteButton,
  PrimaryButton,
  SecondaryButton,
} from "@/components/buttons.component";
import CurveShape from "@/components/common/CurveShape";
import HeroSection from "@/components/common/HeroSection";
import { SectionContainer } from "@/components/layout.component";
import {
  PageTitle,
  SectionSubTitle,
  SectionTitle,
} from "@/components/typography.component";
import FaqQuestions from "@/sections/faq/FaqQuestions";
import Image from "next/image";
import React from "react";
import { data } from "autoprefixer";

const faqcategory = [
  {
    id: 1,
    title: "General",
  },
  {
    id: 2,
    title: "Website Development",
  },
  {
    id: 3,
    title: "CMS Development",
  },
  {
    id: 4,
    title: "App Development",
  },
  {
    id: 5,
    title: "Hire Team",
  },
  {
    id: 6,
    title: "Digital Marketing",
  },
  {
    id: 7,
    title: "Hosting Services",
  },
];
const Faqdetails = [
  {
    category: "General",
    Ques: "How to Choose a Web Design Company?",
    ans: "If you want to find the best web design company in India for your business, you must first determine what type of website you need. Budget is also an important factor to consider. To ensure a proven track record, search online for companies in India and read customer testimonials or reviews.",
  },
  {
    category: "General",
    Ques: "What is a Wireframe in Web Design?",
    ans: "A wireframe is a blueprint for the web page you are about to create. Known also as a page schematic or screen blueprint, a wireframe helps you arrange elements – such as buttons, banners, and navigation bars – in a way that helps them achieve their purposes.",
  },
  {
    category: "General",
    Ques: "Do you sign an NDA (non disclosure agreement)?",
    ans: "Yes.",
  },
  {
    category: "General",
    Ques: "How can we pay: Amex, Mastercard, Paypal?",
    ans: "We use paypal basic as our default payment system. So you can pay us using your paypal account or using your credit card supported on paypal. Also we accept international credit cards transaction using EBS payment method and also support wire transfer direct to our bank.",
  },
  {
    category: "General",
    Ques: "Is it possible to have a specific personal contact or do we have to mail/talk with different persons?",
    ans: "Yes, Your project will be assigned to a specified team and persons. You will be in touch with 2-3 peoples from the team. They are Marketing executive who will assist you for payments other such things, Project Manager or Project Co-ordinator who will be managing and responsible for delivery of your project, The developers who will be working on your project. Normally you are in communication with Marketing and Project management team but you can't be in direct touch with development team or developers working on your project. Also we have centralized project management system in our work process and we manages all our communication related to project with our client right on PMS. So if there is any message or feedback or any instruction you just need to put it in PMS and development will automatically get it. When Dev team has any updates or message for you they will put the message in PMS and you will get the notification in for update in PMS in your email inbox.",
  },
  {
    category: "General",
    Ques: "What currency do you work with?",
    ans: "All prices are in USD (United States Dollar).",
  },
  {
    category: "General",
    Ques: "What if we are not satisfied with your service?",
    ans: "If you are not satisfied by our service we guarantee to issue you a full refund when you request.",
  },
  {
    category: "General",
    Ques: "What is the use of Signing an NDA (non disclosure agreement)",
    ans: "If you don't want your design to be shown in our portfolio or for personal references, we are willing to sign an NDA to protect your rights.",
  },
  {
    category: "Website Development",
    Ques: "How to Choose a Web Design Company?",
    ans: "If you want to find the best web design company in India for your business, you must first determine what type of website you need. Budget is also an important factor to consider. To ensure a proven track record, search online for companies in India and read customer testimonials or reviews.",
  },
  {
    category: "CMS Development",
    Ques: "Do you sign an NDA (non disclosure agreement)?",
    ans: "Yes.",
  },
  {
    category: "App Development",
    Ques: "How to Choose a Web Design Company?",
    ans: "If you want to find the best web design company in India for your business, you must first determine what type of website you need. Budget is also an important factor to consider. To ensure a proven track record, search online for companies in India and read customer testimonials or reviews.",
  },
  {
    category: "Hire Team",
    Ques: "How can we pay: Amex, Mastercard, Paypal?",
    ans: "We use paypal basic as our default payment system. So you can pay us using your paypal account or using your credit card supported on paypal. Also we accept international credit cards transaction using EBS payment method and also support wire transfer direct to our bank.",
  },
  {
    category: "Digital Marketing",
    Ques: "What is a Wireframe in Web Design?",
    ans: "A wireframe is a blueprint for the web page you are about to create. Known also as a page schematic or screen blueprint, a wireframe helps you arrange elements – such as buttons, banners, and navigation bars – in a way that helps them achieve their purposes.",
  },
  {
    category: "Hosting Services",
    Ques: "Do you sign an NDA (non disclosure agreement)?",
    ans: "Yes.",
  },
];
const customStyle = {
  backgroundImage: `url(/images/growbusiness.webp)`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
};
function FAQ() {
  const [selectedcategory, setSelectedcategory] = useState(
    faqcategory[0]?.title
  );
  return (
    <div className="mt-[-88px] mb-[90px]">
      <HeroSection
        backgroundImage="/images/coding.jpg"
        secondaryImage="/images/manwithlaptop.png"
      >
        <PageTitle>
          Frequently Asked <br />
          <span className="font-[800] text-[#f57E32]"> Questions</span>
        </PageTitle>
        <p className="text-lg my-5">
          Below you&apos;ll find answers to the most common questions you may
          have on AdEspresso & Online Advertising. If you still can&apos;t find
          the answer you&apos;re looking for, just{" "}
          <span className="font-[600]">Contact us!</span>
        </p>
        <OutlinedWhiteButton url="/contact-us" className="mt-8">
          {/* Let&apos;s Work Together */}
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

      <SectionContainer className="flex md:flex-row flex-col justify-between gap-10">
        {/* aside tag starts here */}
        <aside
          id="default-sidebar"
          className=" min-w-[260px] md:h-screen h-auto"
          aria-label="Sidebar"
        >
          <div className="h-full md:py-0 py-5 overflow-y-auto bg-gray-50 dark:bg-gray-800  ">
            <ul className=" flex md:flex-col flex-row flex-wrap justify-center gap-7 font-medium mt-3  ">
              {faqcategory.map((card) => (
                <li
                  key={card.id}
                  onClick={() => {
                    setSelectedcategory(card.title);
                  }}
                >
                  <a
                    className={`p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer hover:text-[#f57E32] ${
                      selectedcategory === card.title
                        ? "text-[#f57E32] bg-gray-100"
                        : "text-gray-900"
                    }`}
                  >
                    <span className="ml-3">{card.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* aside ends here */}
        <div className="details-side w-full">
          {Faqdetails.filter((data) => data?.category === selectedcategory).map(
            (card, key) => (
              <details key={key}>
                <summary>{card.Ques}</summary>
                <div>{card.ans}</div>
              </details>
            )
          )}
        </div>
      </SectionContainer>

      {/* <SectionContainer>
        <FaqQuestions />
      </SectionContainer> */}

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
                  Want to <span className="font-[800]">grow</span> your
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
                height={490}
                width={426}
                // style={{ width: "70%" }}
              />
            </div>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}

export default FAQ;
