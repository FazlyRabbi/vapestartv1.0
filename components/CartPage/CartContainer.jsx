import Image from "next/image";
import product1 from "../../img/prod01-1-min-copyright-500x598.jpg";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
export default function CartContainer() {
  const [quantity, setQuantity] = useState(0);

  return (
    <section>
      <div className="lg:w-[70%] md:w-[90%] w-[80%] mx-auto">
        <div className="bg-[#D22756] text-white flex w-full items-center font-bun">
          <p className="lg:w-[43%] md:w-[40%] w-[50%] py-6 text-[20px] px-2 ml-20">Product</p>
          <p className="lg:w-[19%] md:w-[20%] w-[50%] py-6 text-[20px] px-2 text-center">Price</p>
          <p className="lg:w-[19%] md:w-[20%] py-6 text-[20px] px-2 text-center hidden md:block lg:block">Quantity</p>
          <p className="lg:w-[19%] md:w-[20%] py-6 text-[20px] px-2 text-center hidden md:block lg:block">Subtotal</p>
        </div>
      </div>

      <div className="lg:w-[70%] md:w-[90%] w-[80%] mx-auto bg-[#292929] p-4">
        <div className=" text-white lg:flex w-full items-center font-bun grid grid-cols-2 md:flex">
          <div className="lg:w-[43%] md:w-[40%] w-full py-6 lg:text-[15px] text-[10px] px-2 lg:ml-20 md:ml-0 ml-0">
            <div className="flex justify-evenly items-center gap-2">
              <RxCross1 className="text-white"/>
              <Image src={product1} className="h-12 w-12"></Image>
              <p >Vaporesso Nebula Vape Kit - Yellow, Small</p>
            </div>
          </div>
          <div className="lg:w-[19%] md:w-[19%] w-full py-6  text-[15px] px-2 text-center">
            $70.00
          </div>
          <div className="lg:w-[19%] md:w-[19%] w-full py-6  text-[15px] px-2 text-center">
            <div className="relative">
              <input
                type="text"
                className="bg-[#393939] text-white px-8 w-28 font-bold py-3 text-[20px]"
                placeholder={quantity}
              />
              <div className="absolute lg:-top-6 md:top-0 -top-3 md:-translate-y-3 lg:translate-y-3  md:right-0 lg:translate-x-0 md:translate-x-2 translate-x-24 lg:right-4 py-3 ">
                <div
                  onClick={() => setQuantity(quantity + 1)}
                  className="hover:bg-[#D22756]  py-1 px-2"
                >
                  <MdKeyboardArrowUp className="text-white text-xl" />
                </div>
                <div
                  onClick={() => setQuantity(quantity - 1)}
                  className=" hover:bg-[#D22756] py-1 px-2"
                >
                  <MdOutlineKeyboardArrowDown className="text-white text-xl" />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[19%] md:w-[19%] w-full py-6  text-[15px] px-2 text-center">
            $140.00
          </div>
        </div>

        <div className="lg:flex md:flex  items-center justify-between">
          <div>
            <input
              className="bg-[#393939] h-12 lg:p-5 md:p-3 p-2 text-white"
              type="text"
              placeholder="Coupon Code"
            />
            <button className="bg-[#D22756] h-12 lg:px-6 md:px-4 px-2 text-white font-eco lg:ml-1  md:ml-1 ml-2 font-bold translate-y-[1px]">Apply Coupon</button>
          </div>
          <button className="bg-[#D22756] h-12 w-full md:w-auto lg:px-12 md:px-8 mt-3 font-bold text-white font-eco">Update Cart</button>
        </div>
      </div>
    </section>
  );
}
