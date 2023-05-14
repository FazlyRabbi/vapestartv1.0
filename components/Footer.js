import Image from "next/image";
import Link from "next/link";
import payment1 from '../img/american-express-copyright.jpg';
import payment2 from '../img/Bitcoin-copyright.jpg';
import payment3 from '../img/dhl-copyright.jpg';
import payment4 from '../img/Diners-Club-copyright.jpg';
import payment5 from '../img/discover-copyright.jpg';
import payment6 from '../img/red-copyright.jpg';
import payment7 from '../img/fedex-copyright.jpg';
import payment8 from '../img/Pal-copyright.jpg';
import payment9 from '../img/ups-copyright.jpg';
import payment10 from '../img/visa-copyright.jpg';

import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin, FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="  shadow-md   py-[2.5rem] text-white bg-[#1E1E1E]">
      <div className="container mx-auto   ">
        <div className="grid  justify-items-center md:justify-items-start text-center md:text-left  gap-y-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-5">
          <div className="info">
            <h3 className="info-title font-eco text-[25px] font-bold capitalize">
              information & Services
            </h3>
            <ul className=" capitalize mt-5 list-disc font-eco">
              <li className="mb-1">Shipping & Returns</li>
              <li className="mb-1">Privacy Policy</li>
              <li className="mb-1">Nicotine Disclaimer</li>
              <li className="mb-1">Contact Us</li>
              <li className="mb-1">New York Vapor Tax</li>
            </ul>
          </div>
          <div className="info">
            <h3 className="info-title text-[25px] font-bold capitalize invisible">
              jijii
            </h3>
            <ul className=" capitalize mt-5 list-disc font-eco">
              <li className="mb-1">Privacy Notice</li>
              <li className="mb-1">Terms & Conditions</li>
              <li className="mb-1">Shortcodes</li>
              <li className="mb-1">Warranty & Refund</li>
              <li className="mb-1">Gift Card Terms</li>
            </ul>
          </div>
          <div className="info">
            <h3 className="info-title text-[25px] font-eco font-bold  capitalize">
              Connect With Us
            </h3>
            <div className="mt-4">
              <ul className=" text-capilalize flex space-x-4">
                <li className="p-3  border cursor-pointer">
                  <AiOutlineTwitter className="text-[1.2rem] cursor-pointer" />
                </li>
                <li className="p-3 border cursor-pointer">
                  <BsFacebook className="text-[1.2rem]" />
                </li>
                <li className="p-3  border">
                  <AiFillInstagram className="text-[1.2rem] cursor-pointer" />
                </li>
                <li className="p-3  border cursor-pointer">
                  <FaLinkedin className="text-[1.2rem]" />
                </li>
                <li className="p-3  border cursor-pointer">
                  <FaPinterestP className="text-[1.2rem]" />
                </li>
              </ul>
            </div>
            <ul className=" capitalize mt-5">
              <li className="mb-1">
                <input
                  type="search"
                  className=" font-eco p-3 w-72"
                  placeholder="Your email address"
                />
              </li>
              <li className=" mt-3">
                <button className="bg-[#F2D71F] text-black px-5 py-3 font-eco">Subscribe</button>
              </li>
            </ul>
          </div>
          <div className="info">
            <h3 className="info-title text-[25px]  font-eco font-bold capitalize">
            Payments & Delivery
            </h3>
            <div className="grid grid-cols-5 gap-2 mt-5">
              <Image src={payment1} height={40}/>
              <Image src={payment2} height={40}/>
              <Image src={payment3} height={40}/>
              <Image src={payment4} height={40}/>
              <Image src={payment5} height={40}/>
              <Image src={payment6} height={40}/>
              <Image src={payment7} height={40}/>
              <Image src={payment8} height={40}/>
              <Image src={payment9} height={40}/>
              <Image src={payment10} height={40}/>
            </div>
          </div>
        </div>
        <div className="copy  mt-10 ">
          <p className="text-white text-center  font-eco lg:text-left">
            ©2022 Vapester.  All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
