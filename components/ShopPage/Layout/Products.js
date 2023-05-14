import Image from "next/image";
import Link from "next/link";
import { Chip } from "@material-tailwind/react";
import { ProductsContext } from "@/context/productsContext";
import { useState, useContext, useEffect } from "react";

// imports components
import DisposableVape from "../DisposableVape";
import NewCollections from "../NewCollections";
import VapeMod from "../VapeMod";
function Products() {
  const { productsQuery } = useContext(ProductsContext);
  const { data, isLoading, isError } = productsQuery;

  const [dealOfTheDay, setDealOfTheDay] = useState([]);

  useEffect(() => {
    if (data) {
      const filteredProducts = data.filter(
        (product) => product.category.slug === "deal-of-the-day"
      );
      setDealOfTheDay(filteredProducts);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <section className="bg-[#292929] rounded-sm">
      <h1 className="uppercase bg-second text-center p-3 font-bun text-[1.5rem]">
        Deal Of the day
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center px-2 py-6 xl:grid-cols-4 gap-6 mx-auto">
        {/* Render the deal of the day products */}
        {dealOfTheDay?.map((product) => (
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

      {/* Inner Components */}
      <NewCollections />
      <DisposableVape />
      <VapeMod />
    </section>
  );
}

export default Products;
