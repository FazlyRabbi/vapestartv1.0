import Header from "@/components/HomePage/Header";
import DiscountBanner from "@/components/ShopPage/Discount";
import ShopLayout from "@/components/ShopPage/Layout/Layout";
import Products from "@/components/ShopPage/Layout/Products";
import { useEffect } from "react";

export default function Shop() {
  return (
    <section>
      <Header />
      <DiscountBanner />
      <ShopLayout title={`shop`}>
        <Products />
      </ShopLayout>
    </section>
  );
}

async function fetchData() {
  const response = await http.Get(`/category`);
  return response.data;
}
