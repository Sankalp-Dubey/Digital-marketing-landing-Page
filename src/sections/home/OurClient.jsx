import { SectionContainer } from "@/components/layout.component";
import {
  SectionSubTitle,
  SectionTitle,
} from "@/components/typography.component";
import Image from "next/image";
import React from "react";

const OurClient = () => {
  return (
    <section className="pb-12">
      <SectionContainer>
        <SectionTitle className="text-center">
          <span>
            Our <span className="font-[800]">Estimated</span> Clients: A
            Precious Partnership
          </span>
        </SectionTitle>
        <SectionSubTitle className="text-center mt-5">
          <span className="normal-case">
            We are bringing the world together. <br></br>They trust in us
            because we care about them. They are valuable clients, and we are
            proud to give the best solutions to their customers.
          </span>
        </SectionSubTitle>
        <div className="clients-container mt-20">
          <div className="clients flex justify-center items-stretch gap-8">
            <div className="clients-items rounded-2xl">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAmAbcM0FVBTSv_MLh9OXBYC9R4SCvckhjbmLM3rby8A&s"
                height={100}
                width={100}
                alt=""
              />
            </div>
            <div className="clients-items rounded-2xl">
              <Image
                src="https://audisto.com/downloads/audisto-logo-transparent-background-black-vertical.png"
                height={100}
                width={100}
                alt=""
              />
            </div>
            <div className="clients-items rounded-2xl">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Logo_majestic-5c291e0e3c0189a5501ff032ff48b260.png"
                height={100}
                width={100}
                alt=""
              />
            </div>
            <div className="clients-items rounded-2xl">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvT8i_vnrV8nAlaeuprXc8s9sYZQ7i5hpvg4sE7VEX&s"
                height={100}
                width={100}
                alt=""
              />
            </div>
          </div>
          <div className="clients flex justify-center items-stretch gap-8 mt-10">
            <div className="clients-items rounded-2xl">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Moz_logo.svg/2560px-Moz_logo.svg.png"
                height={100}
                width={100}
                alt=""
              />
            </div>
            <div className="clients-items rounded-2xl z-10">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzl65RvCGFm9TXsPJhbikkzIcTD-dTtMFcMp2TuwQ9&s"
                height={100}
                width={100}
                alt=""
              />
            </div>
            <div className="clients-items rounded-2xl">
              <Image
                src="https://www.linkresearchtools.com/images/card/default.png"
                height={100}
                width={100}
                alt=""
              />
            </div>
            <div className="clients-items rounded-2xl">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHwIpR91OQHfY524pGM-E0uagy2EXB5xTcaLG9Vh9N&s"
                height={100}
                width={100}
                alt=""
              />
            </div>
            <div className="clients-items rounded-2xl">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe67whXqeCDfYlZVgLWuETjOFuHsc0SEpTBoXc0gfhJg&s"
                height={100}
                width={100}
                alt=""
              />
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default OurClient;
