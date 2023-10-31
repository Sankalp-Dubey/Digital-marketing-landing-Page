import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ icon, title, description, url }) => {
  return (
    <div className="card-category flex flex-col gap-2 text-left">
      <Image
        src={icon}
        width={60}
        height={60}
        alt="Service Icon"
        className="rotate-icons"
      />
      <Link href={url} className="text-lg font-[600]">
        {title}
      </Link>
      <hr />
      <p className="text-[15px]">{description}</p>
    </div>
  );
};

export default ServiceCard;
