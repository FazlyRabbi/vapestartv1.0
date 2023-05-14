import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import banner from "../img/card/banners.svg";

function HomeCatagory() {
  const [catagory, setCatagory] = useState(null)

  // useEffect(() => {
  //   const loadCatagory = async () => {
  //     const res = await fetch(
  //       "https://demo-production-edcf.up.railway.app/api/home-catagorys?populate=*"
  //     );
  //     const catagorys = await res.json();
  //     setCatagory(catagorys);
  //   };
  //   loadCatagory();
  // }, []);


  return (
    <>
      {catagory?.data?.map((data, index) => (
        <div className={`${styles.catagoryCard}  px-3 py-2`} key={index}>
          {data.attributes.Icon.data.map((img, index) => (
            <Image
              src={`https://demo-production-edcf.up.railway.app${img.attributes.url}`}
              height={25}
              width={25}
              alt="img"
              key={index}
            />
          ))}
          <p className="font-bold ">{data.attributes.Name}</p>
        </div>
      ))}
    </>
  );
}

export default HomeCatagory;
