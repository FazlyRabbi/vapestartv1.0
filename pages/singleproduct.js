import Footer from "@/components/Footer";
import Header from "@/components/HomePage/Header";
import ProductDescription from "@/components/SingleProduct/ProductDescription";
import ProductPrimaryDetails from "@/components/SingleProduct/ProductPrimaryDetails";
import RelatedProducts from "@/components/SingleProduct/RelatedProducts";
import SingleProductBanner from "@/components/SingleProductBanner";

export default function SingleProduct(){
  return(
    <section>
          <Header/>

          <SingleProductBanner >VAPORESSO NEBULA VAPE KIT</SingleProductBanner>
          <ProductPrimaryDetails/>
          <ProductDescription/>
          <RelatedProducts/>
          <Footer/>
    </section>
  )
}