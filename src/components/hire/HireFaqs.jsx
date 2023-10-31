"use client";
import { SectionTitle } from "@/components/typography.component";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function HireFaqs() {
  return (
    <div className="w-full pb-[50px] faqs">
      <div className="m-auto max-w-5xl rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between pt-[12px] pb-[12px] text-left text-sm font-medium  hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 border-b-2">
                <span className="text-xl font-[600]">
                  How to Hire a Top programmer?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 font-[800]`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500 border-x-4">
                With Uplers, you can hire a coder in just 4-simple steps
                <ul>
                  <li>Share the job description with Uplers.</li>
                  <li>
                    Our experts will review the job description and shortlist
                    matches for you to review.
                  </li>
                  <li>
                    Interview the shortlisted candidates and select the best fit
                    for the role.
                  </li>
                  <li>Onboard and manage the new hire.</li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between pt-[12px] pb-[12px] text-left text-sm font-medium  hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 border-b-2">
                <span className="text-xl font-[600]">
                  How much does it cost to hire a programmer?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 font-[800]`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500 border-x-4">
                Hiring an Uplers programmer can be cost-effective since the
                price starts from $2000 per month. However, the average cost to
                hire programmers ranges between $32K/year-$94K annually.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between pt-[12px] pb-[12px] text-left text-sm font-medium  hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 border-b-2">
                <span className="text-xl font-[600]">
                  Can I hire programmers in less than 48 hours through
                  Spirehubs?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 font-[800]`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500 border-x-4">
                Yes, you can hire programmers in less than 48 hours through
                Spirehubs.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between pt-[10px] pb-[10px] text-left text-sm font-medium  hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 border-b-2">
                <span className="text-xl font-[600]">
                  What is the no-risk trial period for Spirehubs programmers?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 font-[800]`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500 border-x-4">
                Spirehubs offers a no-risk trial period of up to 2 weeks for our
                talented programmers (subject to availability). It helps build
                trust and confidence for clients who are unsure after the
                interview and makes hiring easier.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between pt-[10px] pb-[10px] text-left text-sm font-medium  hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 border-b-2">
                <span className="text-xl font-[600]">
                  What kind of programmers are available for hire through
                  Spirehubs?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 font-[800]`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500 border-x-4">
                You can hire Full-Stack programmers, Front-End programmers,
                Back-End programmers, and Mobile app programmers through Uplers.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
