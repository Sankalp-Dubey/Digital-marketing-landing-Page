import {
  OutlinedWhiteButton,
  PrimaryButton,
  SecondaryButton,
} from "@/components/buttons.component";
import CurveShape from "@/components/common/CurveShape";
import HeroSection from "@/components/common/HeroSection";
import {
  PageTitle,
  SectionSubTitle,
  SectionTitle,
} from "@/components/typography.component";
import React from "react";
import { SectionContainer } from "@/components/layout.component";
import ServiceDetailsSection from "@/components/services/ServiceDetails";
import Image from "next/image";

export const metadata = {
  title: "Mobile App Development Company in India | SpireHub",
  description:
    "SpireHub Softwares is an experienced and creative mobile app development company in India. We have proven our expertise in iPhone & Android application development.",
  alternates: {
    canonical: "https://www.spirehubs.com/mobile-app-development",
  },
  metadataBase: new URL("https://www.spirehubs.com"),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mobile App Development Company in India | SpireHub",
    description:
      "SpireHub Softwares is an experienced and creative mobile app development company in India. We have proven our expertise in iPhone & Android application development.",
    url: "https://www.spirehubs.com/mobile-app-development",
    siteName: "SpireHub",
    locale: "en_US",
    type: "website",
  },
};

const mobileAppData = [
  {
    id: 1,
    title: "Custom Mobile Apps Development",
    description:
      "Custom mobile app development services refer to the specialized expertise and solutions offered by professionals to create tailor-made applications for smartphones and tablets. These services encompass the entire app development lifecycle, from conceptualization and design to coding, testing, and deployment. They are designed to meet unique business needs, enhancing user experiences and addressing specific challenges. Subheadings for this topic could include:",
    image: "/images/services/Custom-Mobile-Apps-Development.png",
    points: [
      {
        title: "Personalized Solutions:",
        description:
          "Custom mobile app development provides businesses with the opportunity to create apps that align precisely with their operational requirements, incorporating features and functionalities tailored to their niche.",
      },
      {
        title: "Enhanced User Engagement:",
        description:
          "Through custom apps, businesses can optimize user interactions, ensuring an intuitive and user-friendly interface that leads to higher engagement and satisfaction.",
      },
      {
        title: "Scalability and Future Growth:",
        description:
          "Custom app services allow for scalability, enabling businesses to adapt and expand their app as their operations grow, integrating new features and technologies to stay ahead in the dynamic mobile landscape.",
      },
    ],
  },
  {
    id: 2,
    title: "Native Mobile App Development",
    description:
      "Native Mobile App Development Services involve creating mobile applications specifically for a particular platform, such as iOS or Android, using platform-specific programming languages and tools. These services encompass the entire app development lifecycle, including design, coding, testing, and deployment.",

    image: "/images/services/react-native.png",
    points: [
      {
        title: "Platform Expertise:",
        description:
          "Developers skilled in native app development specialize in the chosen platform's languages (Swift/Objective-C for iOS, Java/Kotlin for Android) and leverage platform-specific features for optimal user experiences.",
      },
      {
        title: "Performance and User Experience:",
        description:
          "Native apps offer superior performance and a seamless user experience by utilizing device-specific hardware and UI components, resulting in faster load times and smoother interactions.",
      },
      {
        title: "Access to Features",
        description:
          "Developers can harness the full capabilities of the platform, including camera, GPS, and notifications, providing users with rich, integrated functionalities that align with the platform's conventions.",
      },
    ],
  },
  {
    id: 3,
    title: "Hybrid Mobile App Development",
    description:
      "Hybrid Mobile App Development Services combine the best of both native and web app technologies, offering a versatile approach to building applications across platforms. These services typically include:",
    image: "/images/services/Hybrid-Mobile-App-Development.png",
    points: [
      {
        title: "Cross-Platform Compatibility:",
        description:
          "Hybrid app development enables applications to run smoothly on multiple platforms, like iOS, Android, and web browsers. This reduces development time and costs while expanding the app's potential user base.",
      },
      {
        title: "Cost-Effectiveness:",
        description:
          "By sharing a single codebase for different platforms, development and maintenance expenses are significantly lowered compared to creating separate native apps.",
      },
      {
        title: "Rapid Development:",
        description:
          "Hybrid frameworks such as React Native and Flutter facilitate faster development with reusable components, allowing for quicker deployment of features and updates.",
      },
    ],
  },
  {
    id: 4,
    title: " Mobile App Bug Fixes",
    description:
      "Mobile App Bug Fixes Services refer to the specialized assistance provided by developers and teams to identify and rectify software glitches within mobile applications. These services ensure the smooth functioning and optimal user experience of mobile apps. The three subheadings for this topic could be:",
    image: "/images/services/Mobile-App-Bug-Fixes.png",
    points: [
      {
        title: "Comprehensive Issue Diagnosis:",
        description:
          "1.Mobile app bug fix services involve meticulous examination of the application's code and functionality to identify underlying issues causing crashes, performance hiccups, or UI anomalies.",
      },
      {
        title: "Efficient Debugging and Patching:",
        description:
          "2.Skilled developers work to isolate and correct bugs, addressing issues ranging from minor glitches to critical flaws. This involves coding modifications, testing, and deploying patches to eliminate problems and enhance app stability.",
      },
      {
        title: "User-Centric Quality Assurance:",
        description:
          "3.After fixes are implemented, rigorous testing across diverse devices and scenarios ensures that the app operates seamlessly, meeting user expectations and maintaining a high-quality experience. This iterative process ensures that bug-related impediments are resolved effectively.",
      },
    ],
  },
];

function Services() {
  const customStyle = {
    backgroundImage: `url(/images/growbusiness.webp)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };
  return (
    <div className="mt-[-88px] mb-[90px]">
      <HeroSection
        backgroundImage="/images/services/mobile-app-development.jpg"
        secondaryImage="/images/services/Mobile-App-Bug-Fixes.png"
      >
        <PageTitle>
          Mobile App{" "}
          <span className="text-[#f57E32] font-[800]">Development</span>
        </PageTitle>
        <p className="text-lg my-5">
          We offer a wide array of services to cater to any of your web, mobile,
          or digital marketing requirements. Check out below
        </p>
        <OutlinedWhiteButton url="/contact-us" className="mt-8">
          Let&apos;s Work Together
        </OutlinedWhiteButton>
      </HeroSection>
      <CurveShape
        className="-mt-[60px] sm:-mt-[80px] md:-mt-[110px] lg:-mt-[140px]"
        curveD="M0,64L120,85.3C240,107,480,149,720,154.7C960,160,1200,128,1320,112L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        firstColor="#ffffff"
        secondColor="#b387e3"
        thirdColor="#ffffff"
        fourthColor="#ffffff"
      ></CurveShape>
      <section className="service-section-container pb-[100px]">
        <SectionContainer>
          {mobileAppData &&
            mobileAppData.map((item, key) => (
              <ServiceDetailsSection item={item} key={key} />
            ))}
        </SectionContainer>
      </section>
      <CurveShape
        className=""
        firstColor="#f3f5fc"
        secondColor="#f3f5fc"
        thirdColor="#f3f5fc"
        fourthColor="#f3f5fc"
        curveD="M0,160L120,138.7C240,117,480,75,720,85.3C960,96,1200,160,1320,192L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      />

      <section
        className="bg-lite-gray pb-[100px] lg:pb-12 pt-5 lg:pt-20 -mt-5 sm:-mt-[30px] md:-mt-[40px] lg:-mt-[50px] -mb-[110px]"
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
              <div className="btn-container flex gap-5 mt-5 lg:pb-0 md:pb-8 pb-0">
                <PrimaryButton className="">Schedule a meeting</PrimaryButton>
                <SecondaryButton className="">Book a call</SecondaryButton>
              </div>
            </div>
            <div className="w-full img-container hidden lg:block ">
              <Image
                src="/images/spirehubservices-stripe.png"
                alt="call-us"
                // style={{ width: "70%" }}
                height={490}
                width={426}
              />
            </div>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}

export default Services;
