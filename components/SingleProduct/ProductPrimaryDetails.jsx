import { FaStar } from "react-icons/fa";
import product1 from "/img/prod01-1-min-copyright-500x598.jpg";
import Image from "next/image";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

export default function ProductPrimaryDetails() {
  // states 
  // show/hide color select option 
  const [ colorToggle, setColorToggle ] = useState(true);
   // show/hide size select option 
  const [ sizeToggle, setSizeToggle ] = useState(true);
  // increse or decrease quantity 
  const [ quantity, setQuantity ] = useState(0)


  return (
    <div className="lg:py-20 py-4">
      <div className="container lg:flex md:flex justify-between items-start md:w-[95%] mx-auto lg:gap-0 md:gap-4">
        <div className="text-center  lg:w-[40%] w-[90%] mx-auto flex flex-col mt-6">
          {/* left sede main image for magnify  */}
          <div className="border-4 border-[#EEEEEE]">
            <Image
              height={700}
              className={`max-h-[40rem] scale-100 overflow-hidden transition ease-in duration-300 p-1 w-full md:w-[95%] mx-auto`}
              alt="product__imgae"
              src={product1}
            />
          </div>

          {/* left side other image  */}

          <div className="flex justify-between items-center w-full">
            <Image
              className="w-1/4 opacity-60 hover:opacity-100"
              src={product1}
            ></Image>
            <Image
              className="w-1/4 opacity-60 hover:opacity-100"
              src={product1}
            ></Image>
            <Image
              className="w-1/4 opacity-60 hover:opacity-100"
              src={product1}
            ></Image>
            <Image
              className="w-1/4 opacity-60 hover:opacity-100"
              src={product1}
            ></Image>
          </div>
        </div>

        <div className="container mx-auto lg:w-[55%] w-[80%]">
          <h1 className="text-[#D22756] font-eco font-bold lg:text-[45px] text-[35px]">
            <span className="lg:text-[55px]">$</span>70.00 –{" "}
            <span className="lg:text-[55px]">$</span>85.00
          </h1>

          <div className="lg:flex items-center gap-4 mt-3 mb-2">
            <div className="gap-1 flex text-yellow-500 ">
              <FaStar className="text-[30px]" />
              <FaStar className="text-[30px]" />
              <FaStar className="text-[30px]" />
              <FaStar className="text-[30px]" />
              <FaStar className="text-[30px]" />
            </div>
            <h1 className="text-[#D22756] text-[25px]">(1 customer review)</h1>
          </div>

          <p className="my-8 text-[#71717a] w-[90%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          {/* color select dropdwon */}
          <p className="text-[25px] font-eco font-bold">Color</p>
          <div className="relative my-1">
            <button
              onClick={() => setColorToggle(!colorToggle)}
              className="flex justify-between items-center bg-[#393939] text-white w-96 py-4 px-6 group"
            >
              <p>Choose an option</p>
              <span className="pl-48">
                <MdOutlineKeyboardArrowDown />
              </span>
            </button>

            <div
              className={`${
                colorToggle ? "hidden" : "block"
              } absolute top-full w-96 py-3 px-6  border border-t-white bg-[#393939] text-white duration-900 ease-in z-40`}
            >
              <ul className="text-left">
                <li className="hover:bg-blue-gray-600 hover:text-yellow-500">
                  Green
                </li>
                <li className="hover:bg-blue-gray-600 hover:text-yellow-500">
                  Red
                </li>
                <li className="hover:bg-blue-gray-600 hover:text-yellow-500">
                  Yellow
                </li>
              </ul>
            </div>
          </div>

          {/* side select dropdwon  */}
          <p className="text-[25px] font-eco font-bold my-2">Size</p>
          <div className="relative">
            <button
              onClick={() => setSizeToggle(!sizeToggle)}
              className="flex justify-between items-center bg-[#393939] text-white w-96 py-4 px-6 group"
            >
              <p>Choose an option</p>
              <span className="pl-48">
                <MdOutlineKeyboardArrowDown />
              </span>
            </button>

            <div
              className={`${
                sizeToggle ? "hidden" : "block"
              } absolute top-full w-96 py-3 px-6  border border-t-white bg-[#393939] text-white duration-900 ease-in z-40`}
            >
              <ul className="text-left">
                <li className="hover:bg-blue-gray-600 hover:text-yellow-500">
                  Small
                </li>
                <li className="hover:bg-blue-gray-600 hover:text-yellow-500">
                  Medium
                </li>
                <li className="hover:bg-blue-gray-600 hover:text-yellow-500">
                  Large
                </li>
              </ul>
            </div>
          </div>

          {/* quantity input  */}
          <div className="flex items-center gap-3 my-10">
            <div className="relative">
              <input
                type="text"
                className="bg-[#393939] text-white px-8 w-28 font-bold py-3 text-[20px]"
                placeholder={quantity}
              />
              <div className="absolute top-0 -translate-y-3 right-0 py-3 ">
                <div onClick={()=>setQuantity(quantity+1)} className="hover:bg-[#D22756]  py-1 px-2">
                  <MdKeyboardArrowUp className="text-white text-xl" />
                </div>
                <div onClick={()=>setQuantity(quantity-1)}  className=" hover:bg-[#D22756] py-1 px-2">
                  <MdOutlineKeyboardArrowDown className="text-white text-xl" />
                </div>
              </div>
            </div>
            
            <button className="text-[20px] py-3 px-8 font-eco font-bold bg-[#D22756] text-white">
              Buy Now
            </button>
          </div>

          {/* product details  */}
          <div className="text-[#71717a]">
            <p>SKU: 42113124</p>
            <p>Categories: E-Liquids, Premium Mods, RDAs (Drippers)</p>
            <p>Tags: E-Liquids, Premium Mods</p>
            <p>Product ID: 523</p>
          </div>
        </div>
      </div>
    </div>
  );
}
