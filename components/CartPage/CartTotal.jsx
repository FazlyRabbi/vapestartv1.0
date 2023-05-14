import { MdLocalShipping } from "react-icons/md";

export default function CartTotal() {
  return (
    <section className=" pt-12 pb-20 flex justify-end lg:w-[70%] md:w-[90%] w-[80%] mx-auto">
      <div className="flex flex-col  items-start lg:gw-1/2 space-y-4">
        <p className="text-[25px] font-bun">CART TOTALS</p>
        <div className="flex justify-between items-center gap-44">
          <p className="font-eco font-bold text-[20px]">Subtotal</p>
          <p className="text-[#D22756]"> $140.00</p>
        </div>
        <div className="flex justify-between items-center gap-44 w-[80%]">
          <p className="font-eco font-bold text-[20px]">Shipping</p>
          <p>Enter your address to view shipping options. Calculate shipping</p>
        </div>

        <div className="flex justify-between items-center gap-52 font-bold">
          <p className="font-eco font-bold text-[20px]">Total</p>
          <p> $140.00</p>
        </div>
        <button className="bg-[#D22756] h-12 px-12 font-bold text-white font-eco w-full text-[20px]">Procced to checkout</button>
      </div>
    </section>
  );
}
