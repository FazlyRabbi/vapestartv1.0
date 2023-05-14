import styles from '../../styles/Cart.module.css';

export default function CartBanner({children}) {
  return (
    <section
      className={`${styles.shop1} lg:min-h-[20rem] min-h-[10rem] bg-no-repeat bg-cover  my-6 `}
    >
      <div className="relative container mx-auto lg:pt-60 pt-12">
        <div className="text-center absolute lg:top-1/2 lg:left-0 md:left-6 left-4  text-white mx-0 bg-[#D22756] lg:pr-8 md:pr-8 pr-0 md:h-22 h-18 mr-8 ml-8">
          <p className="font-black uppercase lg:text-[80px] md:text-[35px] text-[25px] lg:-mt-7 md:-mt-4 -mt-3 font-bun">
            {children}
          </p>
        </div>
      </div>
    </section>
  );
}
