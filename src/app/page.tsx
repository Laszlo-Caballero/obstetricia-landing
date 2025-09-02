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

        <div className=" w-full ">

          <div className= "flex flex-col">
            <p className="max-w-max font-semibold text-azulServicio pt-[24px] pl-[24px] text-[28px] leading-[36px]"
            >Nuestros Servicios
            </p>
            <div className="flex justify-between items-center pt-[8px] pb-[24px] px-[24px]">
            <p className="max-w-max font-semibold text-grissubtexto">
              Atención integral desde la preconcepción hasta el apoyo posnatal.
            </p>
            <button className=" flex bg-botonAzul items-center text-letraBlanca gap-[8px] rounded-xl px-[16px] py-[12px] font-semibold">
              <IoCallOutline /> Reserva una consulta
            </button>
            </div>

            <div className="grid grid-cols-3 gap-4 w-full">
              <div className="bg-white rounded-xl border border-bordeColumn m-[24px] p-[16px]">
                <div
                  className="bg-FondoCeleste w-max p-[10px] rounded-xl">
                  <PiHeartHalfBold className="text-azulServicio" size={20} />
                </div>
                  <p className="pt-[12px] font-semibold text-blackBluee">Cuidado Prenatal</p>
                  <p className="pt-[12px] text-grissubtexto text-sm">Chequeos de rutina, exámenes de detección y planes personalizados para un embarazo saludable.</p>                  
              </div>

              <div className="bg-white rounded-xl border border-bordeColumn m-[24px] p-[16px]">
                <div
                  className="bg-FondoCeleste w-max p-[10px] rounded-xl">
                  <LuBaby className="text-azulServicio" size={20} />
                </div>
                  <p className="pt-[12px] font-semibold text-blackBluee">Parto y Nacimiento</p>
                  <p className="pt-[12px] text-grissubtexto text-sm">Opciones de apoyo para el parto con equipos obstétricos experimentados.</p>
              </div>

              <div className="bg-white rounded-xl border border-bordeColumn m-[24px] p-[16px]">
                <div
                  className="bg-FondoCeleste w-max p-[10px] rounded-xl">
                  <LuMilk className="text-azulServicio" size={20} />
                </div>
                  <p className="pt-[12px] font-semibold text-blackBluee">Apoyo Posnatal</p>
                  <p className="pt-[12px] text-grissubtexto text-sm">Orientación sobre lactancia, planes de recuperación y educación sobre el cuidado del recién nacido.</p>
              </div>

              <div className="bg-white rounded-xl border border-bordeColumn m-[24px] p-[16px]">
                <div
                  className="bg-FondoCeleste w-max p-[10px] rounded-xl">
                  <LuStethoscope className="text-azulServicio" size={20} />
                </div>
                  <p className="pt-[12px] font-semibold text-blackBluee">Embarazo de Alto Riesgo</p>
                  <p className="pt-[12px] text-grissubtexto text-sm">Supervisión especializada para afecciones complejas con atención coordinada.</p>
              </div>

              <div className="bg-white rounded-xl border border-bordeColumn m-[24px] p-[16px]">
                <div
                  className="bg-FondoCeleste w-max p-[10px] rounded-xl">
                  <TbCalendarEventFilled className="text-azulServicio" size={20} />
                </div>
                  <p className="pt-[12px] font-semibold text-blackBluee">Clases de Preparación para el Parto</p>
                  <p className="pt-[12px] text-grissubtexto text-sm">Supervisión especializada para afecciones complejas con atención coordinada.</p>
              </div>

              <div className="bg-white rounded-xl border border-bordeColumn m-[24px] p-[16px]">
                <div
                  className="bg-FondoCeleste w-max p-[10px] rounded-xl">
                  <LuAmbulance className="text-azulServicio" size={20} />
                </div>
                  <p className="pt-[12px] font-semibold text-blackBluee">Servicio de guardia 24/7</p>
                  <p className="pt-[12px] text-grissubtexto text-sm">Acceso a asesoramiento urgente cuando más lo necesites.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>

        <div className=" w-full py-[56px] flex px-[40px]">
          <div className=" w-full ">
            <div className= "flex flex-col">
              <p className="max-w-max font-semibold text-post pt-[24px] pl-[24px] text-[28px] leading-[36px]"
              >Ultimos Posts
              </p>
              <div className="flex justify-between items-center pt-[8px] pb-[24px] px-[24px]">
              <p className="max-w-max font-semibold text-grissubtexto">
                Perspectivas, consejos e historias reales de nuestro equipo de atención.
              </p>
              <button className=" flex bg-bordeColumn items-center text-blackBluee gap-[8px] rounded-xl px-[16px] py-[12px] font-semibold size[14px] leading-[20px]">
                <FaArrowRightLong /> Ver más
              </button>
              </div>

              <div className="grid grid-cols-3 gap-[16px] w-full"> 

                  <div className="border border-bordeColumn rounded-xl p-[16px]">
                    
                    <div className="w-full h-[160px] rounded-xl">
                      <Image
                        src="https://res.cloudinary.com/dl0wif5vm/image/upload/v1756671440/nzmyctfgqigqpzc5vgfy.webp"
                        alt="Madre con su bebé"
                        width={312}
                        height={160}
                        className="h-[160px] w-full object-cover rounded-xl"/>
                    </div>
                    <p className="pt-[20px] font-semibold text-post">Lista de verificación nutricional para cada trimestre.</p>
                    <p className="font-semibold pt-[12px] text-grissubtexto text-[14px]" >
                      Qué comer y qué evitar para mantenerse sanos usted y su bebé.
                    </p>
                </div>

                  <div className="border border-bordeColumn rounded-xl p-[16px] ">
                    <div className="w-full h-[160px] rounded-xl">
                      <Image
                        src="https://res.cloudinary.com/dl0wif5vm/image/upload/v1756671469/b4cafhwzexawzrqoygxr.webp"
                        alt="Doctor con una paciente"
                        width={312}
                        height={160}
                        className="h-full w-full object-cover rounded-xl"/>
                    </div>
                    <p className="pt-[20px] font-semibold text-post">Entendiendo sus exámenes prenatales.</p>
                    <p className="font-semibold pt-[12px] text-grissubtexto text-[14px]" >
                      Análisis de las pruebas más comunes y su importancia
                    </p>

                 </div>
                  <div className="border border-bordeColumn rounded-xl p-[16px]">
                    <div className="w-full h-[160px] rounded-xl">
                      <Image
                        src="https://res.cloudinary.com/dl0wif5vm/image/upload/v1756671362/k5jf85g0igeoiogxlxtd.webp"
                        alt="Mano de bebé"
                        width={312}
                        height={160}
                        className="h-full w-full object-cover rounded-xl"/>
                   </div>
                   <p className="pt-[20px] font-semibold text-post">Recuperación posparto: Guía semana a semana.</p>
                    <p className="font-semibold pt-[12px] text-grissubtexto text-[14px]" >
                      Consejos prácticos para la curación y la adaptación después del parto
                    </p>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
