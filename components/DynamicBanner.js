import styles from "../styles/Shop.module.css";

function DynamicBanner({ children}) {
  
  return (
    <section
      className={`${styles.shop1} lg:min-h-[20rem] min-h-[10rem] bg-no-repeat bg-cover lg:my-20 my-6`}
    >
      <div className="relative container mx-auto lg:pt-60 pt-12">
        <div className="text-center absolute lg:top-1/2 lg:left-0 md:left-6 left-4  text-white mx-0 bg-[#2dbad6] pr-8">
          <p className="font-black uppercase font-bun lg:text-[80px] md:text-[50px] text-[30px] lg:-mt-8 md:-mt-5 -mt-3">
            {children}
          </p>
        </div>
      </div>
    </section>
  );
}

export default DynamicBanner;
