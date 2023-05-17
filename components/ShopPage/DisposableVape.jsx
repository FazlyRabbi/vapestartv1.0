import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Chip } from "@material-tailwind/react";
import { Instagram } from "react-content-loader";

import { ProductsContext } from "@/context/productsContext";
import { useState, useContext, useEffect } from "react";

function DisposableVape() {
  const { productsQuery } = useContext(ProductsContext);
  const { data, isLoading, isError } = productsQuery;

  const [disposableVape, setDisposableVape] = useState([]);

  useEffect(() => {
    if (data) {
      const filteredProducts = data.filter(
        (product) => product.category.slug === "disposable-vape"
      );
      setDisposableVape(filteredProducts);
    }
  }, [data]);


  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <section>
      <div className="my-5 px-4">
        <div className="text-white flex justify-between">
          <div
            className="  
           
          border-t-4  border-white 
           w-[42%]"
          ></div>

          <p className=" uppercase font-bold text-[.8rem] font-eco md:text-[1rem]  -mt-2 md:w-[22%] w-[90%]  text-center">
            disposable Vape
          </p>

          <div className=" border-t-4  border-white w-[42%]"></div>
        </div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 justify-items-center px-2 py-6 xl:grid-cols-4 gap-6 mx-auto">
        {/* Render the deal of the day products */}
        {isLoading ? (
          <Instagram width={230} height={230}/>
        ) : (
          disposableVape?.map((product) => (
            <Link href={`/products/${product?.slug}`} key={product.id}>
              <div className="max-h-[19rem] max-w-[14rem] hover:scale-105 shadow-lg relative rounded-sm transition-all duration-200 overflow-hidden">
                {/* Image and other details */}
                <Image
                  height={300}
                  width={300}
                  className={`max-h-[13rem]`}
                  alt="product__imgae"
                  src={product?.imgUrl}
                />
                <div className="z-10 font-eco py-4 hover:text-primary bg-[#111111] text-white">
                  <p className="text-center font-bold">{product.name}</p>
                  <div className="flex items-center text-sm py-2 justify-center space-x-3">
                    <p className="text-softGray line-through font-bold">
                      $<span className="text-[1.3rem]">{product.price}</span>
                    </p>
                    <p className="text-yeollow font-bold">
                      $<span className="text-[1.3rem]">{product.price}</span>
                    </p>
                  </div>
                </div>
                {/* Sale badge */}
                <Chip
                  className="absolute px-[4px] rounded-sm hover:shadow-2xl transition-all duration-200 top-1 left-1 bg-yeollow py-[2px] font-eco text-black capitalize"
                  value="sale!"
                />
              </div>
            </Link>
          ))
        )}
      </div>
      <div className=" mb-10 h-[5rem]">
        <Link
          href={`#`}
          className="  hover:text-white focus:text-white  flex justify-center items-center rounded-md w-[98%]  bg-[#2a2a2a] mx-auto   capitalize
       shadow-lg  
       shadow-[#0e0e0e]
       active:shadow-md
          text-white py-3 font-bold  font-eco "
        >
          Show More DisposableVape
        </Link>
      </div>
    </section>
  );
}

export default DisposableVape;
