import Iconify from "@/components/iconify";
import { SectionContainer } from "@/components/layout.component";
import {
  PageTitle,
  SectionSubTitle,
  SectionTitle,
} from "@/components/typography.component";
import Link from "next/link";
import React from "react";

function ServiceAndTechnology() {
  return (
    <div className="sitemap-service-technology">
      <SectionContainer>
        <div className="sitemap-container">
          <ul className="flex flex-col gap-3 grid-cols-1 justify-center main">
            <div className="text-3xl font-[800]">
              <span className="text-[#f57E32]">Ma</span>
              <span className="text-[#f57E32]">in</span>
            </div>
            <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
              <Iconify icon="solar:arrow-right-broken" fontSize={25}></Iconify>{" "}
              <Link className="text-lg sitemap-text" href="/">
                Home
              </Link>
            </li>
            <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
              <Iconify icon="solar:arrow-right-broken" fontSize={25}></Iconify>{" "}
              <Link className="text-lg sitemap-text" href="/company">
                Company
              </Link>
            </li>
            <ul style={{ marginLeft: "70px" }}>
              <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
                <Iconify
                  icon="solar:arrow-right-broken"
                  fontSize={25}
                ></Iconify>{" "}
                <Link className="text-lg sitemap-text" href="/careers">
                  Careers
                </Link>
              </li>
              <li className="flex gap-1 font-[600] items-center text-fuchsia-600 mt-[5px]">
                <Iconify
                  icon="solar:arrow-right-broken"
                  fontSize={25}
                ></Iconify>{" "}
                <Link className="text-lg sitemap-text" href="/faq">
                  Faqs
                </Link>
              </li>
            </ul>
            <li className="flex gap-1 font-[600] items-center text-fuchsia-600 ">
              <Iconify icon="solar:arrow-right-broken" fontSize={25}></Iconify>{" "}
              <Link className="text-lg sitemap-text" href="/">
                Solutions
              </Link>
            </li>
            <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
              <Iconify icon="solar:arrow-right-broken" fontSize={25}></Iconify>{" "}
              <Link className="text-lg sitemap-text" href="/">
                Industry
              </Link>
            </li>
            <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
              <Iconify icon="solar:arrow-right-broken" fontSize={25}></Iconify>{" "}
              <Link className="text-lg sitemap-text" href="/services">
                Services
              </Link>
            </li>
            <ul style={{ marginLeft: "70px" }}></ul>

            {/* <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
              <Iconify icon="solar:arrow-right-broken" fontSize={25}></Iconify>{" "}
              <Link className="text-lg sitemap-text" href="#">
                Careers
              </Link>
            </li> */}

            {/* <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
              <Iconify icon="solar:arrow-right-broken" fontSize={25}></Iconify>{" "}
              <Link className="text-lg sitemap-text" href="#">
                Software testing Services
              </Link>
            </li> */}
          </ul>

          <ul className="flex flex-col gap-3 justify-center services">
            <div className="text-3xl font-[800]">
              <span className="text-[#f57E32]">ser</span>
              <span className="text-[#f57E32]">vices</span>
            </div>
            <li className="flex gap-1 font-[600] items-center text-fuchsia-600 mt-[10px]">
              <Iconify icon="solar:arrow-right-broken" fontSize={25}></Iconify>{" "}
              <Link className="text-lg sitemap-text " href="/web-design">
                Web Design
              </Link>
            </li>
            <li
              style={{ paddingTop: "10px" }}
              className="flex gap-1 font-[600] items-center text-fuchsia-600 mt-[10px]"
            >
              <Iconify icon="solar:arrow-right-broken" fontSize={25}></Iconify>{" "}
              <Link className="text-lg sitemap-text " href="/web-development">
                Web Development
              </Link>
            </li>
            <li
              style={{ paddingTop: "10px" }}
              className="flex gap-1 font-[600] items-center text-fuchsia-600 mt-[10px]"
            >
              <Iconify icon="solar:arrow-right-broken" fontSize={25}></Iconify>{" "}
              <Link
                className="text-lg sitemap-text"
                href="/mobile-app-development"
              >
                Mobile App Development
              </Link>
            </li>
            <li
              style={{ paddingTop: "10px" }}
              className="flex gap-1 font-[600] items-center text-fuchsia-600 mt-[10px]"
            >
              <Iconify icon="solar:arrow-right-broken" fontSize={25}></Iconify>{" "}
              <Link className="text-lg sitemap-text" href="/digital-marketing">
                Digital Marketing
              </Link>
            </li>
            <li
              style={{ paddingTop: "10px" }}
              className="flex gap-1 font-[600] items-center text-fuchsia-600 "
            >
              <Iconify icon="solar:arrow-right-broken" fontSize={25}></Iconify>{" "}
              <Link
                className="text-lg sitemap-text"
                href="software-maintenance"
              >
                Software Maintenance
              </Link>
            </li>
          </ul>

          <ul className="flex flex-col gap-3 justify-center services">
            <div className="text-3xl font-[800]">
              <span className="text-[#f57E32]">Important</span>
              <span style={{ marginLeft: "10px" }} className="text-[#f57E32]">
                Links
              </span>
            </div>
            <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
              <Iconify icon="solar:arrow-right-broken" fontSize={25}></Iconify>{" "}
              <Link className="text-lg sitemap-text" href="/portfolios">
                Portfolios
              </Link>
            </li>
            <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
              <Iconify icon="solar:arrow-right-broken" fontSize={25}></Iconify>{" "}
              <Link className="text-lg sitemap-text" href="/blog">
                Blog
              </Link>
            </li>
            <li className="flex gap-1 font-[600] items-center text-fuchsia-600 ">
              <Iconify icon="solar:arrow-right-broken" fontSize={25}></Iconify>{" "}
              <Link className="text-lg sitemap-text" href="/hire-team">
                Hire Team
              </Link>
            </li>

            <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
              <Iconify icon="solar:arrow-right-broken" fontSize={25}></Iconify>{" "}
              <Link className="text-lg sitemap-text" href="/contact-us">
                Contact Us
              </Link>
            </li>

            <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
              <Iconify icon="solar:arrow-right-broken" fontSize={25}></Iconify>{" "}
              <Link className="text-lg sitemap-text" href="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
              <Iconify icon="solar:arrow-right-broken" fontSize={25}></Iconify>{" "}
              <Link className="text-lg sitemap-text" href="/cookies-policy">
                Cookies Policy
              </Link>
            </li>
            <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
              <Iconify icon="solar:arrow-right-broken" fontSize={25}></Iconify>{" "}
              <Link className="text-lg sitemap-text" href="term-conditions">
                Term and Conditions
              </Link>
            </li>
            {/* <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
              <Iconify icon="solar:arrow-right-broken" fontSize={25}></Iconify>{" "}
              <Link className="text-lg sitemap-text" href="#">
                Web App Development
              </Link>
            </li> */}
            {/* <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
              <Iconify icon="solar:arrow-right-broken" fontSize={25}></Iconify>{" "}
              <Link className="text-lg sitemap-text" href="#">
                E-Commerce Development
              </Link>
            </li> */}
            {/* <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
              <Iconify icon="solar:arrow-right-broken" fontSize={25}></Iconify>{" "}
              <Link className="text-lg sitemap-text" href="#">
                CMS Design & Development
              </Link>
            </li> */}

            {/* <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
              <Iconify icon="solar:arrow-right-broken" fontSize={25}></Iconify>{" "}
              <Link className="text-lg sitemap-text" href="#">
                Social Media Optimization
              </Link>
            </li> */}
            {/* <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
              <Iconify icon="solar:arrow-right-broken" fontSize={25}></Iconify>{" "}
              <Link className="text-lg sitemap-text" href="#">
                Pay Per Click
              </Link>
            </li> */}
            {/* <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
              <Iconify icon="solar:arrow-right-broken" fontSize={25}></Iconify>{" "}
              <Link className="text-lg sitemap-text" href="#">
                Seo Packages
              </Link>
            </li> */}
            {/* <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
              <Iconify icon="solar:arrow-right-broken" fontSize={25}></Iconify>{" "}
              <Link className="text-lg sitemap-text" href="#">
                Hire Dedicated Resources
              </Link>
            </li> */}
            {/* <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
              <Iconify icon="solar:arrow-right-broken" fontSize={25}></Iconify>{" "}
              <Link className="text-lg sitemap-text" href="#">
                Testimonials
              </Link>
            </li> */}
            {/* <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
              <Iconify icon="solar:arrow-right-broken" fontSize={25}></Iconify>{" "}
              <Link className="text-lg sitemap-text" href="#">
                Privacy Policy
              </Link>
            </li> */}
            {/* <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
              <Iconify icon="solar:arrow-right-broken" fontSize={25}></Iconify>{" "}
              <Link className="text-lg sitemap-text" href="#">
                Cookies Policy
              </Link>
            </li> */}
          </ul>
          {/* <ul className="flex flex-col gap-3 justify-center technology"> */}
          {/* <div className="text-3xl font-[800]">
              <span className="text-[#f57E32]">Technol</span>
              <span className="text-[#f57E32]">ogy</span>
            </div> */}
          {/* <div className="technology-listing">
              <div className="flex flex-col gap-3">
                <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
                  <Iconify
                    icon="solar:arrow-right-broken"
                    fontSize={25}
                  ></Iconify>{" "}
                  <Link className="text-lg sitemap-text " href="/">
                    WordPress
                  </Link>
                </li>
                <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
                  <Iconify
                    icon="solar:arrow-right-broken"
                    fontSize={25}
                  ></Iconify>{" "}
                  <Link className="text-lg sitemap-text" href="#">
                    Drupal
                  </Link>
                </li>
                <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
                  <Iconify
                    icon="solar:arrow-right-broken"
                    fontSize={25}
                  ></Iconify>{" "}
                  <Link className="text-lg sitemap-text" href="#">
                    Magento
                  </Link>
                </li>
                <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
                  <Iconify
                    icon="solar:arrow-right-broken"
                    fontSize={25}
                  ></Iconify>{" "}
                  <Link className="text-lg sitemap-text" href="#">
                    Core PHP
                  </Link>
                </li>
                <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
                  <Iconify
                    icon="solar:arrow-right-broken"
                    fontSize={25}
                  ></Iconify>{" "}
                  <Link className="text-lg sitemap-text" href="#">
                    Laravel
                  </Link>
                </li>
                <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
                  <Iconify
                    icon="solar:arrow-right-broken"
                    fontSize={25}
                  ></Iconify>{" "}
                  <Link className="text-lg sitemap-text" href="#">
                    Javascript
                  </Link>
                </li>
                <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
                  <Iconify
                    icon="solar:arrow-right-broken"
                    fontSize={25}
                  ></Iconify>{" "}
                  <Link className="text-lg sitemap-text" href="#">
                    Node Js
                  </Link>
                </li>
                <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
                  <Iconify
                    icon="solar:arrow-right-broken"
                    fontSize={25}
                  ></Iconify>{" "}
                  <Link className="text-lg sitemap-text" href="#">
                    Python
                  </Link>
                </li>
                <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
                  <Iconify
                    icon="solar:arrow-right-broken"
                    fontSize={25}
                  ></Iconify>{" "}
                  <Link className="text-lg sitemap-text" href="#">
                    JQuery
                  </Link>
                </li>
                <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
                  <Iconify
                    icon="solar:arrow-right-broken"
                    fontSize={25}
                  ></Iconify>{" "}
                  <Link className="text-lg sitemap-text" href="#">
                    AngularJs
                  </Link>
                </li>
                <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
                  <Iconify
                    icon="solar:arrow-right-broken"
                    fontSize={25}
                  ></Iconify>{" "}
                  <Link className="text-lg sitemap-text" href="#">
                    React Js
                  </Link>
                </li>
                <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
                  <Iconify
                    icon="solar:arrow-right-broken"
                    fontSize={25}
                  ></Iconify>{" "}
                  <Link className="text-lg sitemap-text" href="#">
                    Next Js
                  </Link>
                </li>
                <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
                  <Iconify
                    icon="solar:arrow-right-broken"
                    fontSize={25}
                  ></Iconify>{" "}
                  <Link className="text-lg sitemap-text" href="#">
                    VueJs
                  </Link>
                </li>
                <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
                  <Iconify
                    icon="solar:arrow-right-broken"
                    fontSize={25}
                  ></Iconify>{" "}
                  <Link className="text-lg sitemap-text" href="#">
                    Dot Net
                  </Link>
                </li>
              </div>
              <div className="flex flex-col gap-3">
                <li className="flex gap-1 font-[600] items-center text-fuchsia-600 ">
                  <Iconify
                    icon="solar:arrow-right-broken"
                    fontSize={25}
                  ></Iconify>{" "}
                  <Link className="text-lg sitemap-text " href="/">
                    Android Native
                  </Link>
                </li>
                <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
                  <Iconify
                    icon="solar:arrow-right-broken"
                    fontSize={25}
                  ></Iconify>{" "}
                  <Link className="text-lg sitemap-text" href="#">
                    iOS Native (Swift)
                  </Link>
                </li>
                <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
                  <Iconify
                    icon="solar:arrow-right-broken"
                    fontSize={25}
                  ></Iconify>{" "}
                  <Link className="text-lg sitemap-text" href="#">
                    Flutter
                  </Link>
                </li>
                <li className="flex gap-1 font-[600] items-center text-fuchsia-600">
                  <Iconify
                    icon="solar:arrow-right-broken"
                    fontSize={25}
                  ></Iconify>{" "}
                  <Link className="text-lg sitemap-text" href="#">
                    React Native
                  </Link>
                </li>
              </div>
            </div>
          </ul>
          {/* <ul className="flex flex-col gap-3 justify-center">
            
          </ul> */}
        </div>
      </SectionContainer>
    </div>
  );
}

export default ServiceAndTechnology;
