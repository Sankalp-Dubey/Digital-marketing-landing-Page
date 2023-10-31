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
  title: "Web Design & Development Services Company India | SpireHub",
  description:
    "SpireHub Softwares Classy IT firm specializing in Business optimization solutions, Web Design & Development Services in India, mobile apps services. Contact Now!",
  alternates: {
    canonical: "https://www.spirehubs.com/web-design",
  },
  metadataBase: new URL("https://www.spirehubs.com"),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Web Design & Development Services Company India | SpireHub",
    description:
      "SpireHub Softwares Classy IT firm specializing in Business optimization solutions, Web Design & Development Services in India, mobile apps services. Contact Now!",
    url: "https://www.spirehubs.com/web-design",
    siteName: "SpireHub",
    locale: "en_US",
    type: "website",
  },
};

const webDesignData = [
  {
    id: 1,
    title: " UI/UX Design",
    description:
      "SpireHub Softwares specializes in creating exceptional UI/UX designs that captivate users. Our team's creative prowess and user-centric approach result in intuitive interfaces and engaging experiences. We blend aesthetics with functionality to craft designs that leave a lasting impression. Partner with us to elevate your digital presence and provide your users with an unforgettable journey.",
    image: "/images/company-secondary.png",
    points: [
      {
        title: "Innovative Concepts:",
        description:
          "We bring fresh perspectives to UI/UX design, blending creativity and functionality to create interfaces that stand out. Our designs are rooted in thorough market research and a deep understanding of user behavior, resulting in solutions that resonate.",
      },
      {
        title: "User-Centric Approach:",
        description:
          "Every design choice we make revolves around the end user. We prioritize user preferences, behaviors, and pain points to construct interfaces that facilitate effortless interactions, thus enhancing user engagement and loyalty.",
      },
      {
        title: "Responsive and Accessible:",
        description:
          "Our UI/UX designs are responsive across various devices and accessible to all users, ensuring a seamless experience for everyone. We adhere to industry best practices and accessibility standards to make sure our designs are inclusive and user-friendly.",
      },
    ],
    para: "Choose SpireHub Softwares for UI/UX Design that captivates, engages, and leaves a lasting impression.",
  },
  {
    id: 2,
    title: "Website Redesign",
    description:
      "Trust SpireHub Softwares to breathe new life into your online presence with our comprehensive website redesign services. Our holistic approach encompasses aesthetics, user experience, and technical finesse, delivering a website that resonates with your audience and achieves your business goals.",

    image: "/images/services/service3.png",
    points: [
      {
        title: "Modernized Visual Identity:",
        description:
          "Our expert team at SpireHub Softwares understands the significance of a captivating design. We revamp your website with a modernized visual identity, incorporating the latest design trends, color schemes, and user interface elements that resonate with your brand's essence. ",
      },
      {
        title: "Enhanced User Experience (UX):",
        description:
          "Our website redesign services focus on optimizing user experience. We analyze user behavior, streamline navigation, and restructure content to ensure easy accessibility and seamless interaction. ",
      },
      {
        title: "Responsive and Performance-Driven:",
        description:
          "A website's responsiveness and performance are crucial for retaining visitors. SpireHub Softwares ensures your redesigned website is fully responsive across various devices and screen sizes. Moreover, we optimize its loading speed, making sure that it delivers a smooth and swift browsing experience",
      },
    ],
  },
  {
    id: 3,
    title: "Wordpress website Design",
    description: "",
    image: "/images/services/wordpress.png",
    points: [
      {
        title: "User-Centric Interface:",
        description:
          "WordPress website design focuses on delivering an exceptional user experience. By employing responsive design techniques, the site adapts seamlessly to various devices, ensuring easy navigation and readability. Intuitive menus, clear call-to-action buttons, and organized content placement enhance user engagement and encourage prolonged visits.",
      },
      {
        title: "Aesthetic Visual Identity:",
        description:
          "Aesthetics play a pivotal role in WordPress website design. Carefully selected color palettes, typography, and imagery create a visually appealing brand identity. Customizable themes and templates allow designers to tailor the website's look to match the brand's personality, fostering a strong connection with the target audience.",
      },
      {
        title: "Content Showcase:",
        description:
          "WordPress offers diverse tools for showcasing content effectively. Engaging multimedia integration, such as images, videos, and interactive elements, breathe life into the content. Strategic layout design and widget utilization permit the spotlighting of featured products, services, or articles, boosting overall engagement and conversions.",
      },
    ],
  },
  {
    id: 4,
    title: "Wix Website Design",
    description:
      "Create a stunning online presence with Wix's intuitive website design tools. With a user-friendly drag-and-drop interface, you can easily customize your site's layout, colors, fonts, and more.",
    image: "/images/services/wix.png",
    points: [
      {
        title: "Versatile Templates:",
        description:
          "Choose from a wide range of professionally designed templates tailored to various industries and styles. These templates provide a solid foundation that you can customize to match your brand's identity.",
      },
      {
        title: "Responsive Design:",
        description:
          "Ensure your website looks great on any device. Wix automatically adjusts your site's layout to fit smartphones, tablets, and desktops, offering a seamless user experience.",
      },
      {
        title: "App Integration:",
        description:
          "Enhance your website's functionality with a plethora of apps from the Wix App Market. From social media integrations to e-commerce tools, you can easily add features to meet your specific needs.",
      },
    ],
  },
  {
    id: 5,
    title: "Landing Page Design",
    description: "",
    image: "/images/services/landing.png",
    points: [
      {
        title: "Striking Visual Appeal:",
        description:
          "Our landing page design captivates visitors with stunning visuals that instantly convey your brand's essence. A harmonious blend of colors, typography, and graphics creates an inviting atmosphere, keeping visitors engaged.",
      },
      {
        title: "User-Centric Experience:",
        description:
          "Seamlessly navigate our intuitively designed landing page. User experience is at the forefront, ensuring effortless interaction and swift access to key information. Our responsive layout guarantees a consistent experience across all devices.",
      },
      {
        title: "Compelling Call to Action:",
        description:
          "Drive conversions through a strategically positioned call to action. Crafted to resonate with your audience, it motivates visitors to take the desired action, whether it's making a purchase, subscribing, or exploring further. Experience a landing page that transforms visitors into loyal customers.",
      },
    ],
  },
  {
    id: 6,
    title: "Graphic Design",
    description: "",
    image: "/images/services/service2.png",
    points: [
      {
        title: "Creative Visual Identity:",
        description:
          " Our graphic design services offer the creation of captivating visual identities that resonate with your brand's essence. We craft memorable logos, color palettes, and typography that establish a strong and consistent brand image, fostering instant recognition and trust among your audience.",
      },
      {
        title: "Stunning Print Collaterals:",
        description:
          "Elevate your marketing efforts with our meticulously designed print materials. From eye-catching brochures to elegant business cards, we ensure that each piece not only communicates your message effectively but also boasts a design that stands out, leaving a lasting impression on recipients.",
      },
      {
        title: "Compelling Digital Designs:",
        description:
          "In the digital realm, we specialize in crafting designs that captivate online audiences. Our expertise spans from engaging social media visuals that boost user interaction to intuitive website layouts that enhance user experience, ultimately driving conversions and achieving your online goals.",
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
        backgroundImage="/images/services/web-designing.jpg"
        secondaryImage="/images/services/web-design-secondary-image.png"
      >
        <PageTitle>
          Web <span className="text-[#f57E32] font-[800]">Design</span>
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
          {webDesignData &&
            webDesignData.map((item, key) => (
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
