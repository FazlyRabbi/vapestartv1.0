import React from "react";
import ShopLayout from "@/components/ShopPage/Layout/Layout";
import { Card, Typography, Input } from "@material-tailwind/react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Header from "@/components/HomePage/Header";
import Image from "next/image";
import img from "../img/products/p4.jpg";

function cart() {
  return (
    <div>
      <Header />
      <ShopLayout title={"cart"}>
        <div className=" bg-[#292929]  py-6 px-12">
          {/* for big device  */}
          <div className=" hidden md:block">
            <div className="  flex  justify-between flex-wrap  ">
              <p className=" font-bold text-white    min-w-[10rem]">Product</p>
              <p className=" font-bold text-white">Price</p>
              <p className=" font-bold text-white">Quantity</p>
              <p className=" font-bold text-white">Subtotal</p>
            </div>

            <div className="t-body">
              <div className=" flex border-b border-gray-100 justify-between items-center">
                <div className=" flex  min-w-[8rem]  space-x-1    text-center items-center text-white  py-4">
                  <AiOutlineCloseCircle className="   cursor-pointer text-red" />
                  <div>
                    <Image
                      src={img}
                      className="  rounded-sm"
                      height={55}
                      width={55}
                      alt="product"
                    />
                  </div>
                  <p>product tiitle</p>
                </div>

                <div className="py-4   items-start">
                  <p className=" text-white">100</p>
                </div>
                <div className="py-4">
                  <input type="number" placeholder="0" className="w-[2rem]" />
                </div>
                <div className="py-4">
                  <p className=" text-white">100</p>
                </div>
              </div>
            </div>
            <div className=" button flex justify-center items-end mt-6">
              <button className=" px-6 py-1 font-bold bg-primary uppercase text-white   rounded-sm">
                Update Cart
              </button>
            </div>
          </div>

          {/* for small device */}
          <div className="products__wrapper md:hidden   mb-4">
            <div className="  py-3">
              <AiOutlineCloseCircle className=" text-red cursor-pointer mb-2" />
              <div className="  flex flex-col space-y-[2rem] justify-around flex-wrap  ">
                <div className="  border-b mb-1 border-gray-200 flex justify-between">
                  <p className=" font-bold text-white">Product:</p>
                  <p className=" font-bold text-white">lorelksajflkj</p>
                </div>
                <div className="  border-b mb-1 border-gray-200 flex justify-between">
                  <p className=" font-bold text-white">Price:</p>
                  <p className=" font-bold text-white">100</p>
                </div>
                <div className="  border-b mb-1 border-gray-200 flex justify-between">
                  <p className=" font-bold text-white">Quantity:</p>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-[2rem] "
                  />
                </div>
                <div className="  border-b mb-1 border-gray-200 flex justify-between">
                  <p className=" font-bold text-white">SubTotal:</p>
                  <p className=" font-bold text-white">100</p>
                </div>
              </div>
            </div>
            <div className=" button flex justify-center items-center">
              <button className=" px-6 py-1 font-bold bg-primary uppercase text-white   rounded-sm">
                Update Cart
              </button>
            </div>
          </div>

          <div className=" calculation mt-4">
            <h1 className=" text-primary  capitalize mb-4 font-bold">
              {" "}
              Cart Totals
            </h1>

            <div>
              <div className=" flex  justify-between text-white items-center mb-3 border-b border-gray-200 ">
                <p>Subtotal</p>
                <p>90.00$</p>
              </div>
              <div className=" flex  justify-between text-white items-center mb-3 border-b border-gray-200 mt-5">
                <p>Shipping</p>
                <p className=" capitalize">Urgent Delevary in dubai : 45.00$</p>
              </div>
              <div className=" flex  justify-between text-white items-center mb-3 ">
                <p className=" text-primary">Total</p>
                <p>90.00$</p>
              </div>
            </div>

            <div className=" button flex justify-center items-center">
              <button className=" px-6 py-1 font-bold bg-primary uppercase text-white   rounded-sm">
                Procced to Checkout
              </button>
            </div>
          </div>
        </div>
      </ShopLayout>
    </div>
  );
}

export default cart;
