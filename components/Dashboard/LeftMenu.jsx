import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AuthContext } from "@/context/AuthContext";

import { AiOutlineLayout } from "react-icons/ai";
import { TfiLayoutSlider } from "react-icons/tfi";

import {
  MdOutlineStore,
  MdOutlineNoteAlt,
  MdProductionQuantityLimits,
} from "react-icons/md";


import { useRouter } from "next/router";
// import logo from "../../img/logo.png";

function LeftMenu() {
  const router = useRouter();

   const [open, setOpen] =  useState(false)
  // const { open } = useContext(AuthContext);

  return (
    <>
      <section
        className={`leftMenu 
    shadow-xl rounded-lg  
    max-w-[15rem]
    transition-all duration-300
    absolute lg:static lg:z-0 z-30  mt-[1.8rem] left-0 
    w-full   md:overflow-y-auto  overflow-y-scroll  mb-2 h-[100vh] lg:h-[90vh]  bg-[#F8F9FA]
    ${open ? "translate-x-0" : " -translate-x-[100rem] lg:translate-x-0"}
    
    `}
      >
        {/* left menu header */}
        <div className="leftMenu__header relative">
          <div className="flex flex-col justify-center items-center py-4 ">
            {/* <Image src={logo} height={10} width={70} alt="logo" /> */}
            <Link href={`/dashboard`}>
              <h5 className=" py-2  text-[1rem] font-bold">Dashboard</h5>
            </Link>
          </div>
          {/* <span className=" mx-auto  bg-gradient-to-r from-transparent   via-[#d59620] to-transparent   h-[1.2px]  w-[90%]"></span> */}
        </div>
        {/* left menu content */}
        <div className="leftMenu__content  transition-all duration-500 my-4 flex items-center justify-center flex-col">
          <Link
            href={`/dashboard/orders`}
            className={`
          
           ${
             router.pathname === "/dashboard/orders"
               ? ` 
           
            rounded-lg

            bg-white shadow-md`
               : ""
           }
           
           px-4 py-3
          w-[90%] flex justify-left gap-3 items-center text-base  font-normal
            
            text-[#394B6B] capitalize `}
          >
            <div
              className={`
          
            ${
              router.pathname === "/dashboard/orders"
                ? `
            
                bg-gradient-to-r from-cyan-500 to-blue-500 text-white
            
            `
                : ``
            }
          
          p-[5px] rounded-lg shadow-md`}
            >
              <MdOutlineStore className="  text-[1.3rem]  text-inherit" />
            </div>
            Orders
          </Link>
          <Link
            href={`/dashboard/products`}
            className={`
          
           ${
             router.pathname === "/dashboard/products"
               ? ` 
           
            rounded-lg

            bg-white shadow-md`
               : ""
           }
           
           px-4 py-3
          w-[90%] flex justify-left gap-3 items-center text-base  font-normal
            
            text-[#394B6B] capitalize `}
          >
            <div
              className={`
          
            ${
              router.pathname === "/dashboard/products"
                ? `
            
                bg-gradient-to-r from-cyan-500 to-blue-500 text-white
            
            `
                : ``
            }
          
          p-[5px] rounded-lg shadow-md`}
            >
              <MdProductionQuantityLimits className="  text-[1.3rem]  text-inherit" />
            </div>
            Products
          </Link>

          <Link
            href={`/dashboard/sidebars`}
            className={`
          
           ${
             router.pathname === "/dashboard/sidebars"
               ? ` 
           
            rounded-lg

            bg-white shadow-md`
               : ""
           }
           
           px-4 py-3
          w-[90%] flex justify-left gap-3 items-center text-base  font-normal
            
            text-[#394B6B] capitalize `}
          >
            <div
              className={`
          
            ${
              router.pathname === "/dashboard/sidebars"
                ? `
            
                bg-gradient-to-r from-cyan-500 to-blue-500 text-white
            
            `
                : ``
            }
          
          p-[5px] rounded-lg shadow-md`}
            >
              <AiOutlineLayout className="  text-[1.3rem]  text-inherit" />
            </div>
            Sidebar
          </Link>

          {/* home page dashboard */}

          <Link
            href={`/dashboard/home_slider`}
            className={`
          
           ${
             router.pathname === "/dashboard/home_slider"
               ? ` 
           
            rounded-lg

            bg-white shadow-md`
               : ""
           }
           
           px-4 py-3
          w-[90%] flex justify-left gap-3 items-center text-base  font-normal
            
            text-[#394B6B] capitalize `}
          >
            <div
              className={`
          
            ${
              router.pathname === "/dashboard/home_slider"
                ? `
            
                bg-gradient-to-r from-cyan-500 to-blue-500 text-white
            
            `
                : ``
            }
          
          p-[5px] rounded-lg shadow-md`}
            >
              <TfiLayoutSlider className="  text-[1.3rem]  text-inherit" />
            </div>
            Home Slider
          </Link>
        </div>
      </section>
    </>
  );
}

export default LeftMenu;
