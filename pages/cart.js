import CartBanner from "@/components/CartPage/CartBanner";
import CartContainer from "@/components/CartPage/CartContainer";
import CartTotal from "@/components/CartPage/CartTotal";
import Footer from "@/components/Footer";
import Header from "@/components/HomePage/Header";
import MegaMenu from "@/components/ShopMegaMenu";

export default function Cart() {
  
  return (
    <section>
      <Header />
      <MegaMenu />
      <CartBanner>Cart</CartBanner>
      <CartContainer/>
      <CartTotal/>
      <Footer/>
    </section>
  );
}
