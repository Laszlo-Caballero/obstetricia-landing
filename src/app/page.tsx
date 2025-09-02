import React from "react";
import { PiStarFourLight } from "react-icons/pi";
import { SiGooglemaps } from "react-icons/si";
import { CgNotes } from "react-icons/cg";

export default function Page() {
  return (
    <div className="h-full w-full">
        <div className= "pt-[56px] pb-[48px] px-[40px] h-[326px]">

          <div className= "border border-white w-full py-[36px] ">
              <span className="flex bg-compassionate max-w-max rounded-xl p-1">
            <PiStarFourLight className="text-care size=4" />
              <p className=" text-xs font-semibold text-care">
              Atención obstétrica compasiva
              </p>
            </span>

            <p className= "text-[40px] font-semibold text-guiding w-[597.83px]">
              GUIÁNDOTE A TRAVES DE CADA PASO DEL EMBARAZO
            </p>
            <p className="font-semibold text-[16px] w-[564.73px] text-guiaGris pt-[16px]">
              Obstetras de confianza y recursos basados en la evidencia para futuros padres.
              Infórmese, prepárese y encuentre la atención adecuada para usted y su creciente familia.
            </p>
            <div className= "flex gap-2">
            <button className=" flex mt-[24px] bg-botonAzul text-letraBlanca px-[16px] py-[12.5px] rounded-md font-semibold max-w-max gap-[8px]">
            <SiGooglemaps></SiGooglemaps>  Encuentra una Obstetra
            </button>

            <button className=" flex mt-[24px] bg-FondoCeleste text-azulLeer px-[16px] py-[12.5px] rounded-md font-semibold max-w-max gap-[8px]">
            <CgNotes></CgNotes> Leer ultima publicación 
            </button>
            </div>
         </div>
        </div>

    </div>
     
  );
}
