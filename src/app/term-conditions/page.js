import React from "react";
import { SectionContainer } from "@/components/layout.component";
import Image from "next/image";
import {
  SectionSubTitle,
  SectionTitle,
} from "@/components/typography.component";
import { PrimaryButton, SecondaryButton } from "@/components/buttons.component";
import CurveShape from "@/components/common/CurveShape";

const termsAndCondition = [
  // {
  //   title: "Service Agreement",
  //   desc: "The Company agrees to provide web development services as agreed upon in the project proposal. The scope, timeline, and deliverables will be clearly defined in the proposal or project agreement.",
  // },
  // {
  //   title: "Payment",
  //   desc: "The Client agrees to pay the Company the agreed-upon fees according to the payment schedule outlined in the project proposal. Payment terms, methods, and late fees will be detailed in the agreement.",
  // },
  {
    title: "Project Changes",
    desc: "Changes to the project scope, design, or functionality requested by the Client must be submitted in writing and may result in additional fees and delays. The Company will assess the impact and provide a revised project timeline and cost estimate.",
  },
  {
    title: "Intellectual Property",
    desc: "The Client retains ownership of any content or materials provided for the project. The Company retains ownership of the developed code, design elements, and other proprietary materials unless otherwise agreed upon.",
  },
  {
    title: "Confidentiality",
    desc: "Both parties agree to maintain the confidentiality of sensitive information shared during the project. The Company may showcase the project in its portfolio, excluding confidential or proprietary details.",
  },
  {
    title: "Third-Party Services",
    desc: "If third-party services or products are required for the project, the Client is responsible for purchasing and maintaining them. The Company can offer guidance but is not liable for third-party service interruptions or issues.",
  },
  {
    title: "Warranty",
    desc: "The Company will ensure the project is delivered free of defects and functional according to the agreed-upon specifications. A limited warranty period will be specified in the agreement.",
  },
  {
    title: "Limitation of Liability",
    desc: "The Company shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of or inability to use the delivered project.",
  },
  {
    title: "Termination",
    desc: "Either party may terminate the project agreement if the other party breaches its obligations. The Client will be responsible for paying for services rendered up to the termination date.",
  },
  {
    title: "Dispute Resolution",
    desc: "In the event of any disputes, both parties agree to attempt to resolve the matter through mediation. If mediation is unsuccessful, either party may pursue legal action",
  },
  {
    title: "Governing Law",
    desc: "This Agreement shall be governed by and construed in accordance with the laws of [Your Jurisdiction].",
  },
];

function TermAndConditions() {
  const customStyle = {
    backgroundImage: `url(/images/growbusiness.webp)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };
  return (
    <section>
      <div className="hero-section">
        <div className="top-heading">
          <h1>Term and Conditions</h1>
        </div>
      </div>
      <SectionContainer>
        <div className="flex flex-col m-auto md:pb-28 pb-14">
          <div className="terms-services-content flex sm:my-3 my-1 items-center gap-5 py-5">
            <div>
              <Image
                src="/images/term-and-conditions.jpg"
                height={350}
                width={400}
                alt="term-conditions"
                className="h-full w-full rounded-xl"
              />
            </div>
            <div>
              <p>
                These Terms and Conditions (&quot;Agreement&quot;) govern the
                use of services provided by SpireHub Softwares, a web
                development company, to its clients (&quot;Client&quot;). By
                engaging our services, the Client agrees to adhere to these
                terms:
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col">
            <div>
              <div className="sub-heading">Service Agreement</div>
              <p>
                Service Agreement The Company agrees to provide web development
                services as agreed upon in the project proposal. The scope,
                timeline, and deliverables will be clearly defined in the
                proposal or project agreement.
              </p>
            </div>
            <div>
              <div className="sub-heading">Payment</div>
              <p>
                The Client agrees to pay the Company the agreed-upon fees
                according to the payment schedule outlined in the project
                proposal. Payment terms, methods, and late fees will be detailed
                in the agreement.
              </p>
            </div>
          </div>
          <div className="term-items">
            {termsAndCondition &&
              termsAndCondition.map((term, key) => (
                <div key={key}>
                  <div>
                    <h2 className="sub-heading">{term?.title}</h2>
                    <p>{term?.desc}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </SectionContainer>
      <CurveShape
        className=""
        firstColor="#f3f5fc"
        secondColor="#f3f5fc"
        thirdColor="#f3f5fc"
        fourthColor="#f3f5fc"
        curveD="M0,160L120,138.7C240,117,480,75,720,85.3C960,96,1200,160,1320,192L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      />
      <section
        className="bg-lite-gray pb-[110px]  pt-5 lg:pt-20 -mt-5 sm:-mt-[30px] md:-mt-[40px] lg:-mt-[50px] lg:-mb-[90px] md:-mb-[100px] sm:-mb-[120px] -mb-[135px]"
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
              <div className="btn-container flex gap-5 mt-5 lg:pb-0 pb-28">
                <PrimaryButton className="">Schedule a meeting</PrimaryButton>
                <SecondaryButton className="">Book a call</SecondaryButton>
              </div>
            </div>
            <div className="w-full img-container hidden lg:block ">
              <Image
                src="/images/spirehubservices-stripe.png"
                alt="call-us"
                height={500}
                width={426}
                // style={{ width: "70%" }}
              />
            </div>
          </div>
        </SectionContainer>
      </section>
    </section>
  );
}

export default TermAndConditions;
