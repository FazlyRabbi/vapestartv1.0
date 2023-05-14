import LeftSideContainer from "./LeftSideContainer";
import styles from "/styles/Shop.module.css";
import Footer from "@/components/Footer";

import Image from "next/image";

function ShopLayout({ children, title }) {
  return (
    <>
      <section className="container mx-auto px-4 my-10">
        <div className="grid gap-8 lg:grid-cols-12  ">
          <LeftSideContainer />

          {/* Place Your Right Content */}
          <div className="lg:col-span-9 order-2 ">
            <h1
              className=" font-eco font-bold text-[1.6rem]
           uppercase
          mb-2 text-primary"
            >
              {title}
            </h1>
            {children}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ShopLayout;
