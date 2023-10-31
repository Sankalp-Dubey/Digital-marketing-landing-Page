import { PrimaryButton } from "@/components/buttons.component";
import Iconify from "@/components/iconify";
import { SectionContainer } from "@/components/layout.component";
import { Heading } from "@/components/typography.component";
import Image from "next/image";
import React from "react";

function OurCoreValues() {
  return (
    <div className="our-core-values">
      <SectionContainer>
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-x-5  core-value-container">
          <div className="our-core-values-bubbles grid grid-cols-2 md:mt-0 mt-5">
            <div className="listing-for-client card">
              <div>
                <Iconify
                  icon="dashicons:groups"
                  fontSize={40}
                  color="#716dfe"
                />
              </div>
              <p className="mt-2">
                Listing for <br /> the client
              </p>
            </div>
            <div className="inclusion-and-diversity card">
              <div>
                <Iconify
                  icon="ic:sharp-diversity-2"
                  fontSize={40}
                  color="#37b8fd"
                />
              </div>
              <p className="mt-2">
                Inclusion <br /> & Diversity
              </p>
            </div>
            <div className="innovation-and-professionalism card">
              <div>
                <Iconify
                  icon="clarity:lightbulb-solid-badged"
                  fontSize={40}
                  color="#6fa6e3"
                />
              </div>
              <p className="mt-2">
                Innovation and <br /> Professionalism
              </p>
            </div>
            <div className="customer-satisfaction card">
              <div className="text-green-900">
                <Iconify
                  icon="fa6-solid:handshake-simple"
                  fontSize={40}
                  color="#5ba2df"
                />
              </div>
              <p className="mt-2">
                Committed to <br /> customer satisfaction
              </p>
            </div>
          </div>
          <div className="our-core-values-content md: mb-0 mb-8 md:mt-0 mt-6">
            <Heading className="text-transform: capitalize ">
              Our Core <span className="font-[800] text-[#f57E32]">Values</span>
            </Heading>
            <p className="lg:mt-8 md:mt-5 mt-3 lg:mb-4 mb-3">
              At SpireHub Softwares, our core values drive every aspect of our
              work.
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                1. <b>Innovation:</b> We embrace creativity and stay at the
                forefront of technological advancements to provide innovative
                solutions that meet evolving business needs.
              </li>
              <li>
                2. <b>Quality:</b> We are committed to delivering products of
                the highest quality, ensuring functionality, performance, and
                user satisfaction.
              </li>
              <li>
                3. <b>Collaboration:</b> We believe in the power of teamwork,
                fostering collaboration among our experts and clients to achieve
                shared goals.
              </li>
              <li>
                4. <b>Integrity:</b> Honesty and transparency are integral to
                our operations, building trust with clients, partners, and team
                members.
              </li>
              <li>
                5. <b>Customer-Centricity:</b> We prioritize our clients,
                tailoring our solutions to their unique requirements and
                providing exceptional customer experiences
              </li>
              <li>
                6. <b>Continuous Growth:</b> We promote continuous learning and
                improvement, striving to enhance our skills and deliver better
                results with each project.
              </li>
            </ul>
            <p className="mt-3">
              These values shape our culture, guide our decisions, and enable us
              to consistently deliver outstanding web and app development
              services.
            </p>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}

export default OurCoreValues;
