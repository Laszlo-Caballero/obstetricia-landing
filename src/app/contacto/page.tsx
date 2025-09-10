import Input from "@/components/ui/input/Input";
import React from "react";
import { CgNotes } from "react-icons/cg";
import { LuMessageSquareHeart } from "react-icons/lu";
import { FaPaperPlane, FaRegPaperPlane } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import CardContact from "@/components/ui/card-services/CardContact";
import { LuMapPin } from "react-icons/lu";
import { LuClock } from "react-icons/lu";
import { TbPhoneCall } from "react-icons/tb";
import { BsCalendarEvent } from "react-icons/bs";

export default function page() {
  return (
    <div>
      <div className="w-full h-full bg-FondoCeleste">
        <section className="py-[40px] px-[40px] w-full">
          <span className="flex gap-[2] py-[6px] px-[10px] rounded-xl bg-compassionate max-w-max">
            <LuMessageSquareHeart className="text-care size-4" />
            <p className=" text-xs font-semibold text-care">
              Estamos aquí para ayudarte
            </p>
          </span>
          <div className="flex flex-row justify-between">
            <p className="font-bold text-[28px] leading-100% text-azulLeer pl-2">
              Contacto
            </p>
            <button className="font-semibold flex gap-[2px] py-[12.5px] px-[16px]  rounded-xl bg-botonAzul items-center text-letraBlanca text-sm">
              <CgNotes />
              Solicitar cita
            </button>
          </div>
        </section>
      </div>
      <div className=" w-full border border-bordeColumn">
        <section className="flex flex-row px-[64px] py-[56px] gap-4">
          <section className="w-2/3 border border-bordeColumn rounded-xl px-4">
            <h1 className="font-semibold text-blackBluee px-1 py-4 text-lg">
              Envíamos un mensaje
            </h1>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium text-grissubtexto"
                ></label>
                <Input
                  for="nombre"
                  type="text"
                  placeholder="Nombre y apellido"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-grissubtexto"
                ></label>
                <Input
                  for="email"
                  type="email"
                  placeholder="nombre@correo.com"
                />
              </div>

              <div>
                <label
                  htmlFor="asunto"
                  className="block text-sm font-medium text-grissubtexto"
                ></label>
                <Input for="asunto" type="text" placeholder="Asunto" />
              </div>

              <div>
                <label
                  htmlFor="pref"
                  className="block text-sm font-medium text-grissubtexto"
                ></label>
                <input
                  id="telefono"
                  type="tel"
                  placeholder="Número de teléfono"
                  className="mt-1 w-full rounded-xl border border-bordeColumn  px-4 py-3 text-[15px] outline-none "
                  pattern="[0-9]{9}"
                  title="Ingresa un número de teléfono válido (9 digitos)"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-semibold text-grissubtexto pl-1"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={5}
                  placeholder="Escribe tu mensaje aquí"
                  className="mt-1 w-full h-[120px] rounded-xl border border-bordeColumn resize-none  px-4 py-3 text-[15px] text-grissubtexto outline-none"
                />
              </div>

              <div className="md:col-span-2 pb-2">
                <button
                  type="submit"
                  className="w-full flex items-center gap-1 rounded-xl bg-botonAzul px-[17px] py-3 font-semibold text-white  outline-none text-sm"
                >
                  <FaPaperPlane /> Enviar mensaje
                </button>
              </div>
            </form>
          </section>
          <section className="w-1/3 border border-bordeColumn rounded-xl px-4">
            <h1 className="font-semibold text-blackBluee pt-[17px] text-lg px-1">
              Datos de contacto
            </h1>
            <div>
              <CardContact icon={<FiPhone />} description="(555) 123-4567" />
              <CardContact
                icon={<CiMail />}
                description=" hola@maternia.example"
              />
              <CardContact
                icon={<LuClock />}
                description=" Lun - Vie, 9:00 - 18:00"
              />
              <CardContact
                icon={<LuMapPin />}
                description=" 123 Care Ave, Suite 200"
              />
            </div>
            <div className=" flex flex-col py-3 gap-3">
              <button
                type="submit"
                className="w-full flex items-center gap-1 rounded-xl bg-FondoCeleste px-[17px] py-3 font-semibold text-blackBluee  outline-none text-sm"
              >
                <TbPhoneCall /> Llamar ahora
              </button>

              <button
                type="submit"
                className="w-full flex items-center gap-1 rounded-xl bg-botonAzul px-[17px] py-3 font-semibold text-white  outline-none text-sm"
              >
                <BsCalendarEvent /> Agendar visita
              </button>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
