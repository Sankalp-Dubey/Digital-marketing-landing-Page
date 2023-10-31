"use client";
import React from "react";
import { Icon } from "@iconify/react";

function Iconify({ icon, fontSize, color,height}) {
  return <Icon icon={icon} fontSize={fontSize} color={color} height={height} />;
}

export default Iconify;
