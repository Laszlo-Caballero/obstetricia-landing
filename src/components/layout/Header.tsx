import Link from "next/link";
import React from "react";
import { FaStethoscope } from "react-icons/fa";

export default function Header() {
  return (
    <div className=" bg-Skyblue w-full flex justify-between p-2 h-[66px] border-b border-azulBorde items-center">
      <div className="flex items-center px-[22px] gap-2">
        <FaStethoscope className="text-blackBluee" size={20} />
        <span className=" font-semibold p-3 text-lg text-blackBluee">
          Maternia Care
        </span>
      </div>

      <div className="flex gap-5">
        <Link
          href="#"
          className="px-3 py-1 rounded-md bg-FondoAzul text-white font-semibold"
        >
          Home
        </Link>
        <Link
          href="#"
          className="px-3 py-1 rounded-md text-blackBluee font-semibold"
        >
          Services
        </Link>
        <Link
          href="#"
          className="px-3 py-1 rounded-md text-blackBluee font-semibold"
        >
          Blog
        </Link>
        <Link
          href="#"
          className="px-3 py-1 rounded-md text-blackBluee font-semibold"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
