import Image from "next/image";
import React from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { Chip } from "@material-tailwind/react";
import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { ProductsContext } from "@/context/productsContext";

function ProductsCetegorys({ setSlug }) {
  const { productsQuery } = useContext(ProductsContext);
  const { data, isLoading, isError } = productsQuery;

  const [productsByCategroy, setProductsByCategroy] = useState([]);

  const route = useRouter();

  useEffect(() => {
    if (data) {
      const filteredProducts = data.filter(
        (product) => product.category.slug === route.query.category
      );

      if (route.query.category) {
        console.log(route.query.category);
        setSlug(route.query.category);
        setProductsByCategroy(filteredProducts);
      }
    }
  }, [route.query.category]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <section>
      <div>
        {/* top change layout and filter section  */}
        <div className="flex flex-row-reverse md:flex-row items-start justify-between md:justify-end gap-3">
          <div className="flex items-center justify-center gap-2">
            <div className="bg-[#DD9933] text-white p-3">
              <BsGrid3X3GapFill />
            </div>
            <div className="bg-[#111111] text-white p-3">
              <GiHamburgerMenu />
            </div>
          </div>

          <select className="bg-[#111111] text-white px-10 py-2">
            <option value="">sort by latest</option>
            <option value="">sort by latest</option>
            <option value="">sort by latest</option>
            <option value="">sort by latest</option>
          </select>
        </div>

        {/* grid  */}

        <div className=" grid grid-cols-1 mt-5 md:grid-cols-2 justify-items-center px-2 py-6 xl:grid-cols-4 gap-6 mx-auto">
          {productsByCategroy?.map((product) => (
            <Link href={`/singleproduct`} key={product.id}>
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsCetegorys;
