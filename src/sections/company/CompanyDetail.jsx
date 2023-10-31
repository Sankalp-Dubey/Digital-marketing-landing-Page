import { SectionTitle } from "@/components/typography.component";
import Image from "next/image";
import React from "react";

function CompanyDetail() {
  return (
    <div className="company-detail text-center md:mb-28 mb-20 -mt-5">
      <div className="company-detail-heading">
        <SectionTitle>
          Enabling <span className="font-[800] text-[#f57E32]">Ingenuity </span>
          , Uniting Potential Your Trusted Software
          <span className="font-[800] text-[#f57E32]"> Solutions </span>
          Companion
        </SectionTitle>
        <p>
          At SpireHub Softwares, we are more than just a web and app development
          company – we are your partners in digital transformation. Our journey
          began with a shared vision to revolutionize the digital landscape by
          providing top-notch solutions that empower businesses to succeed in a
          rapidly evolving technological world.
        </p>
      </div>

      <div className="flex md:flex-row flex-col gap-5 items-center justify-center ">
        <div className="company-detail-img flex-1">
          <Image
            src="/images/about-img.png"
            alt="company-office"
            height={600}
            width={500}
            className="h-full w-full"
            style={{ borderRadius: 10 }}
          />
        </div>
        <div className="flex flex-col md:gap-4 gap-3 m-auto md:mt-0 mt-5 flex-1">
          <p className="text-left">
            With a solid foundation of expertise and experience, our diverse
            team of tech enthusiasts, designers, and developers collaborates
            seamlessly to create tailor-made solutions that drive real value. We
            understand that every project is unique, and our approach reflects
            that. We take the time to listen, understand your goals, and
            translate them into innovative digital experiences that resonate
            with your audience.
          </p>
          <div className="flex flex-col gap-1">
            <p className="text-md font-[800] text-left">Our Commitment</p>
            <p className="text-left">
              Our commitment to excellence is unwavering. We pride ourselves on
              delivering not just functional products, but also aesthetically
              pleasing and user-centric solutions that leave a lasting impact.
              From responsive web designs to intuitive mobile apps, our
              solutions are crafted with precision and passion.
            </p>
          </div>
          <p className="text-left">
            But our journey doesn&apos;t end at project delivery. We believe in
            fostering long-term partnerships, supporting our clients as they
            grow and adapt. Our dedication to staying at the forefront of
            technology ensures that the solutions we provide are not just
            current, but also future-ready.
          </p>
          <div className="company-detail-welcome">
            <p className="text-left">
              Welcome to SpireHub Softwares – where technology meets creativity,
              and your digital success is our ultimate goal. Join us in
              embracing innovation and achieving digital excellence, one project
              at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyDetail;
