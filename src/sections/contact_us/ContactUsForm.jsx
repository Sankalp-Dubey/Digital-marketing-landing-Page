"use client";
import React, { useEffect, useState } from "react";
import {
  SectionSubTitle,
  SectionTitle,
} from "@/components/typography.component";
import axiosServices from "@/utils/axios";

function ContactUsForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [country, setCountry] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosServices
      .post("/api/contact_us", {
        name: fullName,
        email,
        phone_no: phone,
        country: country,
        description: desc,
      })
      .then((res) => {
        if (res?.data?.status === "success") {
          setFullName("");
          setEmail("");
          setPhone("");
          setCountry("");
          setDesc("");
        }
      })
      .catch((err) => console.log(err));
  };

  // useEffect(() => {});

  return (
    <div className="contact-us-form rounded-lg p-5">
      <div className="flex flex-col gap-3 ">
        <SectionSubTitle className="text-center">
          Request Free Demo{" "}
          <span className="font-[800] text-[#f57E32]">Schedule Meeting</span>
        </SectionSubTitle>
        <p style={{ color: "#c74ef9" }}>
          Guaranteed response within one business day!
        </p>
        <div className="w-full">
          <form
            onSubmit={handleSubmit}
            className="bg-white w-[100%] px-8 pt-6 pb-8 mb-4 flex flex-col "
          >
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input-border"
                required
                id="fullName"
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700  leading-tight input-border"
                id="email"
                required
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input-border"
                id="phone"
                required
                type="number"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input-border"
                id="country"
                type="text"
                required
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                onError
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 input-border focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500"
                placeholder="Write your message here..."
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="primary-button rounded-full cursor-pointer"
                // onClick={(e) => submitData(e)}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUsForm;
