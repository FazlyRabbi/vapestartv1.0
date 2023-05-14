import styles from "../../styles/Testimonial.module.css";

export default function ReviewForm() {
  return (
    // upper banner 
    <section
      className={`${styles.home1} lg:min-h-[20rem] min-h-[10rem] bg-no-repeat bg-cover lg:my-20 my-6 lg:container mx-auto  w-3/4 md:w-5/6`}
    >
      <div className="relative container mx-auto lg:pt-60 pt-12">
        <div
          className="text-center absolute lg:top-16 lg:left-16 md:left-6 left-4
        text-white mx-0 bg-[#292929] pr-8"
        >
          <div className="font-black uppercase lg:text-[80px] md:text-[50px] text-[30px] lg:-mt-8 md:-mt-5 -mt-3">
            ADD A REVIEW
          </div>
        </div>
      </div>

    {/* input form start */}
      <div className="w-full  flex flex-col justify-between pb-24 lg:pt-0 lg:p-16 p-6 gap-8 pt-20">
        <div className="w-[4/5] lg:flex md:flex justify-evenly items-center gap-4 ">
          <input
            className="lg:w-1/2 w-full py-3 px-4"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="lg:w-1/2 w-full py-3 px-4 md:mt-0 mt-4"
            type="text"
            placeholder="Your Email"
          />
        </div>
        <textarea
          name=""
          id=""
          className="h-40 py-3 px-4"
          placeholder="Your Message"
        ></textarea>
        <div className="flex justify-start items-center gap-4 text-white">
          <input type="checkbox" />
          <p>I agree that my submitted data is being collected and stored</p>
        </div>
        <button className="text-white bg-[#F2D71F] h-12 w-32 uppercase font-bun">Submit</button>
      </div>

      {/* input form end  */}
    </section>
  );
}
