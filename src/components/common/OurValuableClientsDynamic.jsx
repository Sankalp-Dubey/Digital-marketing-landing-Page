import React from "react";
import { SectionContainer } from "../layout.component";
import { SectionSubTitle, SectionTitle } from "../typography.component";
import Image from "next/image";
import { useSelector } from "react-redux";
import { baseURL } from "@/config";

const clientsData = [
  {
    id: 1,
    image: "/images/carton.png",
  },
  {
    id: 2,
    image: "/images/chrg.png",
  },
  {
    id: 3,
    image: "/images/halsogourmet.png",
  },
  {
    id: 4,
    image: "/images/moolathon.png",
  },
  {
    id: 5,
    image: "/images/onestream.png",
  },
  {
    id: 6,
    image: "/images/pds.png",
  },
  {
    id: 7,
    image: "/images/siris.png",
  },
  {
    id: 8,
    image: "/images/vision.png",
  },
  {
    id: 9,
    image: "/images/wesson.png",
  },
];

function OurValuableClientsDynamic({ className }) {
  const { client } = useSelector((state) => state.client);
  return (
    <section className={`py-12 ${className}`}>
      <SectionContainer>
        <SectionTitle className="text-center">
          <span>
            Our <span className="font-[800]">Valuable</span> Clients
          </span>
        </SectionTitle>
        <SectionSubTitle className="text-center mt-5">
          <span className="normal-case">
            We are bringing the world together. <br></br>They trust in us
            because we care about them. They are valuable clients, and we are
            proud to give the best solutions to their customers.
          </span>
        </SectionSubTitle>
        <div className="mt-20">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {client &&
              client.map((client, key) => (
                <div className="valuable-client-items rounded-2xl" key={key}>
                  <Image
                    src={`${baseURL}/${client?.image}`}
                    // src={client?.image}
                    alt="client"
                    width={100}
                    height={56}
                  />
                </div>
              ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default OurValuableClientsDynamic;
