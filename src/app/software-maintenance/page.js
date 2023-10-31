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
  title: "Website & Software Maintenance Services in India | SpireHub",
  description:
    "SpireHub Softwares is a Website Maintenance and Software Development Company in India, if you are looking for Web development Company then You can visit here.",
  alternates: {
    canonical: "https://www.spirehubs.com/software-maintenance",
  },
  metadataBase: new URL("https://www.spirehubs.com"),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Website & Software Maintenance Services in India | SpireHub",
    description:
      "SpireHub Softwares is a Website Maintenance and Software Development Company in India, if you are looking for Web development Company then You can visit here.",
    url: "https://www.spirehubs.com/software-maintenance",
    siteName: "SpireHub",
    locale: "en_US",
    type: "website",
  },
};

const softwareMaintenanceData = [
  {
    id: 1,
    title: "Web Application Maintenance Services",
    description:
      "Web Application Maintenance Services involve the ongoing management, support, and enhancement of web-based applications to ensure their optimal functionality and user experience. This service encompasses various tasks aimed at keeping the application up-to-date, secure, and performing efficiently.",
    image: "/images/services/Web-Application-Maintenance.png",
    points: [
      {
        title: "Bug Fixes and Troubleshooting:",
        description:
          "Regular monitoring and quick resolution of any glitches, errors, or issues that may arise within the web application to maintain its smooth operation",
      },
      {
        title: "Security Updates and Patches:",
        description:
          "Implementation of necessary security measures, updates, and patches to protect the application from potential vulnerabilities and cyber threats.",
      },
      {
        title: "Performance Optimization:",
        description:
          "Continuous evaluation and optimization of the application's performance, including speed, responsiveness, and scalability, to ensure a seamless user experience and efficient resource utilization.",
      },
    ],
  },
  {
    id: 2,
    title: "Ecommerce website Maintenance",
    description:
      "Ecommerce website maintenance refers to the ongoing tasks and activities required to ensure the smooth functioning, security, and relevance of an online store. It involves several key aspects:",

    image: "/images/services/Ecommerce-Website-Maintenance.png",
    points: [
      {
        title: "Technical Updates:",
        description:
          "Regular updates of the website's software, plugins, and security protocols to safeguard against vulnerabilities and maintain optimal performance.",
      },
      {
        title: "Content Management:",
        description:
          "Continuous addition, removal, or updating of products, images, descriptions, and other content to keep the website engaging and up-to-date.",
      },
      {
        title: "Monitoring and Analytics:",
        description:
          "Tracking website traffic, user behavior, and sales metrics to identify areas for improvement, make data-driven decisions, and enhance the overall customer experience.",
      },
    ],
  },
  {
    id: 3,
    title: "Website Security and Browser Compatibility",
    description: "",
    image: "/images/services/Security-And-Browser-Compatibility.png",
    points: [
      {
        title: "Website Security:",
        description:
          "Website security refers to the measures and practices implemented to protect a website and its users from various online threats, such as hacking, data breaches, malware infections, and unauthorized access. This involves using encryption protocols, strong authentication methods, regular software updates, and firewall systems to safeguard sensitive data and maintain the integrity of the website's functionality.",
      },
      {
        title: "Browser Compatibility:",
        description:
          "Browser compatibility pertains to a website's ability to function correctly and consistently across different web browsers, including Google Chrome, Mozilla Firefox, Microsoft Edge, and Safari. Ensuring browser compatibility involves optimizing code, using standardized web technologies, and conducting thorough testing to guarantee that the website's design and features remain consistent and functional for all users, regardless of their chosen browser.",
      },
      {
        title: "Importance:",
        description: "",
        subPoints: [
          {
            title: "User Experience:",
            desc: "Both website security and browser compatibility contribute to a positive user experience by ensuring that visitors can access and interact with the site without encountering errors or security warnings.",
          },
          {
            title: "Credibility:",
            desc: "A secure website establishes trust among users, while browser compatibility prevents visual and functional discrepancies that could undermine the website's credibility.",
          },
          {
            title: "SEO and Accessibility:",
            desc: "Search engines prioritize secure websites and may penalize those with security vulnerabilities. Moreover, accessible websites that work well across browsers enhance their search engine ranking and reach a broader audience.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "WordPress Core & Plugin Upgrade",
    description: "",
    image: "/images/services/wordpress-core-plugins.png",
    points: [
      {
        title: "WordPress Core Upgrade:",
        description:
          "The WordPress Core is the foundational software that powers your website. Regular Core upgrades involve updating to the latest version of WordPress. These upgrades often include security enhancements, bug fixes, and new features, ensuring your site remains secure and up-to-date.",
      },
      {
        title: "Plugin Upgrade:",
        description:
          "Plugins are add-on modules that enhance the functionality of your WordPress site. Plugin upgrades involve updating individual plugins to their latest versions. This process ensures compatibility with the current WordPress version and often includes improvements, bug fixes, and new functionalities.",
      },
      {
        title: "Benefits of Regular Upgrades: ",
        description:
          "Keeping your WordPress Core and plugins up-to-date ensures optimal performance, security, and compatibility. Regular upgrades protect your site from vulnerabilities, maintain a smooth user experience, and offer access to the latest features in both the Core and plugins.",
      },
    ],
  },
  {
    id: 5,
    title: "Migration or Version Upgrades",
    description:
      "Migration or Version Upgrades involve transitioning from one software, system, or platform to another, often to benefit from improved features, security, or performance. This process requires careful planning, execution, and monitoring to ensure a smooth transition and minimize disruptions. Subheadings for a comprehensive overview:",
    image: "/images/services/Version-Upgrades.png",
    points: [
      {
        title: "Reasons for Migration:",
        description:
          "Understand the drivers behind the upgrade, such as outdated technology, security vulnerabilities, or the need for enhanced functionality, to justify the investment and effort.",
      },
      {
        title: "Planning and Execution:",
        description:
          "Create a detailed roadmap outlining tasks, responsibilities, timelines, and potential risks. Meticulously execute each step while considering data migration, integration, and training requirements.",
      },
      {
        title: "Testing and Validation:",
        description:
          "Rigorously test the new environment to identify and rectify compatibility issues, data loss risks, and performance bottlenecks before fully committing to the migration.",
      },
    ],
  },
  {
    id: 6,
    title: "Website Backups Services",
    description:
      "Website Backup Services are essential tools for preserving the integrity and availability of your website's data and content. These services offer automated backup solutions to safeguard your digital assets from data loss, cyberattacks, and technical failures. They typically include the following features:",
    image: "/images/services/backups.jpg",
    points: [
      {
        title: "Regular Automated Backups:",
        description:
          "Website backup services create scheduled automatic backups of your website's files, databases, and configurations, ensuring that your data is consistently saved.",
      },
      {
        title: "Data Restoration: ",
        description:
          "In case of data corruption, accidental deletion, or security breaches, these services enable you to restore your website to a previous functional state using the backed-up data.",
      },
      {
        title: "Off-Site Storage:",
        description:
          "Website backups are securely stored off-site on remote servers, reducing the risk of data loss due to server malfunctions or disasters affecting your primary hosting environment.",
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
        backgroundImage="/images/services/maintenance-banner.jpg"
        secondaryImage="/images/services/software-maintenance-secondary.png"
      >
        <PageTitle>
          Software <span className="text-[#f57E32] font-[800]">Maintenace</span>
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
          {softwareMaintenanceData &&
            softwareMaintenanceData.map((item, key) => (
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
