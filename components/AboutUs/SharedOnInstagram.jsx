import Image from "next/image";
import product01 from "../../img/banner-2-copyright.jpg";

export default function ShareOnInstagram() {
  return (
    <section className=" lg:container md:5/6 w-3/4 mx-auto">
      <p className="font-eco lg:text-[35px] text-[30px]">Find and Share on Instagram</p>
      <div className="relative container mx-auto lg:pt-0 md:pt-8 pt-2 mb-28 mt-0">
        <div className="text-center absolute lg:top-0 lg:left-0 md:left-0 left-0 md:h-24 h-16  text-black mx-0 bg-[#F2D71F] pr-2">
          <p className="font-black uppercase lg:text-[70px] md:text-[50px] text-[30px] lg:-mt-6 md:-mt-5 -mt-3 font-bun">
            #VAPESTERSHOP
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-6 grid-cols-2 gap-4 mb-16 md:pt-8 pt-0">
        <Image src={product01}></Image>
        <Image src={product01}></Image>
        <Image src={product01}></Image>
        <Image src={product01}></Image>
        <Image src={product01}></Image>
        <Image src={product01}></Image>
      </div>
    </section>
  );
}
