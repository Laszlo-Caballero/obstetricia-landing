import React from "react";
import { PiStarFourLight } from "react-icons/pi";
import { SiGooglemaps } from "react-icons/si";
import { CgNotes } from "react-icons/cg";
import Image from "next/image";
import { IoCallOutline } from "react-icons/io5";
import { PiHeartHalfBold } from "react-icons/pi";
import { LuBaby } from "react-icons/lu";
import { LuMilk } from "react-icons/lu";
import { LuStethoscope } from "react-icons/lu";
import { TbCalendarEventFilled } from "react-icons/tb";
import { LuAmbulance } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import { tiempoDesde } from "@/libs/parseDate";

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
            GUIANDOTE A TRAVES DE CADA PASO DEL EMBARAZO
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

      <div className="border border-FondoCeleste w-full py-[56px] flex px-[40px] bg-FondoCeleste">
        <div className="flex flex-col">
          <p className="max-w-max font-semibold text-azulServicio pt-[24px] pl-[24px] text-[34px] leading-[36px]">
            Nuestros Servicios
          </p>
          <div className="flex justify-between items-center pt-[8px] pb-[24px] px-[24px]">
            <p className="max-w-max font-semibold text-grissubtexto">
              Atención integral desde la preconcepción hasta el apoyo posnatal.
            </p>
            <button className=" flex bg-botonAzul items-center text-letraBlanca gap-[8px] rounded-xl px-[16px] py-[12px] font-semibold">
              <IoCallOutline /> Reserva una consulta
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2 w-full">
            <div className="bg-white rounded-xl border border-bordeColumn m-[24px] p-[16px]">
              <div className="bg-FondoCeleste w-max p-[10px] rounded-xl">
                <PiHeartHalfBold className="text-azulServicio" size={20} />
              </div>
              <p className="pt-[12px] font-semibold text-blackBluee text-xl">
                Cuidado Prenatal
              </p>
              <p className="pt-[12px] text-grissubtexto text-sm">
                Chequeos de rutina, exámenes de detección y planes
                personalizados para un embarazo saludable.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-bordeColumn m-[24px] p-[16px]">
              <div className="bg-FondoCeleste w-max p-[10px] rounded-xl">
                <LuBaby className="text-azulServicio" size={20} />
              </div>
              <p className="pt-[12px] font-semibold text-blackBluee text-xl">
                Parto y Nacimiento
              </p>
              <p className="pt-[12px] text-grissubtexto text-sm">
                Opciones de apoyo para el parto con equipos obstétricos
                experimentados.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-bordeColumn m-[24px] p-[16px]">
              <div className="bg-FondoCeleste w-max p-[10px] rounded-xl">
                <LuMilk className="text-azulServicio" size={20} />
              </div>
              <p className="pt-[12px] font-semibold text-blackBluee text-xl">
                Apoyo Posnatal
              </p>
              <p className="pt-[12px] text-grissubtexto text-sm">
                Orientación sobre lactancia, planes de recuperación y educación
                sobre el cuidado del recién nacido.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-bordeColumn m-[24px] p-[16px]">
              <div className="bg-FondoCeleste w-max p-[10px] rounded-xl">
                <LuStethoscope className="text-azulServicio" size={20} />
              </div>
              <p className="pt-[12px] font-semibold text-blackBluee text-xl">
                Embarazo de Alto Riesgo
              </p>
              <p className="pt-[12px] text-grissubtexto text-sm">
                Supervisión especializada para afecciones complejas con atención
                coordinada.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-bordeColumn m-[24px] p-[16px]">
              <div className="bg-FondoCeleste w-max p-[10px] rounded-xl">
                <TbCalendarEventFilled
                  className="text-azulServicio"
                  size={20}
                />
              </div>
              <p className="pt-[12px] font-semibold text-blackBluee text-xl">
                Clases de Preparación para el Parto
              </p>
              <p className="pt-[12px] text-grissubtexto text-sm">
                Supervisión especializada para afecciones complejas con atención
                coordinada.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-bordeColumn m-[24px] p-[16px]">
              <div className="bg-FondoCeleste w-max p-[10px] rounded-xl">
                <LuAmbulance className="text-azulServicio" size={20} />
              </div>
              <p className="pt-[12px] font-semibold text-blackBluee text-xl">
                Servicio de guardia 24/7
              </p>
              <p className="pt-[12px] text-grissubtexto text-sm">
                Acceso a asesoramiento urgente cuando más lo necesites.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex py-[56px] px-[40px]">
        <div className="flex flex-col">
          <p className="max-w-max font-semibold text-post pt-[24px] px-[24] text-[34px] leading-[36px]">
            Ultimos Posts
          </p>
          <div className="flex justify-between items-center pt-[8px] pb-[24px] px-[24px]">
            <p className="max-w-max font-semibold text-grissubtexto">
              Perspectivas, consejos e historias reales de nuestro equipo de
              atención.
            </p>
            <button className=" flex bg-bordeColumn items-center text-blackBluee gap-[8px] rounded-xl px-[16px] py-[12px] font-semibold size[14px] leading-[20px]">
              <FaArrowRightLong /> Ver más
            </button>
          </div>

          <div className="grid grid-cols-3 gap-[16px] w-full px-[24px]">
            <div className="border border-bordeColumn rounded-xl p-[16px]">
              <div className="w-full rounded-xl">
                <Image
                  src="https://res.cloudinary.com/dl0wif5vm/image/upload/v1756671440/nzmyctfgqigqpzc5vgfy.webp"
                  alt="Madre con su bebé"
                  width={312}
                  height={240}
                  className="h-[240px] w-full object-cover rounded-xl"
                />
              </div>
              <p className="pt-[20px] font-semibold text-post text-xl">
                Lista de verificación nutricional para cada trimestre.
              </p>
              <p className="font-semibold pt-[12px] text-grissubtexto text-[14px]">
                Qué comer y qué evitar para mantenerse sanos usted y su bebé.
              </p>
              <p className="font-semibold pt-[12px] text-grissubtexto text-[14px]">
                {tiempoDesde("2025-08-31T17:00:00")}
              </p>
            </div>

            <div className="border border-bordeColumn rounded-xl p-[16px] ">
              <div className="w-full rounded-xl">
                <Image
                  src="https://res.cloudinary.com/dl0wif5vm/image/upload/v1756671469/b4cafhwzexawzrqoygxr.webp"
                  alt="Doctor con una paciente"
                  width={312}
                  height={240}
                  className="h-[240px] w-full object-cover rounded-xl"
                />
              </div>
              <p className="pt-[20px] font-semibold text-post text-xl">
                Entendiendo sus exámenes prenatales.
              </p>
              <p className="font-semibold pt-[12px] text-grissubtexto text-[14px]">
                Análisis de las pruebas más comunes y su importancia.
              </p>
              <p className="font-semibold pt-[12px] text-grissubtexto text-[14px]">
                {tiempoDesde("2025-08-29T15:00:00")}
              </p>
            </div>
            <div className="border border-bordeColumn rounded-xl p-[16px]">
              <div className="w-full rounded-xl">
                <Image
                  src="https://res.cloudinary.com/dl0wif5vm/image/upload/v1756671362/k5jf85g0igeoiogxlxtd.webp"
                  alt="Mano de bebé"
                  width={312}
                  height={240}
                  className="h-[240px] w-full object-cover rounded-xl"
                />
              </div>
              <p className="pt-[20px] font-semibold text-post text-xl">
                Recuperación posparto: Guía semana a semana.
              </p>
              <p className="font-semibold pt-[12px] text-grissubtexto text-[14px]">
                Consejos prácticos para la curación y la adaptación después del
                parto
              </p>
              <p className="font-semibold pt-[12px] text-grissubtexto text-[14px]">
                {tiempoDesde("2025-08-20T19:00:00")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-FondoCeleste w-full py-[56px] flex px-[40px] bg-FondoCeleste">
        <div className="flex flex-col w-full">
          <p className="max-w-max font-semibold text-azulServicio pt-[24px] pl-[24px] text-[34px] leading-[36px]">
            Testimonios de Familias
          </p>
          <div className="flex items-center pt-[8px] pb-[24px] px-[24px]">
            <p className="max-w-max font-semibold text-grissubtexto">
              Comentarios reales de pacientes a los que hemos apoyado.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-16 w-full px-[24px] ">
            <div className="bg-white rounded-xl border border-bordeColumn p-[17px]">
              <div className="flex items-center gap-[12px] pt-[12px] pl-[12px]">
                <div className=" h-full rounded-xl ">
                  <Image
                    src="https://res.cloudinary.com/dl0wif5vm/image/upload/v1756846840/wf7gzl1qkjp61oeucvgs.webp"
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="h-[40px] w-[40px] object-cover rounded-full"
                  />
                </div>
                <p className="pt-[8px] font-semibold text-blackBluee">
                  German Arteaga{" "}
                </p>
              </div>
              <p className="pt-[12px] px-[17px] pb-[17px] font-semibold text-grissubtexto">
                "El equipo me hizo sentir informada y tranquila durante todo mi
                embarazo. Me encantaron los controles semanales y los recursos."
              </p>
            </div>

            <div className="bg-white rounded-xl border border-bordeColumn p-[1.5px]">
              <div className="flex items-center gap-[12px] pt-[12px] pl-[12px]">
                <div className=" h-full rounded-xl ">
                  <Image
                    src="https://res.cloudinary.com/dl0wif5vm/image/upload/v1756846840/wf7gzl1qkjp61oeucvgs.webp"
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="h-[40px] w-[40px] object-cover rounded-full"
                  />
                </div>
                <p className="pt-[8px] font-semibold text-blackBluee">
                  Nadia y Omar{" "}
                </p>
              </div>
              <p className="pt-[12px] px-[17px] pb-[17px] font-semibold text-grissubtexto">
                "Atención compasiva desde el primer día. Cada día me sentí
                apoyado y en control."
              </p>
            </div>

            <div className="bg-white rounded-xl border border-bordeColumn p-[1.5px]">
              <div className="flex items-center gap-[12px] pt-[12px] pl-[12px]">
                <div className=" h-full rounded-xl ">
                  <Image
                    src="https://res.cloudinary.com/dl0wif5vm/image/upload/v1756846840/wf7gzl1qkjp61oeucvgs.webp"
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="h-[40px] w-[40px] object-cover rounded-full"
                  />
                </div>
                <p className="pt-[8px] font-semibold text-blackBluee">
                  {" "}
                  Priya S.{" "}
                </p>
              </div>
              <p className="pt-[12px] px-[17px] pb-[17px] font-semibold text-grissubtexto">
                "Respetaron mi plan de parto y me explicaron cada opción
                claramente."
              </p>
            </div>
          </div>
        </div>
        <div className="<div className= w-full flex py-[56px] px-[40px]"></div>
      </div>
    </div>
  );
}
