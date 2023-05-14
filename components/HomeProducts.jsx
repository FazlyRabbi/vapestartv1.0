import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import banner from "../img/card/banners.svg";

function HomeProducts() {
  const [products, setProducts] = useState(null);

  // useEffect(() => {
  //   const loadProducts = async () => {
  //     const res = await fetch(
  //       "https://demo-production-edcf.up.railway.app/api/home-products?populate=*"
  //     );
  //     const products = await res.json();
  //     setProducts(products);
  //   };
  //   loadProducts();
  // }, []);

  return (
    <>

      {/* {products?.data?.map((data, index) => (
        <div className="product  p-5  cursor-pointer" key={index}>
          <div className=" bg-white rounded-sm text-center min-h-[15rem] w-[15rem] p-2 ">
            {data.attributes.Image.data.map((img,index) => (
              <Image
                src={`https://demo-production-edcf.up.railway.app${img.attributes.url}`}
                height={250}
                width={250}
                alt="img"
                key={index}
              />
            ))}
          </div>
          <div className="product-des p-2 text-[#C8C3C3] shadow-xl min-h-[5rem] w-[15rem]">
            <h4 className="mb-3">{data.attributes.Title}</h4>
          </div>
        </div>
      ))} */}
    </>
  );
}

export default HomeProducts;
