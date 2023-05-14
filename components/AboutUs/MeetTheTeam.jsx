import Image from "next/image";
import product01 from "../../img/home1-bg7-min-copyright.jpg";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import styles from "../../styles/about.module.css";

export default function MeetTheTeam() {
  return (
    <section className=" lg:container md:5/6 w-3/4 mx-auto">
      {/* header of section  */}
      <p className="font-eco lg:text-[35px] md:text-[30px] text-[25px]">Who We Are</p>
      <div className="relative container mx-auto lg:pt-0 md:pt-12 lg:mb-48 mb-20 lg:mt-4">
        <div className="text-center absolute lg:top-0 lg:left-0 md:left-0 left-0 lg:h-24 h-12  text-black mx-0 bg-[#F2D71F] pr-2">
          <p className="font-black uppercase lg:text-[70px] md:text-[50px] text-[30px] lg:-mt-6 md:-mt-5 -mt-3 font-bun">
            MEET THE TEAM
          </p>
        </div>
      </div>


      {/* grid layout  */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 lg:gap-12 gap-4 mb-16">

        <div id="team" className={`${styles.team} hover:backdrop-opacity-50 relative bg-cover bg-center lg:h-[550px] md:h-[450px] h-[400px]`}>
          <div className="absolute lg:-bottom-28 left-0 w-full name ">
            <div className="relative container mx-auto lg:pt-60 pt-12">
              <div className="text-start absolute lg:-top-20 lg:left-0 md:left-0 left-0 lg:h-16 md:h-12 h-16 text-white mx-0 bg-[#AF7FFC] pr-8">
                <p className="font-black uppercase lg:text-[35px] md:text-[25px] text-[30px] lg:-mt-3 md:-mt-2 -mt-3 font-bun">
                  Cheryl chester
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="team" className={`${styles.team} hover:backdrop-opacity-50 relative bg-cover bg-center lg:h-[550px] md:h-[450px] h-[400px]`}>
          <div className="absolute lg:-bottom-28 left-0 w-full name ">
            <div className="relative container mx-auto lg:pt-60 pt-12">
              <div className="text-start absolute lg:-top-20 lg:left-0 md:left-0 left-0 lg:h-16 md:h-12 h-16 text-white mx-0 bg-[#AF7FFC] pr-8">
                <p className="font-black uppercase lg:text-[35px] md:text-[25px] text-[30px] lg:-mt-3 md:-mt-2 -mt-3 font-bun">
                  Cheryl chester
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="team" className={`${styles.team} hover:backdrop-opacity-50 relative bg-cover bg-center lg:h-[550px] md:h-[450px] h-[400px]`}>
          <div className="absolute lg:-bottom-28 left-0 w-full name ">
            <div className="relative container mx-auto lg:pt-60 pt-12">
              <div className="text-start absolute lg:-top-20 lg:left-0 md:left-0 left-0 lg:h-16 md:h-12 h-16 text-white mx-0 bg-[#AF7FFC] pr-8">
                <p className="font-black uppercase lg:text-[35px] md:text-[25px] text-[30px] lg:-mt-3 md:-mt-2 -mt-3 font-bun">
                  Cheryl chester
                </p>
              </div>
            </div>
          </div>
        </div>
    
      </div>
    </section>
  );
}
