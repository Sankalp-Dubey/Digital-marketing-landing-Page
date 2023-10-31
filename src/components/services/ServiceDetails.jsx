import { SectionTitle } from "@/components/typography.component";
import Image from "next/image";
import React from "react";
import Iconify from "../iconify";

function ServiceDetailsSection({ item }) {
  return (
    <div className="service-section flex flex-col md:flex-row justify-between items-center gap-x-10 gap-y-10">
      <div className="service-section-img md:mt-0 mt-5 w-full">
        <Image
          alt="service-section"
          src={item?.image}
          height={700}
          width={500}
          className="w-full rounded-xl"
        />
      </div>

      <div className="service-section-content md: mb-0 mb-8 w-full">
        <SectionTitle className="text-transform: capitalize ">
          {item?.title}
        </SectionTitle>
        <p className="my-4">{item?.description}</p>
        <div className="flex flex-wrap py-2 gap-x-7 gap-y-5">
          <ul className="flex flex-col gap-3">
            {item?.points &&
              item?.points.map((point, key) => (
                <li key={key}>
                  <div className="flex gap-2">
                    <p className="text-[#c74ef9] mt-[1px]">
                      <Iconify icon="mdi:tick" fontSize={25} />
                    </p>
                    <div>
                      <p>
                        <span className="font-[800]">{point?.title}&nbsp;</span>
                        {point?.description}
                      </p>
                      <ul>
                        {point?.subPoints &&
                          point?.subPoints.map((sub, key) => (
                            <li key={key}>
                              <p>
                                <span className="font-[600]">
                                  {sub?.title}&nbsp;
                                </span>
                                {sub?.desc}
                              </p>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
          <p>{item?.para}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailsSection;
