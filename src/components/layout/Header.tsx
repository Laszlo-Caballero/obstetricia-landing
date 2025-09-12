"use client";
import Link from "next/link";
import React from "react";
import { FaStethoscope } from "react-icons/fa";
import { usePathname } from "next/navigation";
import cx from "@/libs/cx";

export default function Header() {
  const pathName = usePathname();

  return (
    <div className=" bg-Skyblue w-full sticky top-0 z-[50] flex justify-between p-2 h-[66px] border-b border-azulBorde items-center">
      <div className="flex items-center px-[22px] gap-2">
        <FaStethoscope className="text-blackBluee" size={20} />
        <span className=" font-semibold p-3 text-lg text-blackBluee">
          Maternia Care
        </span>
      </div>

      <div className="flex gap-5">
        <Link
          href="/"
          className={cx(
            "px-3 py-1 rounded-md text-blackBluee font-semibold",
            pathName == "/" && "bg-FondoAzul text-white"
          )}
        >
          Inicio
        </Link>
        <Link
          href="servicios"
          className={cx(
            "px-3 py-1 rounded-md text-blackBluee font-semibold",
            pathName == "/servicios" && "bg-FondoAzul text-white"
          )}
        >
          Servicios
        </Link>
        <Link
          href="blog"
          className={cx(
            "px-3 py-1 rounded-md text-blackBluee font-semibold",
            pathName == "/blog" && "bg-FondoAzul text-white"
          )}
        >
          Blog
        </Link>
        <Link
          href="contacto"
          className={cx(
            "px-3 py-1 rounded-md text-blackBluee font-semibold",
            pathName == "/contacto" && "bg-FondoAzul text-white"
          )}
        >
          Contacto
        </Link>
      </div>
    </div>
  );
}
