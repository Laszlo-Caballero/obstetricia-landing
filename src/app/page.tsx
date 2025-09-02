import React from "react";
import { PiStarFourLight } from "react-icons/pi";
import { SiGooglemaps } from "react-icons/si";
import { CgNotes } from "react-icons/cg";
import Image from "next/image";

export default function Page() {
  return (
    <div className="h-full w-full">
      <div className="pt-[56px] flex pb-[48px] px-[40px]">
        <div className="border border-white w-full py-[36px] ">
          <span className="flex gap-x-[6px] bg-compassionate max-w-max rounded-xl p-1">
            <PiStarFourLight className="text-care size-4" />
            <p className=" text-xs font-semibold text-care">
              Atención obstétrica compasiva
            </p>
          </span>

          <p className="text-[40px] leading-12 font-bold text-guiding w-[597.83px]">
            GUIÁNDOTE A TRAVES DE CADA PASO DEL EMBARAZO
          </p>
          <p className="max-w-[700px] text-guiaGris pt-[16px]">
            <span className="font-semibold">
              Obstetras de confianza y recursos basados en la evidencia para
              futuros padres.
            </span>{" "}
            Infórmese, prepárese y encuentre la atención adecuada para usted y
            su creciente familia.
          </p>
          <div className="flex gap-3 mt-[24px]">
            <button className=" flex items-center  bg-botonAzul text-letraBlanca px-[16px] py-[12.5px] rounded-xl font-semibold max-w-max gap-[8px]">
              <SiGooglemaps /> Encuentra una Obstetra
            </button>

            <button className=" flex items-center bg-FondoCeleste text-azulLeer px-[16px] py-[12.5px] rounded-xl font-semibold max-w-max gap-[8px]">
              <CgNotes /> Leer ultima publicación
            </button>
          </div>
        </div>
        <div className="flex p-[13px] border border-imagen rounded-3xl">
          <div className="w-[463px] h-[300px] rounded-xl">
            <Image
              src="https://res.cloudinary.com/dl0wif5vm/image/upload/v1756671331/rxjesxmo9h5eefgifc3e.webp"
              alt="Imagen demostrativa"
              width={463}
              height={300}
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
