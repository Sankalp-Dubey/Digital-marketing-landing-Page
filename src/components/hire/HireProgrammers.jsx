"use client";
import { PrimaryButton } from "@/components/buttons.component";
import { SectionSubTitle } from "@/components/typography.component";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Iconify from "../iconify";

export default function HireProgrammers({ btnTitle }) {
  const [isOpenModel, setIsOpenModal] = useState(false);
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  return (
    <>
      <div className="w-full flex justify-center hire-button">
        <PrimaryButton className="mt-5" handleClick={handleOpenModal}>
          {btnTitle}
        </PrimaryButton>
      </div>
      <Transition appear show={isOpenModel} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 overflow-visible"
          onClose={handleCloseModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 bg-white overflow-y-auto">
            <div className="min:h-screen min:w-screen text-center overflow-auto">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="min:w-screen min:h-screen transform bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex flex-col gap-2">
                    <span
                      className="modal-close-icon self-end cursor-pointer"
                      onClick={handleCloseModal}
                    >
                      <Iconify icon="material-symbols:close" fontSize={30} />
                    </span>
                    {/* <SectionSubTitle className="text-center">
                      <b>Dialog Title</b>
                    </SectionSubTitle> */}

                    <section className="m-auto max-w-6xl">
                      <h2 className="text-[24px] font-[700] pb-4">
                        Tell us about your{" "}
                        <span className="text-[#f57E32] font-[800]">
                          Hiring
                        </span>{" "}
                        Needs
                      </h2>
                      <p className="text-lg text-[#000000] pb-6">
                        Help us with these details so we can match your
                        expectations and shortlist the top candidate profiles.
                      </p>

                      <form action="#">
                        <div>
                          <label className="text-[18px] font-[600]">
                            What role would you like to hire?
                          </label>
                          <div className="flex flex-wrap mt-5">
                            <div className="flex items-center mr-8">
                              <input
                                id="hdevelopers"
                                type="radio"
                                value=""
                                name="inline-radio-group"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="developers-radio"
                                className="ml-2 text-md font-[600] text-gray-900 dark:text-gray-300"
                              >
                                Developers
                              </label>
                            </div>
                            <div class="flex items-center mr-8">
                              <input
                                id="hmarketers"
                                type="radio"
                                value=""
                                name="inline-radio-group"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="marketers-radio"
                                className="ml-2 text-md font-[600] text-gray-900 dark:text-gray-300"
                              >
                                Marketers
                              </label>
                            </div>
                            <div className="flex items-center mr-8">
                              <input
                                id="hdesigners"
                                type="radio"
                                value=""
                                name="inline-radio-group"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="designers-radio"
                                className="ml-2 text-md font-[600] text-gray-900 dark:text-gray-300"
                              >
                                Designers
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="hsalesforce"
                                type="radio"
                                value=""
                                name="inline-radio-group"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="salesforce-radio"
                                className="ml-2 text-md font-[600] text-gray-900 dark:text-gray-300"
                              >
                                Salesforce
                              </label>
                            </div>
                          </div>
                          <div className="hiredev">
                            <label
                              for=""
                              class="block mb-5 text-sm font-medium"
                            ></label>
                            <select
                              id="roledevloper"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                              <option selected>Programmers</option>
                              <option value="Web">Web</option>
                              <option value="NodeJS">NodeJS</option>
                              <option value="Mobile App">Mobile App</option>
                              <option value="Laravel">Laravel</option>
                              <option value="React Native">React Native</option>
                            </select>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                            <div className="experience">
                              <label
                                for="experience"
                                className="block mt-4 mb-2 text-[18px] font-[600]"
                              >
                                What level of experience do you need?
                              </label>
                              <select
                                id="needexperience"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              >
                                <option selected>Select Experience</option>
                                <option value="Junior Level (1-3 years)">
                                  Junior Level (1-3 years)
                                </option>
                                <option value="Mid-Level (3-5 years)">
                                  Mid-Level (3-5 years)
                                </option>
                                <option value="Senior Level (5+ years)">
                                  Senior Level (5+ years)
                                </option>
                              </select>
                            </div>

                            <div className="hiringtalent">
                              <label
                                for="hiring"
                                className="block mt-4 mb-2 text-[18px] font-[600]"
                              >
                                Are you open to hiring remote talent?*
                              </label>
                              <select
                                id="hiringremote"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                                <option value="I'm not sure">
                                  I&apos;m not sure
                                </option>
                              </select>
                            </div>
                          </div>

                          <div className="rangebudget">
                            <label
                              for="range"
                              className="block mt-4 mb-2 text-[18px] font-[600]"
                            >
                              Enter your budget range*
                            </label>
                            <select
                              id="budgetrange"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                              <option selected>Select Range</option>
                              <option value="$2000 and above">
                                $2000 and above
                              </option>
                              <option value="$3000 and above">
                                $3000 and above
                              </option>
                              <option value="$4000 and above">
                                $4000 and above
                              </option>
                              <option value="other">
                                Do you have a specific budget range?
                              </option>
                            </select>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                            <div className="rolemsg">
                              <label
                                for="message"
                                className="block mt-4 mb-2 text-[18px] font-[600]"
                              >
                                Add the roles and responsibilities of the
                                talent*
                              </label>
                              <textarea
                                id="message"
                                rows="4"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                                placeholder="Write your thoughts here..."
                              ></textarea>
                            </div>

                            <div class="flex items-center justify-center w-full mt-12">
                              <label
                                for="dropzone-file"
                                class="flex flex-col items-center justify-center w-full h-25 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                              >
                                <div class="flex flex-col items-center justify-center pt-2 pb-2">
                                  <svg
                                    class="w-8 h-8 mb-2 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 16"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      // stroke-width="2"
                                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                    />
                                  </svg>
                                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span class="font-semibold">
                                      Click to upload
                                    </span>{" "}
                                  </p>
                                  <p class="text-xs text-gray-500 dark:text-gray-400">
                                    PDF, DOC, JPG or GIF
                                  </p>
                                </div>
                                <input
                                  id="dropzone-file"
                                  type="file"
                                  class="hidden"
                                />
                              </label>
                            </div>
                          </div>
                          <div class="flex justify-between mt-8">
                            <a
                              class="primary-button rounded-full undefined"
                              href=""
                            >
                              Submit
                            </a>
                          </div>
                        </div>
                      </form>
                    </section>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
