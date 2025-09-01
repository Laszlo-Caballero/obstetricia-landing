import React from 'react'
import { FaStethoscope } from "react-icons/fa";
import { Geist } from 'next/font/google'

export default function Page() {
  return (
    <div className="min-h-screen bg-white">

        <div className=" containter bg-Skyblue w-full flex justify-between p-2 h-[66px] border-b border-azulBorde items-center">

          <div className="flex items-center px-[22px] gap-2">
            <FaStethoscope className="text-blackBlue" size={20}/>
            <span className=" font-semibold p-3 text-lg text-blackBlue">Maternia Care</span>
          </div>


          <div className="flex gap-5">
            <a href="#" className="px-3 py-1 rounded-md bg-sky-400 text-white font-semibold">
              Home
            </a>
            <a href="#" className="px-3 py-1 rounded-md text-sky-900 ">
              Services
            </a>
            <a href="#" className="px-3 py-1 rounded-md text-sky-900 ">
              Blog
            </a>
            <a href="#" className="px-3 py-1 rounded-md text-sky-900 ">
              Contact
            </a>
          </div>        
          
        </div>
         <div>
        
        </div>
    </div>

  );
}
