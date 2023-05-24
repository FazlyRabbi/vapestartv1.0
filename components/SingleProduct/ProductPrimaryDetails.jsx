import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import Magnifier from "react-magnifier";
import Link from "next/link";
import useSweetAlert from "@/components/lib/sweetalert2";
import { useSession } from "next-auth/react";
import { CartContext } from "@/context/cartContext";

const init = {
  user: "",
  product: null,
  quantity: 1,
  flavour: "",
};

const { showAlert } = useSweetAlert();

export default function ProductPrimaryDetails({ data }) {
  const { refetch } = useContext(CartContext);

  // showing alert
  const [cart, setCart] = useState(init);

  const { user, product, quantity, flavour } = cart;

  const [isFatching, setIsFatching] = useState(false);

  if (!data) return;

  // handle add to cart
  useEffect(() => {
    if (data) {
      setCart({ ...cart, product: data._id, user: "64620016c9e619ab7aa4f4a8" });
    }
  }, [data]);

  const handleAddToCart = async () => {
    if (cart.flavour === "") {
      showAlert({
        icon: "warning",
        title: "select a flavour!",
        showConfirmButton: true,
        // timer: 1000,
      });

      return;
    }

    setIsFatching(true);

    const response = await fetch(`http://localhost:3000/api/cart`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(cart),
    });

    const data = await response.json();

    if (response.ok) {
      setIsFatching(false);
      refetch();
      showAlert({
        icon: "success",
        title: "cart added successfully!",
        showConfirmButton: true,
        // timer: 1000,
      });
    } else {
      showAlert({
        icon: "fail",
        title: "cart added fail!",
        showConfirmButton: true,
        // timer: 1000,
      });
      setIsFatching(false);
    }
  };

  return (
    <div className=" py-10">
      <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 justify-items-start  items-start">
        <div className="text-center    flex flex-col ">
          {/* left sede main image for magnify  */}
          <div className="border-2 shadow-md border-black    rounded-sm">
            <Magnifier
              src={data?.imgUrl}
              imgAlt="product image"
              zoomFactor={2}
              glassDimension={150}
              glassBorderColor=""
              glassBorderWidth={2}
              className="object-cover"
            />
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
            <div
              dangerouslySetInnerHTML={{
                __html: data?.description.slice(0, 800),
              }}
            />
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
                onChange={(e) =>
                  setCart({
                    ...cart,
                    flavour: e,
                  })
                }
              >
                {data?.Flavour?.length !== 0
                  ? data?.Flavour?.map((data) => (
                      <Option value={data}>{data}</Option>
                    ))
                  : ""}
              </Select>
            </div>
          </div>

          {/* quantity input  */}
          <div className="flex items-center gap-3 my-10">
            <div className=" flex justify-center items-center space-x-2">
              <p className="font-bold">QTY :</p>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setCart({ ...cart, quantity: e.target.value })}
                className="bg-[#393939] rounded-sm text-white px-4 w-20 font-bold py-2 text-[20px]"
                placeholder={quantity}
              />
            </div>

            <Link href={`#`}>
              <button
                disabled={isFatching}
                onClick={() => handleAddToCart()}
                className="text-[20px]  bg-primary rounded-sm py-2 px-4 font-eco font-bold  text-white"
              >
                {isFatching ? (
                  <span className="  animate-pulse">loading...</span>
                ) : (
                  <span> Add To Cart</span>
                )}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
