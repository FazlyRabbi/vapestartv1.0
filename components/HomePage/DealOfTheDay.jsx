import ProductSlider from "@/components/ProductSlider";

function DealOfTheDay() {
  return (
    <div className="container mx-auto my-10 p-2">
      <p
        className="
      
       text-[1.5rem]
      font-eco text-center md:text-left"
      >
        Meet our Feature Products
      </p>
      <div className="relative">
        <div
          className="
         rounded-sm
        absolute top-1/2 
         left-[50%]
          -translate-x-[50%]
   w-full
    md:translate-x-0
    text-center
        md:text-left
        md:left-0
        mx-0  bg-second"
        >
          <p
            className="font-bun 
            
            
            
            cursor-pointer uppercase 
          

          text-[2rem]
          md:text-[3rem]
          -mt-3.5"
          >
            Deal Of the day
          </p>
        </div>
      </div>
      <div className="mt-[4rem] pt-5 md:pt-10">
        <ProductSlider />
      </div>
    </div>
  );
}

export default DealOfTheDay;

