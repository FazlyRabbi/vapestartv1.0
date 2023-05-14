import { FaStar } from "react-icons/fa";
import product1 from "/img/prod01-1-min-copyright-500x598.jpg";
import Image from "next/image";

export default function RelatedProducts() {
  return (
    <section className="container mx-auto my-24 md:my-12">
      <h1 className="lg:text-[30px] md:text-[20px] text-[15px] font-bun text-[#292929] lg:mb-4 md:mb-0 lg:w-full w-[80%] md:w-[80%] mx-auto ">RELATED PRODUCTS</h1>
      <div className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mx-auto md:p-6 lg:p-0 p-0">

        <div className="text-left w-[75%] md:w-[75%] lg:w-full mx-auto">
          <div className="border-4 border-[#EEEEEE] hover:border-[#393939] ">
            <Image
              height={300}
              className={`max-h-[28rem] scale-90 hover:scale-100 overflow-hidden transition ease-in duration-300 p-1 w-full`}
              alt="product__imgae"
              src={product1}
            />
          </div>
          <div className="my-4">
            <p>DINNER LADY BLACKBERRY</p>
            <div className="flex items-center">
              <p className="text-pink-600">
                $<span className="text-[25px]">09.90</span>
              </p>
              <div className="text-center gap-1 flex justify-center text-yellow-300 ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>
        <div className="text-left w-[75%] md:w-[75%] lg:w-full mx-auto">
          <div className="border-4 border-[#EEEEEE] hover:border-[#393939] ">
            <Image
              height={300}
              className={`max-h-[28rem] scale-90 hover:scale-100 overflow-hidden transition ease-in duration-300 p-1 w-full`}
              alt="product__imgae"
              src={product1}
            />
          </div>
          <div className="my-4">
            <p>DINNER LADY BLACKBERRY</p>
            <div className="flex items-center">
              <p className="text-pink-600">
                $<span className="text-[25px]">09.90</span>
              </p>
              <div className="text-center gap-1 flex justify-center text-yellow-300 ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>
        <div className="text-left w-[75%] md:w-[75%] lg:w-full mx-auto">
          <div className="border-4 border-[#EEEEEE] hover:border-[#393939] ">
            <Image
              height={300}
              className={`max-h-[28rem] scale-90 hover:scale-100 overflow-hidden transition ease-in duration-300 p-1 w-full`}
              alt="product__imgae"
              src={product1}
            />
          </div>
          <div className="my-4">
            <p>DINNER LADY BLACKBERRY</p>
            <div className="flex items-center">
              <p className="text-pink-600">
                $<span className="text-[25px]">09.90</span>
              </p>
              <div className="text-center gap-1 flex justify-center text-yellow-300 ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>
        <div className="text-left w-[75%] md:w-[75%] lg:w-full mx-auto">
          <div className="border-4 border-[#EEEEEE] hover:border-[#393939] ">
            <Image
              height={300}
              className={`max-h-[28rem] scale-90 hover:scale-100 overflow-hidden transition ease-in duration-300 p-1 w-full`}
              alt="product__imgae"
              src={product1}
            />
          </div>
          <div className="my-4">
            <p>DINNER LADY BLACKBERRY</p>
            <div className="flex items-center">
              <p className="text-pink-600">
                $<span className="text-[25px]">09.90</span>
              </p>
              <div className="text-center gap-1 flex justify-center text-yellow-300 ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>
        <div className="text-left w-[75%] md:w-[75%] lg:w-full mx-auto">
          <div className="border-4 border-[#EEEEEE] hover:border-[#393939] ">
            <Image
              height={300}
              className={`max-h-[28rem] scale-90 hover:scale-100 overflow-hidden transition ease-in duration-300 p-1 w-full`}
              alt="product__imgae"
              src={product1}
            />
          </div>
          <div className="my-4">
            <p>DINNER LADY BLACKBERRY</p>
            <div className="flex items-center">
              <p className="text-pink-600">
                $<span className="text-[25px]">09.90</span>
              </p>
              <div className="text-center gap-1 flex justify-center text-yellow-300 ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>
        
        
         
      </div>
    </section>
  );
}
