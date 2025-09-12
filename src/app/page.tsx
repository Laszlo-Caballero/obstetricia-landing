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
import CardServices from "@/components/ui/card-services/CardServices";
import { TbCalendarEvent } from "react-icons/tb";
import { FiMessageSquare } from "react-icons/fi";
import CardImagePost from "@/components/ui/card-services/CardImagePost";
import CardTestimony from "@/components/ui/card-services/CardTestimony";

export default function Page() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center bg-full">
      <div className="pt-[56px] flex pb-[48px] px-[40px] w-full max-w-[1920px] ">
        <div className="border border-white w-full py-[15px] ">
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
            </span>
            Infórmese, prepárese y encuentre la atención adecuada para usted y
            su creciente familia.
          </p>

          <div className="flex gap-3 mt-[24px]">
            <button className=" flex items-center  bg-botonAzul text-letraBlanca px-[16px] py-[12.5px] rounded-xl font-semibold max-w-max gap-[8px]">
              <SiGooglemaps /> Encuentra una Posta
            </button>

            {/* <button className=" flex items-center bg-FondoCeleste text-azulLeer px-[16px] py-[12.5px] rounded-xl font-semibold max-w-max gap-[8px]">
              <CgNotes /> Leer ultima publicación
            </button> */}
          </div>
        </div>

        <div className="flex p-[13px] border border-imagen rounded-3xl h-[326px]">
          <div className="w-[463px] h-[300px] rounded-xl">
            <Image
              src="https://res.cloudinary.com/dl0wif5vm/image/upload/v1756671331/rxjesxmo9h5eefgifc3e.webp"
              alt="Pareja embarazada centrada con un fondo celeste, mirando ambos la barriga de la mujer"
              width={463}
              height={300}
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="border border-FondoCeleste bg-FondoCeleste w-full flex flex-col justify-center items-center">
        <div className=" py-[56px] flex flex-col px-[40px] max-w-[1920px] ">
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
            <CardServices
              title="Cuidado Prenatal"
              description="Chequeos de rutina, exámenes de detección y planes
                personalizados para un embarazo saludable."
              icon={<PiHeartHalfBold className="text-azulServicio" size={20} />}
            />
            <CardServices
              title="Parto y Nacimiento"
              description="Opciones de apoyo para el parto con equipos obstétricos
                experimentados."
              icon={<LuBaby className="text-azulServicio" size={20} />}
            />
            <CardServices
              title="Apoyo Posnatal"
              description="Orientación sobre lactancia, planes de recuperación y educación sobre el cuidado del recién nacido."
              icon={<LuMilk className="text-azulServicio" size={20} />}
            />
            <CardServices
              title="Embarazo de Alto Riesgo"
              description="Supervisión especializada para afecciones complejas con atención coordinada."
              icon={<LuStethoscope className="text-azulServicio" size={20} />}
            />
            <CardServices
              title="Clases de Preparación para el Parto"
              description="Supervisión especializada para afecciones complejas con atención coordinada."
              icon={
                <TbCalendarEventFilled
                  className="text-azulServicio"
                  size={20}
                />
              }
            />
            <CardServices
              title="Servicio de guardia 24/7"
              description="Acceso a asesoramiento urgente cuando más lo necesites."
              icon={<LuAmbulance className="text-azulServicio" size={20} />}
            />
          </div>
        </div>
      </div>

      <div className=" w-full flex flex-col max-w-[1920px] py-[56px] px-[40px] bg-full">
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
          <CardImagePost
            image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1756671440/nzmyctfgqigqpzc5vgfy.webp"
            title="Lista de verificación nutricional para cada trimestre"
            description="Qué comer y qué evitar para mantenerse sanos usted y su bebé."
            tiempoDesde={tiempoDesde("2025-08-26T12:00:00")}
          />

          <CardImagePost
            image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1756671469/b4cafhwzexawzrqoygxr.webp"
            title="Entendiendo sus exámenes prenatales a tiempo"
            description="Análisis de las pruebas más comunes y su importancia de las mismas."
            tiempoDesde={tiempoDesde("2025-08-23T15:00:00")}
          />

          <CardImagePost
            image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1756671362/k5jf85g0igeoiogxlxtd.webp"
            title="Recuperación posparto: Guía semana a semana."
            description="Consejos prácticos para la curación y la adaptación después del parto"
            tiempoDesde={tiempoDesde("2025-08-20T19:00:00")}
          />
        </div>
      </div>

      <div className="border border-FondoCeleste flex flex-col bg-FondoCeleste w-full justify-center items-center">
        <div className=" max-w-[1920px] py-[56px] px-[40px]">
          <p className="font-semibold text-azulServicio pt-[24px] pl-[24px] text-[34px] leading-[36px]">
            Testimonios de Familias
          </p>
          <div className="flex items-center pt-[8px] pb-[24px] px-[24px]">
            <p className=" font-semibold text-grissubtexto">
              Comentarios reales de pacientes a los que hemos apoyado.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-16 px-[17px] ">
            <CardTestimony
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1756846840/wf7gzl1qkjp61oeucvgs.webp"
              title="German Arteaga"
              description="El equipo me hizo sentir informada y tranquila durante todo mi
                embarazo. Me encantaron los controles semanales y los recursos."
            />

            <CardTestimony
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1756846840/wf7gzl1qkjp61oeucvgs.webp"
              title="Nadia y Omar"
              description="Atención compasiva desde el primer día. Cada día me sentí
                apoyado y en control."
            />

            <CardTestimony
              image="https://res.cloudinary.com/dl0wif5vm/image/upload/v1756846840/wf7gzl1qkjp61oeucvgs.webp"
              title="Priya S."
              description="Respetaron mi plan de parto y me explicaron cada opción
                claramente."
            />
          </div>
        </div>
      </div>

      <div className="border border-FondoCeleste bg-full w-full flex flex-col justify-center items-center">
        <div className="max-w-[1920px] flex flex-col pt-[80px] pb-[56px] px-[64px]">
          <section className=" bg-celesteContacto rounded-xl px-[16px] py-[24px] flex justify-between items-center gap-[8px] w-full">
            <span className=" text-NegroContacto text-[24px] font-semibold max-w-max">
              ¿Listo para hablar con un obstetra?
              <h1 className=" text-NegroContacto font-semibold text-[16px] leading-[24px] mt-[6px]">
                Programe una consulta para discutir sus necesidades y próximos
                pasos.
              </h1>
            </span>
            <div className="flex gap-[12px]">
              <button className=" flex bg-botonAzul items-center text-letraBlanca gap-[8px] rounded-xl px-[16px] py-[12px]">
                <TbCalendarEvent /> Programar consulta
              </button>
              <button className=" flex bg-FondoCeleste items-center text-azulServicio font-semibold gap-[8px] rounded-xl px-[16px] py-[12px]">
                <FiMessageSquare /> Contactanos
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
