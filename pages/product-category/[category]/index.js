import Header from "@/components/HomePage/Header";
// import DiscountBanner from "@/components/ShopPage/Discount";
import ShopLayout from "@/components/ShopPage/Layout/Layout";
import ProductsCetegorys from "@/components/CetegoryPage/ProductsCetegorys";

import { useState } from "react";

export default function cetegory() {
  const [slug, setSlug] = useState(null);
  return (
    <section>
      <Header />
      {/* <DiscountBanner /> */}
      <ShopLayout
        title={`Category: ${slug}
`}
      >
        <ProductsCetegorys setSlug={setSlug} />
      </ShopLayout>
    </section>
  );
}
