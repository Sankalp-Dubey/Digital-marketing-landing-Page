"use client";
import ServiceCard from "@/components/home/ServiceCard_old";
// import ServiceCard from "@/components/home/ServiceCard";
import { SectionContainer } from "@/components/layout.component";
import {
  PageTitle,
  SectionSubTitle,
  SectionTitle,
} from "@/components/typography.component";

const allServices = [
  {
    id: 1,
    icon: "/icons/Icon-01.webp",
    title: "Web Design & Development",
    description:
      "SpireHub Softwares excels in web design and development, creating captivating websites that merge aesthetic appeal with seamless functionality for an exceptional user experience.",
  },
  {
    id: 2,
    icon: "/icons/Icon-02.webp",
    title: "E-commerce Development",
    description:
      "SpireHub Softwares excels in E-commerce development, creating seamless online shopping experiences that drive sales through user-friendly interfaces, secure transactions, and optimized functionality.",
  },
  {
    id: 3,
    icon: "/icons/Icon-03.webp",
    title: "Web Application Development",
    description:
      "SpireHub Softwares excels in web application development, creating tailored solutions that combine functionality and aesthetics to meet clients' specific needs and deliver exceptional user experiences.",
  },
  {
    id: 4,
    icon: "/icons/Icon-04.webp",
    title: "Hire Remote Developers",
    description:
      "Looking to hire a skilled remote developer? Our company offers experienced and dedicated remote developers to meet your project needs efficiently.",
  },
  {
    id: 5,
    icon: "/icons/Icon-05.webp",
    title: "Mobile App Development",
    description:
      "SpireHub Softwares offers expert mobile app development services, creating innovative and user-friendly apps tailored to clients' needs, ensuring seamless functionality and engaging experiences.",
  },
  {
    id: 6,
    icon: "/icons/Icon-06.webp",
    title: "Digital Marketing Services",
    description:
      "SpireHub Softwares offers comprehensive digital marketing services, including SEO, social media management, PPC advertising, and content strategy, to enhance online visibility and drive business growth.",
  },
  {
    id: 7,
    icon: "/icons/Icon-07.webp",
    title: "Software Maintenance Services",
    description:
      "SpireHub Softwares offers comprehensive web and software maintenance services, ensuring smooth functionality, security updates, and ongoing improvements to optimize the performance and user experience.",
  },
  {
    id: 8,
    icon: "/icons/Icon-08.webp",
    title: "CMS web Design & Development",
    description:
      "SpireHub Softwares offers expert CMS design services, creating user-friendly and visually appealing content management systems that empower businesses to manage and showcase their content effortlessly.",
  },
];

// =================== ALL SERVICES =========================== //

export default function Services() {
  return (
    <SectionContainer className="text-center py-16 mt-10 help-section">
      <p className="text-xl font-medium">HOW CAN WE HELP</p>
      <SectionTitle>
        Web & App <span className="font-[800] text-[#f57E32]">Development</span>{" "}
        Company
      </SectionTitle>
      <div className="development-category">
        {allServices.map((service, key) => (
          <ServiceCard
            icon={service?.icon}
            title={service?.title}
            description={service?.description}
            key={key}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
