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
  title: "Web Development Company in India | SpireHub",
  description:
    "SpireHub Softwares is website development company in India doing full web development life cycle. We provide web design and custom web application development services.",
  alternates: {
    canonical: "https://www.spirehubs.com/web-development",
  },
  metadataBase: new URL("https://www.spirehubs.com"),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Web Development Company in India | SpireHub",
    description:
      "SpireHub Softwares is website development company in India doing full web development life cycle. We provide web design and custom web application development services.",
    url: "https://www.spirehubs.com/web-development",
    siteName: "SpireHub",
    locale: "en_US",
    type: "website",
  },
};

const webDevelopmentData = [
  {
    id: 1,
    title: "Custom Web Development",
    description:
      "Custom web development involves the creation of unique and tailored websites to meet specific business or individual needs. It offers personalized solutions that are not constrained by pre-designed templates. This approach ensures a seamless alignment between functionality and design, resulting in a user experience that precisely caters to the target audience. Three key aspects define custom web development:",
    image: "/images/services/custom-development.png",
    points: [
      {
        title: "Bespoke Functionality:",
        description:
          "Tailoring features and functionalities from scratch allows businesses to implement precisely what they require, enhancing efficiency and user satisfaction.",
      },
      {
        title: "Scalability:",
        description:
          " Custom websites can be built with scalability in mind, accommodating growth and future updates without compromising performance.",
      },
      {
        title: "Branding and User Experience:",
        description:
          "Every element, from design elements to user interface, is crafted to align with the brand's identity, fostering a unique and memorable user experience.",
      },
    ],
  },
  {
    id: 2,
    title: "eCommerce Development",
    description:
      "E-commerce Development involves creating online platforms that facilitate buying and selling of products or services. It encompasses various aspects, from website design and user experience to secure payment gateways and inventory management.",

    image: "/images/services/e-commerce-development.png",
    points: [
      {
        title: "Website Design and User Experience:",
        description:
          "A visually appealing and user-friendly website is crucial for attracting and retaining customers. A well-designed interface, intuitive navigation, and responsive layout enhance the user experience, leading to higher conversion rates.",
      },
      {
        title: "Payment Gateway Integration:",
        description:
          "Secure and seamless payment processing is essential. Integration of trusted payment gateways ensures customer data safety and enables smooth transactions, fostering trust between the business and its customers.",
      },
      {
        title: "Inventory Management:",
        description:
          "Effectively managing product listings, stock levels, and order fulfillment is essential. Implementing inventory management systems helps prevent overselling, improves order accuracy, and streamlines the shipping process, enhancing overall customer satisfaction.",
      },
    ],
  },
  {
    id: 3,
    title: "PWA Development",
    description:
      "A Progressive Web App (PWA) is a type of web application that leverages modern web technologies to provide a seamless and engaging user experience, blurring the lines between traditional websites and native mobile apps. PWAs offer numerous advantages:",
    image: "/images/services/pwa.png",
    points: [
      {
        title: "Enhanced Performance:",
        description:
          "PWAs use techniques like caching and lazy loading to ensure quick loading times, even in low-network conditions, making them highly responsive.",
      },
      {
        title: "Offline Access:",
        description:
          "PWAs can function offline or in areas with weak connectivity due to their ability to cache essential resources, allowing users to access content and functionality without an active internet connection.",
      },
      {
        title: "App-like Experience:",
        description:
          "By utilizing a responsive design, PWAs adapt to various screen sizes, providing an app-like feel on both desktop and mobile devices, complete with home screen installation and push notifications.",
      },
    ],
  },
  {
    id: 4,
    title: "Software Development",
    description:
      "Software Development is the process of designing, creating, testing, and maintaining computer programs and applications. It involves translating user requirements into functional software solutions. Three key subheadings within software development are:",
    image: "/images/services/Software-Development.png",
    points: [
      {
        title: "Planning and Analysis:",
        description:
          "This phase involves gathering user requirements, defining project scope, and creating a detailed plan for the development process. It includes feasibility studies, budgeting, and timeline estimation.",
      },
      {
        title: "Coding and Implementation:",
        description:
          "In this phase, developers write code based on the project specifications. Programming languages, frameworks, and best practices are employed to create functional software, ensuring it meets design standards and user needs.",
      },
      {
        title: "Testing and Deployment:",
        description:
          "The software undergoes rigorous testing to identify and fix bugs or issues. Once tested and refined, the software is deployed to production environments, making it available to users. Continuous monitoring and updates are crucial for ongoing maintenance and improvement.",
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
        backgroundImage="/images/services/web-development-banner.jpg"
        secondaryImage="/images/services/custom-development.png"
      >
        <PageTitle>
          Web <span className="text-[#f57E32] font-[800]">Development</span>
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
          {webDevelopmentData &&
            webDevelopmentData.map((item, key) => (
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
              <div className="btn-container flex gap-5 mt-5">
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
