"use client";
import React from "react";
import Iconify from "./iconify";

function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="scroll-to-top-btn" onClick={scrollToTop}>
      <Iconify icon="uil:arrow-up" fontSize={40} />
    </div>
  );
}

export default ScrollToTop;
