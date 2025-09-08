import React from "react";
import { CgNotes } from "react-icons/cg";
import { PiStarFourLight } from "react-icons/pi";
import { GrCatalog } from "react-icons/gr";
import CardPost from "@/components/ui/CardPost";
import { IoCallOutline } from "react-icons/io5";
import { FaHeartbeat } from "react-icons/fa";
import CardCatalog from "@/components/ui/card-services/CardCatalog";
import { LuBaby, LuCalendar } from "react-icons/lu";
import { LuStethoscope } from "react-icons/lu";
import { TbCalendarEventFilled } from "react-icons/tb";
import { LuMilk } from "react-icons/lu";
import { LuAmbulance } from "react-icons/lu";
import { BsCalendarEvent } from "react-icons/bs";
import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { RiMicAiLine } from "react-icons/ri";
import { FiMapPin } from "react-icons/fi";

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
          <div className="w-full h-[60px]  bg-FondoCeleste flex justify-center items-center px-[64px] gap-[13px] py-[13px]">
            <CardPost description="Controles prenatales" />
            <CardPost description="Parto y nacimiento" />
            <CardPost description="Embarazo de algo riesgo" />
            <CardPost description="Planificación y preconcepcional" />
            <CardPost description="Apoyo posparto" />
            <CardPost description="Emergencias 24/7" />
          </div>
        </div>
      </div>

      <section className="border border-azulBorde w-full py-[56px] px-[40px]">
        <div className="flex flex-col">
          <h1 className="max-w-max font-semibold text-azulServicio pt-[24px] px-[24px] text-[24px] leading-[32px]">
            Catálogo de servicios
          </h1>
          <div className="flex justify-between items-center pb-[20px] px-[24px] w-full">
            <p className="maxfont-semibold text-grissubtexto text-[16px">
              Selecciona un servicio para conocer detalles y preparar tu
              consulta.
            </p>
            <button className=" flex bg-botonAzul items-center text-letraBlanca gap-[8px] rounded-xl px-[16px] py-[12px] font-semibold">
              <IoCallOutline /> Reserva una consulta
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[16px] w-full">
          <CardCatalog
            icon={<FaHeartbeat className=" text-azulServicio" size={20} />}
            title="Controles prenatales"
            subtitle="Chequeos preódicos, ecografias y tamizajes con planes
              persoalizados."
            description="Incluye: calendario de visitas, laboratorios y educación"
            button="Agregar control"
          />
          <CardCatalog
            icon={<LuBaby className=" text-azulServicio" size={20} />}
            title="Parto y Nacimiento"
            subtitle="Acompañamiento en parto vaginal y cesárea, con enfoque respetuoso."
            description="Opciones: plan de parto, analgesia, acompañantes"
            button="Planificar Nacimiento"
          />
          <CardCatalog
            icon={<LuStethoscope className=" text-azulServicio" size={20} />}
            title="Alto riesgo obstétrico"
            subtitle="Seguimiento especializado para condiciones médicas complejas."
            description="Ej.: hipertensión, diabetes, embarazos múltiples"
            button="Consultar especialistas"
          />
          <CardCatalog
            icon={
              <TbCalendarEventFilled className=" text-azulServicio" size={20} />
            }
            title="Planificación"
            subtitle="Evaluación de salud y consejería antes del embarazo."
            description="Incluye: revisión de antecedentes y suplementos"
            button="Iniciar plan"
          />
          <CardCatalog
            icon={<LuMilk className=" text-azulServicio" size={20} />}
            title="Apoyo posparto"
            subtitle="Lactancia, recuperación y cuidado del recién nacido."
            description="Sesiones: lactancia, suelo pélvico, salud mental"
            button="Reservar apoyo"
          />
          <CardCatalog
            icon={<LuAmbulance className=" text-azulServicio" size={20} />}
            title="Urgencias 24/7"
            subtitle="Orientación inmediata para situaciones de emergencia."
            description="Línea directa y derivación hospitalaria al instante  "
            button="Llamar ahora"
          />
        </div>
      </section>
      <div>
        <section className="flex flex-row px-[40px] py-[40px]">
          <div className="border border-bordeColumn rounded-xl py-[24x] px-[24px]">
            <p className="text-blackBluee text-[18px] font-bold pt-[17px] ">
              Solicitar una Cita
            </p>

            <form className="mt-4 space-y-4">
              <label htmlFor="nombre"></label>
              <input
                id="nombre"
                type="text"
                placeholder="Nombre y apellido"
                className="w-full rounded-xl border border-bordeColumn px-4 py-3 text-[15px] outline-none"
              />

              <label htmlFor="email"></label>
              <input
                id="email"
                type="email"
                placeholder="Correo electrónico"
                className="w-full rounded-xl border border-bordeColumn px-4 py-3 text-[15px] outline-none"
              />

              <label htmlFor="servicio"></label>
              <select
                id="servicio"
                defaultValue=""
                className="w-full rounded-xl border border-bordeColumn px-4 py-3 text-[15px] text-grissubtexto outline-none"
              >
                <option value="" disabled>
                  Selecciona un servicio
                </option>
                <option>Cuidado Prenatal</option>
                <option>Parto y Nacimiento</option>
                <option>Apoyo posnatal</option>
                <option>Embarazo de Alto Riesgo</option>
                <option>Clases de Preparación para el Parto</option>
                <option>Servicio de guardia 24/7</option>
              </select>

              <label htmlFor="fecha"></label>
              <input
                id="fecha"
                type="date"
                placeholder="Preferencia de fecha"
                className="w-full rounded-xl border border-bordeColumn bg-white px-4 py-3 text-[15px] outline-none text-grissubtexto"
              />

              <button className="flex w-full rounded-xl bg-FondoAzul gap-2 px-4 py-3 font-bold text-letraBlanca mb-[12px]">
                <BsCalendarEvent />
                <p className="  font-bold text-[14px] text-letraBlanca ">
                  Enviar solicitud
                </p>
              </button>
            </form>
          </div>
          <section className="ml-4 py-[24px] pr-[24px] pl-[16px] border border-bordeColumn rounded-xl w-[422px]">
            <h1 className="text-lg text-blackBluee px-[17px] font-bold">
              ¿Necesita Orientación?
            </h1>
            <h2 className="text-grissubtexto font-semibold text-[15px] px-[17px] pb-[12px]">
              Nuestro equipo puede ayudarte a elegir el servicio adecuado según
              tu etapa y necesidades.
            </h2>
            <div className="border border-bordeColumn px-[17px]"></div>
            <div className="px-[17px] py-[12]">
              <div className="border border-bordeColumn rounded-xl justify-center my-3">
                <p className="text-grissubtexto text-sm p-4 gap-2 flex items-center">
                  <LuPhone /> (555) 123-456
                </p>
              </div>
              <div className="border border-bordeColumn rounded-xl justify-center my-3">
                <p className="text-grissubtexto text-sm p-4 gap-2 flex items-center">
                  <CiMail /> hola@maternia.example
                </p>
              </div>
              <div className="border border-bordeColumn rounded-xl justify-center my-3">
                <p className="text-grissubtexto text-sm p-4 gap-2 flex items-center">
                  <FiMapPin /> 123 Care Ave, Suite 200
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
