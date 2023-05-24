import React, { useEffect, useState, useContext } from "react";
import ShopLayout from "@/components/ShopPage/Layout/Layout";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Header from "@/components/HomePage/Header";
import Image from "next/image";
import { CartContext } from "@/context/cartContext";
import http from "utils/api";

function cart() {
  const [updateCart, setUpdateCart] = useState([]);

  const { user, product, quantity, flavour } = useState(updateCart);

  const [isDataFetched, setIsDataFetched] = useState(false); // Track initial data fetch

  const { data } = useContext(CartContext);

  let SubTotal = 0;
  let Shipping = 45;
  let Total = SubTotal + Shipping;

  // load init items
  useEffect(() => {
    if (data && !isDataFetched) {
      setUpdateCart(data?.data?.items);
      setIsDataFetched(true); // Update the state to indicate data fetch
    }
  }, [data, isDataFetched]);

  const handleUpdateQuantity = (e, id) => {
    const updatedProducts = updateCart.filter((product) =>
      product._id == id ? (product.quantity = e.target.value) : product
    );

    setUpdateCart(updatedProducts);
  };

  const handleUpdateCart = async () => {
    const transformedData = updateCart.map((item) => ({
      product: item.product._id,
      quantity: item.quantity,
      flavour: item.flavour,
    }));

    const res = await http.httpPut(`/cart/646d91c0eb1f686a68b693d8`, {
      data: transformedData,
    });

    if (res.ok) {
      alert("product update successfully!");
    } else {
      alert("product update fail!");
    }
  };

  const handleDeleteCart = (data) => {
    console.log(updateCart);
  };

  return (
    <div>
      <Header />
      <ShopLayout title={"cart"}>
        <div className=" bg-[#292929]  py-6 px-12">
          {/* for big device  */}
          <div className=" hidden md:block">
            <div className="  flex  justify-between flex-wrap  ">
              <p className=" font-bold text-white   min-w-[10rem]">Product</p>
              <p className=" font-bold text-white">Price</p>
              <p className=" font-bold text-white">Quantity</p>
              <p className=" font-bold text-white">Subtotal</p>
            </div>

            <div className="t-body">
              {updateCart &&
                updateCart?.map((item) => (
                  <div className=" flex border-b border-gray-100 justify-between items-center">
                    <div className=" flex  min-w-[8rem]  space-x-2    text-center items-center text-white  py-4">
                      <AiOutlineCloseCircle
                        onClick={() => handleDeleteCart(item)}
                        className="   cursor-pointer text-red"
                      />
                      <div>
                        {
                          <span className=" hidden">
                            {(SubTotal += item?.product.price * item?.quantity)}
                          </span>
                        }
                        <Image
                          src={item?.product.imgUrl}
                          className="  rounded-sm"
                          height={50}
                          width={50}
                          alt="product"
                        />
                      </div>
                      <p>{item?.product.name}</p>
                    </div>

                    <div className="py-4   items-start">
                      <p className=" text-white">
                        {item?.product.price * item?.quantity}$
                      </p>
                    </div>
                    <div className="py-4">
                      <input
                        value={item?.quantity}
                        type="number"
                        placeholder={item?.quantity}
                        className="w-[2rem]"
                        onChange={(e) => {
                          handleUpdateQuantity(e, item?._id);
                        }}
                      />
                    </div>
                    <div className="py-4">
                      <p className=" text-white">
                        {item?.product.price * item?.quantity}$
                      </p>
                    </div>
                  </div>
                ))}
            </div>
            <div className=" button flex justify-center items-end mt-6">
              <button
                onClick={() => handleUpdateCart()}
                className=" px-6 py-1 font-bold bg-primary uppercase text-white   rounded-sm"
              >
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
                  <input type="number" placeholder="0" className="w-[2rem] " />
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
                <p>{SubTotal}$</p>
              </div>
              <div className=" flex  justify-between text-white items-center mb-3 border-b border-gray-200 mt-5">
                <p>Shipping</p>
                <p className=" capitalize">Urgent Delevary in dubai : 45.00$</p>
              </div>
              <div className=" flex  justify-between text-white items-center mb-3 ">
                <p className=" text-primary">Total</p>
                <p>{Total}</p>
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

async function fetchData() {
  const response = await fetch(
    "http://localhost:3000/api/cart/64620016c9e619ab7aa4f4a8"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}
