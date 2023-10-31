"use client";
import { PrimaryButton } from "@/components/buttons.component";
import { SectionSubTitle } from "@/components/typography.component";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Iconify from "../iconify";

export default function ApplyNow({ btnTitle }) {
  const [isOpenModel, setIsOpenModal] = useState(false);
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  return (
    <>
      <div className="w-full flex  hire-button">
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
                        Application{" "}
                        <span className="text-[#f57E32] font-[800]">Form</span>{" "}
                      </h2>
                      <p className="text-lg text-[#000000] pb-6">
                        Help us with these details so we can match your
                        expectations and shortlist the top candidate profiles.
                      </p>

                      <form action="#">
                        <div>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                            <div className="Name">
                              <label
                                for="experience"
                                className="block mt-4 mb-2 text-[18px] font-[600]"
                              >
                                Name
                              </label>
                              <input
                                placeholder="Enter your Name"
                                id="needexperience"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              ></input>
                            </div>

                            <div className="hiringtalent">
                              <label
                                for="hiring"
                                className="block mt-4 mb-2 text-[18px] font-[600]"
                              >
                                E-mail
                              </label>
                              <input
                                placeholder="Enter your E-mail"
                                id="hiringremote"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              ></input>
                            </div>
                          </div>

                          {/* 2nd */}
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                            <div className="experience">
                              <label
                                for="experience"
                                className="block mt-4 mb-2 text-[18px] font-[600]"
                              >
                                Phone Number
                              </label>
                              <input
                                type="number"
                                placeholder="Enter your Mobile Number"
                                id="needexperience"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              ></input>
                            </div>

                            <div className="hiringtalent">
                              <label
                                for="hiring"
                                className="block mt-4 mb-2 text-[18px] font-[600]"
                              >
                                Adress
                              </label>
                              <input
                                type="tex-area"
                                placeholder="Enter your adress"
                                id="hiringremote"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              ></input>
                            </div>
                          </div>

                          <div class="flex   flex-col w-full mt-[1rem]">
                            <label className="text-[18px] font-[600] mt-[5px]">
                              Please upload your resume here
                            </label>
                            <label
                              for="dropzone-file"
                              class="flex flex-col items-center w-[40%]  h-25 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                            >
                              <div class="flex flex-col items-center  pt-2 pb-2">
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
                                  PDF, DOC
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
