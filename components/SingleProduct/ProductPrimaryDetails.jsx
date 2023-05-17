import { FaStar } from "react-icons/fa";
import product1 from "/img/prod01-1-min-copyright-500x598.jpg";
import Image from "next/image";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import Magnifier from "react-magnifier";

export default function ProductPrimaryDetails({ data }) {
  // increse or decrease quantity
  const [quantity, setQuantity] = useState(0);

  const win = typeof window !== "undefined" ? true : false;

  console.log(data);

  return (
    <div className=" py-10">
      <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 justify-items-start  items-start">
        <div className="text-center    flex flex-col ">
          {/* left sede main image for magnify  */}
          <div className="border-2 shadow-md border-black    rounded-sm">
            {win ? (
              <Magnifier
                src={data?.imgUrl}
                imgAlt="product image"
                zoomFactor={2}
                glassDimension={150}
                glassBorderColor=""
                glassBorderWidth={2}
                className="object-cover"
              />
            ) : (
              ""
            )}
          </div>

          {/* left side other image  */}
        </div>

        <div>
          <p className="font-bold uppercase  text-[1.5rem] text-primary">
            {data?.name}
          </p>

          <div className="flex items-center text-sm  mt-5  space-x-3">
            <p className="text-softGray line-through font-bold">
              $<span className="text-[1.3rem]">{data?.price}</span>
            </p>
            <p className="text-primary font-bold">
              $<span className="text-[1.5rem]">{data?.price}</span>
            </p>
          </div>

          <p className="my-8 w-[90%]">
            <div dangerouslySetInnerHTML={{ __html: data?.description }} />
          </p>

          {/* color select dropdwon */}

          {/* side select dropdwon  */}
          <p className="text-[25px] font-eco font-bold my-2">Flavour</p>
          <div className="relative">
            <div>
              <Select
                label="Choose a Options"
                color="black"
                className=" font-bold"
                // onChange={(e) =>
                //   setProduct({
                //     ...product,
                //     category: e,
                //   })
                // }
              >
                <Option value="645e3db7645f84f3b45b68ab">data</Option>
                {/* {data?.Flavour?.length() !== 0
                  ? data?.Flavour?.map((data) => (
                      <Option value="645e3db7645f84f3b45b68ab">{data}</Option>
                    ))
                  : ""} */}
              </Select>
            </div>
          </div>

          {/* quantity input  */}
          <div className="flex items-center gap-3 my-10">
            <div className="relative">
              <input
                type="text"
                className="bg-[#393939] rounded-sm text-white px-4 w-20 font-bold py-2 text-[20px]"
                placeholder={quantity}
              />
              <div className="absolute top-0 -translate-y-3 right-0 py-2 ">
                <div
                  onClick={() => setQuantity(quantity + 1)}
                  className=" cursor-pointer pt-2   px-2"
                >
                  <MdKeyboardArrowUp className="text-white text-xl" />
                </div>
                <div
                  onClick={() => setQuantity(quantity - 1)}
                  className="   cursor-pointer  px-2"
                >
                  <MdOutlineKeyboardArrowDown className="text-white text-xl" />
                </div>
              </div>
            </div>

            <button className="text-[20px]  bg-primary rounded-sm py-2 px-4 font-eco font-bold  text-white">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
