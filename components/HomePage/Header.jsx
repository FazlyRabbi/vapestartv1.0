// import { Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillInstagram, AiOutlineMenu } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { BsArrowRightShort, BsTwitter } from "react-icons/bs";
import { FaShoppingBasket, FaTelegramPlane } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { TiSocialFacebookCircular } from "react-icons/ti";
import logo from "../../img/logo.png";
import Search from "../Search";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      id="head"
      className="z-10
      transition-all duration-500"
    >
      <div className="header-top bg-[#292929]   pl-5 md:pl-0">
        <div className="container mx-auto ">
          <div
            className="header-top-content flex font-eco 
       
            justify-between
            
            items-center   h-36"
          >
            <Link href={`/`}>
              <Image
                src={logo}
                alt="logo"
                height={250}
                width={250}
                className="
                object-cover
                 cursor-pointer
                  -ml-11
               
                "
              />
            </Link>

            <div
              className=" 
           
              flex
               items-center
                justify-end
            
                 space-x-4
            text-white   "
            >
              <div
                className=" cursor-pointer  px-3 
              space-x-1 hidden lg:block"
              >
                <p
                  className="

                 transition-all duration-200
                
                hover:text-[#2DBBD8]  font-bold  text-[18px]"
                >
                  Call Us: +1 800 820 20 20
                </p>
              </div>

              {/* login button  */}

              <Link href={`/my-account`}>
                <div className=" hidden xl:block">
                  <div
                    className="cursor-pointer 
                
                lg:flex 
                text-white 
                px-3 items-center space-x-2
                hover:text-[#2DBBD8]
                 text-[18px]
                 transition-all duration-200
                
                 font-bold"
                  >
                    <BiLogIn />
                    <p className=" ">Log In/Signup</p>
                  </div>
                </div>
              </Link>

              <div className="    cursor-pointer hidden lg:block px-3">
                <Search />
              </div>

              <div className=" cursor-pointer  ">
                <div
                  className="
                  
                  hover:bg-[#F2D71F]
                   transition-all duration-500
                   hover:text-[#000]
                  bg-primary p-3 md:p-5 flex
                px-5 md:px-7
                 space-x-4
                  justify-center items-center "
                >
                  <FaShoppingBasket
                    className=" 
                  
                  
                  text-[1.4rem]"
                  />
                  <span
                    className="
                  
                  xl:block 
          
                   hidden 
                  font-eco font-bold text-[18px]"
                  >
                    $0.00 / 0 items
                  </span>
                </div>
              </div>

              <div className=" cursor-pointer  px-3 flex items-center">
                <AiOutlineMenu
                  onClick={() => setOpen(true)}
                  className="
                  transition-all duration-200
                  hover:text-[#2DBBD8]
                  text-white text-[30px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* // Mobile Manu Modal */}
      <section
        className={`bg-[#1d1b23f6]
     ${
       open ? "top-0" : " -top-[1000%]"
     }  transition-all duration-200  bottom-0 h-[100%] w-[100%]  z-20   fixed`}
      >
        <div
          className="menu__container
         relative
        "
        >
          <MdClose
            className=" absolute top-5 right-5 text-white text-[2rem] cursor-pointer"
            onClick={() => setOpen(false)}
          />
          <div className=" logo__box   grid  grid-cols-1        justify-items-center">
            <Image src={logo} height={300} width={300} alt="logo" />
          </div>
          <div className="  menu flex justify-center">
            <div>
              <ul className=" font-eco space-y-1  transition-all duration-200  text-[1.5rem]  text-white">
                <Link href={`/`}>
                  {" "}
                  <li
                    onClick={() => setOpen(false)}
                    className="flex 
                
                 hover:text-[#2DBBD8]
                
                items-center 
                
                space-x-[5rem]
                
                md:space-x-[25rem]"
                  >
                    <span className="block">Home</span>

                    <BsArrowRightShort />
                  </li>
                </Link>

                <Link href={`/aboutus`}>
                  <li
                    onClick={() => setOpen(false)}
                    className="  hover:text-[#2DBBD8]"
                  >
                    About Us
                  </li>
                </Link>

                <Link href={`/testimonial`}>
                  <li
                    onClick={() => setOpen(false)}
                    className="  hover:text-[#2DBBD8]"
                  >
                    Testimonials
                  </li>
                </Link>

                <Link href={`/shop`}>
                  <li
                    onClick={() => setOpen(false)}
                    className="flex 
                
                 hover:text-[#2DBBD8]
                
                items-center 
                
                space-x-[5rem]
                
                md:space-x-[25rem]"
                  >
                    <span className="block mr-2">Shop</span>

                    <BsArrowRightShort />
                  </li>
                </Link>

                <Link href={`/login`}>
                  <li
                    onClick={() => setOpen(false)}
                    className="flex 
                
                 hover:text-[#2DBBD8]
                
                items-center 
                
                space-x-[5rem]
                
                md:space-x-[25rem]"
                  >
                    <span className="block  mr-1">Login</span>

                    <BsArrowRightShort />
                  </li>
                </Link>
              </ul>
            </div>
          </div>

          <div
            className="
          
            mt-[10rem]
          
          social__media flex space-x-3 justify-center  text-white"
          >
            <TiSocialFacebookCircular
              className="
              
               hover:bg-[#3E3D41]

                cursor-pointer
              
              bg-[#415EAA] 
              p-3 rounded-sm
              text-[3rem]"
            />

            <BsTwitter
              className="
              
               hover:bg-[#3E3D41]

                cursor-pointer
              
              bg-[#16ABBD] 
              p-[.8rem] rounded-sm
              text-[3rem]"
            />
            <AiFillInstagram
              className="
              
               hover:bg-[#3E3D41]

                cursor-pointer
              
              bg-[#E69731] 
              p-[.8rem] rounded-sm
              text-[3rem]"
            />
            <FaTelegramPlane
              className="
              
               hover:bg-[#3E3D41]

                cursor-pointer
              
              bg-[#4BABDD] 
              p-[.8rem] rounded-sm
              text-[3rem]"
            />
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
