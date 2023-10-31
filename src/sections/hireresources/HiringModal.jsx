import { PrimaryButton, SecondaryButton } from "@/components/buttons.component";
import { SectionSubTitle } from "@/components/typography.component";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const resources = [
  {
    id: 1,
    img: "/images/Full-Stack-Developers.png",
    title: "Hire Full Stack Developers",
  },
  {
    id: 2,
    img: "/images/Front-End-Developers.png",
    title: "Hire Front End Developers",
  },
  {
    id: 3,
    img: "/images/UI-UX-Experts.png",
    title: "Hire UI/UX Experts",
  },
  {
    id: 4,
    img: "/images/wordpress.png",
    title: "Hire WordPress Developers",
  },
  {
    id: 5,
    img: "/images/Php.png",
    title: "Hire PHP Developers",
  },
  {
    id: 6,
    img: "/images/Laravel.png",
    title: "Hire Laravel Developers",
  },
  {
    id: 7,
    img: "/images/Node-JS.png",
    title: "Hire Node JS Developers",
  },
  {
    id: 8,
    img: "/images/Python.png",
    title: "Hire Python Developers",
  },
  {
    id: 9,
    img: "/images/React-JS.png",
    title: "Hire React JS Developers",
  },
  {
    id: 10,
    img: "/images/Angular-JS.png",
    title: "Hire Angular Developers",
  },
  {
    id: 11,
    img: "/images/ASP.NET-Developer.png",
    title: "Hire ASP.NET Developers",
  },
  {
    id: 12,
    img: "/images/logo-java.png",
    title: "Hire Java Developers",
  },
  {
    id: 13,
    img: "/images/Android-Native.png",
    title: "Hire Android Developers",
  },
  {
    id: 14,
    img: "/images/iOS-Developer.png",
    title: "Hire iOS Developers",
  },
  {
    id: 15,
    img: "/images/React-JS.png",
    title: "Hire React Native Developers",
  },
  {
    id: 16,
    img: "/images/Software-QA-Testers.png",
    title: "Hire Software QA Testers",
  },
  {
    id: 17,
    img: "/images/Flutter.png",
    title: "Hire Flutter Developers",
  },
];

const timeCommitment = [
  {
    id: 1,
    name: "Full Time (40 or more hrs/week)",
    value: "full-time",
  },
  {
    id: 2,
    name: "Part Time (Less than 40 hrs/week)",
    value: "part-time",
  },
  {
    id: 3,
    name: "Hourly",
    value: "hourly",
  },
];

export default function HiringModal({ isOpen, closeModal, selectedDeveloper }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 overflow-visible"
          onClose={closeModal}
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

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="text-center flex flex-col gap-2">
                    <SectionSubTitle className="text-center">
                      <b>{selectedDeveloper?.title}</b>
                    </SectionSubTitle>
                    <p style={{ color: "#c74ef9" }}>
                      Guaranteed response within one business day!
                    </p>
                  </div>
                  <div className="w-full max-w-xs mt-5 px-5">
                    <form className="bg-white w-full px-8 pt-6 pb-8 mb-4 flex flex-col gap-5">
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2  focus:border-blue-500 "
                          for="username"
                        >
                          Name
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input-border form-labels"
                          id="username"
                          type="text"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          for="password"
                        >
                          Email
                        </label>
                        <input
                          className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight input-border"
                          id="password"
                          type="email"
                          placeholder="Email"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            for="username"
                          >
                            Phone
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input-border"
                            id="username"
                            type="number"
                            placeholder="Phone"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            for="username"
                          >
                            Country
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input-border"
                            id="username"
                            type="text"
                            placeholder="Country"
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          for="username"
                        >
                          Available Resources
                        </label>
                        <select
                          value={selectedDeveloper?.id}
                          id="countries"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 input-border block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 input-border"
                        >
                          {resources &&
                            resources.map((res, key) => (
                              <option key={key} value={res?.id}>
                                {res?.title}
                              </option>
                            ))}
                        </select>
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          for="username"
                        >
                          Time Commitment
                        </label>
                        <select
                          id="countries"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 input-border block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 input-border"
                        >
                          <option value="">Please Select</option>
                          {timeCommitment &&
                            timeCommitment.map((time, key) => (
                              <option key={key} value={time?.value}>
                                {time?.name}
                              </option>
                            ))}
                        </select>
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          for="username"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows="4"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 input-border focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500"
                          placeholder="Write your message here..."
                        ></textarea>
                      </div>
                      <div className="flex justify-between">
                        <PrimaryButton>Send</PrimaryButton>
                      </div>
                    </form>
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
