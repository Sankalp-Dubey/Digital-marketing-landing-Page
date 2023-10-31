import { PrimaryButton } from "@/components/buttons.component";
import Iconify from "@/components/iconify";
import { SectionTitle } from "@/components/typography.component";
import React from "react";
import "../../styles/contact_us.css";
import ContactUsForm from "./ContactUsForm";

function GetInTouch() {
  return (
    <div className="get-in-touch md:pb-28 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center justify-between">
        <div className="flex flex-col gap-5">
          <SectionTitle>
            Get in <span className="font-[800] text-cyan-600">Touch</span>
          </SectionTitle>
          <p>
            Get in touch with the right people at{" "}
            <span className="font-[700] text-purple-600">
              SpireHub Softwares
            </span>
            , we are here to help.
          </p>
          <ul className="flex flex-col gap-8">
            <li className="get-in-touch-li">
              <div className="flex gap-5 items-center">
                <div className="h-14 w-14 bg-cyan-400 rounded-lg text-white pl-3 pt-3 get-in-touch-icon">
                  <Iconify icon="mdi:location" fontSize={30} />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-[700] text-lg text-cyan-500 get-in-touch-text">
                    Noida:
                  </p>
                  <p>H-89, Block H, Sector 63 Noida GB Nagar UP, 201301</p>
                </div>
              </div>
            </li>
            <li className="get-in-touch-li">
              <div className="flex gap-5 items-center">
                <div className="h-14 w-14 bg-cyan-400 get-in-touch-icon rounded-lg text-white pl-3 pt-3">
                  <Iconify icon="ic:baseline-mail" fontSize={30} />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-[700] get-in-touch-text text-lg text-cyan-500">
                    Mail Us:
                  </p>
                  <p>connect@spirehubs.com</p>
                </div>
              </div>
            </li>
            <li className="get-in-touch-li">
              <div className="flex gap-5 items-center">
                <div className="h-14 w-14 bg-cyan-400 get-in-touch-icon rounded-lg text-white pl-3 pt-3">
                  <Iconify
                    icon="solar:phone-calling-rounded-bold"
                    fontSize={30}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-[700] get-in-touch-text text-lg text-cyan-500">
                    Call Us:
                  </p>
                  <p>+91 8467947766</p>
                </div>
              </div>
            </li>
            <li className="get-in-touch-li">
              <div className="flex gap-5 items-center">
                <div className="h-14 w-14 bg-cyan-400 get-in-touch-icon rounded-lg text-white pl-3 pt-3">
                  <Iconify icon="foundation:social-skype" fontSize={30} />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-[700] get-in-touch-text text-lg text-cyan-500">
                    Skype:
                  </p>
                  <p>nilesh.chaubey2</p>
                </div>
              </div>
            </li>
            <li className="get-in-touch-li">
              <div className="flex gap-5 items-center">
                <div className="h-14 w-14 bg-cyan-400 get-in-touch-icon rounded-lg text-white pl-3 pt-3">
                  <Iconify icon="ic:twotone-whatsapp" fontSize={30} />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-[700] get-in-touch-text text-lg text-cyan-500">
                    Whatsapp:
                  </p>
                  <p>+91 8467947766</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="contact-us-form rounded-lg p-5">
          <div className="flex flex-col gap-3 ">
            <SectionTitle className="text-center">
              Request a Free{" "}
              <span className="font-[700]" style={{ color: "#11b7bc" }}>
                Test Session
              </span>
            </SectionTitle>
            <p style={{ color: "#c74ef9" }}>
              Guaranteed response within one business day!
            </p>
            <div className="w-full ">
              {/* CONTACT US FORM */}
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
