"use client";
import { Fragment, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import "../../styles/Header.css";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { SecondaryButton } from "../buttons.component";
import { SectionContainer } from "../layout.component";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getBlog } from "@/redux/slices/blog";
import { useDispatch } from "react-redux";
import { getPortfolios } from "@/redux/slices/portfolios";
import { getServices } from "@/redux/slices/services";
import { getToolsAndTechnology } from "@/redux/slices/toolsAndTechnology";
import { getTestimonials } from "@/redux/slices/testimonial";
import { getStory } from "@/redux/slices/story";
import { getClient } from "@/redux/slices/client";
import { getEvent } from "@/redux/slices/event";
import Iconify from "../iconify";

// const products = [
//   {
//     name: "Analytics",
//     description: "Get a better understanding of your traffic",
//     href: "#",
//     icon: ChartPieIcon,
//   },
//   {
//     name: "Engagement",
//     description: "Speak directly to your customers",
//     href: "#",
//     icon: CursorArrowRaysIcon,
//   },
// ];

const products = [
  {
    name: "Careers",
    href: "/careers",
  },
  {
    name: "Testimonials",
    href: "/testimonials",
  },
  {
    name: "FAQs",
    href: "/faq",
  },
  {
    name: "Products",
    href: "/products",
  },
];

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

const navigation = [
  // { name: "Home", link: "/" },
  { name: "Company", link: "/company" },
  { name: "Services", link: "/services" },
  // { name: "Trending", link: "/trending" },
  // { name: "Case Studies", link: "/case-studies" },
  { name: "Hire Resources", link: "/hire-team" },
  { name: "Portfolios", link: "/portfolios" },
  { name: "Contact Us", link: "/contact-us" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlog());
    dispatch(getPortfolios());
    dispatch(getServices());
    dispatch(getToolsAndTechnology());
    dispatch(getTestimonials());
    dispatch(getStory());
    dispatch(getClient());
    dispatch(getEvent());
  }, [dispatch]);

  useEffect(() => {
    if (pathname) {
      setMobileMenuOpen(false);
    }
  }, [pathname]);

  return (
    <header className="z-10 text-white relative">
      <div className="flex items-center justify-between py-5 px-5 md:px-10 ">
        <Image
          className="h-8 md:h-10 lg:h-12 w-auto"
          src="/images/spirehub-logo.png"
          alt="Logo"
          width={180}
          height={80}
        />
      </div>
      {/* <nav aria-label="Global">
        <div className="flex items-center justify-between py-5 px-5 md:px-10">
          <div className="flex lg:flex-1 z-50">
            <Link href="/">
              <Image
                className="h-8 md:h-10 lg:h-12 w-auto"
                src="/images/spirehub-logo.png"
                alt="Logo"
                width={180}
                height={80}
              />
            </Link>
          </div> */}
      {/* <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-8 items-center"> */}
      {/* dsfrbtbryyren */}
      {/* ===================================================================================== */}
      {/* <div className="group relative cursor-pointer py-2">
              <div
                className={` flex items-center justify-between gap-x-1 menu-hover header-nav-link ${
                  pathname === "/company" ? "active" : ""
                }`}
              >
                <Link
                  href="/company"
                  className={`header-nav-link ${
                    pathname === "/company" ? "active" : ""
                  }`}
                >
                  Company
                </Link>

                {/* <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span> */}
      {/* </div>
              <div className="invisible absolute z-50 flex w-full flex-col bg-white px-0 rounded-md text-gray-800 shadow-xl group-hover:visible min-w-[250px] mt-[8px] -ml-[13px] py-1 pl-3">
                <Link
                  className="my-1 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                  href="/careers"
                >
                  Careers
                </Link>
                <Link
                  className="my-1 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                  href="/faq"
                >
                  FAQs
                </Link>
                <Link
                  className="my-1 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                  href="/testimonial"
                >
                  Testimonials
                </Link> */}
      {/* </div> */}
      {/* <div className="invisible absolute z-50 flex w-full flex-col bg-white rounded-md text-gray-800 shadow-xl group-hover:visible min-w-[125px] mt-[8px] -ml-[12px] py-1 pl-2"> */}
      {/* <Link
                  className="my-1 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                  href="/careers"
                >
                  Careers
                </Link> */}
      {/* <Link
                  className="my-1 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                  href="/testimonials"
                >
                  Testimonials
                </Link> */}
      {/* <Link
                  className="my-1 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                  href="/faq"
                >
                  FAQs
                </Link> */}
      {/* <Link
                  className="my-1 block font-semibold text-gray-500 hover:text-black md:mx-2"
                  href="/product"
                >
                  Product
                </Link>
              </div> */}
      {/* </div>

            <div className="group cursor-pointer py-2">
              <div
                className={` flex items-center justify-between gap-x-1 header-nav-link`}
              >
                {/* <a
                  className="menu-hover"
                  onClick={() => router.push("/services")}
                >
                  Services
                </a> */}
      {/* <Link href="#">Solutions</Link> */}
      {/* <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    // stroke-width="1.5"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span> */}
      {/* </div> */}
      {/* <div className="invisible absolute z-50 px-0 text-gray-800 shadow-xl group-hover:visible mega-menu">
                <div className="bg-white rounded-md container m-auto p-7 flex col-4 justify-between">
                  <div className="lft-cont w-[20%]">
                    <strong>
                      <h4>Solutions</h4>
                    </strong>
                    <p>
                      We build on the IT domain expertise and industry knowldege
                      to design suistenabe technalogy solutions
                    </p>
                  </div>
                  <div className="middle-cont">
                    <strong>
                      <h4>Solutions</h4>
                    </strong>
                    <ul>
                      <li>ERP Software</li>
                      <li>CRM Software</li>
                      <li>Learning Management Software</li>
                      <li>Point of Sale Software</li>
                      <li>e-shopping</li>
                      <li>Marketplace (Web & Apps)</li>
                      <li>Food Delivery (Web & Mob Apps) </li>
                      <li>Service Booking Marketplace</li>
                      <li>E-wallets system for digital paymen</li>
                      <li>Healthcare Solutions </li>
                      <li>Classifieds Web/App Portal </li>
                    </ul>
                  </div>

                  <div className="lst-cont">
                    <strong>
                      <h4>Industries</h4>
                    </strong>
                    <ul>
                      <li>Manufacturing</li>
                      <li>Education / eLearning</li>
                      <li>Retail & E-commerce</li>
                      <li>Finance & Fintech</li>
                      <li>Real Estate</li>
                      <li>Marketing & Media</li>
                      <li>Healthcare</li>
                      <li>Construction Management</li>
                      <li>Logistics & Warehouse</li>
                    </ul>
                  </div>
                  <div className="con">
                    <ul>
                      <li>Supply Chain & Distribution</li>
                      <li>Hosiery And Garments</li>
                      <li>Oil And Gas</li>
                      <li>Import & Export</li>
                      <li>Transport & Logistics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
      {/* <div className="group relative cursor-pointer py-2">
              <div
                className={` flex items-center justify-between gap-x-1 header-nav-link ${
                  pathname === "/services" ? "active" : ""
                }`}
              > */}
      {/* <a
                  className="menu-hover"
                  onClick={() => router.push("/services")}
                >
                  Services
                </a> */}
      {/* <Link
                  href="/services"
                  className={`header-nav-link ${
                    pathname === "/services" ? "active" : ""
                  }`}
                >
                  Services
                </Link>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    // stroke-width="1.5"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </div>
              <div className="invisible absolute z-50 flex w-full flex-col bg-white px-0 rounded-md text-gray-800 shadow-xl group-hover:visible min-w-[250px] mt-[8px] -ml-[13px] py-1 pl-3">
                <Link
                  className="my-1 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                  href="#"
                >
                  Web Design
                </Link>

                <div className="group/1 relative cursor-pointer">
                  <Link
                    className="my-1 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                    href="#"
                  >
                    <div className="flex items-center">
                      <span>CMS Web Design</span>
                      <Iconify icon="prime:angle-right" fontSize={25} />
                    </div>
                  </Link>
                  <div className="invisible absolute left-[250px] top-[1px] z-50 flex flex-col bg-white px-0 rounded-md text-gray-800 group-hover/1:visible mt-[8px] min-w-[200px] -ml-[13px] py-1 pl-3">
                    <Link
                      className="my-1 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                      href="#"
                    >
                      WordPress
                    </Link>
                    <Link
                      className="my-1 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                      href="#"
                    >
                      Wix
                    </Link>
                    <Link
                      className="my-1 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                      href="#"
                    >
                      WebFlow
                    </Link>
                    <Link
                      className="my-1 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                      href="#"
                    >
                      Squarespace
                    </Link>
                    <Link
                      className="my-1 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                      href="#"
                    >
                      Shopify
                    </Link>
                  </div>
                </div>

                <Link
                  className="my-1 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                  href="/web-development"
                >
                  Web Development
                </Link>
                <Link
                  className="my-1 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                  href="/mobile-app-development"
                >
                  Mobile App Development
                </Link>
                <Link
                  className="my-1 block font-semibold text-gray-500 hover:text-black md:mx-2"
                  href="/software-maintenance"
                >
                  Software Maintenance
                </Link>
                <Link
                  className="my-1 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                  href="#"
                >
                  DevOps Services
                </Link>
                <div className="group/1 relative cursor-pointer">
                  <Link
                    className="my-1 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                    href="/digital-marketing"
                  >
                    <div className="flex items-center">
                      <span> Digital Marketing</span>
                      <Iconify icon="prime:angle-right" fontSize={25} />
                    </div>
                  </Link>
                  <div className="invisible absolute left-[250px] top-[5px] z-50 flex  flex-col bg-white px-0 rounded-md text-gray-800 shadow-xl group-hover/1:visible min-w-[200px] mt-[8px] -ml-[13px] py-1 pl-3">
                    <Link
                      className="my-1 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                      href="/web-development"
                    >
                      SEO Services
                    </Link>
                    <Link
                      className="my-1 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                      href="/web-development"
                    >
                      SMO Services
                    </Link>
                    <Link
                      className="my-1 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                      href="/web-development"
                    >
                      PPC Services
                    </Link>
                    <Link
                      className="my-1 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                      href="/web-development"
                    >
                      Content marketing
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/hire-team"
              className={`header-nav-link ${
                pathname === "/hire-team" ? "active" : ""
              }`}
            >
              Hire Team
            </Link>
            <Link
              href="/portfolios"
              className={`header-nav-link ${
                pathname === "/portfolios" ? "active" : ""
              }`}
            >
              Portfolios
            </Link>
            <Link
              href="/contact-us"
              className={`header-nav-link ${
                pathname === "/contact-us" ? "active" : ""
              }`}
            >
              Contact Us
            </Link>
          </Popover.Group> */}
      {/* <div className="hidden lg:flex md:gap-x-5 lg:gap-x-8 lg:justify-end">
            {navigation
              ? navigation.map((item, index) => (
                  <Link
                    href={item?.link}
                    className={`header-nav-link ${
                      pathname === item?.link ? "active" : ""
                    }`}
                    key={index}
                  >
                    {item?.name}
                  </Link>
                ))
              : null}
          </div> */}
      {/* </div> */}
      {/* ===================#######========================== */}
      {/* <div className="h">
        <ul class="exo-menu">
			<li class="mega-drop-down"><a href="#"><i class="fa fa-list"></i> Mega Menu</a>
				<div class="animated fadeIn mega-menu">
					<div class="mega-menu-wrap">
						<div class="row">
						<div class="col-md-4">
							<h4 class="row mega-title">Feature</h4>
							
							</div>
							<div class="col-md-2">
									<h4 class="row mega-title">Standers</h4>
								<ul class="stander">
									<li><a href="#">Mobile</a></li>
									<li><a href="#">Computer</a></li>
									<li><a href="#">Watch</a></li>
									<li><a href="#">laptop</a></li>
									<li><a href="#">Camera</a></li>
									<li><a href="#">I pad</a></li>
									<li><a class="view-more btn- btn-sm" href="#">View more</a></li>
								</ul>
							</div>
							<div class="col-md-3">
								<h4 class="row mega-title">Description</h4>
								<ul class="description">
									<li><a href="#">Women</a>
										<span>Description of Women</span>
									</li>
									<li><a href="#">Men</a>
											<span>Description of men Cloths</span>
									</li>
									<li><a href="#">Kids</a>
											<span>Description of Kids Cloths</span>
									</li>
									<li><a href="#">Others</a>
											<span>Description of Others Cloths</span>
									</li>
									<li>
									<a class="view-more btn btn-sm " href="#">View more</a>
											 
									</li>
								</ul>
							</div>
							<div class="col-md-3">
							<h4 class="row mega-title">Icon + Description</h4>
								<ul class="icon-des">
									<li><a href="#"><i class="fa fa-globe"></i>Web</a></li>
									<li><a href="#"><i class="fa fa-mobile"></i>Mobile</a></li>
									<li><a href="#"><i class="fa fa-arrows-h"></i>Responsive</a></li>
									<li><a href="#"><i class="fa fa-desktop"></i>Desktop</a></li>
									<li><a href="#"><i class="fa fa-paint-brush"></i>UI/UX</a></li>
								</ul>
                </div>
                </div>
                </div>
                </div>
      </li>
      </ul>
      </div> */}
      {/* ===================#######========================= */}
      {/* </nav> */}
      {/* <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                className="h-10 w-auto"
                src="/images/spirehub-logo.png"
                alt="Logo"
                width={200}
                height={80}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="divide-y divide-gray-500/10">
              <div className="space-y-2 py-6"> */}
      {/* <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure> */}
      {/* <div className="flex flex-col gap-4">
                  {/* {navigation
                    ? navigation.map((item, index) => (
                        <Link href={item?.link} key={index}>
                          {item?.name}
                        </Link>
                      ))
                    : null} */}
      {/* <div className="group relative cursor-pointer">
                    <div className="flex items-center header-nav-link justify-between gap-x-1">
                      <a
                        className={`${pathname === "/company" ? "active" : ""}`}
                        onClick={() => router.push("/company")}
                      >
                        Company
                      </a>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          // stroke-width="1.5"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="invisible absolute z-50 flex w-full flex-col bg-white px-2 rounded-md text-gray-800 shadow-xl group-hover:visible w-[100%] mt-[8px]">
                      <Link
                        className="my-1 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                        href="/careers"
                      >
                        Careers
                      </Link>

                      <Link
                        className="my-1 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                        href="/testimonials"
                      >
                        Testimonials
                      </Link>
                      <Link
                        className="my-1 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                        href="/faq"
                      >
                        FAQs
                      </Link>
                      <Link
                        className="my-1 block font-semibold text-gray-500 hover:text-black md:mx-2"
                        href="/product"
                      >
                        Product
                      </Link>
                    </div>
                  </div>
                  <div className="group relative cursor-pointer">
                    <div className="flex items-center justify-between gap-x-1">
                      <a
                        className={`menu-hover header-nav-link ${
                          pathname === "/services" ? "active" : ""
                        }`}
                        onClick={() => router.push("/services")}
                      >
                        Services
                      </a>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          // stroke-width="1.5"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="invisible absolute z-50 flex w-full flex-col bg-white px-2 rounded-md text-gray-800 shadow-xl group-hover:visible mt-[8px]">
                      <Link
                        className="my-1 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                        href="/web-design"
                      >
                        Web Design
                      </Link>

                      <Link
                        className="my-1 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                        href="/web-development"
                      >
                        Web Development
                      </Link>
                      <Link
                        className="my-1 block py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                        href="/mobile-app-development"
                      >
                        Mobile App Development
                      </Link>
                      <Link
                        className="my-1 block font-semibold text-gray-500 hover:text-black md:mx-2"
                        href="/software-maintenance"
                      >
                        Software Maintenance
                      </Link>
                      <Link
                        className="my-1 block font-semibold text-gray-500 hover:text-black md:mx-2"
                        href="/digital-marketing"
                      >
                        Digital Marketing
                      </Link>
                    </div>
                  </div>
                  <Link
                    href="/hire-team"
                    className={`header-nav-link ${
                      pathname === "/hire-team" ? "active" : ""
                    }`}
                  >
                    Hire Resources
                  </Link>
                  <Link
                    href="/portfolios"
                    className={`header-nav-link ${
                      pathname === "/portfolios" ? "active" : ""
                    }`}
                  >
                    Portfolios
                  </Link>
                  <Link
                    href="/contact-us"
                    className={`header-nav-link ${
                      pathname === "/contact-us" ? "active" : ""
                    }`}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
      {/* </Dialog.Panel> */}
      {/* </Dialog> */}
    </header>
  );
}
