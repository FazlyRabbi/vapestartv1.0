import { useContext } from "react";
import { CartContext } from "@/context/cartContext";

function leftCart() {
  const { cartQuery } = useContext(CartContext);

  return (
    <div className="cart mt-5 bg-matBlack text-white p-4 rounded-sm">
      <div className="cart__container">
        <h1 className="cart__heading text-[1.5rem]">Cart</h1>

        <div className="cart__products">
          {/* proudcts */}
          <div className=" cartProduct__wrapper p-4 flex justify-between ">
            <div className="flex space-x-5">
              <div>
                <Image
                  className=" rounded-sm"
                  src={p1}
                  width={50}
                  height={50}
                  alt="product image"
                />
              </div>

              <div>
                <p>Product Title Is Here</p>

                <div className="flex ext-sm   space-x-3">
                  <p className="  text-softGray  font-bold">
                    <span className="text-[1rem]">1*</span>
                  </p>
                  <p className="text-yeollow  font-bold">
                    $<span className="text-[1rem]">26.99</span>
                  </p>
                </div>
              </div>
            </div>
            <AiOutlineCloseCircle className=" cursor-pointer  " />
          </div>
          <div className=" cartProduct__wrapper p-4 flex justify-between ">
            <div className="flex space-x-5">
              <div>
                <Image
                  className=" rounded-sm"
                  src={p1}
                  width={50}
                  height={50}
                  alt="product image"
                />
              </div>

              <div>
                <p>Product Title Is Here</p>

                <div className="flex ext-sm   space-x-3">
                  <p className="  text-softGray  font-bold">
                    <span className="text-[1rem]">1*</span>
                  </p>
                  <p className="text-yeollow  font-bold">
                    $<span className="text-[1rem]">26.99</span>
                  </p>
                </div>
              </div>
            </div>
            <AiOutlineCloseCircle className=" cursor-pointer  " />
          </div>
          <div className=" cartProduct__wrapper p-4 flex justify-between ">
            <div className="flex space-x-5">
              <div>
                <Image
                  className=" rounded-sm"
                  src={p1}
                  width={50}
                  height={50}
                  alt="product image"
                />
              </div>

              <div>
                <p>Product Title Is Here</p>

                <div className="flex ext-sm   space-x-3">
                  <p className="  text-softGray  font-bold">
                    <span className="text-[1rem]">1*</span>
                  </p>
                  <p className="text-yeollow  font-bold">
                    $<span className="text-[1rem]">26.99</span>
                  </p>
                </div>
              </div>
            </div>
            <AiOutlineCloseCircle className=" cursor-pointer  " />
          </div>
        </div>

        <hr className=" w-full h-1 mx-auto  bg-blue-gray-200 border-0 rounded my-2 "></hr>

        <div className="calculations  ">
          <p className="mb-1">
            <span>
              Subtotal: <span className="font-bold">$26.99</span>
            </span>
          </p>
          <div className="buttons flex  space-x-5">
            <Link
              href={`/cart`}
              className="text-white font-bold py-1 px-4  rounded-md   bg-primary  block"
            >
              View Cart
            </Link>
            <Link
              href={`#`}
              className=" p-1  px-4 rounded-md   bg-primary text-white font-bold   block"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default leftCart;
