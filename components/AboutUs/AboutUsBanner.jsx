import styles from '../../styles/about.module.css';

export default function AboutUsBanner({children}) {
  return (
    <section
      className={`${styles.shop1} lg:min-h-[20rem] min-h-[10rem] bg-no-repeat bg-cover lg:mt-8 my-6`}
    >
      <div className="relative container mx-auto lg:pt-60 pt-12">
        <div className="text-center absolute lg:top-1/2 lg:left-0 md:left-6 left-4  text-white mx-0 bg-[#D22756] pr-8">
          <p className="font-black uppercase lg:text-[80px] md:text-[50px] text-[30px] lg:-mt-8 md:-mt-5 -mt-3 font-bun">
            {children}
          </p>
        </div>
      </div>
    </section>
  );
}
