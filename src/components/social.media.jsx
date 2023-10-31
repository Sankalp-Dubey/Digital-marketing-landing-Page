"use client";
import React from "react";
import Iconify from "./iconify";

function SocialMediaIcons() {
  return (
    <div className="social-media-icons">
      <div className="flex flex-col text-white">
        {/* <Iconify icon="uil:arrow-up" fontSize={40} /> */}
        <div className="social-media-whatsapp">
          <a
            target="_blank"
            href="http://wa.me/918467947766"
            className="whatsapp-icon"
          >
            <Iconify icon="ic:round-whatsapp" fontSize={25} />
          </a>
          {/* <a
            target="_blank"
            href="http://wa.me/918467947766"
            className="whatsapp-text"
          >
            Whatsapp
          </a> */}
        </div>
        <div className="social-media-skype">
          <a
            target="_blank"
            href="skype:nilesh.chaubey2?chat"
            className="skype-icon"
          >
            <Iconify icon="basil:skype-solid" fontSize={25} />
          </a>
          {/* <a
            target="_blank"
            href="skype:nilesh.chaubey2?chat"
            className="skype-text"
          >
            Skype
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default SocialMediaIcons;
