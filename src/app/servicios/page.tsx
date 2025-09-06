import React from "react";
import { CgNotes } from "react-icons/cg";
import { PiStarFourLight } from "react-icons/pi";
import { GrCatalog } from "react-icons/gr";
import CardPost from "@/components/ui/CardPost";
import { IoCallOutline } from "react-icons/io5";

export default function page() {
  return (
    <div className="w-full h-full ">
      <div className="flex px-[80px] pt-[56px] pb-[48px] border border-azulBorde">
        <div className="border border-white w-full py-[36px]">
          <span className="flex gap-[2px] py-[6.5px] px-[10px] rounded-xl bg-compassionate max-w-max">
            <PiStarFourLight className="text-care size-4" />
            <p className=" text-xs font-semibold text-care">
              Nuestros Servicios
            </p>
          </span>

          <span className="text-[36px] leading-12 font-bold text-guiding ">
            Cuidado obstétrico integral para cada etapa
            <p className="text-[16px] font-bold  text-guiaGris">
              Explora las atenciones que ofrecemos: desde planificación
              preconcepcional hasta apoyo posparto. Elige el servicio y solicita
              una consulta
            </p>
          </span>

          <div className="flex gap-3 mt-[24px]">
            <button className=" flex items-center  bg-botonAzul text-letraBlanca px-[16px] py-[12.5px] rounded-xl font-semibold max-w-max gap-[8px]">
              <GrCatalog /> Ver catálogo
            </button>
            <button className=" flex items-center bg-FondoCeleste text-azulLeer px-[16px] py-[12.5px] rounded-xl font-semibold max-w-max gap-[8px]">
              <CgNotes /> Solicitar cita
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <div className="flex flex-col">
          <div className="w-full h-[60px] bg-FondoCeleste flex justify-center items-center px-[64px] gap-[13px] py-[13px]">
            <CardPost description="Controles prenatales" />
            <CardPost description="Parto y nacimiento" />
            <CardPost description="Embarazo de algo riesgo" />
            <CardPost description="Planificación y preconcepcional" />
            <CardPost description="Apoyo posparto" />
            <CardPost description="Emergencias 24/7" />
          </div>
        </div>
      </div>

      <div className="border border-azulBorde w-full py-[56px] px-[40px]">
        <div className="flex flex-col">
          <p className="max-w-max font-semibold text-azulServicio pt-[24px] px-[24px] text-[24px] leading-[32px]">
            Catálogo de servicios
          </p>
          <div className="flex justify-between items-center pb-[20px] px-[24px] w-full">
            <p className="maxfont-semibold text-grissubtexto">
              Selecciona un servicio para conocer detalles y preparar tu
              consulta.
            </p>
            <button className=" flex bg-botonAzul items-center text-letraBlanca gap-[8px] rounded-xl px-[16px] py-[12px] font-semibold">
              <IoCallOutline /> Reserva una consulta
            </button>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
