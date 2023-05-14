import { AgeGateContext } from "@/context/ageGateContext";

import Image from "next/image";
import Logo from "../img/logo.png";

import {
  Button,
  Dialog,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";

import { useContext, useState } from "react";

const AgeGateModal = () => {
  const { setIsOver18, isOver18 } = useContext(AgeGateContext);

  const [no, setNo] = useState(false);

  const handleYesClick = () => {
    setIsOver18(true);
    setNo(false);
  };

  const handleNoClick = () => {
    setNo(true);
  };

  return (
    <div>
      <div className="bg-[#262626] h-[100%] w-[100%] absolute"></div>
      <Dialog
        open={!isOver18}
        className="bg-[#121212] 
     min-h-[5rem]
     min-w-[15rem]

      shadow-md

     pb-8
  
      "
      >
        <DialogHeader
          className="  
           text-primary 
        
         font-eco font-bold 
         
           text-[1.2rem]
         
          flex-col

         justify-center 

          items-center
         md:text-[2rem]
       
         
        
        "
        >
          <Image
            src={Logo}
            height={300}
            width={300}
            alt="logo"
            className="  
            
            md:-mt-12
            object-fill
           h-[12rem]
           w-[12rem]
           md:h-[20rem]
           md:w-[20rem]
          
          
          "
          />

          <div className=" text-center md:-mt-12 -mt-5">
            <p>AGE VARIFICATION</p>
            <p className=" text-[1.5rem]  capitalize"> welcome to vepstart</p>
            <p className=" text-[1rem] mt-2 "> Are you over 21 years of age?</p>
          </div>
        </DialogHeader>

        <DialogFooter
          className="flex justify-center
        
 
        md:space-x-5"
        >
          <Button
            size="sm"
            className="text-[.4rem] md:text-[.9rem]"
            color="red"
            variant="gradient"
            onClick={() => handleNoClick()}
          >
            <span>No</span>
          </Button>
          <Button
            size="sm"
            className="text-[.4rem] md:text-[.9rem]"
            variant="gradient"
            color="amber"
            onClick={() => handleYesClick()}
          >
            <span>yes</span>
          </Button>
        </DialogFooter>

        {no ? (
          <p
            className=" font-eco 
    px-2
      my-4
  text-center
       text-[.7rem]
       md:text-[.9rem]
  text-red

   
   "
          >
            The products on this website are intended for adults only!
          </p>
        ) : (
          ""
        )}
      </Dialog>
    </div>
  );
};

export default AgeGateModal;
