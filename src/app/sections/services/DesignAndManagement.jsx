import Iconify from "@/components/iconify";
import { SectionContainer } from "@/components/layout.component";
import {
  SectionSubTitle,
  SectionTitle,
} from "@/components/typography.component";
import Image from "next/image";
import React from "react";

function DesignAndManagement() {
  return (
    <SectionContainer>
      <div className="design-management">
        <div className="flex flex-col  text-center">
          <SectionSubTitle>Design & Management</SectionSubTitle>
          <SectionTitle>
            Our Commitment & Business{" "}
            <span className="text-[#f57E32] font-[800]">Guarantee</span>
          </SectionTitle>
        </div>
        <div className="design-management-cards">
          <div className="design-management-item">
            <div
              style={{
                height: 40,
                width: 40,
                borderRadius: 5,
                backgroundColor: "#6eaaef",
                color: "#ffffff",
                padding: "5px 5px",
              }}
            >
              <Iconify icon="ri:hourglass-fill" fontSize={30} />
            </div>
            <p className="my-1">
              <b>
                95% on time <br /> delivery
              </b>
            </p>
            <p
              className="my-1"
              style={{ height: 1, width: "100%", backgroundColor: "#c6dffa" }}
            ></p>
            <p>
              Our Commitment to aglle development has resulted in an enviable
              95% on-time delivery rate over the last 7+ years.
            </p>
          </div>
          <div className="design-management-item">
            <div
              style={{
                height: 40,
                width: 40,
                borderRadius: 5,
                backgroundColor: "#fbb90a",
                color: "#ffffff",
                padding: "5px 5px",
              }}
            >
              <Iconify
                icon="streamline:interface-help-customer-support-2-customer-headphones-headset-help-microphone-phone-person-support"
                fontSize={30}
              />
            </div>
            <p className="my-1">
              <b>
                24x7 <br /> Support
              </b>
            </p>
            <p
              className="my-1"
              style={{ height: 1, width: "100%", backgroundColor: "#f8e2a4" }}
            ></p>
            <p>
              Web development is the conversion of an idea into reality. We have
              a team of expert web developers and designers who can manage your
              website brand identity.
            </p>
          </div>
          <div className="design-management-item">
            <div
              style={{
                height: 40,
                width: 40,
                borderRadius: 5,
                backgroundColor: "#fc927c",
                color: "#ffffff",
                padding: "5px 5px",
              }}
            >
              <Iconify icon="ps:branch" fontSize={30} />
            </div>
            <p className="my-1">
              <b>
                Flexible <br /> engagement
              </b>
            </p>
            <p
              className="my-1"
              style={{ height: 1, width: "100%", backgroundColor: "#f8dad4" }}
            ></p>
            <p>
              Spirehub Softwares offers appropriate engagement models, hand
              crafted to meet the exact requirements of clients with diverse
              business needs.
            </p>
          </div>
          <div className="design-management-item">
            <div
              style={{
                height: 40,
                width: 40,
                borderRadius: 5,
                backgroundColor: "#8637eb",
                color: "#ffffff",
                padding: "5px 5px",
              }}
            >
              <Iconify icon="game-icons:arrow-wings" fontSize={30} />
            </div>
            <p className="my-1">
              {" "}
              <b>
                Free 30 days <br /> Support
              </b>
            </p>
            <p
              className="my-1"
              style={{ height: 1, width: "100%", backgroundColor: "#ccacf5" }}
            ></p>
            <p>
              After the launch of software/mobile app, we provide free 30 day
              support to all our customers.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default DesignAndManagement;
