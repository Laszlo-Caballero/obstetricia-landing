import React from "react";
import { LuStethoscope } from "react-icons/lu";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full h-full">
      <div className=" bg-Skyblue w-full p-2 h-full border-t border-azulBorde ">
        <div className="flex flex-row gap-[24px] py-[32px] justify-between ">
          <div className="flex flex-col">
            <p className=" font-semibold text-blackBluee text-[18px] gap-[12px] flex items-center pl-[24px] pb-[10px]">
              <LuStethoscope /> Cuidado Maternal
            </p>
            <p className="text-[14px] font-semibold pl-[24px] text-azulServicio h-full w-[432px]">
              Atención obstétrica basada en la evidencia y recursos para futuros
              padres. Estamos aquí para apoyar su proceso desde la planificación
              hasta el posparto.
            </p>
          </div>

          <div className="flex flex-col">
            <p className=" font-semibold text-blackBluee text-[18px] flex items-center pb-[10px] w-[216px]">
              Navegación
            </p>
            <ul className="list-none text-azulServicio text-[14px] font-semibold">
              <li className="pb-[8px]">Inicio</li>
              <li className="pb-[8px]">Servicios</li>
              <li className="pb-[8px]">Blog</li>
              <li className="pb-[8px]">Contacto</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <p className=" font-semibold text-blackBluee text-[18px] flex items-center pb-[10px] w-[216px]">
              Contactanos
            </p>
            <ul className="list-none text-azulServicio text-[14px] font-semibold">
              <li className="pb-[8px]">example@gmail.com</li>
              <li className="pb-[8px]">977 834 606</li>
              <li className="pb-[8px]"> El callao, 652 b </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <p className=" font-semibold text-blackBluee text-[18px]  flex items-center pb-[10px] w-[216px]">
              Redes Sociales
            </p>
            <div className="flex flex-row gap-[10px]">
              <Link
                href="https://www.instagram.com/manu_arteaga_/"
                className=" text-azulServicio"
              >
                <FaInstagram size={18} />
              </Link>

              <Link
                href="https://web.facebook.com/manuelgerman.lavadoarteaga?locale=es_LA"
                className=" text-azulServicio"
              >
                <FaFacebook size={18} />
              </Link>

              <Link
                href="https://www.instagram.com/ibaillanos/"
                className=" text-azulServicio"
              >
                <CiTwitter size={18} />
              </Link>
              <Link
                href="https://www.youtube.com/watch?v=hcm55lU9knw&t"
                className=" text-azulServicio"
              >
                <AiOutlineYoutube size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full">
        <div className=" bg-Skyblue w-full p-2 h-full border-t border-azulBorde ">
          <p className="text-[13px] font-semibold text-blackBluee px-[24px] py-[23px]">
            © 2025 Minsa. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}
