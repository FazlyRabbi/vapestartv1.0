import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import { AgeGateContext } from "@/context/ageGateContext";
import AgeGateModal from "@/components/AgeGateModal";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import product5 from "../img/prod05-1-min-copyright-500x598.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Chip } from "@material-tailwind/react";
// imports products image
import p1 from "../img/products/p1.jpg";
import p2 from "../img/products/p2.jpg";
import p3 from "../img/products/p3.jpg";
import p4 from "../img/products/p4.jpg";
import p5 from "../img/products/p5.jpg";
import p6 from "../img/products/p6.jpg";
import p7 from "../img/products/p7.jpg";
import p8 from "../img/products/p8.jpg";
import p9 from "../img/products/p9.jpg";
// import components
import DealOfTheDay from "@/components/HomePage/DealOfTheDay";
import BannerSlider from "@/components/BannerSlider";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
// imports compoents
import Header from "@/components/HomePage/Header";
const styleToggleButton = {
  fontSize: "3rem",
  color: "rgb(36,36,36)",
  padding: 0,
  border: "none",
  background: "none",
};

export default function Home() {
  const { isOver18 } = useContext(AgeGateContext);

  if (!isOver18) {
    return <AgeGateModal />;
  }

  // const { data: session } = useSession()

  // if (!session) {
  //   return (
  //     <>
  //       Signed in as session.user.email <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   )
  // }

  return (
    <section>
      <Head>
        <title>Vapester</title>
      </Head>
      {/* // header */}
      <Header />
      {/* // end */}
      <div>
        <BannerSlider />
      </div>

      {/* categories */}
      <div className=" container mx-auto  mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          className={`${styles.bgImage1} rounded-sm  col-span-1 md:col-span-2 bg-center bg-no-repeat bg-cover relative min-w-[10rem] min-h-[10rem]`}
        >
          <div className="text-center absolute top-1/2 left-0 -translate-y-1/2 text-white mx-0 bg-black">
            <p className=" font-bun cursor-pointer  tracking-widest uppercase text-[25px] -mt-1.5">
              Deal Of The Day
            </p>
          </div>
        </div>
        <div
          className={` bg-center bg-no-repeat bg-cover rounded-sm  relative min-w-[7rem] min-h-[10rem] ${styles.bgImage2}`}
        >
          <div className="text-center absolute top-1/2 left-0 -translate-y-1/2 text-white mx-0 bg-black">
            <p className="font-bun cursor-pointer  tracking-widest uppercase text-[25px] -mt-1.5">
              New Collection
            </p>
          </div>
        </div>
        <div
          className={` bg-center bg-no-repeat bg-cover rounded-sm  relative min-w-[7rem] min-h-[10rem] ${styles.bgImage3}`}
        >
          <div className="text-center absolute top-1/2 left-0 -translate-y-1/2 text-white mx-0 bg-black">
            <p className="font-bun cursor-pointer  tracking-widest uppercase text-[25px] -mt-1.5">
              Disposable vape
            </p>
          </div>
        </div>
        <div
          className={` bg-center bg-no-repeat bg-cover rounded-sm  relative min-w-[7rem] min-h-[10rem] ${styles.bgImage4}`}
        >
          <div className="text-center absolute top-1/2 left-0 -translate-y-1/2 text-white mx-0 bg-black">
            <p className="font-bun cursor-pointer  tracking-widest uppercase text-[25px] -mt-1.5">
              pod system
            </p>
          </div>
        </div>
        <div
          className={` bg-center bg-no-repeat bg-cover rounded-sm  relative min-w-[7rem] min-h-[10rem] ${styles.bgImage5}`}
        >
          <div className="text-center absolute top-1/2 left-0 -translate-y-1/2 text-white mx-0 bg-black">
            <p className="font-bun cursor-pointer  tracking-widest uppercase text-[25px] -mt-1.5">
              accessories
            </p>
          </div>
        </div>
      </div>

      <DealOfTheDay />

      {/* discounts */}
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
        <div
          className={`${styles.discount1} col-span-1 lg:col-span-2 bg-center bg-no-repeat bg-cover relative min-w-[10rem] min-h-[20rem]`}
        >
          <div className="text-start absolute top-1/3 left-0 -translate-y-1/2 text-white mx-0 bg-[#af7ffc] h-14">
            <p className="font-black font-bun cursor-pointer uppercase text-[30px] -mt-3">
              SAVE 30% ON
              <br /> POPULAR E-LIQUIDS
            </p>
          </div>
          <div className="absolute top-2/4">
            <div className="p-10">
              <button className="bg-[#292929] font-bold  font-eco text-white px-5 py-2.5 uppercase">
                Save on e-liquids
              </button>
            </div>
          </div>
        </div>
        <div
          className={` bg-center bg-no-repeat bg-cover relative ${styles.discount2} min-w-[10rem] min-h-[20rem]`}
        >
          <div className="text-start absolute top-1/3 left-0 -translate-y-1/2 text-white mx-0 bg-[#c1c800] h-14">
            <p className=" font-bun cursor-pointer tracking-wide uppercase text-[30px] -mt-3">
              vaporesso <br /> vaco one kids
            </p>
          </div>
          <div className="absolute top-1/2 mx-auto">
            <div className="p-10">
              <button className="bg-[#292929] font-eco font-bold text-white px-5 py-2.5 uppercase">
                Shop now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* last update */}
      <div className="container mx-auto my-10">
        <p
          className="
      
       text-[1.5rem]
      font-eco text-center md:text-left"
        >
          Don't miss our new update
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
              Latest update
            </p>
          </div>
        </div>

        <div
          className="my-20 pt-8 grid grid-cols-1 
        
      
        md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 mx-auto  justify-items-center  "
        >
          <Link href={`/products/jlksadjf`}>
            <div
              className={`relative 
              
        
              max-h-[20rem] border  rounded-sm border-black 
          overflow-hidden  hover:shadow-2xl  hover:scale-105  transition-all duration-200`}
            >
              <div>
                <Image
                  height={450}
                  width={450}
                  className={`max-h-[15rem] max-w-[15rem] `}
                  alt="product__imgae"
                  src={p1}
                />
              </div>

              <div className=" z-10  font-eco py-4 bg-[#111111] text-white">
                <p className=" font-bold text-center">
                  VAPORESSO NEBULA VAPE KIT
                </p>

                <div className="flex items-center  justify-center ">
                  <p className="text-yeollow  font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                </div>
              </div>

              {/* sale bage */}
              <Chip
                className=" absolute  px-[4px] rounded-sm top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
                value="sale!"
              />
            </div>
          </Link>
          <Link href={`/products/jlksadjf`}>
            <div
              className={`relative 
              
        
              max-h-[20rem] border  rounded-sm border-black 
          overflow-hidden  hover:shadow-2xl  hover:scale-105  transition-all duration-200`}
            >
              <div>
                <Image
                  height={450}
                  width={450}
                  className={`max-h-[15rem] max-w-[15rem] `}
                  alt="product__imgae"
                  src={p2}
                />
              </div>

              <div className=" z-10  font-eco py-4 bg-[#111111] text-white">
                <p className=" font-bold text-center">
                  VAPORESSO NEBULA VAPE KIT
                </p>

                <div className="flex items-center  justify-center ">
                  <p className="text-yeollow  font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                </div>
              </div>

              {/* sale bage */}
              <Chip
                className=" absolute  px-[4px] rounded-sm top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
                value="sale!"
              />
            </div>
          </Link>

          <Link href={`/products/jlksadjf`}>
            <div
              className={`relative 
              
        
              max-h-[20rem] border  rounded-sm border-black 
          overflow-hidden  hover:shadow-2xl  hover:scale-105  transition-all duration-200`}
            >
              <div>
                <Image
                  height={450}
                  width={450}
                  className={`max-h-[15rem] max-w-[15rem] `}
                  alt="product__imgae"
                  src={p3}
                />
              </div>

              <div className=" z-10  font-eco py-4 bg-[#111111] text-white">
                <p className=" font-bold text-center">
                  VAPORESSO NEBULA VAPE KIT
                </p>

                <div className="flex items-center  justify-center ">
                  <p className="text-yeollow  font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                </div>
              </div>

              {/* sale bage */}
              <Chip
                className=" absolute  px-[4px] rounded-sm top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
                value="sale!"
              />
            </div>
          </Link>
          <Link href={`/products/jlksadjf`}>
            <div
              className={`relative 
              
        
              max-h-[20rem] border  rounded-sm border-black 
          overflow-hidden  hover:shadow-2xl  hover:scale-105  transition-all duration-200`}
            >
              <div>
                <Image
                  height={450}
                  width={450}
                  className={`max-h-[15rem] max-w-[15rem] `}
                  alt="product__imgae"
                  src={p4}
                />
              </div>

              <div className=" z-10  font-eco py-4 bg-[#111111] text-white">
                <p className=" font-bold text-center">
                  VAPORESSO NEBULA VAPE KIT
                </p>

                <div className="flex items-center  justify-center ">
                  <p className="text-yeollow  font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                </div>
              </div>

              {/* sale bage */}
              <Chip
                className=" absolute  px-[4px] rounded-sm top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
                value="sale!"
              />
            </div>
          </Link>

          <Link href={`/products/jlksadjf`}>
            <div
              className={`relative 
              
        
              max-h-[20rem] border  rounded-sm border-black 
          overflow-hidden  hover:shadow-2xl  hover:scale-105  transition-all duration-200`}
            >
              <div>
                <Image
                  height={450}
                  width={450}
                  className={`max-h-[15rem] max-w-[15rem] `}
                  alt="product__imgae"
                  src={p5}
                />
              </div>

              <div className=" z-10  font-eco py-4 bg-[#111111] text-white">
                <p className=" font-bold text-center">
                  VAPORESSO NEBULA VAPE KIT
                </p>

                <div className="flex items-center  justify-center ">
                  <p className="text-yeollow  font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                </div>
              </div>

              {/* sale bage */}
              <Chip
                className=" absolute  px-[4px] rounded-sm top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
                value="sale!"
              />
            </div>
          </Link>
          <Link href={`/products/jlksadjf`}>
            <div
              className={`relative 
              
        
              max-h-[20rem] border  rounded-sm border-black 
          overflow-hidden  hover:shadow-2xl  hover:scale-105  transition-all duration-200`}
            >
              <div>
                <Image
                  height={450}
                  width={450}
                  className={`max-h-[15rem] max-w-[15rem] `}
                  alt="product__imgae"
                  src={p6}
                />
              </div>

              <div className=" z-10  font-eco py-4 bg-[#111111] text-white">
                <p className=" font-bold text-center">
                  VAPORESSO NEBULA VAPE KIT
                </p>

                <div className="flex items-center  justify-center ">
                  <p className="text-yeollow  font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                </div>
              </div>

              {/* sale bage */}
              <Chip
                className=" absolute  px-[4px] rounded-sm top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
                value="sale!"
              />
            </div>
          </Link>
          <Link href={`/products/jlksadjf`}>
            <div
              className={`relative 
              
        
              max-h-[20rem] border  rounded-sm border-black 
          overflow-hidden  hover:shadow-2xl  hover:scale-105  transition-all duration-200`}
            >
              <div>
                <Image
                  height={450}
                  width={450}
                  className={`max-h-[15rem] max-w-[15rem] `}
                  alt="product__imgae"
                  src={p7}
                />
              </div>

              <div className=" z-10  font-eco py-4 bg-[#111111] text-white">
                <p className=" font-bold text-center">
                  VAPORESSO NEBULA VAPE KIT
                </p>

                <div className="flex items-center  justify-center ">
                  <p className="text-yeollow  font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                </div>
              </div>

              {/* sale bage */}
              <Chip
                className=" absolute  px-[4px] rounded-sm top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
                value="sale!"
              />
            </div>
          </Link>
          <Link href={`/products/jlksadjf`}>
            <div
              className={`relative 
              
        
              max-h-[20rem] border  rounded-sm border-black 
          overflow-hidden  hover:shadow-2xl  hover:scale-105  transition-all duration-200`}
            >
              <div>
                <Image
                  height={450}
                  width={450}
                  className={`max-h-[15rem] max-w-[15rem] `}
                  alt="product__imgae"
                  src={p8}
                />
              </div>

              <div className=" z-10  font-eco py-4 bg-[#111111] text-white">
                <p className=" font-bold text-center">
                  VAPORESSO NEBULA VAPE KIT
                </p>

                <div className="flex items-center  justify-center ">
                  <p className="text-yeollow  font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                </div>
              </div>

              {/* sale bage */}
              <Chip
                className=" absolute  px-[4px] rounded-sm top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
                value="sale!"
              />
            </div>
          </Link>
          <Link href={`/products/jlksadjf`}>
            <div
              className={`relative 
              
        
              max-h-[20rem] border  rounded-sm border-black 
          overflow-hidden  hover:shadow-2xl  hover:scale-105  transition-all duration-200`}
            >
              <div>
                <Image
                  height={450}
                  width={450}
                  className={`max-h-[15rem] max-w-[15rem] `}
                  alt="product__imgae"
                  src={p9}
                />
              </div>

              <div className=" z-10  font-eco py-4 bg-[#111111] text-white">
                <p className=" font-bold text-center">
                  VAPORESSO NEBULA VAPE KIT
                </p>

                <div className="flex items-center  justify-center ">
                  <p className="text-yeollow  font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                </div>
              </div>

              {/* sale bage */}
              <Chip
                className=" absolute  px-[4px] rounded-sm top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
                value="sale!"
              />
            </div>
          </Link>
          <Link href={`/products/jlksadjf`}>
            <div
              className={`relative 
              
        
              max-h-[20rem] border  rounded-sm border-black 
          overflow-hidden  hover:shadow-2xl  hover:scale-105  transition-all duration-200`}
            >
              <div>
                <Image
                  height={450}
                  width={450}
                  className={`max-h-[15rem] max-w-[15rem] `}
                  alt="product__imgae"
                  src={p4}
                />
              </div>

              <div className=" z-10  font-eco py-4 bg-[#111111] text-white">
                <p className=" font-bold text-center">
                  VAPORESSO NEBULA VAPE KIT
                </p>

                <div className="flex items-center  justify-center ">
                  <p className="text-yeollow  font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                </div>
              </div>

              {/* sale bage */}
              <Chip
                className=" absolute  px-[4px] rounded-sm top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
                value="sale!"
              />
            </div>
          </Link>
        </div>
      </div>

      {/* partners */}
      <div className="container mx-auto my-10">
        <p
          className="
      
       text-[1.5rem]
      font-eco text-center md:text-left"
        >
          The Best Name in Vape Culture
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
              our partners
            </p>
          </div>
        </div>

        <div className="mt-16">
          <Partners />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </section>
  );
}
