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
  title: "Top Digital Marketing Agency in USA, UK and India | SpireHub",
  description:
    "SpireHub Softwares is a top Digital Marketing Agency in the USA, UK & India. focuses on delivering outstanding results complete range of Digital Marketing services.",
  alternates: {
    canonical: "https://www.spirehubs.com/digital-marketing",
  },
  metadataBase: new URL("https://www.spirehubs.com"),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Top Digital Marketing Agency in USA, UK and India | SpireHub",
    description:
      "SpireHub Softwares is a top Digital Marketing Agency in the USA, UK & India. focuses on delivering outstanding results complete range of Digital Marketing services.",
    url: "https://www.spirehubs.com/digital-marketing",
    siteName: "SpireHub",
    // images: [
    //   {
    //     url: "/images/services/og-images/digital-maeket-og-banner.png",
    //     width: 800,
    //     height: 600,
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
};

const digitalMarketingData = [
  {
    id: 1,
    title: "Search Engine Optimization(SEO)",
    description:
      "Search Engine Optimization (SEO) Services are strategies and techniques aimed at improving a website's visibility on search engines like Google, increasing its organic (non-paid) traffic and ultimately boosting its online presence. This process involves various practices to enhance a website's content, structure, and technical aspects",
    image: "/images/services/seo.png",
    points: [
      {
        title: "Keyword Research and Optimization:",
        description:
          "SEO services begin with thorough keyword research to identify relevant search terms users employ to find products or services. These keywords are then strategically incorporated into the website's content, meta tags, and headers to improve its ranking for those queries.",
      },
      {
        title: "On-Page Optimization:",
        description:
          "This involves optimizing individual web pages to improve their relevance and usability for both users and search engines. Elements like meta descriptions, title tags, image alt tags, and internal linking are fine-tuned to enhance the page's visibility and user experience.",
      },
      {
        title: "Link Building:",
        description:
          "Acquiring high-quality backlinks from reputable websites is a crucial aspect of SEO. Link building services aim to foster relationships with other websites to secure valuable links, which not only drive direct traffic but also signal search engines about the website's credibility and authority, positively impacting its ranking.",
      },
    ],
  },
  {
    id: 2,
    title: "Social Media Marketing",
    description:
      "Social Media Marketing Services involve the strategic use of various social media platforms to enhance brand visibility, engagement, and business growth. These services employ a range of techniques to connect with target audiences effectively. Three key subheadings within this domain include:",

    image: "/images/services/service4.png",
    points: [
      {
        title: "Content Strategy:",
        description:
          "Crafting compelling and relevant content tailored to each platform to captivate the audience's attention. This includes text, images, videos, and interactive elements that align with the brand's voice and resonate with the target demographic.",
      },
      {
        title: "Audience Engagement:",
        description:
          "Engaging with followers by responding to comments, messages, and mentions promptly. Building a community around the brand through conversations, polls, and contests fosters a sense of connection and loyalty.",
      },
      {
        title: "Analytics and Insights:",
        description:
          "3.Monitoring the performance of social media campaigns through metrics such as likes, shares, clicks, and conversions. Analyzing these insights helps refine strategies, identify trends, and optimize future content for better results.",
      },
    ],
  },
  {
    id: 3,
    title: "Pay Per Click",
    description:
      "Pay Per Click (PPC) Services are online advertising platforms that allow businesses to place ads on various digital platforms, such as search engines and social media networks. Advertisers are charged only when a user clicks on their ad, making it a cost-effective way to drive targeted traffic to their websites. Three key subheadings under PPC Services are:",
    image: "/images/services/ppc.png",
    points: [
      {
        title: "Campaign Management:",
        description:
          "PPC Services involve creating and managing advertising campaigns. This includes keyword research, ad creation, budget allocation, and monitoring performance metrics.",
      },
      {
        title: "Keyword Bidding:",
        description:
          "Advertisers bid on keywords relevant to their business. The higher the bid, the better the ad's placement. Effective keyword bidding ensures ads appear prominently in search results, increasing visibility.",
      },
      {
        title: "Targeting Options:",
        description:
          "PPC platforms offer various targeting options, including demographics, location, devices, and even specific times of day. This precise targeting helps businesses reach their ideal audience and maximize their advertising ROI.",
      },
    ],
  },
  {
    id: 4,
    title: "Content Marketing Services",
    description:
      "Content Marketing Services refer to strategic activities aimed at creating, distributing, and managing valuable and relevant content to attract, engage, and retain a target audience. It involves various techniques to enhance brand awareness, credibility, and customer loyalty.",
    image: "/images/services/content-marketing.png",
    points: [
      {
        title: "Strategy Development:",
        description:
          "This subheading encompasses the planning phase, including defining goals, target audience, and content themes. It involves creating a roadmap for content creation and distribution to align with the overall marketing objectives.",
      },
      {
        title: "Content Creation:",
        description:
          " Under this subheading, the focus is on producing high-quality content such as blog posts, articles, videos, infographics, and more. The content is tailored to address audience needs and interests while aligning with the brand's messaging.",
      },
      {
        title: "Distribution and Promotion:",
        description:
          "This aspect involves getting the created content in front of the right audience through various channels like social media, email campaigns, influencer partnerships, and SEO optimization. Effective distribution amplifies reach and engagement, driving the desired results for the brand's marketing efforts.",
      },
    ],
  },
  {
    id: 4,
    title: "Mobile Marketing Services",
    description:
      "Mobile Marketing Services encompass strategies and techniques aimed at reaching and engaging target audiences through mobile devices. These services leverage the ubiquity of smartphones and tablets to enhance brand visibility and customer interactions.",
    image: "/images/services/mobile-marketing.png",
    points: [
      {
        title: "SMS Marketing:",
        description:
          "This involves sending targeted promotional messages directly to users' mobile phones via SMS. It's a direct and personal way to communicate promotions, updates, and offers.",
      },
      {
        title: "App-Based Marketing:",
        description:
          "Focusing on mobile applications, this approach involves in-app advertisements, push notifications, and personalized content to engage users within the apps they frequent.",
      },
      {
        title: "Location-Based Marketing:",
        description:
          "This utilizes geo location data to send relevant offers and information to users based on their physical location. It's effective for targeting users when they are in proximity to a business, increasing the likelihood of conversions.",
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
        backgroundImage="/images/services/digital-marketing.jpg"
        secondaryImage="/images/services/digital-marketing-secondary-img.png"
      >
        <PageTitle>
          Digital <span className="text-[#f57E32] font-[800]">Marketing </span>
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
          {digitalMarketingData &&
            digitalMarketingData.map((item, key) => (
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
              <div className="btn-container flex gap-5 mt-5 lg:pb-0 md:pb-10">
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

export default Services;
