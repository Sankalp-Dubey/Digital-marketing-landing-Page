import Image from "next/image";
import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="category flex flex-col gap-1 flex-1 text-left">
      <Image
        src={icon}
        width={60}
        height={60}
        alt="Service Icon"
        className="rotate-icons"
      />
      <p className="text-lg">{title}</p>
      <hr />
      <p className="text-[15px]">{description}</p>
    </div>
  );
};

export default ServiceCard;
